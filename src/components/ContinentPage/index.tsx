import React, {useMemo} from 'react';
import {StyledView, StyledText} from '../Styled';
import {RootStackParamList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import {useContinent} from '../../hooks/Continent/useContinent';
import {CountryType} from '../../types/data';
import {AppLayout} from '../Layout';

export type ContinentPageProps = NativeStackScreenProps<
  RootStackParamList,
  'Continent'
>;

export const ContinentPage = ({route}: ContinentPageProps) => {
  const {code} = route.params;

  const {continent, loading, handleSelectCountry} = useContinent({code});

  const pageContent = useMemo(() => {
    if (!continent && loading) {
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
    } else if (continent) {
      const countries = continent?.countries.map(
        (item: CountryType): React.ReactNode => (
          <StyledText
            key={item.code}
            style={styles.country}
            onPress={() => handleSelectCountry(item.code)}>
            {item.name}
          </StyledText>
        ),
      );
      return (
        <ScrollView>
          <StyledView style={styles.container}>
            <StyledText style={styles.name}>{continent?.name}</StyledText>
            <StyledView style={styles.content}>
              <StyledView style={styles.row}>
                <StyledText>code</StyledText>
                <StyledText>{continent?.code}</StyledText>
              </StyledView>
              <StyledView style={styles.row}>
                <StyledText>countries</StyledText>
                <StyledView style={styles.countries}>{countries}</StyledView>
              </StyledView>
            </StyledView>
          </StyledView>
        </ScrollView>
      );
    } else {
      return <StyledText>No data available</StyledText>;
    }
  }, [continent, loading, handleSelectCountry]);

  return (
    <AppLayout title={''} showBack>
      {pageContent}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  content: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  countries: {
    flexDirection: 'column',
  },
  country: {
    textAlign: 'right',
    marginBottom: 10,
    textDecorationLine: 'underline',
    color: 'blue',
  },
});
