import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true)

 const url = "https://jsonplaceholder.typicode.com/posts"

 useEffect(()=>{
   fetch(url)
   .then(response => response.json())
   .then((json)=>setData(json))
   .catch((error)=>console.log(error))
   .finally(()=> setLoading(false))
 },[])
  return (
    <View style={styles.container}>
      {
        loading ? <Text>Loading ...</Text>:
        data.map((post)=>(
          <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.title}</Text>
            <Text style={{fontSize:15, color:'blue'}} >{post.body}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
