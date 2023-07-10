import React from 'react';
import {Text,View,ScrollView,StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

function Eczema(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headigs}>What is eczema?</Text>
                <Text>Eczema, also called atopic dermatitis, is a common skin condition marked by itchy and inflamed patches of skin.It’s often seen in babies and young children, appearing on the faces of infants. But eczema can come in a variety of types in children, teens, and adults. Read on to learn what causes the skin condition and how to treat its symptoms.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>What are the types of eczema?</Text>
                <Text>When people refer to eczema, they usually mean atopic dermatitis, which is characterized as dry, itchy skin that often appears with a red rash. This is the most common and chronic type of eczema.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Other types include:</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Contact dermatitis</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Contact dermatitis is caused by contact with irritants. Burning, itching, and redness occur. The inflammation goes away when the irritant is removed.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Dyshidrotic dermatitis</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Dyshidrotic dermatitis affects fingers, palms of the hands, and soles of the feet. It causes itchy, scaly patches of skin that flake or become red, cracked, and painful. The condition is more common in women.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Nummular dermatitis</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Nummular dermatitis causes dry, round patches of skin in the winter months. It usually affects the legs. It’s more common in men.</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Symptoms</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>The main symptom of eczema is itchy, dry, rough, flakey, inflamed, and irritated skin. It can flare up, subside, and then flare up again.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Eczema can occur anywhere but usually affects the arms, inner elbows, backs of the knees, or head (particularly the cheeks and the scalp). It’s not contagious, and, in some cases, becomes less severe with age.</Text></Unorderedlist>
                <Text style={styles.headigs}>Other symptoms include:</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>intense itching</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>red or brownish-gray patches</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>small, raised bumps that ooze fluid when scratched</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>crusty patches of dried yellowish ooze, which can signal infection</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>thickened, scaly skin</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Scratching eczema further irritates and inflames the skin. This can cause infections that must be treated with antibiotics.</Text></Unorderedlist>
            </View>    
            <View style={styles.container}>
                <Text style={styles.headigs}>Causes</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>The cause of eczema is not fully understood. But it’s believed to be triggered by an overactive immune system that responds aggressively when exposed to irritants.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Eczema is sometimes caused by an abnormal response to proteins that are part of the body. Normally, the immune system ignores proteins that are part of the human body and attacks only the proteins of invaders, such as bacteria or viruses.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>In eczema, the immune system loses the ability to tell the difference between the two, which causes inflammation.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>An eczema flare-up is when one or more eczema symptoms appear on the skin. Common triggers of eczema flare-ups include:</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>chemicals found in cleaners and detergents that dry out the skin</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>rough scratchy material, like wool</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>synthetic fabrics</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>raised body temperature</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>sweating</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>temperature changes</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>sudden drop in humidity</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>stress</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>food allergies</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>animal dander</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>upper respiratory infections</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Risk Fators</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Several factors can increase your risk of developing eczema.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Eczema is more common in children who suffer from asthma or hay fever, or adults who develop these conditions later, usually before the age of 30.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>People with family members who have eczema are also at higher risk of developing the condition.</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Preventions</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Lifestyle changes such as stress reduction and improved sleep can reduce the likelihood of an eczema flare-up. Avoid irritants, like rough fabrics, harsh soaps, and detergents. Cold weather can also dry out the skin and trigger flare-ups.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>People with atopic dermatitis should avoid scratching. To prevent breaking the skin, it can help to rub rather than scratch the areas that are itchy.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Because dry skin can trigger an eczema flare-up, a dermatologist can recommend an ointment- or cream-based moisturizer that will help soothe your skin.</Text></Unorderedlist>
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
});
export default Eczema;