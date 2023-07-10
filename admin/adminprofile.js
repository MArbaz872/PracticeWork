import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet,SafeAreaView,TouchableOpacity, Button } from 'react-native';
import {Avatar, Caption, Title} from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import firebase from 'firebase';

function AdminProfile(){  
  const user = firebase.auth().currentUser;
  const [name,setName]= useState('');
  const [email,setEmail] = useState('');
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('');
  const [phone,setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender,setGender] = useState('');


  useEffect(()=>{
    firebase.firestore()
    .collection('users')
    .where('user_id','==',user.uid)
    .get()
    .then(querySnapshot => {
      //console.log('Total users: ', querySnapshot.size);
      querySnapshot.forEach(documentSnapshot => {
       //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        setName(documentSnapshot.data().name);
        setEmail(documentSnapshot.data().email);
        setAge(documentSnapshot.data().age);
        setGender(documentSnapshot.data().gender);
        setCity(documentSnapshot.data().city);
        setCountry(documentSnapshot.data().country);
        setPhone(documentSnapshot.data().phone);
    });
  });
},[]);
  

  return(
        <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row',marginTop:15}}>
            <Avatar.Image
            source={require('../img/admin.png')}
            size={80}/>
            <View style={{marginLeft:20}}>
              <Title style={[styles.title,{marginTop:15,marginBottom:5}]}>{name}</Title>
              <Caption style={styles.caption}>{email}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20}/>
            <Text>{city}, {country}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20}/>
            <Text>{phone}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="human-child" color="#777777" size={20}/>
            <Text>{age}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="gender-male-female" color="#777777" size={20}/>
            <Text>{gender}</Text>
          </View>
        </View>
      </SafeAreaView>
  );
}


export default AdminProfile;


const styles = StyleSheet.create({
container: {
  flex: 1,
},
userInfoSection: {
  paddingHorizontal: 30,
  marginBottom: 25,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
},
caption: {
  fontSize: 14,
  lineHeight: 14,
  fontWeight: '500',
},
row: {
  flexDirection: 'row',
  marginBottom: 10,
},
infoBoxWrapper: {
  borderBottomColor: '#dddddd',
  borderBottomWidth: 1,
  borderTopColor: '#dddddd',
  borderTopWidth: 1,
  flexDirection: 'row',
  height: 100,
},
infoBox: {
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
},
menuWrapper: {
  marginTop: 10,
},
menuItem: {
  flexDirection: 'row',
  paddingVertical: 15,
  paddingHorizontal: 30,
},
menuItemText: {
  color: '#777777',
  marginLeft: 20,
  fontWeight: '600',
  fontSize: 16,
  lineHeight: 26,
},
});