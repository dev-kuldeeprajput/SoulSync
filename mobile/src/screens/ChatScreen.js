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
import { messages } from '../data/messages';
import { currentUserId } from '../data/currentUser';

const ChatScreen = ({ route, navigation }) => {
  const { chatId, otherUser } = route.params;
  const chatMessages = messages.filter(message => message.chatId === chatId);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={28} color={COLORS.primary} />
        </Pressable>

        <View style={styles.userInfo}>
          <Image
            source={{
              uri: otherUser.profilePhoto,
            }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.userName}>{otherUser.fullName}</Text>

            <View style={styles.onlineRow}>
              <View style={styles.onlineDot} />

              <Text style={styles.onlineText}>
                {otherUser.isOnline ? 'Online' : 'offline'}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <Feather name="phone-call" size={24} color={COLORS.primary} />

          <Feather name="more-vertical" size={24} color={COLORS.primary} />
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          {chatMessages.map(item => (
            <View
              key={item.id}
              style={[
                styles.messageWrapper,

                item.senderId === currentUserId ? styles.myWrapper : styles.otherWrapper,
              ]}
            >
              <View
                style={[
                  styles.messageBubble,

                  item.senderId === currentUserId ? styles.myBubble : styles.otherBubble,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>

              <Text style={styles.time}>{item.createdAt}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <Feather name="smile" size={26} color={COLORS.primary} />
        <TextInput
          placeholder="Type a message..."
          placeholderTextColor={COLORS.placeholder}
          style={styles.input}
        />
        <Feather name="paperclip" size={24} color={COLORS.primary} />
        <Pressable style={styles.sendBtn}>
          <Feather name="send" size={22} color={COLORS.white} />
        </Pressable>
      </View>
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 15,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 12,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },

  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  onlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.success,
    marginRight: 6,
  },

  onlineText: {
    color: COLORS.success,
    fontSize: 14,
  },

  messageWrapper: {
    marginBottom: 15,
  },

  myWrapper: {
    alignItems: 'flex-end',
  },

  otherWrapper: {
    alignItems: 'flex-start',
  },

  messageBubble: {
    maxWidth: '75%',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 22,
  },

  myBubble: {
    backgroundColor: COLORS.chatBubbleMe,
  },

  otherBubble: {
    backgroundColor: COLORS.chatBubbleOther,
  },

  messageText: {
    color: COLORS.textPrimary,
    fontSize: 16,
  },

  time: {
    marginTop: 3,
    fontSize: 12,
    color: COLORS.textSecondary,
    paddingHorizontal: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.white,
  },

  input: {
    flex: 1,
    marginHorizontal: 15,
  },

  sendBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
});

export default ChatScreen;
