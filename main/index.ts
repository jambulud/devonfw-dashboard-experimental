// Native
import { join } from 'path';
import { format } from 'url';
import { IpcMainEvent } from 'electron';
import { spawn, exec, StdioOptions, SpawnOptions } from 'child_process';

// Packages
import { BrowserWindow, app, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import prepareNext from 'electron-next';

// Other dependencies
import { TerminalService } from './services/terminal.service';

const terminalService = new TerminalService();

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: join(__dirname, 'preload.js'),
    },
  })

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  const url = isDev
    ? 'http://localhost:8000/start'
    : format({
      pathname: join(__dirname, '../../renderer/start.html'),
      protocol: 'file:',
      slashes: true,
    })

  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);

terminalService.ls();
terminalService.mkdir(null);
terminalService.rmdir(null);
terminalService.pwd();
terminalService.openDialog();
terminalService.mvnInstall();
//terminalService.allCommands(null, null);

class ReturnMessage {
  error: boolean;
  body: any;

  constructor(error: boolean, body: any) {
    this.error = error;
    this.body = body;
  }
}


async function allCommands(command: string, cwd?: string) {
  if (!command) return '';

  const options = cwd ? { cwd } : undefined
  let mvn = spawn(command, [], options);

  try {
    const result = await this.standardHandler(mvn);
    return new ReturnMessage(false, result);

  } catch (error) {
    return new ReturnMessage(true, error);
  }
}

/*  */

const eventHandler = (event: IpcMainEvent, ...eventArgs: any[]) => {
  const command = eventArgs[0];
  const cwd = eventArgs[1];
  console.log('received message:' + command)

  if (!command) event.sender.send('terminal/powershell', '');
  const stdioOptions: StdioOptions = ['pipe', 'pipe', 'pipe'];

  let options: SpawnOptions = { stdio: stdioOptions };
  options = cwd ? { ...options, cwd } : options
  const terminal = spawn(`powershell.exe`, [], options);

  terminal.stdout.on('data', data => {
    console.log('sending data: ' + data.toString())
    event.sender.send('terminal/powershell', data.toString())
  });
  terminal.stderr.on('data', data => console.error(data.toString()));
  terminal.on('close', () => {
    console.log('closed stream')
  });

  terminal.stdin.write(command + "\n")
}

ipcMain.on('terminal/powershell', eventHandler);