import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import COLORS from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';

const ChatsScreen = ({ ativeTab, navigation }) => {
  const chats = [
    {
      id: 1,
      name: 'Aisha Khan',
      message: "Hey! How's your day? 😊",
      time: '2m',
      unread: 2,
      isOnline: true,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      id: 2,
      name: 'Riya Sharma',
      message: 'Coffee date someday? ☕',
      time: '15m',
      unread: 0,
      isOnline: true,
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
    },
    {
      id: 3,
      name: 'Sara Ali',
      message: "What's your favorite song? 🎵",
      time: '1h',
      unread: 1,
      isOnline: false,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Chats</Text>

          <Feather name="sliders" size={24} color={COLORS.primary} />
        </View>

        {/* Search */}

        <View style={styles.searchContainer}>
          <Feather name="search" size={22} color={COLORS.textSecondary} />

          <TextInput
            placeholder="Search conversations..."
            placeholderTextColor={COLORS.placeholder}
            style={styles.searchInput}
          />
        </View>

        {/* Chat List */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {chats.map(item => (
            <Pressable
              key={item.id}
              style={styles.chatCard}
              onPress={() => navigation.navigate('Chat')}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.avatar} />

                {item.isOnline && <View style={styles.onlineDot} />}
              </View>

              <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{item.name}</Text>

                <Text numberOfLines={1} style={styles.lastMessage}>
                  {item.message}
                </Text>
              </View>

              <View style={styles.rightSection}>
                <Text style={styles.time}>{item.time}</Text>

                {item.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{item.unread}</Text>
                  </View>
                )}
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <BottomNavigation activeTab="chats" navigation={navigation} />
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
    paddingHorizontal: 20,
    paddingTop: 10,
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
  searchContainer: {
    marginBottom: 20,
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

  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardPrimary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
    elevation: 3,
  },

  imageContainer: {
    position: 'relative',
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },

  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.success,
    borderWidth: 2,
    borderColor: COLORS.white,
  },

  chatInfo: {
    flex: 1,
    marginLeft: 15,
  },

  chatName: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  lastMessage: {
    marginTop: 5,
    color: COLORS.textSecondary,
    fontSize: 15,
  },

  rightSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },

  time: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },

  unreadBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  unreadText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 12,
  },
});

export default ChatsScreen;
