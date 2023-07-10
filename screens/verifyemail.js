import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
function VerifyEmail({navigation}){
    return(
        <View style={styles.container}>
                <Text style={styles.text_header}>Skin Detect</Text>
            <View>
                <Text style={styles.textSign}>Please Verify your Email First</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity  style={[styles.signIn,{borderColor:'#009387', borderWidth:1,marginTop:15}]} onPress={()=>navigation.navigate('SignInScreen')}>
                    <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
                        <Text  style={[styles.textSign, { color: "#fff" }]}>Go Back</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VerifyEmail;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387",
        alignItems: "center",
        justifyContent: "center",
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