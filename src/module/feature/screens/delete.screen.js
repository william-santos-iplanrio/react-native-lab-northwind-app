import React from 'react';

import { DeleteContainer } from '../containers';

export default class DeleteScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <DeleteContainer navigation={navigation} />;
  }
}
