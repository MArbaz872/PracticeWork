import { StyleSheet } from "react-native";
import Colors from "../../assets/colors/Colors";
const Styles = StyleSheet.create({
    text_field_main_container: {
        width: "90%",
        height: 40,
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 10,
        padding: 2,
        shadowOffset: { width: 0, height: 1 },
        shadowColor: Colors.color_black,
        elevation: 5,
        shadowOpacity: 0.2,
        backgroundColor: Colors.color_white,
        borderColor: Colors.color_border,
        marginBottom: "5.5%",
        // shadowOffset: {width: 0, height: 0.5},
        // shadowColor: Colors.color_black,
        // shadowOpacity: 1,
        // elevation: 3,
        // backgroundColor: Colors.color_white,
        // borderColor: Colors.color_border,
    },
    icon_container: {
        flex: 0.08,
        alignItems: "center",
        paddingLeft: 10,
    },
    text_field_container: { flex: 0.95 },
    text_field: {
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0,
        paddingLeft: 5,
        paddingRight: 5,
        height: "100%",
        fontFamily: "Montserrat-Regular",
    },
});
export default Styles;
