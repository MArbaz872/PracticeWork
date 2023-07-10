import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

function DoctorAdminView({navigation}){
    return(
        <View style={styles.container}>            
            
            <View style={styles.button}>
            <Text style={{fontSize:20,paddingTop:10, fontWeight:'bold',paddingLeft:130}}>Doctor</Text>
                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                onPress={()=>navigation.navigate('Verify Doctor')}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>Verify Doctor</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                 onPress={()=>navigation.navigate('View Doctor')}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>View Doctor</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                onPress={()=>navigation.navigate('Add Doctor')}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>Add Doctor</Text>
                </TouchableOpacity>
                
               

                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                 onPress={()=>{}}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>Respond Queries</Text>
                </TouchableOpacity>
                   
            </View>
        </View>
    );
}

export default DoctorAdminView;

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
  