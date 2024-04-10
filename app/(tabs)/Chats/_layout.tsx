import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index'
        options={{
            title:'Chats',
            headerLargeTitle:true,
            headerTransparent:true,
            headerBlurEffect:'regular',
            headerSearchBarOptions:{
                placeholder:'search'
            },
           
        }}/>
    </Stack>
  )
}

export default Layout