import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

function PatientAdminView({navigation}){
    return(
        <View style={styles.container}>            
            <View>
                <Text style={{fontSize:20,paddingTop:10,fontWeight:'bold',paddingLeft:150}}>Patients</Text>
                <View style={styles.button}>
                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                 onPress={()=>navigation.navigate('View Patients')}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>View Patient</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                onPress={()=>navigation.navigate('Add Patients')}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>Add Patient</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                 onPress={()=>{}}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>Respond Queries</Text>
                </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default PatientAdminView;

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
  