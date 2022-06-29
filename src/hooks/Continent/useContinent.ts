import {useQuery} from '@apollo/client';
import {GET_CONTINENT} from './continent.gql';
import {ContinentData} from '../../types/data';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

type ContinentVars = {
  code: string;
};

export const useContinent = ({code}: {code: string}) => {
  const navigation = useNavigation<any>();
  const {data, loading} = useQuery<ContinentData, ContinentVars>(
    GET_CONTINENT,
    {
      variables: {code},
    },
  );

  const continent = data && data.continent;

  const handleSelectCountry = useCallback(
    (countryCode: string) => {
      navigation.push('Country', {code: countryCode});
    },
    [navigation],
  );

  return {
    continent,
    loading,
    handleSelectCountry,
  };
};
