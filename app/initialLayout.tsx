import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter, useSegments } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const InitialLayout = () => {
    const router = useRouter();
  const segments = useSegments();
  const {isLoaded,isSignedIn} = useAuth();
    useEffect(()=>{
        if(!isLoaded) return;
      const inTabsGroup = segments[0] === '(tabs)';
      if(isSignedIn && !inTabsGroup){
           router.replace('/(tabs)/Chats');
      }else if(!isSignedIn){
       router.replace('/')
      }
 
   },[isSignedIn])
  return (
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="otp" options={{ headerTitle:'Enter Your Phone Number',headerBackVisible:false}} />
    <Stack.Screen  name='verify/[phone]'
    options={{headerTitle:'Verify Your Phone Number',headerBackTitle:'Edit Number'}}/>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name='(modals)/new-chat' 
    options={{
      presentation:'modal',
      title:'New Chat',
      headerTransparent:true,
      headerBlurEffect:'regular',
      headerStyle:{
        backgroundColor:Colors.background
      },
      headerSearchBarOptions:{
        hideWhenScrolling:false,
        placeholder:'Search name or number'
      },
      headerRight:()=>(
        <TouchableOpacity onPress={()=>router.back()}
        style={{backgroundColor:Colors.lightGray,borderRadius:20,padding:6}}>
          <Ionicons name='close' size={24} color={Colors.gray} />
        </TouchableOpacity>
      )
    }}/>
  </Stack>
  )
}

export default InitialLayout;