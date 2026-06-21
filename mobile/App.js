import AppNavigator from './src/navigation/AppNavigator';
import BootSplash from 'react-native-bootsplash';
import { useEffect } from 'react';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
