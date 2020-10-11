import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  async function getResult(id) {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {}
  }

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200
  }
});

export default ResultsShowScreen;
