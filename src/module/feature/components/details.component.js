import React from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { FormLabel, Text } from 'react-native-elements';

export default class DetailsComponent extends React.Component {
  renderIndicatorLoadCustomer(detailsCustomerStatus) {
    if (detailsCustomerStatus.isLoading) {
      return <ActivityIndicator size='large' />;
    }
    return (
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Text style={{ color: 'red' }} >{detailsCustomerStatus.failure}</Text>
      </View>
    );
  }

  render() {
    const {
      companyName,
      contactTitle,
      contactName,
      address,
      city,
      postalCode,
      country,
      phone,
      fax,
      detailsCustomerStatus,
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

            <FormLabel>Address</FormLabel>
            <Text style={styles.text}>{address}</Text>

            <FormLabel>City</FormLabel>
            <Text style={styles.text}>{city}</Text>

            <FormLabel>Postal Code</FormLabel>
            <Text style={styles.text}>{postalCode}</Text>

            <FormLabel>Country</FormLabel>
            <Text style={styles.text}>{country}</Text>

            <FormLabel>Phone</FormLabel>
            <Text style={styles.text}>{phone}</Text>

            <FormLabel>Fax</FormLabel>
            <Text style={styles.text}>{fax}</Text>
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
  text: {
    marginLeft: 20,
  },
});
