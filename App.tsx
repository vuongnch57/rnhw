import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './src/context';
import FloatingButton from './src/components/FloatingButton';

import {HomePage} from './src/components/HomePage';
import {CountryPage} from './src/components/CountryPage';
import {ContinentPage} from './src/components/ContinentPage';

const linking = {
  prefixes: ['rnhw://'],
  config: {
    screens: {
      Home: {
        path: 'home',
      },
      Country: {
        path: 'country/:code',
        parse: {
          code: (code: string) => `${code}`,
        },
      },
      Continent: {
        path: 'continent/:code',
        parse: {
          code: (code: string) => `${code}`,
        },
      },
    },
  },
};

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

export type RootStackParamList = {
  Home: undefined;
  Country: {code: string};
  Continent: {code: string};
};

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer linking={linking}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen
              name="Home"
              component={HomePage}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Country"
              component={CountryPage}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Continent"
              component={ContinentPage}
              options={{
                headerShown: false,
              }}
            />
          </RootStack.Navigator>
          <FloatingButton />
        </ThemeProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
