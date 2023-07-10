import React, {useEffect, useState } from 'react';
import { View,Text,StyleSheet,TouchableOpacity, ScrollView, FlatList } from 'react-native';
import firebase from 'firebase';

function ViewPatients({navigation}){
   const [patientList,setPatientList] = useState([{}]);
   useEffect(()=>{
        var arr = [];
        firebase.firestore()
        .collection("users")
        .where("designation",'==',"Patient" )
        .get()
        .then(querySnapShot =>{
            querySnapShot.forEach(documentSnapShot=>{
            arr.push({name:documentSnapShot.data().name,uid:documentSnapShot.data().user_id});
            //user.push(documentSnapShot.data().user_id)
            });
            setPatientList(arr);
            //setUid(user);
        });
    },[])
    
    return(            
        <View style={styles.container}>
           {/* <FlatList 
            data={patientList}
            renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate('Patient Detail',{itemId:item,otherParam:uid})}><Text style={styles.item}>{item}</Text></TouchableOpacity>}
            keyExtractor={(index) => index.toString()}
           />*/}
           <ScrollView>
               {
                   patientList.map((item,key)=>(
                       <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',borderColor:'#009387', borderWidth:2,marginTop:10}}
                       onPress={()=>navigation.navigate('Patient Detail',{itemId:item.name,otherParam:item.uid})}>
                           <Text style={{fontSize:20,fontWeight:'bold',color:'#009387'}}>{item.name}</Text>
                           {/*<View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />*/}
                       </TouchableOpacity>
                   )
                   )
               }
           </ScrollView>
        </View>
    );
}

export default ViewPatients;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:20,
      paddingHorizontal:20,
    },
    item:{
        marginTop:24,
        padding:30,
        fontSize:24,
        marginHorizontal:10,
        //height: 0.5,
        //width: '100%',
        backgroundColor: '#C8C8C8',
    },
    button: {
        alignItems: 'flex-start',
        marginTop: 5,
        paddingLeft:20,
    },
    btn: {
        width: '95%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

  });