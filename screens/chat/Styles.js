import { StyleSheet } from "react-native";
import Colors from "../../assets/colors/Colors";
const Styles = StyleSheet.create({
    fab: {
        position: "absolute",
        backgroundColor: Colors.color_white,
        right: 25,
        bottom: 30,
        zIndex: 200,
    },
    body: { flex: 1, backgroundColor: Colors.color_white },
    question: {
        fontFamily: "Montserrat-Bold",
        fontSize: 14,
        color: Colors.color_primary,
        marginBottom: 5,
    },
    answer: {
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        color: Colors.color_text,
        lineHeight: 16,
    },
    question_container: {
        marginLeft: 5,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: Colors.color_primary,
    },
    message_container: {
        paddingBottom: "12%",
        width: "90%",
        alignSelf: "center",
        // height: '100%',
        // flex: 1,
    },
    textfield: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "auto",
        backgroundColor: Colors.color_white,
    },
    message_view: {
        maxWidth: "60%",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    // content: {paddingLeft: 20},
});
export default Styles;
