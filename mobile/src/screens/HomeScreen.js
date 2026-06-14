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

const recommendations = [
  {
    id: 1,
    name: 'Aisha',
    age: 22,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    id: 2,
    name: 'Riya',
    age: 24,
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
  },
  {
    id: 3,
    name: 'Sara',
    age: 23,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
];
const HomeScreen = ({ activeTab, navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.container}>
        {/* Header */}

        <View style={styles.header}>
          <Image
            source={require('../assets/headerLogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.headerIcons}>
            <View style={styles.bellContainer}>
              <Feather name="bell" size={24} color={COLORS.textPrimary} />

              <View style={styles.notificationDot} />
            </View>

            <Feather name="sliders" size={24} color={COLORS.textPrimary} />
          </View>
        </View>

        {/* Search */}

        <View style={styles.searchContainer}>
          <Feather name="search" size={22} color={COLORS.textSecondary} />

          <TextInput
            placeholder="Search Matches..."
            placeholderTextColor={COLORS.placeholder}
            style={styles.searchInput}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Discover */}

          <View style={styles.discoverSection}>
            <Text style={styles.discoverTitle}>Discover People</Text>

            <Text style={styles.discoverSubtitle}>
              Find meaningful connections ✨
            </Text>
          </View>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
              }}
              style={styles.profileImage}
            />

            <View style={styles.overlay}>
              <Text style={styles.profileName}>Ananya, 23</Text>

              <View style={styles.locationRow}>
                <Feather name="map-pin" size={14} color={COLORS.white} />

                <Text style={styles.locationText}>Mumbai, India</Text>
              </View>

              <Text style={styles.bio}>
                Love coffee, sunsets and deep conversations.
              </Text>

              <View style={styles.tagsContainer}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>☕ Coffee</Text>
                </View>

                <View style={styles.tag}>
                  <Text style={styles.tagText}>✈ Travel</Text>
                </View>

                <View style={styles.tag}>
                  <Text style={styles.tagText}>🎵 Music</Text>
                </View>
              </View>

              <Pressable style={styles.likeButton}>
                <Feather name="heart" size={24} color={COLORS.primary} />
              </Pressable>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Recommended For You</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 15 }}
          >
            {recommendations.map(item => (
              <View key={item.id} style={styles.smallCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.smallCardImage}
                />

                <View style={styles.smallCardOverlay}>
                  <Text style={styles.smallCardName}>
                    {item.name}, {item.age}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </View>
      <BottomNavigation activeTab="home" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    width: 180,
    height: 50,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },

  bellContainer: {
    position: 'relative',
  },

  notificationDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },

  searchContainer: {
    marginTop: 20,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },

  searchInput: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 16,
  },

  discoverSection: {
    marginTop: 25,
  },

  discoverTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  discoverSubtitle: {
    marginTop: 5,
    color: COLORS.textSecondary,
    fontSize: 15,
  },

  profileCard: {
    marginTop: 25,
    height: 500,
    borderRadius: 30,
    overflow: 'hidden',
  },

  profileImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingRight: 110,
  },

  profileName: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '700',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  locationText: {
    color: COLORS.white,
    marginLeft: 5,
  },

  bio: {
    color: COLORS.white,
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
  },

  tagsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },

  tag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  tagText: {
    color: COLORS.white,
  },

  likeButton: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    shadowOpacity: 0.25,
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  smallCard: {
    width: 170,
    height: 240,
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 20,
  },

  smallCardImage: {
    width: '100%',
    height: '100%',
  },

  smallCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
  },

  smallCardName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default HomeScreen;
