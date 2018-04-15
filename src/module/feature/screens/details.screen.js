import React from 'react';

import { DetailsContainer } from '../containers';

export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <DetailsContainer navigation={navigation} />;
  }
}
