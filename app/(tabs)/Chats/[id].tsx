import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import chatData from '@/assets/data/chats.json';
import {Bubble, GiftedChat,IMessage, InputToolbar, Send} from 'react-native-gifted-chat';
import messageData from '@/assets/data/messages.json';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

 interface Response {
    id:string;
    from:string;
    date:string;
    img:string;
    msg:string;
    read:boolean;
    unreadCount:number;
}


const Page = () => {
  const {id} = useLocalSearchParams();
    const [userInfo,setUserInfo] = useState<any>(chatData);
    const [message,setMessage] = useState<IMessage[]>([]);
    const insets = useSafeAreaInsets();
    const [text,setText] = useState('');
    useEffect(()=>{
        setMessage([
          ...messageData.map((message) => {
            return {
              _id: message.id,
              text: message.msg,
              createdAt: new Date(message.date),
              user: {
                _id: message.from,
                name: message.from ? 'You' : 'Bob',
              },
            };
          }),
          {
            _id: 0,
            system: true,
            text: 'All your base are belong to us',
            createdAt: new Date(),
            user: {
              _id: 0,
              name: 'Bot',
            },
          },
    
        ])
    },[]);
    useEffect(()=>{
         const items = chatData.filter((item:any)=> item.id === id)
         setUserInfo(items);
         console.log(items)
         
    },[id])
    const onSend = useCallback((messages = []) => {
      setMessage(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      )
    }, [])
  return (
    <ImageBackground source={require('@/assets/images/Default WhatsApp background for people who lost it_ Requested by u_Marvin_der_kuhle..jpeg')}
    style={{flex:1,backgroundColor:Colors.background}}>
    <GiftedChat
      messages={message}
      onSend={(messages:any) => onSend(messages)}
      user={{
        _id: 1,
      }}
      onInputTextChanged={setText}
      renderAvatar={null}
      bottomOffset={insets.bottom}
      maxComposerHeight={100}
      renderBubble={(props)=>{
        return<Bubble {...props}
        textStyle={{
          right:{
            color:"#000"
          }
        }}
        wrapperStyle={{
          left:{
            backgroundColor:"#fff",
          },
          right:{
            backgroundColor:Colors.lightGreen
          }
        }}
        />
      }}
      textInputProps={styles.composer}
      renderSend={(props)=>(
        <View style={{flexDirection:'row',height:44,alignItems:'center',
          justifyContent:'center',gap:14,paddingHorizontal:14
        }}>
           {text.length> 0 && (
            <Send {...props} containerStyle={{justifyContent:'center',alignItems:"center"}}>
              <Ionicons name='send' color={Colors.primary} size={28}/>
            </Send>
           )}
           {
            text.length === 0 && (
              <>
               <Ionicons name='camera-outline' color={Colors.primary} size={28}/>
               <Ionicons name='mic-outline' color={Colors.primary} size={28}/>
              </>
            )
           }
        </View>
      )}
      renderInputToolbar={(props)=>
        <InputToolbar {...props} 
        containerStyle={{
          backgroundColor:Colors.background
        }}
        renderActions={()=>(
          <View style={{height:44,justifyContent:'center',alignItems:"center",left:5}}>
          <Ionicons name='add' color={Colors.primary} size={28} />
        </View>
        )}
        />
      }
    />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  composer:{
    backgroundColor:'#fff',
    borderRadius:15,
    borderWidth:1,
    borderColor:Colors.lightGray,
    paddingHorizontal:10,
    fontSize:16,
    marginVertical:4,
    paddingTop:8
  }
})
export default Page