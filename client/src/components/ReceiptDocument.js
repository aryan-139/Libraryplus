import React from 'react';
import { Page, Document, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create a new Document
const ReceiptDocument = ({ metrics }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Transaction Receipt</Text>
        <Text>Full Name: {metrics.fullName}</Text>
        <Text>Roll Number: {metrics.rollNumber}</Text>
        <Text>Email: {metrics.email}</Text>
        <Text>Contact: {metrics.contact}</Text>
        <Text>Branch: {metrics.branch}</Text>
        <Text>Billing Amount: ${metrics.billingAmount}</Text>
        <Text>Books: {metrics.books.join(', ')}</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ReceiptDocument;
