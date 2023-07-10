import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

function NotificationAdminView(){
    return(
        <View style={styles.container}>            
            
            <View>
                <Text style={{fontSize:20,paddingTop:10,fontWeight:'bold',paddingLeft:140}}>Notifications</Text>
                <View style={styles.button}>
                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                 onPress={()=>{}}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>View Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                 onPress={()=>{}}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>Schedule Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{borderColor:'#009387', borderWidth:1,marginTop:15}]}
                 onPress={()=>{}}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'#009387'}}>Send Notifications</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default NotificationAdminView;

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
  