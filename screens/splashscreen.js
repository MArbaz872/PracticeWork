import React from 'react';
import {View,Dimensions,Text,TouchableOpacity,StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient} from 'expo-linear-gradient';

const SplashScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image animation="bounceIn" duration={1500} source={require('../img/Logoskin.jpg')} style={styles.logo} resizeMode='stretch'/>
            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={[styles.title]}>Welcome!</Text>
                <Text style={styles.text}>I am an Intelligent AI robot created to analyze skin conditions.
                I can think and learn,but I am still a work in progress so please be kind to me! I am not
                meant to replace your doctor and I make no guarantees to the accuracy of my results.
                Please contact your doctor for actual medical advice.</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons 
                                name='navigate-next'
                                color='#ffff'
                                size= {20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}


export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        // borderBottomLeftRadius:30,
        borderTopRightRadius:120
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold'
    }
  });