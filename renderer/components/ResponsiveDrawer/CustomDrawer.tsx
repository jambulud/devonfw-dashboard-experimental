import NextLink from './NextLink';
import Divider from '@material-ui/core/Divider';
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';

const CustomDrawer = (props: {classes: any}) => (
    <div>
      <div className={props.classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={NextLink} href="/about">
          <ListItemIcon>
            <DesktopWindowsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='IDE' />
        </ListItem>
        <ListItem button component={NextLink} href="/start">
          <ListItemIcon>
            <StorageOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Repositories' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Installed tools' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Wiki' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Configurator' />
        </ListItem>
      </List>
    </div>
  );

export default CustomDrawer;