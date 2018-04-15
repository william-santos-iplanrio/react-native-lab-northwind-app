import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectors, operations } from '../duck';
import { HeaderContainer } from '../containers';
import { ListComponent } from '../components';

const mapStateToProps = state => ({
  customers: selectors.customerDataSource.getListCustomers(state),
  listCustomersStatus: selectors.customerDataSource.getListCustomersStatus(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...operations.customerDataSource
}, dispatch);

class ListContainer extends React.Component {
  componentWillMount() {
    this.props.fetchListCustomers();
  }

  render() {
    return (
      <View>
        <HeaderContainer navigation={this.props.navigation} />
        <ListComponent {...this.props} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
