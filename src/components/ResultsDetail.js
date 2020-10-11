import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function ResultsDetail({ result }) {
  if (result.image_url === '') {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    borderRadius: 4,
    height: 120,
    width: 250,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;
