import React from 'react';
import {Text, TextProps} from 'react-native';
import {useTheme} from '../../context';
import {ThemeContextType} from '../../types/theme';

export const StyledText = ({children, style, ...restProps}: TextProps) => {
  const {colors} = useTheme() as ThemeContextType;

  return (
    <Text style={[{color: colors.textColor}, style]} {...restProps}>
      {children}
    </Text>
  );
};
