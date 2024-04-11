import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useSegments } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export default function TabLayout() {
   const segment = useSegments();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs screenOptions={{
        tabBarStyle: { backgroundColor: Colors.background },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveBackgroundColor: Colors.background,
        tabBarActiveBackgroundColor: Colors.background,
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerShadowVisible: false,
      }} >
        <Tabs.Screen name="updates"
          options={{
            title: 'Updates',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='update' size={size} color={color} />
            )
          }} />

        <Tabs.Screen name='Calls'
          options={{
            title: 'Calls',
            headerShown:false,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name='phone-outline' size={size} color={color} />
            )
          }} />

        <Tabs.Screen name='communities'
          options={{
            title: 'Communities',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='people' size={size} color={color} />
            )
          }} />

        <Tabs.Screen name='Chats'
          options={{
            title: 'Chats',
            headerShown:false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name='chatbubbles' size={size} color={color} />
            ),
            tabBarStyle:{
              backgroundColor:Colors.background,
              display:segment[2] === '[id]' ? 'none':'flex'
            }
          }} />

        <Tabs.Screen name='Settings'
          options={{
            title: 'settings',
            headerShown:false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name='cog' size={size} color={color} />
            )
          }} />

      </Tabs>
    </GestureHandlerRootView>
  );
}
