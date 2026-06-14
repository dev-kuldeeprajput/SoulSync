import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import COLORS from '../constants/colors';

const BottomNavigation = ({}) => {
  return (
    <View style={styles.bottomNav}>
      <Pressable style={styles.navItem}>
        <Feather name="home" size={24} color={COLORS.textSecondary} />
        <Text style={styles.navText}>Home</Text>
      </Pressable>

      <Pressable style={styles.navItem}>
        <Feather name="heart" size={24} color={COLORS.textSecondary} />
        <Text style={styles.navText}>Matches</Text>
      </Pressable>

      <Pressable style={styles.navItem}>
        <Feather name="message-circle" size={24} color={COLORS.textSecondary} />
        <Text style={styles.navText}>Chats</Text>
      </Pressable>

      <Pressable style={styles.navItem}>
        <Feather name="user" size={24} color={COLORS.primary} />
        <Text style={styles.activeNavText}>Profile</Text>
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
  },

  navItem: {
    alignItems: 'center',
  },

  activeNavText: {
    color: COLORS.primary,
    marginTop: 4,
    fontSize: 12,
  },

  navText: {
    color: COLORS.textSecondary,
    marginTop: 4,
    fontSize: 12,
  },
});

export default BottomNavigation;
