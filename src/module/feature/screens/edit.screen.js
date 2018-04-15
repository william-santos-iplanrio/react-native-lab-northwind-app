import React from 'react';

import { EditContainer } from '../containers';

export default class EditScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <EditContainer navigation={navigation} />;    
  }
}
