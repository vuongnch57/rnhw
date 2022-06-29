import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../../context';
import {ThemeContextType} from '../../types/theme';

const FloatingButton = () => {
  const {theme, changeTheme} = useTheme() as ThemeContextType;

  const handleThemeChange = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleThemeChange}>
      <Text>🖌</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});

export default FloatingButton;
