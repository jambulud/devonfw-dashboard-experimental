import { Component } from 'react'
import Layout from '../components/Layout';
import SpaceAround from '../components/SpaceAround'
import MaterialStepper from '../components/MaterialStepper';

class HelloElectron extends Component {
  state = {
  }

  render() {
    return (
      <Layout>
        <SpaceAround>
          <h1>New Project</h1>
          <p>In this window you can create a new project step by step</p>
          <MaterialStepper/>
        </SpaceAround>
      </Layout>
    );
  }
}

export default HelloElectron;