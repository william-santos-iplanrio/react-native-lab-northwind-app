import React from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, FormLabel, FormInput, Text } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

export default class FormComponent extends React.Component {
  renderIndicatorFetchCustomer(fetchCustomerStatus) {
    if (fetchCustomerStatus.isLoading) {
      return <ActivityIndicator size='large' />;
    } else if (fetchCustomerStatus.failure) {
      return (
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Text style={{ color: 'red' }} >{fetchCustomerStatus.failure}</Text>
        </View>
      );
    }
  }

  renderSubmitCustomerFailure(failure) {
    if (failure) {
      return (
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Text style={{ color: 'red' }} >{failure}</Text>
        </View>
      );
    }
  }

  render() {
    const {
      navigation,
      companyName,
      contactTitle,
      contactName,
      address,
      city,
      postalCode,
      country,
      phone,
      fax,
      updateCustomerStatus,
      fetchCustomerStatus,
    } = this.props;

    const {
      clear,
      setCompanyName,
      setContactTitle,
      setContactName,
      setAddress,
      setCity,
      setPostalCode,
      setCountry,
      setPhone,
      setFax,
    } = this.props;

    return (
      <ScrollView>
        {this.renderIndicatorFetchCustomer(fetchCustomerStatus)}

        <FormLabel>Company Name</FormLabel>
        <FormInput
          placeholder=''
          value={companyName}
          underlineColorAndroid="silver"
          onChangeText={text => setCompanyName(text)}
        />
        <FormLabel>Contact Title</FormLabel>
        <FormInput
          placeholder=''
          value={contactTitle}
          underlineColorAndroid="silver"
          onChangeText={text => setContactTitle(text)}
        />
        <FormLabel>Contact Name</FormLabel>
        <FormInput
          placeholder=''
          value={contactName}
          underlineColorAndroid="silver"
          onChangeText={text => setContactName(text)}
        />
        <FormLabel>Address</FormLabel>
        <FormInput
          placeholder=''
          value={address}
          underlineColorAndroid="silver"
          onChangeText={text => setAddress(text)}
        />
        <FormLabel>City</FormLabel>
        <FormInput
          placeholder=''
          value={city}
          underlineColorAndroid="silver"
          onChangeText={text => setCity(text)}
        />
        <FormLabel>Postal Code</FormLabel>
        <FormInput
          placeholder=''
          value={postalCode}
          underlineColorAndroid="silver"
          onChangeText={text => setPostalCode(text)}
        />
        <FormLabel>Country</FormLabel>
        <FormInput
          placeholder=''
          value={country}
          underlineColorAndroid="silver"
          onChangeText={text => setCountry(text)}
        />
        <FormLabel>Phone</FormLabel>
        <FormInput
          placeholder=''
          value={phone}
          underlineColorAndroid="silver"
          onChangeText={text => setPhone(text)}
        />
        <FormLabel>Fax</FormLabel>
        <FormInput
          placeholder=''
          value={fax}
          underlineColorAndroid="silver"
          onChangeText={text => setFax(text)}
        />

        {this.renderSubmitCustomerFailure(updateCustomerStatus.failure)}

        <View style={styles.containerButtons}>
          <View style={{ flex: 1 }}>
            <Button
              raised
              loading={updateCustomerStatus.isSubmitting}
              title='Submit'
              icon={{ name: 'thumbs-up', type: 'feather' }}
              onPress={() => {
                this.props.submitCustomer(this.props.customer)
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
              title='Cancel'
              icon={{ name: 'thumbs-down', type: 'feather' }}
              onPress={() => {
                clear();
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
