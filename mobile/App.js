import { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import BootSplash from 'react-native-bootsplash';
import { AuthProvider } from './src/context/AuthContext';

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
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
