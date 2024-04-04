import { View, Text, KeyboardAvoidingView, Linking, 
    Platform, StyleSheet, TouchableOpacity, Keyboard, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaskInput from 'react-native-mask-input';
import {useRouter } from 'expo-router';


const Otp = () => {
    const [loading,setLoading] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState('');
    const KeyboardVerticalOffset = Platform.OS === 'ios' ? 90:0;
    const {bottom} = useSafeAreaInsets();
    const router = useRouter();

    const openLink = ()=>{
        Linking.openURL('https://www.google.com')
    }
    const sendOtp = async()=>{
       setLoading(true)
       setTimeout(()=>{
        setLoading(false);
        router.push(`/verify/${phoneNumber}`)
       },2000);
    };
    const trySignIn = async()=>{

    };
    const NIG_phone = [
        '(',`+`, /\d/, /\d/, /\d/,')', ' ', /\d/, /\d/, /\d/, '-',/\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/,
    ]
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView style={{flex:1}}>
        <View style={styles.container}>
            {
            loading && (
                <View style={[StyleSheet.absoluteFill,styles.loading]}>
                    <ActivityIndicator size='large' color={Colors.primary}/>
                    <Text style={{fontSize:18,padding:10}}>Sending Code...</Text>
                </View>
            )
            }
         <Text style={styles.description}>
           Whatsapp will need to verify your account. Carrier charge may apply.
         </Text>
         <View style={styles.lists}> 

        <View style={styles.listItem}>
         <Text style={styles.listItemText}>Germany</Text>
         <Entypo name="chevron-right" size={24} color={Colors.gray} />
        </View>
        <View style={styles.separator}/>

        <MaskInput
        style={styles.input}
        keyboardType='numeric'
        autoFocus
        placeholder='+234 your phone number'
      value={phoneNumber}
      onChangeText={(masked, unmasked) => {
        setPhoneNumber(masked);
      }}
      mask={NIG_phone}
    />
         </View>

         <Text style={styles.legal}>
          You must be{' '}
          <Text style={styles.link} onPress={openLink}>
            at least 16 years old
          </Text>{' '}
          to register. Learn how WhatsApp works with the{' '}
          <Text style={styles.link} onPress={openLink}>
            Meta Companies
          </Text>
          .
        </Text>
         <View style={{flex:1}}/>
        <TouchableOpacity onPress={sendOtp} 
        disabled={phoneNumber === ''}
        style={[styles.button,phoneNumber !== ''? styles.enabled:null,{marginBottom:bottom}]}>
            <Text style={[styles.buttonText,phoneNumber !== '' ? styles.enabled:null]}>Next</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:20,
        backgroundColor:Colors.background,
        gap:20
    },
    description:{
        fontSize:14,
        color:Colors.gray
    },
    lists:{
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:10,
        padding:10
    },
    listItem:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignContent:'center',
       padding:6,
       marginBottom:10
    },
    listItemText:{
        fontSize:18,
        color:Colors.primary
    },
    separator:{
    width:'100%',
    height:StyleSheet.hairlineWidth,
    backgroundColor:Colors.gray,
    opacity:0.3
    },
    link:{
        color:Colors.gray
    },
    legal:{
     fontSize:12,
     textAlign:'center',
     color:'#000'
    },
    button:{
        width:'100%',
        alignItems:'center',
        backgroundColor:Colors.lightGray,
        padding:10,
        borderRadius:10
    },
    enabled:{
        backgroundColor:Colors.primary,
        color:'#fff'
    },
    buttonText:{
        color:Colors.gray,
        fontSize:22,
        fontWeight:'500'
    },
    input:{
        backgroundColor:'#fff',
        width:'100%',
        fontSize:16,
        padding:6,
        marginTop:10
    },
    loading:{
     ...StyleSheet.absoluteFillObject,
     zIndex:10,
     backgroundColor:"#fff",
     justifyContent:'center',
     alignItems:'center'
    }
})

export default Otp