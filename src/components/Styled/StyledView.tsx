import React from 'react';
import {View, ViewProps} from 'react-native';
import {useTheme} from '../../context';
import {ThemeContextType} from '../../types/theme';

export const StyledView = ({children, style, ...restProps}: ViewProps) => {
  const {colors} = useTheme() as ThemeContextType;

  return (
    <View
      style={[{backgroundColor: colors.backgroundColor}, style]}
      {...restProps}>
      {children}
    </View>
  );
};
