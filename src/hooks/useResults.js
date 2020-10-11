import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default function () {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  async function searchApi(term) {
    try {
      const { data } = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'singapore'
        }
      });
      setResults(data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  }

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return { results, errorMessage, searchApi };
}
