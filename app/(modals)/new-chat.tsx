import { View, Text } from 'react-native'
import React from 'react';
import contact from '@/assets/data/contacts.json';
import { AlphabetList } from 'react-native-section-alphabet-list';


const NewChat = () => {
    const data = contact.map((contact,index)=>({
        value:`${contact.first_name} ${contact.last_name}`,
        name:`${contact.first_name} ${contact.last_name}`,
        img: contact.img,
        desc:contact.desc,
        key:`${contact.first_name} ${contact.last_name}- ${index}`
    }))
  return (
    <View>
       <AlphabetList
       data={data}
       indexLetterStyle={{
        color:'blue',
        fontSize:15
       }}/>
    </View>
  )
}

export default NewChat