import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectors, operations } from '../duck';
import { FormComponent } from '../components';

const mapStateToProps = state => ({
  ...selectors.customer.getCustomer(state),
  customer: selectors.customer.getCustomer(state),
  updateCustomerStatus: selectors.customerDataSource.getEditCustomerStatus(state),
  resource: selectors.customerDataSource.getDetailsCustomer(state),
  fetchCustomerStatus: selectors.customerDataSource.getDetailsCustomerStatus(state), 
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...operations.customer,
  fetchDetailsCustomer: operations.customerDataSource.fetchDetailsCustomer,
  submitCustomer: operations.customerDataSource.updateCustomer,
}, dispatch);

class EditContainer extends React.Component {
  constructor(props) {
    super(props);
    const id = props.navigation.state.params;
    props.fetchDetailsCustomer(id);
    props.assign(props.resource);
  }
       
  render() {
    return <FormComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
