import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import locale from './src/localization/locale';
import { IData, IFile, INavigationContainerProps } from './src/interfaces';
import Home from './src/screens/home';

interface AppProps {
  language: string;
  dataUser: IData;
  navigationContainer: INavigationContainerProps;
  sharedFiles: IFile[];
}

const Stack = createStackNavigator();

const App: React.FC<AppProps> = ({
  language,
  navigationContainer,
  dataUser,
  sharedFiles,
}) => {
  useEffect(() => {
    locale.init();
  }, []);

  useEffect(() => {
    locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));
  }, [language]);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {props => (
          <Home
            {...props}
            navigationContainer={navigationContainer}
            dataUser={dataUser}
            sharedFiles={sharedFiles}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export { App };
export default App;
