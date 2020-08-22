import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';


export default function GoalList(props) {

  const renderItem=({item,i})=>(
    <TouchableOpacity onPress={()=>props.handleDelete(item.id)}>
    <View style={{...styles.item,backgroundColor: props.selectedID===item.id?`#ff99ff`:'#f7f7f7'}} key={i}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
    </TouchableOpacity>
  )

  return (
      <FlatList
        data={props.goalList}
        renderItem={renderItem}
      />
  );
}

const styles = StyleSheet.create({
  item: {
  borderRadius: 4,
  padding: 12,
  marginVertical: 8,
  },
  title: {
    fontSize: 20,
  },
});
