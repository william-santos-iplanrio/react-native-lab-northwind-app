import React from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { FormLabel, Text, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

export default class DeleteComponent extends React.Component {
  renderIndicatorLoadCustomer(detailsCustomerStatus) {
    if (detailsCustomerStatus.isLoading) {
      return <ActivityIndicator size='large' />;
    }
  }

  renderIndicatorSubmitCustomer(navigation, customerId, deleteCustomerStatus, deleteCustomer) {
    if (deleteCustomerStatus.failure) {
      return (
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Text style={{ color: 'red' }} >{deleteCustomerStatus.failure}</Text>
        </View>
      );
    }
    return (
      <View style={styles.containerButtons}>
        <View style={{ flex: 1 }}>
          <Button
            raised
            loading={deleteCustomerStatus.isSubmitting}
            title='Yes'
            icon={{ name: 'thumbs-up', type: 'feather' }}
            onPress={() => {
              deleteCustomer(customerId)
                .then(() => {
                  navigation.dispatch(
                    NavigationActions.reset({
                      index: 0,
                      actions: [NavigationActions.navigate({ routeName: 'Index' })]
                    })
                  );
                });
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            raised
            title='No'
            icon={{ name: 'thumbs-down', type: 'feather' }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    );
  }

  render() {
    const {
      navigation,
      customerId,
      companyName,
      contactTitle,
      contactName,
      city,
      country,
      detailsCustomerStatus,
      deleteCustomerStatus,      
    } = this.props;

    if (detailsCustomerStatus.isLoaded) {
      return (
        <ScrollView style={{ marginBottom: 40 }}>        
        <View style={styles.container}>
          <FormLabel>Company Name</FormLabel>
          <Text style={styles.text}>{companyName}</Text>

          <FormLabel>Contact Title</FormLabel>
          <Text style={styles.text}>{contactTitle}</Text>

          <FormLabel>Contact Name</FormLabel>
          <Text style={styles.text}>{contactName}</Text>

          <FormLabel>City</FormLabel>
          <Text style={styles.text}>{city}</Text>

          <FormLabel>Country</FormLabel>
          <Text style={styles.text}>{country}</Text>

          {this.renderIndicatorSubmitCustomer(
            navigation, 
            customerId, 
            deleteCustomerStatus, 
            this.props.deleteCustomer,
          )}
        </View>
        </ScrollView>
      );
    }
    return this.renderIndicatorLoadCustomer(detailsCustomerStatus);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'silver',
    borderBottomColor: 'silver'
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    marginTop: 20,
  },
  text: {
    marginLeft: 20,
  },
});
