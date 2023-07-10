import React from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';

function AppointmentsNotification(){
    const notify = ["Notification from Patient","Notification from Patient","Notification from Patient",
                    "Notification from Patient","Notification from Patient","Notification from Patient",
                    "Notification from Patient","Notification from Patient","Notification from Patient",
                    "Notification from Patient","Notification from Patient","Notification from Patient",
                    "Notification from Patient","Notification from Patient","Notification from Patient",
                    "Notification from Patient","Notification from Patient","Notification from Patient",
                    ]
    return(
        <View style={styles.container}>
            <FlatList 
            data={notify}
            renderItem={({item}) =>
                <TouchableOpacity>
                    <Text style={{padding:10,paddingLeft:10, fontSize:20}}>{item}</Text>
                </TouchableOpacity>
            }
            />
        </View>
    )
}

export default AppointmentsNotification;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})