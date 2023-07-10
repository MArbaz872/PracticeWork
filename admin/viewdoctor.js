import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import firebase from 'firebase';

function ViewDoctors({navigation}){
    const [doctorList,setDoctorList] = useState([{}]);
    useEffect(()=>{
        var arr = [];
        firebase.firestore()
        .collection("users")
        .where("designation",'==',"Doctor" )
        .get()
        .then(querySnapShot =>{
            querySnapShot.forEach(documentSnapShot=>{
            arr.push({name:documentSnapShot.data().name,uid:documentSnapShot.data().user_id});
            });
            setDoctorList(arr);
        });
    },[])
    
    return(            
        <View style={styles.container}>
           {/* <FlatList 
            data={doctorList}
            renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate('Doctor Detail')}><Text style={styles.item}>{item}</Text></TouchableOpacity>}
            keyExtractor={(index) => index.toString()}
            />
           */}
           <ScrollView>
               {
                   doctorList.map((item,key)=>(
                       <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',borderColor:'#009387', borderWidth:2,marginTop:10}}
                       onPress={()=>navigation.navigate('Doctor Detail',{itemId:item.name,otherParam:item.uid})}>
                           <Text style={{fontSize:20,fontWeight:'bold',color:'#009387'}}>{item.name}</Text>
                          {/* <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />*/}
                       </TouchableOpacity>
                   )
                   )
               }
           </ScrollView>
        </View>
    );
}

export default ViewDoctors;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:20,
      paddingHorizontal:20,
    },
    button: {
        alignItems: 'flex-start',
        marginTop: 5,
        paddingLeft:20,

    },
    item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,
        marginHorizontal:10,
        marginTop:24,
    },
    btn: {
        width: '95%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
  });
  