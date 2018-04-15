import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectors, operations } from '../duck';
import { HeaderComponent } from '../components';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSearchCustomers: operations.customerDataSource.fetchSearchCustomers,
  fetchListCustomers: operations.customerDataSource.fetchListCustomers,
}, dispatch);

class HeaderContainer extends React.Component {
  render() {
    return <HeaderComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
