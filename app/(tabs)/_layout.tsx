import { Tabs } from 'expo-router';
import React from 'react';

import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      tabBarLabel: "",
       
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
