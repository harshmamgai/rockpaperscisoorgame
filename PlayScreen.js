import React, { useState,useEffect } from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'

// export default function playscreen() {
//     return (
//         <View>
//             <Text>hello world</Text>
//         </View>
//     )
// }
//write 'rnf' to make a new component

const PlayScreen =() => { 
const [counter, setcounter] = useState(3)
useEffect(() => {
console.log(counter)
    return () => {  
        clearTimeout(timer)
    
    }
}, [counter])
//to manipulate the state of counter
    return (
  
        <View style={styles.container}>
                   <Text style={styles.counter}>{counter}</Text>
            <Button onPress={()=>setcounter(3)} title="pushme"/>
             </View>
         )

    }
    const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
    counter:{
        fontSize:500,
    }

})
export default PlayScreen;

