import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';

import { selectors, operations } from '../duck';
import { FormComponent } from '../components';

const mapStateToProps = state => ({
  ...selectors.customer.getCustomer(state),
  customer: selectors.customer.getCustomer(state),
  updateCustomerStatus: selectors.customerDataSource.getCreateCustomerStatus(state),
  fetchCustomerStatus: selectors.customerDataSource.getDetailsCustomerStatus(state), 
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...operations.customer,
  submitCustomer: operations.customerDataSource.createCustomer,
}, dispatch);

class CreateContainer extends React.Component {
  constructor(props) {
    super(props);
    props.clear();
    props.setCustomerId(uuid.v4());
  }    

  render() {
    return <FormComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);
