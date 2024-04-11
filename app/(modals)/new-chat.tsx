import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import contact from '@/assets/data/contacts.json';
import { AlphabetList } from 'react-native-section-alphabet-list';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';


const NewChat = () => {
    const data = contact.map((contact,index)=>({
        value:`${contact.first_name} ${contact.last_name}`,
        name:`${contact.first_name} ${contact.last_name}`,
        img: contact.img,
        desc:contact.desc,
        key:`${contact.first_name} ${contact.last_name}- ${index}`
    }))
  return (
    <View style={{paddingTop:110,backgroundColor:Colors.background}}>
       <AlphabetList
       data={data}
       indexLetterStyle={{
        color:Colors.primary,
        fontSize:12
       }}
       indexContainerStyle={{
        width:24,
        backgroundColor:Colors.background
       }}
       style={{
        marginLeft:24
       }}
       renderCustomSectionHeader={(section)=>(
        <View style={styles.sectionHeaderContainer}>
          <Text>{section.title}</Text>
        </View>
       )}
       ItemSeparatorComponent={()=><View style = {defaultStyles.separator}/>}
       renderCustomItem={(item:any)=>(
          <View style={styles.listItemContainer}>
            <Image source={{uri:item.img}} style={{width:40,height:40,
              borderRadius:20
            }}/>
            <View>
            <Text style={{color:'#000',fontSize:14}}>
              {item.value}
              </Text>
            <Text style={{color:Colors.gray,fontSize:12}}>
              {item.desc.length > 40 ? `${item.desc.substring(0,40)}`: item.desc}
            </Text>
            </View>
          </View>
       )}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionHeaderContainer:{
    height:30,
    backgroundColor:Colors.background,
    justifyContent:'center',
    paddingHorizontal:14
  },
  listItemContainer:{
    flex:1,
    paddingHorizontal:14,
    alignItems:"center",
    gap:10,
    height:50,
    flexDirection:'row',
    backgroundColor:'#fff',
  }
})
export default NewChat