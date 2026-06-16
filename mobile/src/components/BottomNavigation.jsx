import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import COLORS from '../constants/colors';

const BottomNavigation = ({ activeTab, navigation }) => {
  return (
    <View style={styles.bottomNav}>
      <Pressable
        style={styles.navItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Feather
          name="home"
          size={24}
          color={activeTab === 'home' ? COLORS.primary : COLORS.textSecondary}
        />
        <Text
          style={[styles.navText, activeTab === 'home' && styles.activeNavText]}
        >
          Home
        </Text>
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={() => navigation.navigate('Matches')}
      >
        <Feather
          name="heart"
          size={24}
          color={
            activeTab === 'matches' ? COLORS.primary : COLORS.textSecondary
          }
        />
        <Text
          style={[
            styles.navText,
            activeTab === 'matches' && styles.activeNavText,
          ]}
        >
          Matches
        </Text>
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={() => navigation.navigate('Chats')}
      >
        <Feather
          name="message-circle"
          size={24}
          color={activeTab === 'chats' ? COLORS.primary : COLORS.textSecondary}
        />
        <Text
          style={[
            styles.navText,
            activeTab === 'chats' && styles.activeNavText,
          ]}
        >
          Chats
        </Text>
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Feather
          name="user"
          size={24}
          color={
            activeTab === 'profile' ? COLORS.primary : COLORS.textSecondary
          }
        />
        <Text
          style={[
            styles.navText,
            activeTab === 'profile' && styles.activeNavText,
          ]}
        >
          Profile
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    height: 75,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    position: 'fix',
    bottom: 0,
  },

  navItem: {
    alignItems: 'center',
  },
  activeNavText: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.primary,
  },

  navText: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default BottomNavigation;
