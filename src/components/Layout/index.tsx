import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../context';
import {ThemeContextType} from '../../types/theme';
import {StyledText, StyledView} from '../Styled';
import {useNavigation} from '@react-navigation/native';

export const AppLayout = ({
  children,
  title,
  showBack = false,
}: {
  children: React.ReactNode;
  title: string;
  showBack?: boolean;
}) => {
  const navigation = useNavigation<any>();
  const {theme, colors} = useTheme() as ThemeContextType;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors.backgroundColor}
      />
      <StyledView
        style={{
          height: 56,
          width: '100%',
          backgroundColor: colors.backgroundColor,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <StyledText
          style={{
            color: colors.textColor,
            fontSize: 20,
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center',
          }}>
          {title}
        </StyledText>
        {showBack && (
          <StyledText
            style={{color: colors.textColor, position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            Back
          </StyledText>
        )}
      </StyledView>
      {children}
    </SafeAreaView>
  );
};
