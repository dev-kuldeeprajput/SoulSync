import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Feather from '@react-native-vector-icons/feather';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const validateLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Please enter your email';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    if (!password.trim()) {
      return 'Please enter your password';
    }
    return null;
  };

  const handleLogin = async () => {
    const error = validateLogin();
    setError(error);
    if (error) {
      Alert.alert(error);
      return;
    }

    try {
      const response = await api.post('/auth/login', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      Alert.alert('Login Success', response.data.message);

      navigation.replace('Home');
    } catch (error) {
      Alert.alert(error.response?.data.message);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.introSection}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logoImg}
            />
            <Text style={styles.tagline}>Connect. Chat. Share. Belong.</Text>
          </View>

          {/* input section */}

          <View style={styles.inputSection}>
            <Text style={styles.welcome}>Welcome back!</Text>
            <Text style={styles.signIn}>Sign in to continue your journey</Text>
            <View style={styles.inputField}>
              <View style={styles.inputContainer}>
                <Feather name="mail" size={25} color={COLORS.textSecondary} />
                <TextInput
                  placeholder="Email or Username"
                  placeholderTextColor={COLORS.placeholder}
                  style={styles.input}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputContainer}>
                <Feather name="lock" size={25} color={COLORS.textSecondary} />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={COLORS.placeholder}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={25}
                    color={COLORS.textSecondary}
                    style={styles.eye}
                  />
                </Pressable>
              </View>
            </View>
            <Text style={styles.forgot}>Forgot Password?</Text>

            <Pressable onPress={handleLogin}>
              <LinearGradient
                colors={[
                  COLORS.gradientStart,
                  COLORS.gradientMiddle,
                  COLORS.gradientEnd,
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginBtn}
              >
                <View style={{ width: 20 }} />
                <Text style={styles.btnTitle}>Log in</Text>
                <Feather name="arrow-right" size={25} color={COLORS.white} />
              </LinearGradient>
            </Pressable>
          </View>

          {/* Bottom section */}

          <View style={styles.bottomSection}>
            <View style={styles.row}>
              <View style={styles.line}></View>
              <Text style={styles.continue}>or continue with</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.socialBtnContainer}>
              <View style={styles.socialBtn}>
                <FontAwesome6 name="google" size={20} iconStyle="brand" />
                <Pressable onPress={() => {}}>
                  <Text style={styles.socialBtnTitle}>Google</Text>
                </Pressable>
              </View>

              <View style={styles.socialBtn}>
                <FontAwesome6 name="apple" size={25} iconStyle="brand" />
                <Pressable onPress={() => {}}>
                  <Text style={styles.socialBtnTitle}>Apple</Text>
                </Pressable>
              </View>

              <View style={styles.socialBtn}>
                <FontAwesome6 name="facebook-f" size={20} iconStyle="brand" />
                <Pressable onPress={() => {}}>
                  <Text style={styles.socialBtnTitle}>Facebook</Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.noAccount}>
              Don't have an account{' '}
              <Text
                style={styles.signUpLine}
                onPress={() => navigation.navigate('Register')}
              >
                Sign Up
              </Text>
            </Text>
            <View style={styles.privacyContainer}>
              <Feather name="shield" size={20} color={COLORS.primary} />
              <Text style={styles.privacy}>
                Your privacy and data are safe with us.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  introSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoImg: {
    height: 200,
    width: 190,
  },
  tagline: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  inputSection: {
    marginTop: 40,
  },
  welcome: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  signIn: {
    marginTop: 5,
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    borderRadius: 20,
    height: 60,
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    color: COLORS.textPrimary,
    flex: 1,
  },
  forgot: {
    marginTop: 10,
    alignSelf: 'flex-end',
    color: COLORS.link,
  },
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginTop: 20,
    paddingHorizontal: 25,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 8,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  continue: {
    alignSelf: 'center',
    color: COLORS.textSecondary,
  },
  socialBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    height: 50,
    borderRadius: 20,
    borderColor: COLORS.border,
    gap: 10,
  },
  socialBtnTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  noAccount: {
    alignSelf: 'center',
    marginTop: 20,
    color: COLORS.textPrimary,
    gap: 20,
  },
  signUpLine: {
    color: COLORS.link,
    fontSize: 16,
    fontWeight: 'bold',
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
  privacy: {
    color: COLORS.textPrimary,
  },
});

export default LoginScreen;
