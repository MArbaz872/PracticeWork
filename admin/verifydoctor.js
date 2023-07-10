import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import firebase from 'firebase';

function VerifyDoctor(){
    return(
        <View style={styles.container}>            
            <Text>Verify Doctor</Text>
        </View>
    );
}

export default VerifyDoctor;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    }
  });
  