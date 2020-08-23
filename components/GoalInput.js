import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput, } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

export default function GoalInput(props) {

  return (
    <RBSheet ref={props.modalRef}
      closeOnDragDown={true}
       closeOnPressMask={false}
       customStyles={{
         draggableIcon: {
           backgroundColor: "#000"
         },
         container: {
           borderTopRightRadius: 20,
           borderTopLeftRadius: 20,
         }
       }}>
      <View style={styles.inside} >
        <TextInput
           placeholder="Course Goal"
           style={styles.input}
           value={props.goal}
           onChangeText={props.handleInput}>
         </TextInput>
         <View style={styles.buttonContainer}>
           <View style={styles.button}>
              <Button title="ADD"  onPress={ props.handleAddGoal} disabled={props.goal===''}/>
           </View>
            <View  style={styles.button} >
              <Button title="Cancel"color="red" onPress={props.handleCancelGoal}/>
            </View>
        </View>
      </View>
      </RBSheet>
  );
}

const styles = StyleSheet.create({
  inside:{
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
  },
  input: {
    borderBottomColor:"black",
    width:'80%',
    borderBottomWidth: 1,
    marginBottom:16,
    padding:4
  },
  buttonContainer:{
  flexDirection:'row',
  justifyContent: 'space-around',
  width:'60%',
},
  button: {
    width:'40%',
  }
});
