import React from 'react';
import {ScrollView, Text,View,StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

function Tips(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headigs}>Skin care tips for healthy skin</Text>
                <Text>Good skin care — including sun protection and gentle cleansing — can keep your skin healthy and glowing.</Text>
                <Text>Don't have time for intensive skin care? You can still pamper yourself by acing the basics. Good skin care and healthy lifestyle choices can help delay natural aging and prevent various skin problems. Get started with these five no-nonsense tips.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Protect yourself from the sun</Text>
                <Text>One of the most important ways to take care of your skin is to protect it from the sun. A lifetime of sun exposure can cause wrinkles, age spots and other skin problems — as well as increase the risk of skin cancer.</Text>
                <Text>For the most complete sun protection:</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Use sunscreen. Use a broad-spectrum sunscreen with an SPF of at least 15. Apply sunscreen generously, and reapply every two hours — or more often if you're swimming or perspiring.</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Seek shade. Avoid the sun between 10 a.m. and 4 p.m., when the sun's rays are strongest.</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Wear protective clothing. Cover your skin with tightly woven long-sleeved shirts, long pants and wide-brimmed hats. Also consider laundry additives, which give clothing an additional layer of ultraviolet protection for a certain number of washings, or special sun-protective clothing — which is specifically designed to block ultraviolet rays.</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Don't smoke</Text>
                <Text>Smoking makes your skin look older and contributes to wrinkles. Smoking narrows the tiny blood vessels in the outermost layers of skin, which decreases blood flow and makes skin paler. This also depletes the skin of oxygen and nutrients that are important to skin health.</Text>
                <Text>Smoking also damages collagen and elastin — the fibers that give your skin strength and elasticity. In addition, the repetitive facial expressions you make when smoking — such as pursing your lips when inhaling and squinting your eyes to keep out smoke — can contribute to wrinkles.</Text>
                <Text>In addition, smoking increases your risk of squamous cell skin cancer. If you smoke, the best way to protect your skin is to quit. Ask your doctor for tips or treatments to help you stop smoking.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Treat your skin gently</Text>
                <Text>Daily cleansing and shaving can take a toll on your skin. To keep it gentle:</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Limit bath time. Hot water and long showers or baths remove oils from your skin. Limit your bath or shower time, and use warm — rather than hot — water.</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Avoid strong soaps. Strong soaps and detergents can strip oil from your skin. Instead, choose mild cleansers.</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Shave carefully. To protect and lubricate your skin, apply shaving cream, lotion or gel before shaving. For the closest shave, use a clean, sharp razor. Shave in the direction the hair grows, not against it.</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Pat dry. After washing or bathing, gently pat or blot your skin dry with a towel so that some moisture remains on your skin.</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Moisturize dry skin. If your skin is dry, use a moisturizer that fits your skin type. For daily use, consider a moisturizer that contains SPF.</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Eat a healthy diet</Text>
                <Text>A healthy diet can help you look and feel your best. Eat plenty of fruits, vegetables, whole grains and lean proteins. The association between diet and acne isn't clear — but some research suggests that a diet rich in fish oil or fish oil supplements and low in unhealthy fats and processed or refined carbohydrates might promote younger looking skin. Drinking plenty of water helps keep your skin hydrated.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Manage stress</Text>
                <Text>Uncontrolled stress can make your skin more sensitive and trigger acne breakouts and other skin problems. To encourage healthy skin — and a healthy state of mind — take steps to manage your stress. Get enough sleep, set reasonable limits, scale back your to-do list and make time to do the things you enjoy. The results might be more dramatic than you expect.</Text>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    headigs:{
        fontSize:20, 
        fontWeight:'bold'
    },
    container:{
        marginLeft:5,
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    }
})

export default Tips;