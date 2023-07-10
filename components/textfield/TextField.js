import React, { useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Foundation, Fontisto } from "@expo/vector-icons";
import Styles from "./Styles";
import Colors from "../../assets/colors/Colors";
const SearchBar = ({ placeholder, onChangeText, value, onClick }) => {
    return (
        <View style={Styles.text_field_main_container}>
            <View style={Styles.icon_container}>
                <MaterialCommunityIcons name="chat" size={20} color={Colors.color_primary} />
            </View>
            <View style={Styles.text_field_container}>
                <TextInput
                    style={Styles.text_field}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.color_splitter}
                    onChangeText={onChangeText}
                />
            </View>
            <TouchableOpacity
                style={[Styles.icon_container, { paddingRight: 10 }]}
                onPress={onClick}
            >
                <MaterialCommunityIcons name="send" size={20} color={Colors.color_primary} />
            </TouchableOpacity>
        </View>
    );
};
export default SearchBar;
