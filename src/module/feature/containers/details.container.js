import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectors, operations } from '../duck';
import { HeaderContainer } from '../containers';
import { DetailsComponent } from '../components';

const mapStateToProps = state => ({
  ...selectors.customerDataSource.getDetailsCustomer(state),
  detailsCustomerStatus: selectors.customerDataSource.getDetailsCustomerStatus(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...operations.customerDataSource
}, dispatch);

class DetailsContainer extends React.Component {
  componentDidMount() {
    const customerId = this.props.navigation.state.params;
    this.props.fetchDetailsCustomer(customerId);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <HeaderContainer navigation={navigation} />
        <DetailsComponent {...this.props} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
