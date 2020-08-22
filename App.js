import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef} from 'react';
import GoalInput from './components/GoalInput'
import GoalList from './components/GoalList'
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Button } from 'react-native';


export default function App() {
  const [goal,setGoal]=useState('')
  const [goalList,setGoalList]=useState([])
  const [showModal,setShowModal]=useState(false)
  const modalRef=useRef()

  const handleInput=(goal)=>{
    setGoal(goal)
  }

  const handleAddGoal=()=>{
    setGoalList(currentGoalList=>[...currentGoalList,{id:`ITEM-${currentGoalList.length+1}`,title:goal}])
  }

  const handleCancelGoal=()=>{
    setGoal('')
    modalRef.current.close()
  }


  const handleDelete=(index)=>{
    setGoalList(currentGoalList=>currentGoalList.filter((item)=>index!==item.id))
  }



  return (
    <View style={styles.container}>
      <StatusBar/>
        <Button title="ADD" style={styles.button} onPress={()=>modalRef.current.open()}>Add</Button>
      <GoalInput
        goal={goal}
        handleAddGoal={handleAddGoal}
        handleCancelGoal={handleCancelGoal}
        handleInput={handleInput}
        modalRef={modalRef}
        />
      <GoalList
        goalList={goalList}
        handleDelete={handleDelete}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingRight: 24,
    paddingLeft: 24,
  },


});
