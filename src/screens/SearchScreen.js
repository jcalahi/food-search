import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

function SearchScreen() {
  const { searchApi, results, errorMessage } = useResults();

  function filterResultsByPrice(price) {
    return results.filter((result) => result.price === price);
  }

  return (
    <>
      <View style={{ backgroundColor: '#fff' }}>
        <SearchBar onTermSubmit={searchApi} />
      </View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
}

export default SearchScreen;
