import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ChatData from '@/assets/data/chats.json';
import { defaultStyles } from '@/constants/Styles';
import ChatRow from '@/components/ChatRow';

export default function Page() {
  return (
    <ScrollView
    contentInsetAdjustmentBehavior='automatic'
    contentContainerStyle={{paddingBottom:40,
      backgroundColor:'#fff'
    }}>
      <FlatList
      data={ChatData}
      scrollEnabled={false}
      keyExtractor={(item)=>item.id}
      ItemSeparatorComponent={()=><View style={[defaultStyles.separator,
        {marginLeft:90}
      ]}/>}
      renderItem={({item,index})=>(
       <ChatRow {...item}/>
      )}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});