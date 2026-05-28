/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import AppNavigator from './src/navigation/AppNavigator';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
