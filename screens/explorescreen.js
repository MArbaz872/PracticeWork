import React from 'react';
import { StyleSheet,Button, Text, View, TouchableOpacity } from 'react-native';

function ExploreScreen({navigation}){
    return(
        <View style={styles.container,{borderBottomWidth:0.5}}>
            
            <Text style={{fontSize:18,fontWeight:'bold', paddingLeft:10}}>Help & Feed Back</Text>
            <View style={{padding:15,paddingLeft:10,borderBottomWidth:0.5}}>
                <TouchableOpacity>
                    <Text style={{fontSize:15,padding:5}}>Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{fontSize:15,padding:5}}>Send us feedback about </Text>
                </TouchableOpacity>
            </View>

            <View style={{borderBottomWidth:0.5}}>
                <Text style={{fontSize:18,fontWeight:'bold', paddingLeft:10}}>Legal Information</Text>
                <View style={{padding:15,paddingLeft:10}}>
                    <TouchableOpacity>
                        <Text style={{fontSize:15,padding:5}}>Terms & Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontSize:15,padding:5}}>Third-Party Notices</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={{fontSize:18,fontWeight:'bold', paddingLeft:10}}>About Skin Detect</Text>
                <View style={{padding:15,paddingLeft:10}}>
                    <Text style={{fontSize:15,padding:5}}>Skin Detect Version                                                             1.0</Text>
                </View>
            </View>

        </View>
    );
}


export default ExploreScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    listTextViewStyle: {
        color: '#000',
        marginVertical: 15,
        flex: 0.9,
        marginLeft: 20,
        marginHorizontal: 10,
        textAlign: 'left',
    }
  });