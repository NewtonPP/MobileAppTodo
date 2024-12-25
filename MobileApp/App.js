import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [ToDos, setToDos] = useState([])
  const [Value, setValue] = useState("")
  const [isPressed, setIsPressed] = useState(false) 
  const HandleAddTask = () =>{
    setIsPressed(true)
  }

  const HandleTaskChange = (value) =>{
    setValue(value)
  }
  const HandleTaskAdded = (value) =>{
    setToDos((prev)=>([...prev, Value]))
    setValue("")
  }

  const HandleTaskDelete = (index) =>{
    const newToDo = [...ToDos]
   const to =  newToDo.filter((todo, idx)=>
        idx !== index
    )
   setToDos(to)

  }
 return (
  <>
 <View style = {styles.container}>
    <Text style={styles.text}>Welcome to the ToDo app</Text>
    {
      ToDos.length === 0 && <View
      style={styles.Writecontainer}><Text style={styles.Write}>Write your first task</Text></View>
    }
    {
      ToDos.length === 0 &&
      <View style={styles.Add}>
      <Button  title='Add task'
      onPress={HandleAddTask}
      ></Button>
      </View>
    }
  { isPressed &&
    <View style={styles.AddTask}>
      <TextInput placeholder='Add your task' style={{height:40, width:400, borderWidth:2, borderColor:"black", padding:5, borderRadius:10}}
      onChangeText={HandleTaskChange}
      value={Value}>
      </TextInput>
      <Button title='Add' onPress={HandleTaskAdded}></Button>
    </View>
}

<View style={styles.Todo} >
{
  ToDos.map((todo, index)=>{
    return (
    <View key={index}>
      <Text>{todo}</Text>
      <Button title='Delete' onPress={()=>{HandleTaskDelete(index)}}></Button> 
      </View>
    )
  })
}
</View>
 </View>
  </>
 )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f8ff', // Light background for better aesthetics
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 50,
  },
  writeContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginBottom: 20,
  },
  writeText: {
    fontSize: 18,
    color: '#888',
  },
  addButtonContainer: {
    marginBottom: 20,
  },
  addTaskContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  todoContainer: {
    width: '80%',
  },
  todoItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
});


