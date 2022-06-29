import React, {useMemo} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useCountryList} from '../../hooks/Home/useCountryList';
import {CountryItem} from './CountryItem';
import {StyledView, StyledText} from '../Styled';
import {AppLayout} from '../Layout';
import {CountryType} from '../../types/data';

export const HomePage = () => {
  const {countries, loading, handleSelectCountry} = useCountryList();

  const pageContent = useMemo(() => {
    if (!countries && loading) {
      return (
        <StyledView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" />
        </StyledView>
      );
    } else if (countries) {
      return (
        <StyledView
          style={{
            flex: 1,
          }}>
          <StyledText
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              margin: 10,
            }}>
            List of countries
          </StyledText>
          <FlatList
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
            }}
            data={countries}
            keyExtractor={(item: CountryType, index: number) =>
              item?.code || index.toString()
            }
            renderItem={({item}) => (
              <CountryItem
                item={item}
                handleSelectCountry={handleSelectCountry}
              />
            )}
          />
        </StyledView>
      );
    } else {
      return <StyledText>No data available</StyledText>;
    }
  }, [countries, loading, handleSelectCountry]);

  return <AppLayout title="Home">{pageContent}</AppLayout>;
};
