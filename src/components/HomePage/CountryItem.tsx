import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CountryType} from '../../types/data';
import {StyledView, StyledText} from '../Styled';

type Props = {
  item: CountryType;
  handleSelectCountry: (code: string) => void;
};

export const CountryItem = ({item, handleSelectCountry}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleSelectCountry(item.code);
      }}>
      <StyledView style={styles.card}>
        <StyledText style={styles.flag}>{item?.emoji}</StyledText>
        <StyledView>
          <StyledText>{item?.name}</StyledText>
          <StyledText>{item?.capital}</StyledText>
        </StyledView>
      </StyledView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 5,
    borderRadius: 3,
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  flag: {
    fontSize: 50,
    marginRight: 15,
  },
});
