import React,{useState} from 'react';
import { View,Text,TextInput,StyleSheet,TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

function AddPatients(){
    const [full_Name, setfull_Name] = useState('');
    const [value, setValue] = useState('Patient');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = React.useState({
        email:'',
        password:'',
        displayName:value,
        check_textInputChange:false,
        secureTextEntry:true
    });

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

    const handlePasswordChange = (val) =>{
        setData({
            ...data,
            password:val,
        }
        );
    }

    

    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        }
        );
    }
    const registerUser = () => {
        if(data.email === '' && data.password === '') {
          Alert.alert('Please fill empty fields');
        } else {
            try{
                firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then((res) => {
                    firebase.firestore().collection("users").doc(res.user.uid).set({
                        name:full_Name,
                        email:data.email,
                        designation:value,
                        user_id:res.user.uid,
                        age:age,
                        city:city,
                        country:country,
                        gender:gender,
                        phone:phone,
                    })
                    firebase.auth().currentUser.sendEmailVerification();
                    Alert.alert("Patient Added Successfully");
                }).catch(error=>{Alert.alert(error.message)})
            }
            catch(error){
                console.log(error);
            }
        }
    }
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Full Name</Text>
                <View style={styles.action}>
                    <FontAwesome name="user" color="#05375a" size={20}/>
                    <TextInput 
                    placeholder="Full Name"
                    value={full_Name}
                    onChangeText={setfull_Name} 
                    autoCapitalize="none" 
                    style={styles.textInput}
                    />
                </View>

               
                <Text style={[styles.text_footer, {marginTop:10}]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20}/>
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
                <Text style={[styles.text_footer, {marginTop:10}]}>Gender</Text>
                <View style={styles.action}>
                    <Icon name="gender-male-female" size={20}/>
                    <TextInput
                    placeholder="Your Gender" 
                    autoCapitalize="none" 
                    style={styles.textInput}
                    onChangeText = {(val) => textInputChange(val)}
                    onChangeText={setGender}
                    />
                </View>
                <Text style={[styles.text_footer, {marginTop:10}]}>Age</Text>
                <View style={styles.action}>
                <Icon name="human-child" size={20}/>
                <TextInput
                    placeholder="Your Age" 
                    autoCapitalize="none" 
                    style={styles.textInput}
                    onChangeText = {(val) => textInputChange(val)}
                    onChangeText={setAge}
                />
                </View>
                
                <Text style={[styles.text_footer, {marginTop:10}]}>Country</Text>
                <View style={styles.action}>
                    <FontAwesome name="globe" size={20} />
                    <TextInput
                    placeholder="Country" 
                    autoCapitalize="none" 
                    style={styles.textInput}
                    onChangeText = {(val) => textInputChange(val)}
                    onChangeText={setCountry}
                    />
                </View>

                <Text style={[styles.text_footer, {marginTop:10}]}>City</Text>
                <View style={styles.action}>
                    <Icon name="map-marker-outline" size={20} />
                    <TextInput
                    placeholder="City" 
                    autoCapitalize="none" 
                    style={styles.textInput}
                    onChangeText = {(val) => textInputChange(val)}
                    onChangeText={setCity}
                    />
                </View>

                <Text style={[styles.text_footer, {marginTop:10}]}>Phone</Text>
                <View style={styles.action}>
                    <Feather name="phone" size={20} />
                    <TextInput
                    placeholder="Phone" 
                    autoCapitalize="none" 
                    style={styles.textInput}
                    onChangeText = {(val) => textInputChange(val)}
                    onChangeText={setPhone}
                    />
                </View>

                <Text style={[styles.text_footer, {marginTop:10}]}>Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20}/>
                    <TextInput placeholder="New Password" 
                    secureTextEntry={data.secureTextEntry ? true:false} 
                    autoCapitalize="none" 
                    style={styles.textInput}
                    onChangeText = {(val) => handlePasswordChange(val)}
                    onSubmitEditing={()=> setData({password:''})}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        { data.secureTextEntry ?
                        <Feather name="eye-off" color="gray" size={20}/>
                        :
                        <Feather name="eye" color="gray" size={20}/>
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    
                </View>
                
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>registerUser()}
                     style={[styles.signIn,{borderColor:'#009387', borderWidth:1,marginTop:0}]}>
                    <LinearGradient colors={[ '#08d4c4','#01ab9d']} style={styles.signIn}>
                        <Text style={[styles.textSign,{color:'#fff'}]}>Submit</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
  );
}

export default AddPatients;



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
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingHorizontal: 20,
        paddingVertical: 10
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
        marginTop: 8,
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