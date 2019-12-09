import { Component, ChangeEvent } from 'react'
import Spawned from '../components/Spawned';
import DialogRes from '../components/DialogRes';
import Directory from '../components/Directory';
import { MessageSenderService } from '../services/messageSender.service';
import Layout from '../components/Layout';
import SpaceAround from '../components/SpaceAround'

class HelloElectron extends Component {
  state = {
    input: '',
    rmdirInput: '',
    mkdirMessage: '',
    rmdirMessage: '',
    mvnMessage: '',
    lsMessage: '',
    pwdMessage: '',
    dialog: [],
  }

  messageSender: MessageSenderService;

  constructor(props: {}) {
    super(props);
    this.messageSender = new MessageSenderService();
  }

  handleSendLs = async () => {
    const message = await this.messageSender.sendLs();
    this.setState({ lsMessage: message })
  }

  handleSendMkdir = async () => {
    const message = await this.messageSender.sendMkdir(this.state.input);
    this.setState({ mkdirMessage: message })
  }

  handleSendPwd = async () => {
    const message = await this.messageSender.sendPwd();
    this.setState({ pwdMessage: message })
  }

  handleSendRmdir = async () => {
    const message = await this.messageSender.sendRmdir(this.state.rmdirInput);
    this.setState({ rmdirMessage: message })
  }

  handleSendOpenDialog = async () => {
    const message = await this.messageSender.sendOpenDialog();
    /* message['filePaths'] */
    this.setState({ dialog: [] });
  }

  handleSendMvn = async () => {
    const message = await this.messageSender.sendMvnHelp(this.state.dialog[0]);
    this.setState({ mvnMessage: message })
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value })
  }


  handleRmdirInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ rmdirInput: event.target.value })
  }

  render() {
    return (
      <Layout>
        <SpaceAround>
          <h1>Hello Electron!</h1>
          <Spawned
            message={this.state.lsMessage}
            command="ls"
            handleInfo={this.handleSendLs}>
          </Spawned>
          <Spawned
            message={this.state.pwdMessage}
            command="pwd"
            handleInfo={this.handleSendPwd}>
          </Spawned>
          <Directory
            message={this.state.mkdirMessage}
            command="mkdir"
            handleInfo={this.handleSendMkdir}
            handleInput={this.handleInput}>
          </Directory>
          <Directory
            message={this.state.rmdirMessage}
            command="rmdir"
            handleInfo={this.handleSendRmdir}
            handleInput={this.handleRmdirInput}>
          </Directory>
          <DialogRes
            message={this.state.dialog}
            command="open dialog"
            handleInfo={this.handleSendOpenDialog}>
          </DialogRes>
          <Spawned
            message={this.state.mvnMessage}
            command="mvn --help"
            handleInfo={this.handleSendMvn}>
          </Spawned>
        </SpaceAround>
      </Layout>
    );
  }
}

export default HelloElectron;