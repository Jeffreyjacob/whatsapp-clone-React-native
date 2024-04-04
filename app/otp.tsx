import { View, Text, KeyboardAvoidingView, Linking, 
    Platform, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';

const Otp = () => {
    const [loading,setLoading] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState('12');
    const KeyboardVerticalOffset = Platform.OS === 'ios' ? 90:0;

    const openLink = ()=>{
        Linking.openURL('https://www.google.com')
    }
    const sendOtp = async()=>{

    };
    const trySignIn = async()=>{

    };
  return (
    <KeyboardAvoidingView style={{flex:1}}>
        <View style={styles.container}>
         <Text style={styles.description}>
           Whatsapp will need to verify your account. Carrier charge may apply.
         </Text>
         <View style={styles.lists}> 

        <View style={styles.listItem}>
         <Text style={styles.listItemText}>Germany</Text>
         <Entypo name="chevron-right" size={24} color={Colors.gray} />
        </View>
        <View style={styles.separator}/>
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

        <TouchableOpacity onPress={sendOtp} 
        style={[styles.button,phoneNumber !== ''? styles.enabled:null]}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
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
    }
})

export default Otp