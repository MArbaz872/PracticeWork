import React from 'react';
import {ScrollView, Text,View,StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

function Acne(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headigs}>Introduction</Text>
                <Text>
                Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells.
                It causes whiteheads, blackheads or pimples.Acne is most common among teenagers, though it affects people of all ages.
                Effective acne treatments are available, but acne can be persistent. The pimples and bumps heal slowly, and when one begins to go away, others seem to crop up.
                Depending on its severity, acne can cause emotional distress and scar the skin. The earlier you start treatment, the lower your risk of such problems.
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Symptoms</Text>
                <Text>Acne signs vary depending on the severity of your condition:</Text>

                    <Unorderedlist bulletUnicode={0x29BF}><Text>Whiteheads (closed plugged pores)</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Blackheads (open plugged pores)</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Small red, tender bumps (papules)</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Pimples (pustules), which are papules with pus at their tips</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Large, solid, painful lumps under the skin (nodules)</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Painful, pus-filled lumps under the skin (cystic lesions)</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Acne usually appears on the face, forehead, chest, upper back and shoulders.</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>When to see a doctor</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>If self-care remedies don't clear your acne, see your primary care doctor. He or she can prescribe stronger medications. If acne persists or is severe, you may want to seek medical treatment from a doctor who specializes in the skin (dermatologist or pediatric dermatologist).
                For many women, acne can persist for decades, with flares common a week before menstruation. This type of acne tends to clear up without treatment in women who use contraceptives.
                In older adults, a sudden onset of severe acne may signal an underlying disease requiring medical attention.
                The Food and Drug Administration (FDA) warns that some popular nonprescription acne lotions, cleansers and other skin products can cause a serious reaction. 
                This type of reaction is quite rare, so don't confuse it with any redness, irritation or itchiness that occurs in areas where you've applied 
                medications or products.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Seek emergency medical help if after using a skin product you experience:</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Faintness</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Difficulty breathing</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Swelling of the eyes, face, lips or tongue</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Tightness of the throat</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Causes</Text>
                <Text>Four main factors cause acne:</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Excess oil (sebum) production</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Hair follicles clogged by oil and dead skin cells</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Bacteria</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Inflammation</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Acne typically appears on your face, forehead, chest, upper back and shoulders because these areas of skin have the most oil (sebaceous) glands. Hair follicles are connected to oil glands.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>The follicle wall may bulge and produce a whitehead. Or the plug may be open to the surface and darken, causing a blackhead. A blackhead may look like dirt stuck in pores. But actually the pore is congested with bacteria and oil, which turns brown when it's exposed to the air.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Pimples are raised red spots with a white center that develop when blocked hair follicles become inflamed or infected with bacteria. Blockages and inflammation deep inside hair follicles produce cystlike lumps beneath the surface of your skin. Other pores in your skin, which are the openings of the sweat glands, aren't usually involved in acne.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Certain things may trigger or worsen acne:</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Hormonal changes. Androgens are hormones that increase in boys and girls during puberty and cause the sebaceous glands to enlarge and make more sebum. Hormone changes during midlife, particularly in women, can lead to breakouts too.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Certain medications. Examples include drugs containing corticosteroids, testosterone or lithium.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Diet. Studies indicate that consuming certain foods — including carbohydrate-rich foods, such as bread, bagels and chips — may worsen acne. Further study is needed to examine whether people with acne would benefit from following specific dietary restrictions.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Stress. Stress doesn't cause acne, but if you have acne already, stress may make it worse.</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Acne Myths</Text>
                <Text>These factors have little effect on acne:</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Chocolate and greasy foods. Eating chocolate or greasy food has little to no effect on acne.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Hygiene. Acne isn't caused by dirty skin. In fact, scrubbing the skin too hard or cleansing with harsh soaps or chemicals irritates the skin and can make acne worse.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Cosmetics. Cosmetics don't necessarily worsen acne, especially if you use oil-free makeup that doesn't clog pores (noncomedogenics) and remove makeup regularly. Nonoily cosmetics don't interfere with the effectiveness of acne drugs.</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Complications</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>People with darker skin types are more likely than are people with lighter skin to experience these acne complications:</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Scars. Pitted skin (acne scars) and thick scars (keloids) can remain long-term after acne has healed.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Skin changes. After acne has cleared, the affected skin may be darker (hyperpigmented) or lighter (hypopigmented) than before the condition occurred.</Text></Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Risk factors</Text>
                <Text>Risk factors for acne include:</Text>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Age. People of all ages can get acne, but it's most common in teenagers.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Hormonal changes. Such changes are common during puberty or pregnancy.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Family history. Genetics plays a role in acne. If both of your parents had acne, you're likely to develop it too.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Greasy or oily substances. You may develop acne where your skin comes into contact with oil or oily lotions and creams.</Text></Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}><Text>Friction or pressure on your skin. This can be caused by items such as telephones, cellphones, helmets, tight collars and backpacks.</Text></Unorderedlist>
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

export default Acne;