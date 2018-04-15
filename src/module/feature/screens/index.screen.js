import React from 'react';

import { ListContainer } from '../containers';

export default class IndexScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <ListContainer navigation={navigation} />;
  }
}
