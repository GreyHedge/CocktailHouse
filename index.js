import React from 'react';
import {AppRegistry} from 'react-native';
import {Loader} from '@components';
import {name as appName} from './app.json';
import {Colors} from '@constants';
import {init} from './src/application';

class RootComponent extends React.Component {
  state = {
    mainComponent: null,
  };

  async componentDidMount() {
    this.setState({mainComponent: await init()});
  }

  render() {
    const {mainComponent: Component} = this.state;

    if (!Component) {
      return (
        <Loader color={Colors.dark} />
      )
    }

    return <Component />
  }
}

AppRegistry.registerComponent(appName, () => RootComponent);
