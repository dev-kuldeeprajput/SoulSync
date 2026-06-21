import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace('Login');
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        <Text style={styles.tagline}>Connect • Chat • Share • Belong</Text>
      </View>

      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />

        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoImg: {
    height: 220,
    width: 200,
  },

  title: {
    fontSize: 46,
    fontWeight: '800',
    color: COLORS.primary,
    marginTop: 10,
  },

  tagline: {
    fontSize: 20,
    color: COLORS.textSecondary,
    marginTop: 10,
  },

  loaderContainer: {
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: COLORS.primary,
  },
});
