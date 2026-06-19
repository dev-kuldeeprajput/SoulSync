import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@react-native-vector-icons/feather';
import COLORS from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import BottomNavigation from '../components/BottomNavigation';
import { currentUserId } from '../data/currentUser';
import { users } from '../data/users';

const ProfileScreen = ({ navigation, activeTab }) => {
  const currentUser = users.find(user => user.id === currentUserId);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.iconBtn}>
              <Feather name="chevron-left" size={24} color={COLORS.primary} />
            </Pressable>

            <Text style={styles.headerTitle}>My Profile</Text>

            <Pressable style={styles.iconBtn}>
              <Feather name="settings" size={22} color={COLORS.primary} />
            </Pressable>
          </View>
          <View style={styles.profileCard}>
            <View style={styles.avatarWrapper}>
              <Image
                source={{
                  uri: currentUser.profilePhoto,
                }}
                style={styles.avatar}
              />

              <Pressable style={styles.cameraBtn}>
                <Feather name="camera" size={18} color={COLORS.white} />
              </Pressable>
            </View>

            <Text style={styles.name}>
              {currentUser.fullName}, {currentUser.age}
            </Text>

            <View style={styles.locationRow}>
              <Feather name="map-pin" size={16} color={COLORS.primary} />

              <Text style={styles.location}>{currentUser.city}</Text>
            </View>
            <View style={styles.bioCard}>
              <Text style={styles.quoteMark}>❝</Text>

              <Text style={styles.bioText}>{currentUser.bio}</Text>

              <Feather
                name="heart"
                size={25}
                color={COLORS.primary}
                style={styles.bioHeart}
              />
            </View>
          </View>
          <View style={styles.interestsCard}>
            <Text style={styles.interestsTitle}>My Interests</Text>

            <View style={styles.interestsContainer}>
              {currentUser.interests.map(interest => (
                <View style={styles.interestChip} key={interest}>
                  <Text>{interest}</Text>
                </View>
              ))}
            </View>
          </View>
          <Pressable style={styles.actionCard}>
            <View style={styles.actionLeft}>
              <View style={styles.actionIconContainer}>
                <Feather name="edit-2" size={20} color={COLORS.primary} />
              </View>

              <Text style={styles.actionTitle}>Edit Profile</Text>
            </View>

            <Feather
              name="chevron-right"
              size={22}
              color={COLORS.textSecondary}
            />
          </Pressable>
          <Pressable style={styles.actionCard}>
            <View style={styles.actionLeft}>
              <View style={styles.actionIconContainer}>
                <Feather name="settings" size={20} color={COLORS.primary} />
              </View>

              <Text style={styles.actionTitle}>Settings</Text>
            </View>

            <Feather
              name="chevron-right"
              size={22}
              color={COLORS.textSecondary}
            />
          </Pressable>
          <Pressable style={styles.actionCard}>
            <View style={styles.actionLeft}>
              <View style={styles.logoutIconContainer}>
                <Feather name="log-out" size={20} color="#FF5A5F" />
              </View>

              <Text style={styles.logoutTitle}>Logout</Text>
            </View>

            <Feather
              name="chevron-right"
              size={22}
              color={COLORS.textSecondary}
            />
          </Pressable>
        </View>
      </ScrollView>
      <BottomNavigation activeTab="profile" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  iconBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  profileCard: {
    marginTop: 25,
    backgroundColor: COLORS.cardPrimary,
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: 170,
    height: 170,
    borderRadius: 85,
  },

  cameraBtn: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  location: {
    marginLeft: 5,
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  bioCard: {
    marginTop: 20,
    backgroundColor: COLORS.cardSecondary,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    minHeight: 150,
    width: '100%',
    position: 'relative',
  },

  quoteMark: {
    fontSize: 20,
    color: COLORS.primary,
  },

  bioText: {
    marginTop: 10,
    fontSize: 18,
    lineHeight: 32,
    color: COLORS.textPrimary,
  },

  bioHeart: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },

  interestsCard: {
    marginTop: 20,
    backgroundColor: COLORS.cardPrimary,
    borderRadius: 25,
    padding: 20,
    elevation: 4,
  },

  interestsTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 15,
  },

  interestChip: {
    backgroundColor: COLORS.cardSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },

  actionCard: {
    marginTop: 15,
    backgroundColor: COLORS.cardPrimary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  actionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.cardPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.cardPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionTitle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },

  logoutTitle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.error,
  },
});

export default ProfileScreen;
