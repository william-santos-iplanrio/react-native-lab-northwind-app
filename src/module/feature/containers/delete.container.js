import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectors, operations } from '../duck';
import { HeaderContainer } from '../containers';
import { DeleteComponent } from '../components';

const mapStateToProps = state => ({
  ...selectors.customerDataSource.getDetailsCustomer(state),
  detailsCustomerStatus: selectors.customerDataSource.getDetailsCustomerStatus(state),
  deleteCustomerStatus: selectors.customerDataSource.getDeleteCustomerStatus(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...operations.customerDataSource
}, dispatch);

class DeleteContainer extends React.Component {
  componentDidMount() {
    const customerId = this.props.navigation.state.params;
    this.props.fetchDetailsCustomer(customerId);
  }

  render() {
    return (
      <View>
        <HeaderContainer navigation={this.props.navigation} />
        <DeleteComponent {...this.props} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContainer);
