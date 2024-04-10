import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

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
            headerStyle:{
                backgroundColor:'#fff'
            },
            headerRight:()=>(
               <View style={{flexDirection:'row',gap:30}}>
                <TouchableOpacity>
                    <Ionicons name='camera-outline' color={Colors.primary} size={30}/>
                </TouchableOpacity>
                <Link href="/(modals)/new-chat" asChild>
                 <TouchableOpacity>
                    <Ionicons name='add-circle' color={Colors.primary} size={30}/>
                 </TouchableOpacity>
                </Link>
               </View>
            ),
            headerLeft:()=>(
                <TouchableOpacity>
                    <Ionicons name='ellipsis-horizontal-circle-outline' 
                    color={Colors.primary}
                    size={30}/>
                </TouchableOpacity>
            )
           
        }}/>
    </Stack>
  )
}

export default Layout