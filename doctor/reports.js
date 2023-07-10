import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MedicalReport(){
    return(
        <View style={styles.container}>
            <Text>Report</Text>
        </View>
    )
}

export default MedicalReport;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})