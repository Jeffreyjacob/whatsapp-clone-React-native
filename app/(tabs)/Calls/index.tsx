import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors';
import callData from '../../../assets/data/calls.json';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { SegmentedControl } from '@/components/SegmentedControl';
import Animated, { CurvedTransition, FadeInUp, FadeOutUp,
     useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import SwipeableRow from '@/components/swipeableRow';
import * as Haptics from 'expo-haptics';

const transition = CurvedTransition.delay(100);
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const calls = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [item, setItem] = useState(callData);
    const [selcetOption, setSelectOption] = useState('All');
    const editing = useSharedValue(-30);

    const onEdit = () => {
        let editingNew = !isEdit;
    editing.value = editingNew ? 0 : -30;
    setIsEdit(editingNew);
    }
    const animatedRowStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(editing.value) }],
      }));
    
      const animatedPosition = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(editing.value) }],
      }));
    const onSegmentChange = (option: string) => {
        setSelectOption(option);
        if (option === 'All') {
            setItem(callData);
        } else {
            setItem(callData.filter((calls) => calls.missed))
        }
    }

    const removeCall = (DeleteItem:any)=>{
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setItem(item.filter((i)=> i.id !== DeleteItem.id));
    }


    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <Stack.Screen options={{
                headerTitle: () => (
                    <SegmentedControl
                        options={['All', 'Missed']}
                        selectedOption={selcetOption}
                        onOptionPress={onSegmentChange} />
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => onEdit()}>
                        <Text style={{ color: Colors.primary, fontSize: 18 }}>
                            {isEdit ? 'Done' : 'Edit'}
                        </Text>
                    </TouchableOpacity>
                )
            }} />
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                contentContainerStyle={{
                    paddingBottom: 40
                }}>
                <Animated.View style={[defaultStyles.block]} layout={transition}>
                    <Animated.FlatList
                        skipEnteringExitingAnimations
                        data={item}
                        keyExtractor={(item) => item.id.toString()}
                        scrollEnabled={false}
                        itemLayoutAnimation={transition}
                        ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
                        renderItem={({ item, index }) => (
                            <SwipeableRow onDelete={()=>removeCall(item)}>
                                <Animated.View entering={FadeInUp.delay(index * 10)} exiting={FadeOutUp}
                                 style={{flexDirection:'row',alignItems:'center'}}>
                                    <AnimatedTouchableOpacity onPress={()=>removeCall(item)}
                                    style={[animatedPosition,{paddingLeft:8}]}>
                                     <Ionicons name='remove-circle' size={24} color={Colors.red}/>
                                    </AnimatedTouchableOpacity>

                                    <Animated.View style={[defaultStyles.item,animatedRowStyles]}>
                                        <Image source={{ uri: item.img }} style={styles.avatar} />

                                        <View style={{ flex: 1, gap: 2, }}>
                                            <Text style={{ fontSize: 18, color: item.missed ? Colors.red : '#000' }}>
                                                {item.name}
                                            </Text>

                                            <View style={{ flexDirection: 'row', gap: 4 }}>
                                                <Ionicons name={item.video ? 'videocam' : 'call'}
                                                    size={16}
                                                    color={Colors.gray} />
                                                <Text style={{ color: Colors.gray, flex: 1 }}>
                                                    {item.incoming ? 'Incoming' : 'Outgoing'}
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{
                                            flexDirection: 'row',
                                            gap: 6,
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{ color: Colors.gray }}>
                                                {format(item.date, 'MM.dd.yy')}
                                            </Text>
                                            <Ionicons name='information-circle-outline'
                                                size={24} color={Colors.primary} />
                                        </View>


                                    </Animated.View>
                                </Animated.View>
                            </SwipeableRow>
                        )}
                    />
                </Animated.View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default calls