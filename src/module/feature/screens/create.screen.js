import React from 'react';

import { CreateContainer } from '../containers';

export default class CreateScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <CreateContainer navigation={navigation} />;
  }
}
