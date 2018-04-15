import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, Icon, Text } from 'react-native-elements';

export default class HeaderComponent extends React.Component {
  render() {
    const { navigation } = this.props;
    const customerId = navigation.state.params;
    const renderCustomHeader = () => {
      switch (navigation.state.routeName) {
        case 'Index':
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <SearchBar
                  round
                  lightTheme
                  showLoading
                  clearIcon
                  onChangeText={(text) => { 
                    if (text) { 
                      this.props.fetchSearchCustomers(`{"companyName": {"like": "${text}"}}`);
                    } else {
                      this.props.fetchListCustomers();
                    }
                  }}
                  onClearText={() => this.props.fetchListCustomers()}
                  placeholder='Search...'
                  
                />
              </View>
              <View style={{ backgroundColor: '#e1e8ee' }}>
                <Icon
                  raised
                  reverse
                  size={20}
                  name='user-plus'
                  type='feather'
                  underlayColor='silver'
                  onPress={() => navigation.navigate('Create')}
                />
              </View>
            </View>
          );
        case 'Delete':
          return (
            <View style={styles.container}>
              <Text style={styles.font}>Confirm the exclusion of this Customer?</Text>
              <Icon
                name='alert-circle'
                type='feather'
                size={36}
                containerStyle={{ margin: 15 }}
              />
            </View>
          );
        case 'Details':
          return (
            <View style={styles.container}>
              <Icon
                raised
                size={20}
                name='user-plus'
                type='feather'
                underlayColor='silver'
                onPress={() => navigation.navigate('Create')}
              />
              <Icon
                raised
                size={20}
                name='user-check'
                type='feather'
                underlayColor='silver'
                onPress={() => navigation.navigate('Edit', customerId)}
              />
              <Icon
                raised
                size={20}
                name='user-minus'
                type='feather'
                underlayColor='silver'
                onPress={() => navigation.navigate('Delete', customerId)}
              />
            </View>
          );
        default: return;
      }
    };

    return renderCustomHeader();
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  font: {
    marginLeft: 20,
    fontSize: 15,
    color: 'black'
  }
});
