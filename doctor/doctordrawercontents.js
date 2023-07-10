import React, { useEffect, useState } from 'react';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import {AuthContext} from '../components/context';
import firebase from '../firebase/firebase';


export default function DrawerContentDoctor({navigation},props){

    const paperTheme = useTheme();
    // const {signOut,toggleTheme } = React.useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const user = firebase.auth().currentUser;
    const userSignOut = ()=>{
        firebase.auth().signOut();
        console.log("Log Out Successfully");
        navigation.replace('SplashScreen');
    }

    useEffect(()=>{
        firebase.firestore()
    .collection('users')
    .where('user_id','==',user.uid)
    .get()
    .then(querySnapshot => {
        //console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            setName(documentSnapshot.data().name);
            setEmail(documentSnapshot.data().email);
        });
    });
    },[])
   /* firebase.firestore()
    .collection('users')
    .where('user_id','==',user.uid)
    .get()
    .then(querySnapshot => {
        //console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
            // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            setName(documentSnapshot.data().name);
            setEmail(documentSnapshot.data().email);
        });
    });*/

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                                source={require('../img/doc.jpg')}
                                size={50}
                            />
                            <View style={{flexDirection:'column', marginleft:15}}>
                                <Title style={styles.title}>{name}</Title>
                                <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>

                    <DrawerItem 
                        icon={
                            ({color, size}) =>(
                            <Ionicons name="home-outline" color={color} size={size}/>
                            )
                        }
                        label="Home"
                        onPress={()=>{navigation.navigate('Doctor')}}
                        />
                        <DrawerItem 
                        icon={
                            ({color, size}) =>(
                            <Icon name="account-outline" color={color} size={size}/>
                            )
                        }
                        label="Profile"
                        onPress={()=>{navigation.navigate('Doctor Profile')}}
                        />
                        
                        <DrawerItem 
                        icon={
                            ({color, size}) =>(
                            <Icon name="account-edit-outline" color={color} size={size}/>
                            )
                        }
                        label="Edit Profile"
                        onPress={()=>{navigation.navigate('Doctor Edit Profile')}}
                        /> 

                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple /*onPress={()=>{toggleTheme()}}*/>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                icon={
                    ({color, size}) =>(
                        <Ionicons name="log-out-outline" color={color} size={size}/>
                    )
                }
                label="Sign Out"
                onPress={()=>{userSignOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    },
  });