import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';


const index = () => {
    const openLink =()=>{

    }
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/welcome.png')}
        style={styles.welcomeImage}/>
      <Text style={styles.headlines}>
        Welcome to Whatsapp
      </Text>
      <Text style={styles.description}>
        Read our{' '}
        <Text style={styles.links} onPress={openLink}>
          Privacy Policy
        </Text>
        . {'Tap "Agree & Continue" to accept the '}
        <Text style={styles.links} onPress={openLink}>
          Terms of Service
        </Text>
        .
      </Text>
      <Link href={'/otp'} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    welcomeImage:{
        width:300,
        height:300,
        marginBottom:80
    },
    headlines:{
     fontSize:24,
     fontWeight:'bold',
     marginVertical:20
    },
    description:{
        fontSize:14,
        textAlign:'center',
        marginBottom:80,
        color:Colors.gray
    },
    links:{
    color:Colors.primary
    },
    button:{
      width:'100%',
      color:'#fff',
    },
    buttonText:{
      fontSize:22,
      textAlign:'center',
      color:Colors.primary,
      fontWeight:'600'

    }
})
export default index