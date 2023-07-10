import React, {useEffect, useState} from 'react';
import {View,StyleSheet, Button,Text, TouchableNativeFeedback,Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import firebase from 'firebase';
function ImageDataScreen({navigation}) {
    const data = 
    [{
        date:"Today at 11:30am",
        albumName:"Asjad",
        src:require("../assets/1.jpg")
    },
    {
        date:"10/2/2021",
        albumName:"Ahmed",
        src:require("../assets/2.jpg")
    },
    {
        date:"10/3/2021",
        albumName:"Ahmed",
        src:require("../assets/3.jpg")
    }];


    const [diseases, setDisease] = useState([]);
    
  useEffect( async() => {
    const unsubscribe = navigation.addListener('focus', () => {

    let user =  firebase.auth().currentUser
    let alldisease = []
    firebase
      .firestore()
        .collection("result")
      .where("uid", "==", user.uid)
      .onSnapshot((snapshot)=> {
        snapshot.forEach((documentSnapshot) => {
            let disease = {
                name : user.email,
                result: documentSnapshot.data().result,
                date: documentSnapshot.data().date,
                image:documentSnapshot.data().image   
            }   

            alldisease.push(disease)
        });

        setDisease(alldisease)
        //console.log("Report", querySnapshot);
      });
    })
    // return unsubscribe;
  }, []);

  console.log(diseases)


return <View style={styles.maincontainer}>
     <View style={styles.dataDiv}>
        <TouchableNativeFeedback onPress={()=>{
            navigation.navigate("Case")
        }}>     
            <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={[styles.customDiv]}>
                <Text style={{color:"white",fontSize:40}}>+</Text>
            </LinearGradient>
        </TouchableNativeFeedback>
        <Text>Add new images</Text>
    </View>
    {
       diseases.length > 0 && diseases.map(
            (e)=> {
                return (
                <TouchableOpacity style={styles.dataDiv} onPress={()=> {
                    navigation.navigate('Result', {
                        screen: 'Result',
                        params: {
                            result: e.result,
                            image: e.image                    },
                     });
                    }}>
                    <Image key={(i = 0) => i++} source={{uri: e.image}} style={styles.customDiv}/>
                    <Text style={{fontWeight:"bold"}}>{e.name}</Text>
                    <Text>{e.date}</Text>
                </TouchableOpacity>
                )
            }
        )    
    }
 
</View>
}
const styles = StyleSheet.create({
    maincontainer: {
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        padding:25
    },
    customDiv:{
        height:100,width:100,
        backgroundColor:"tomato",
        borderRadius:10,
        justifyContent:"center",alignItems:"center",
    },dataDiv:{
        width:120,
        alignItems:"center",
        // backgroundColor:"gold",
        // borderWidth:1, 
        // marginLeft:30,
        marginTop:25,
        textAlign:"center"
    }
});
export default ImageDataScreen;