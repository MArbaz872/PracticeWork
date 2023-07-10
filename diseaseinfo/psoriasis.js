import React from 'react';
import {ScrollView, Text,View,StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

function Psoriasis(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headigs}>What Is Psoriasis?</Text>
                <Text>Psoriasis is a skin disorder that causes skin cells to multiply up to 10 times faster than normal. This makes the skin build up into bumpy red patches covered with white scales. They can grow anywhere, but most appear on the scalp, elbows, knees, and lower back. Psoriasis can't be passed from person to person. It does sometimes happen in members of the same family.
                Psoriasis usually appears in early adulthood. 
                For most people, it affects just a few areas. 
                In severe cases, psoriasis can cover large parts of the body. 
                The patches can heal and then come back throughout a person's life.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Symptoms</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>The symptoms of psoriasis vary depending on the type you have. Some common symptoms for plaque psoriasis -- the most common variety of the condition -- include:</Text>
                    <Unorderedlist>
                        <Text>Plaques of red skin, often covered with silver-colored scales. These plaques may be itchy and painful, and they sometimes crack and bleed. In severe cases, the plaques will grow and merge, covering large areas.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Plaques of red skin, often covered with silver-colored scales. These plaques may be itchy and painful, and they sometimes crack and bleed. In severe cases, the plaques will grow and merge, covering large areas.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Plaques of scales or crust on the scalp.</Text>
                    </Unorderedlist>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>People with psoriasis can also get a type of arthritis called psoriatic arthritis. It causes pain and swelling in the joints. The National Psoriasis Foundation estimates that between 10% to 30% of people with psoriasis also have psoriatic arthritis.</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Types</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Other types of psoriasis include:</Text>
                    <Unorderedlist>
                        <Text>Pustular psoriasis, which causes red and scaly skin with tiny pustules on the palms of the hands and soles of the feet.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Guttate psoriasis, which often starts in childhood or young adulthood, causes small, red spots, mainly on the torso and limbs. Triggers may be respiratory infections, strep throat, tonsillitis, stress, injury to the skin, and taking antimalarial and beta-blocker medications.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Inverse psoriasis, which makes bright red, shiny lesions that appear in skin folds, such as the armpits, groin, and under the breasts.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Erythrodermic psoriasis, which causes fiery redness of the skin and shedding of scales in sheets. It's triggered by severe sunburn, infections, certain medications, and stopping some kinds of psoriasis treatment. It needs to be treated immediately because it can lead to severe illness.</Text>
                    </Unorderedlist>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>What Causes Psoriasis?</Text>
                <Text>No one knows the exact cause of psoriasis, but experts believe that it’s a combination of things. Something wrong with the immune system causes inflammation, triggering new skin cells to form too quickly. Normally, skin cells are replaced every 10 to 30 days. With psoriasis, new cells grow every 3 to 4 days. The buildup of old cells being replaced by new ones creates those silver scales.</Text>
                <Text>Psoriasis tends to run in families, but it may be skip generations. For instance, a grandfather and their grandson may be affected, but not the child's mother.</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Things that can trigger an outbreak of psoriasis include:</Text>
                    <Unorderedlist>
                        <Text>Cuts, scrapes, or surgery</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Emotional stress</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Strep infections</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Strep infections</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Blood pressure medications (like beta-blockers)</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Hydroxychloroquine, antimalarial medication</Text>
                    </Unorderedlist>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Diagnosis</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Physical exam. It’s usually easy for your doctor to diagnose psoriasis, especially if you have plaques on areas such as your:</Text>
                    <Unorderedlist>
                        <Text>Scalp</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Ears</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Elbows</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Knees</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Belly Button</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Nails</Text>
                    </Unorderedlist>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Treatment</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Luckily, there are many treatments. Some slow the growth of new skin cells, and others relieve itching and dry skin. Your doctor will select a treatment plan that is right for you based on the size of your rash, where it is on your body, your age, your overall health, and other things. Common treatments include:</Text>
                    <Unorderedlist>
                        <Text>Steroid creams</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Moisturizers for dry skin</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Coal tar (a common treatment for scalp psoriasis available in lotions, creams, foams, shampoos, and bath solutions)</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>cream or ointment (a strong kind ordered by your doctor. Vitamin D in foods and pills has no effect.)</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Retinoid creams</Text>
                    </Unorderedlist>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Treatments for moderate to severe psoriasis include:</Text>
                    <Unorderedlist>
                        <Text>Light therapy. A doctor shines ultraviolet light on your skin to slow the growth of skin cells. PUVA is a treatment that combines a medicine called psoralen with a special form of ultraviolet light.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Methotrexate. This drug can cause bone marrow and liver disease as well as lung problems, so it’s only for serious cases. Doctors closely watch patients. You will have to get lab tests, perhaps a chest X-ray, and possibly a liver biopsy.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Retinoids. These pills, creams, foams, lotions, and gels are a class of drugs related to vitamin A. Retinoids can cause serious side effects, including birth defects, so they’re not recommended for women who are pregnant or planning to have children.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>This drug, made to suppress the immune system, may be taken for serious cases that do not respond to other treatments. It can damage the kidneys and raise blood pressure, so your doctor will closely watch your health while you take it.</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Biologic treatments. These work by blocking the body's immune system (which is overactive in psoriasis) to better control the inflammation from psoriasis. Biologic medications include adalimumab (Humira), brodalumab (Siliq), certolizumab pegol (Cimzia) etanercept (Enbrel), guselkumab (Tremfya), infliximab (Remicade), ixekizumab (Taltz), risankizumab-rzaa (SKYRIZI), secukinumab (Cosentyx), tildrakizumab (Ilumya), and ustekinumab (Stelara).</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>An enzyme inhibitor. The medication apremilast (Otezla) is a new kind of drug for long-term inflammatory diseases like psoriasis and psoriatic arthritis. It's a pill that blocks a specific enzyme, which helps to slow other reactions that lead to inflammation.</Text>
                    </Unorderedlist>
                </Unorderedlist>
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
export default Psoriasis;