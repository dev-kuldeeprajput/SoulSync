import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import COLORS from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';

const MatchesScreen = ({ navigation }) => {
  const matches = [
    {
      id: 1,
      name: 'Aisha Khan',
      age: 22,
      isOnline: true,
      status: 'Online',
      bio: 'Loves travelling and sunsets 🌅',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      id: 2,
      name: 'Riya Sharma',
      age: 24,
      isOnline: true,
      status: 'Online',
      bio: 'Coffee enthusiast ☕',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
    },
    {
      id: 3,
      name: 'Sara Ali',
      age: 23,
      isOnline: true,
      status: 'Online',
      bio: 'Music lover 🎵',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    },
    {
      id: 4,
      name: 'Priya Verma',
      age: 25,
      isOnline: false,
      status: 'Offline',
      bio: 'Bookworm 📚',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      id: 5,
      name: 'Ananya Gupta',
      age: 21,
      isOnline: true,
      status: 'Online',
      bio: 'Foodie 🍕',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Matches</Text>
          <Feather name="sliders" size={24} color={COLORS.primary} />
        </View>
        {matches.length === 0 ? (
          <View style={styles.matchInfoCard}>
            <View style={styles.matchContainer}>
              <Text style={styles.matchTitle}>No Matches Yet</Text>
              <Feather name="heart" size={28} color={COLORS.primary} />
            </View>
            <Text style={styles.matchSubtitle}>
              Keep exploring people to find meaningful connections.
            </Text>
          </View>
        ) : (
          <View style={styles.matchInfoCard}>
            <View style={styles.matchContainer}>
              <Feather name="heart" size={28} color={COLORS.primary} />
              <Text style={styles.matchTitle}>{matches.length} matches</Text>
            </View>
            <Text style={styles.matchSubtitle}>
              Start a conversation and get to know them
            </Text>
          </View>
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {matches.map(item => (
            <Pressable key={item.id} style={styles.matchCard}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.avatar} />
                {item.isOnline && <View style={styles.onlineDot} />}
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.ageStatus}>
                  {item.age} • {item.status}
                </Text>

                <Text style={styles.bio}>{item.bio}</Text>
              </View>

              <Feather name="message-circle" size={30} color={COLORS.primary} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <BottomNavigation activeTab="matches" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  matchInfoCard: {
    marginBottom: 25,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  matchTitle: {
    fontSize: 20,
  },
  matchSubtitle: {
    fontSize: 15,
    paddingRight: 200,
  },
  matchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
    marginBottom: 15,
    borderRadius: 20,
    elevation: 3,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 10,
    height: 10,
    borderRadius: 8,

    backgroundColor: COLORS.success,

    borderWidth: 2,
    borderColor: COLORS.white,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  ageStatus: {
    marginTop: 3,
    color: COLORS.success,
    fontWeight: '600',
  },

  bio: {
    marginTop: 6,
    color: COLORS.textSecondary,
  },
});

export default MatchesScreen;
