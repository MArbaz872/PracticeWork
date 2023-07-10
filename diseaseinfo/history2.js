import React from 'react';
import {ScrollView, Text,View,StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
function History_Two(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headigs}>Signposting</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Signposting involves explaining to the patient:</Text>
                    <Unorderedlist>
                        <Text>What you have covered – “Ok, so we’ve talked about your symptoms and your concerns regarding them”</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>What you plan to cover next – “Now I’d like to discuss your past medical history and your medications”</Text>
                    </Unorderedlist>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Past medical history</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Skin disease:</Text>
                    <Unorderedlist>
                        <Text>Skin cancer</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Atopy – eczema / hay fever / asthma</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Other dermatological conditions</Text>
                    </Unorderedlist>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Other medical conditions – many of which can have dermatological manifestations Diabetes – acanthosis nigricans / scleroderma diabeticorum / necrobiosis lipoidica diabeticorum
                          Inflammatory bowel disease – pyoderma gangrenosum / erythema nodosum</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Drug history</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Skin treatments – creams / ointments /UV therapy / antibiotics/ biologics</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Regular medication – including length of treatment (paying particular attention to those started around the time of the skin problem)</Text>
                    <Unorderedlist>
                        <Text>Antibiotics</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Over the counter drugs</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Cosmetics</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Herbal remedies</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>ALLERGIES (a common cause of rashes) – ensure to document these clearly</Text>
                    </Unorderedlist>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Family history</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Skin conditions – e.g. psoriasis / hereditary hemorrhagic telangiectasia</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Skin cancer</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Atopy – eczema / asthma / hay fever</Text>
                </Unorderedlist>
                
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Social history</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Occupation:</Text>
                    <Unorderedlist>
                        <Text>Are the skin problems worse at work?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Do the skin problems improve when the patient is off from work?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Is the patient exposed to any skin irritants or other hazardous substances?</Text>
                    </Unorderedlist>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Smoking – How many cigarettes a day? How many years have they smoked for?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Alcohol – How many units a week? – type/volume/strength of alcohol</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Recreational drug use – e.g. cellulitis from IV drug injection sites</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Living situation:</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Own home/care home – adaptations / stairs?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Who lives with the patient? – is the patient supported at home?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Any carer inpus? – what level of care do they receive?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Any recent changes at home that could be related to skin problems (e.g., new detergent causing allergic reaction to clothing)</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Activities of daily living:</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Is the patient independent and able to fully care for themselves?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Can they manage self-hygiene/housework/food shopping?</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Travel history</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Where did the patient travel to?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>How long was the patient there?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Is the patient aware of any exposure to infectious disease?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Sun exposure – was the skin problem worsened by sun exposure? (e.g., facial rash lupus)</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Systemic enquiry</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Systemic enquiry involves performing a brief screen for symptoms in other body systems.
                        This may pick up on symptoms the patient failed to mention in the presenting complaint.
                        Some of these symptoms may be relevant to diagnosis (e.g., arthralgia in psoriatic arthritis)
                        Choosing which symptoms to ask about depends on the presenting complaint and your level of experience.
                    </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Cardiovascular – Chest pain / Palpitations /Dyspnea/ Syncope /Orthopnea /Peripheral oedema</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Respiratory – Dyspnea /Cough/Sputum/Wheeze/Hemoptysis/Chest pain</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>GI – Appetite/ Nausea/Vomiting/Indigestion/Dysphagia/Weight loss/Abdominal pain /Bowel habit</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Urinary – Volume of urine passed /Frequency/Dysuria/Urgency/Incontinence</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>CNS – Vision/Headache/Motor or sensory disturbance/Loss of consciousness/Confusion</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Musculoskeletal – Bone and joint pain /Muscular pain</Text>
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
});

export default History_Two;