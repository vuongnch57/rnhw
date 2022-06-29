import {useQuery} from '@apollo/client';
import {GET_COUNTRIES} from './countryList.gql';
import {CountriesData} from '../../types/data';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

export const useCountryList = () => {
  const navigation = useNavigation<any>();
  const {data, loading} = useQuery<CountriesData, null>(GET_COUNTRIES);

  const countries = data && data.countries;

  const handleSelectCountry = useCallback(
    (code: string) => {
      navigation.push('Country', {code});
    },
    [navigation],
  );

  return {
    countries,
    loading,
    handleSelectCountry,
  };
};
