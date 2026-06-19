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
import { chats } from '../data/chats';
import { users } from '../data/users';
import { currentUserId } from '../data/currentUser';

const ChatsScreen = ({ ativeTab, navigation }) => {
  const currentUserChats = chats.filter(chat =>
    chat.participants.includes(currentUserId),
  );

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
          {currentUserChats.map(chat => {
            const otherUserId = chat.participants.find(
              id => id !== currentUserId,
            );
            const otherUser = users.find(user => user.id === otherUserId);
            if (!otherUser) return null;
            return (
              <Pressable
                key={chat.id}
                style={styles.chatCard}
                onPress={() =>
                  navigation.navigate('Chat', { chatId: chat.id, otherUser })
                }
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: otherUser.profilePhoto }}
                    style={styles.avatar}
                  />

                  {otherUser.isOnline && <View style={styles.onlineDot} />}
                </View>

                <View style={styles.chatInfo}>
                  <Text style={styles.chatName}>{otherUser.fullName}</Text>

                  <Text numberOfLines={1} style={styles.lastMessage}>
                    {chat.lastMessage}
                  </Text>
                </View>

                <View style={styles.rightSection}>
                  <Text style={styles.time}>{chat.lastMessageTime}</Text>

                  {chat.unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadText}>{chat.unreadCount}</Text>
                    </View>
                  )}
                </View>
              </Pressable>
            );
          })}
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
