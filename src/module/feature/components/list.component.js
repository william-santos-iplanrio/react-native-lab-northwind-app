import React from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon, Text } from 'react-native-elements';

export default class ListComponent extends React.Component {
  renderIndicatorLoadCustomer(listCustomersStatus) {
    if (listCustomersStatus.isLoading) {
      return <ActivityIndicator size='large' />;
    }
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'red' }} >{listCustomersStatus.failure}</Text>
      </View>
    );
  }

  render() {
    const { navigation, customers, listCustomersStatus } = this.props;

    if (listCustomersStatus.isLoaded) {
      return (
        <ScrollView style={{ marginBottom: 40 }}>
          <List containerStyle={{ marginTop: 1, marginBottom: 20 }}>
            {
              customers.map((customer) => (
                <ListItem
                  leftIcon={<Icon name='user' type='feather' />}
                  key={customer.customerId}
                  title={customer.companyName}
                  subtitle={`${customer.country} - ${customer.city}`}
                  onPressRightIcon={() => navigation.navigate('Details', customer.customerId)}
                />
              ))
            }
          </List>
        </ScrollView>
      );
    }
    return this.renderIndicatorLoadCustomer(listCustomersStatus);
  }
}
