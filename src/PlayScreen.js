import React, { useState,useEffect } from 'react'
import { View, Text,StyleSheet, Button,Image } from 'react-native'

//lets import images
const rock=require('./sign/rock.png')
const paper=require('./sign/paper.png')
const cessor=require('./sign/scissors.png')
const Bgcolors=['#2ecc71','#9b59b6','#2c3e50']

const randomImg =()=>{
    const emojis=[rock,paper,cessor];
    // const randoms=Math.floor(Math.random()=3)
    var randoms=Math.floor(Math.random()*3)
    console.log(randoms)
    return emojis[randoms]
}
randomImg()
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
if(counter<1) return;
//function have been returned above only so the below code will not run what ever is written in this scope
const timer= setTimeout(() => {
    setcounter(prv =>prv-1)
    
}, 500);
    return () => {
        clearTimeout(timer)
    
    }
}, [counter]);
//to manipulate the state of counter
    return (
  
        <View style={StyleSheet.compose({backgroundColor:Bgcolors[counter-1]},styles.container)}>
                 
            {(counter<1) ? (
                <>
                <Image style={styles.sign}source={randomImg()}/>
           <View style={styles.button}>
           <Button onPress={()=>setcounter(3)} title="Playagain"/>
           </View>


                </>
                ):
                  <Text style={styles.counter}>{counter}</Text>}

            </View>
      );
            };
    const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
    counter:{
        fontSize:200,
        color:'white',
    },

sign:{
    width:220,
    height:220,
},
button:{
    position:"absolute",
    bottom:30,
}
})
export default PlayScreen;

