import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import chatData from '@/assets/data/chats.json';

export interface Response {
    id:string;
    from:string;
    date:string;
    img:string;
    msg:string;
    read:boolean;
    unreadCount:number;
}


const Page = () => {
    const [userInfo,setUserInfo] = useState<any>([]);
    const {id} = useLocalSearchParams();
    useEffect(()=>{
         const items = chatData.filter((item:any)=> item.id === id)
         setUserInfo(items);
         
    },[id])
  return (
    <View>
         <Text>{userInfo?.id}</Text>
    </View>
  )
}

export default Page