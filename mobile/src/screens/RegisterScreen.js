import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Feather from '@react-native-vector-icons/feather';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFulllName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDobSelected, setIsDobSelected] = useState(false);
  const [error, setError] = useState('');
  
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!fullName.trim()) {
      return 'Please enter your full name';
    }

    if (!email.trim()) {
      return 'Please enter your email';
    }

    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    if (!gender) {
      return 'Please select your gender';
    }

    if (!isDobSelected) {
      return 'Please select your date of birth';
    }

    if (!password) {
      return 'Please enter a password';
    }

    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!passwordRegex.test(password)) {
      return 'Password must contain uppercase, lowercase and a number';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    return null;
  };

  const handleSignUp = () => {
    const error = validateForm();
    setError(error);

    if (error) {
      Alert.alert(error);
      return;
    }
      Alert.alert('Success', 'registration successful');

    // API call
  };
  return (
    <SafeAreaView style={styles.safeArea}>
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
            <Text style={styles.welcome}>Create your account</Text>
            <Text style={styles.getStartLine}>
              Let's get you started on your journey
            </Text>
            <View style={styles.inputField}>
              <View style={styles.inputContainer}>
                <Feather name="user" size={20} color={COLORS.textSecondary} />
                <TextInput
                  placeholder="Full Name"
                  placeholderTextColor={COLORS.placeholder}
                  style={styles.input}
                  onChangeText={setFulllName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Feather name="mail" size={20} color={COLORS.textSecondary} />
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor={COLORS.placeholder}
                  style={styles.input}
                  onChangeText={setEmail}
                />
              
              </View>

              <View style={styles.inputContainer}>
                <Feather name="lock" size={20} color={COLORS.textSecondary} />
                <TextInput
                  placeholder="Create Password"
                  placeholderTextColor={COLORS.placeholder}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={COLORS.textSecondary}
                    style={styles.eye}
                  />
                </Pressable>
              </View>
              <View style={styles.inputContainer}>
                <Feather name="lock" size={20} color={COLORS.textSecondary} />
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={COLORS.placeholder}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  onChangeText={setConfirmPassword}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={COLORS.textSecondary}
                    style={styles.eye}
                  />
                </Pressable>
              </View>
            </View>

            <View style={styles.gender}>
              <Feather name="user" size={20} color={COLORS.textSecondary} />
              <Picker
                selectedValue={gender}
                onValueChange={itemValue => setGender(itemValue)}
                style={styles.picker}
              >
                <Picker.Item
                  label="Select Gender"
                  value=""
                  color={COLORS.placeholder}
                />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            <Pressable
              style={styles.inputContainer}
              onPress={() => setOpen(true)}
            >
              <DatePicker
                modal
                open={open}
                date={dob}
                mode="date"
                onConfirm={date => {
                  setDob(date);
                  setIsDobSelected(true);
                  setOpen(false);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <Feather name="calendar" size={24} color={COLORS.textSecondary} />
              <Text
                style={[
                  styles.dobText,
                  {
                    color: isDobSelected
                      ? COLORS.textPrimary
                      : COLORS.placeholder,
                  },
                ]}
              >
                {' '}
                {isDobSelected
                  ? dob.toLocaleDateString('en-GB')
                  : 'Select Date of Birth'}
              </Text>
            </Pressable>

            <Pressable onPress={handleSignUp}>
              <LinearGradient
                colors={[
                  COLORS.gradientStart,
                  COLORS.gradientMiddle,
                  COLORS.gradientEnd,
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.registerBtn}
              >
                <View style={{ width: 20 }} />
                <Text style={styles.btnTitle}>Sign Up</Text>
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
              Already have an account{' '}
              <Text
                style={styles.signUpLine}
                onPress={() => navigation.navigate('Login')}
              >
                Log In
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
    backgroundColor:COLORS.white
  },
  container: {
    padding: 20,
  },
  introSection: {
    alignItems: 'center',
  },
  logoImg: {
    height: 150,
    width: 140,
  },
  tagline: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  inputSection: {
    marginTop: 10,
  },
  welcome: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  getStartLine: {
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
    height: 50,
    marginTop: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    color: COLORS.textPrimary,
    flex: 1,
    fontSize: 16,
  },
  gender: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    height: 50,
    marginTop: 10,
    paddingHorizontal: 20,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    flex: 1,
  },
  dobText: {
    fontSize: 16,
  },
  pickerLabel: {
    color: COLORS.textPrimary,
  },
  registerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
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
    marginTop: 10,
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
    marginTop: 10,
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
    marginTop: 10,
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
    marginTop: 10,
    gap: 10,
  },
  privacy: {
    color: COLORS.textPrimary,
  },
});

export default RegisterScreen;
