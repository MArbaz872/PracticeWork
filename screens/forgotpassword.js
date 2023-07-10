import React, { useState } from 'react';
import { StyleSheet,TextInput,StatusBar, View, Text, Alert, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

export default function ForgotPassword({navigation}){
    const [data, setData] = React.useState({
        email:'',
        check_textInputChange:false,
        secureTextEntry:true
    });
    //const [email, setEmail] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const textInputChange = (val) =>{
        if(val.length != 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
        }
        else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
        }
    }
    

    const reset = async() => {
        setShowLoading(true);
        try {
            await firebase.auth().sendPasswordResetEmail(data.email);
            setShowLoading(false);
        } catch (e) {
            setShowLoading(false);
            Alert.alert(
                e.message
            );
        }
    };

    return(

        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Forgot Password?</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="email-outline" color="#05375a" size={20}/>
                    <TextInput 
                    placeholder="Your Email" 
                    autoCapitalize="none" 
                    style={styles.textInput} 
                    onChangeText = {(val) => textInputChange(val)}
                    onSubmitEditing={()=> setData({email:''})}
                    />
                    {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn">

                        <Feather name="check-circle" color="green" size={20}/>
                    </Animatable.View>
                    : null}
                </View>
                
                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={()=>reset()}>
                    <LinearGradient colors={[ '#08d4c4','#01ab9d']} style={styles.signIn}>
                        <Text style={[styles.textSign,{color:'#fff'}]}>Send</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')} 
                    style={[styles.signIn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}>
                        <Text style={[styles.textSign,{color:'#009387'}]}>Back to Login</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });