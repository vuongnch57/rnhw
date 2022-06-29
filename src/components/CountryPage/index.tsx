import React, {useMemo} from 'react';
import {StyledView, StyledText} from '../Styled';
import {RootStackParamList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useCountry} from '../../hooks/Country/useCountry';
import {AppLayout} from '../Layout';

export type CountryPageProps = NativeStackScreenProps<
  RootStackParamList,
  'Country'
>;

export const CountryPage = ({route}: CountryPageProps) => {
  const {code} = route.params;

  const {country, loading, handleSelectContinent} = useCountry({code});

  const pageContent = useMemo(() => {
    if (!country && loading) {
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
    } else if (country) {
      return (
        <StyledView style={styles.container}>
          <StyledText style={styles.emoji}>{country?.emoji}</StyledText>
          <StyledText style={styles.name}>{country?.name}</StyledText>
          <StyledView style={styles.content}>
            <StyledView style={styles.row}>
              <StyledText>alpha2Code</StyledText>
              <StyledText>{country?.code}</StyledText>
            </StyledView>
            <StyledView style={styles.row}>
              <StyledText>callingCodes</StyledText>
              <StyledText>+{country?.phone}</StyledText>
            </StyledView>
            <StyledView style={styles.row}>
              <StyledText>continent</StyledText>
              <StyledText
                style={styles.continent}
                onPress={() =>
                  handleSelectContinent(
                    country && country.continent ? country.continent.code : '',
                  )
                }>
                {country?.continent?.name}
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      );
    } else {
      return <StyledText>No data available</StyledText>;
    }
  }, [country, loading, handleSelectContinent]);

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
  },
  emoji: {
    fontSize: 100,
    margin: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  continent: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});
