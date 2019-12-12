import { Component } from 'react'
import Layout from '../components/Layout';
import SpaceAround from '../components/SpaceAround'
import MaterialStepper from '../components/Stepper/MaterialStepper';
import { Button } from '@material-ui/core';
import Renderer from '../services/renderer.service';
import StackCard from '../components/cards/stackCard';
import CustomStepper from '../components/Stepper/CustomStepper';

interface HelloState {
  messages: string[]
}

class HelloElectron extends Component {
  state = {
    messages: []
  }

  renderer: Renderer;

  componentDidMount() {

    this.renderer = new Renderer();
    this.renderer.on('terminal/powershell', this.handler);
  }

  componentWillUnmount() {
    this.renderer.removeAll();
  }

  handler = (_: any, message: any) => {
    this.setState((prevState: Readonly<HelloState>, props) => {
      console.log("setting state")
      console.log(message.toString())
      return { messages: [...prevState.messages, message.toString()] };
    });
  }


  render() {
    return (
      <Layout>
        <SpaceAround>
          <h1>New Project</h1>
          <p>In this window you can create a new project step by step</p>
          <Button size="small" variant="contained" color="primary" onClick={() => {
            this.renderer.sendMultiple('terminal/powershell', 'devon --help')
          }}>
            Create project
        </Button>

          {this.state.messages.map((msg: string) => <p>{msg}</p>)}
          <CustomStepper/>
        </SpaceAround>
      </Layout>
    );
  }
}

export default HelloElectron;