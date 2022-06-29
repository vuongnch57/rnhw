import {useQuery} from '@apollo/client';
import {GET_COUNTRY} from './country.gql';
import {CountryData} from '../../types/data';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

type CountryVars = {
  code: string;
};

export const useCountry = ({code}: {code: string}) => {
  const navigation = useNavigation<any>();
  const {data, loading} = useQuery<CountryData, CountryVars>(GET_COUNTRY, {
    variables: {code},
  });

  const country = data && data.country;

  const handleSelectContinent = useCallback(
    (continentCode: string) => {
      navigation.push('Continent', {code: continentCode});
    },
    [navigation],
  );

  return {
    country,
    loading,
    handleSelectContinent,
  };
};
