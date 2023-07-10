import React from 'react';
import {ScrollView,StyleSheet,Text,View} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

function History_One(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headigs}>HPC</Text>
                <Text style={styles.headigs}>PAST MEDICAL HX</Text>
                <Text style={styles.headigs}>DRUG HX</Text>
                <Text style={styles.headigs}>FAMILY HX</Text>
                <Text style={styles.headigs}>SOCIAL HX</Text>
                <Text style={styles.headigs}>SYSTEMIC ENQUERY</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Introduction</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Introduction yourself- name/role</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Confirm patient details- name/DOB</Text>
                </Unorderedlist>            
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Explain the need to take a history</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Gain consent</Text>
                </Unorderedlist>            
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Ensure the patient is comfortable</Text>    
                </Unorderedlist>
                
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Presenting complaint</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>It's important to use open questioning to elicit the patient's presenting complaint</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>"So what's brought you in today?" or "Tell me about your symptoms"</Text>     
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Allow the [atient time to answer, trying not to interrupt or direct the conversation</Text>     
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Facilitate the patient to expand on their presenting complaint if required</Text>    
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>"Ok, so tell me more about the rash" "Can you explain what that pain was like?"</Text>    
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>History of presenting complaint</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Onset:</Text>
                    <Unorderedlist>
                        <Text>When did the skin problem start?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Was the onset acute or gradual?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Course - has the rash/skin lesion changed over time?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Intermittent or continuous - is the skin problem always present oir does it come and go?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Duration of the symptom if intermittent - minutes/hours/days/weeks/months/years</Text>
                    </Unorderedlist>
                </Unorderedlist>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Location/distribution:</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Where is the skin problem?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Number of lesions?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Is it spreading?</Text>
                </Unorderedlist>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Precipitating factors - are there any obvious triggers for the symptom?</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Relieving factors - does anything appear to improve the symptoms (e.g. steroid cream)?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Associated features - are there other symptoms that appear associated (e.g. fever/malaise)?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Previous episodes - has the patient experiened this problem previously?</Text>
                    <Unorderedlist>
                        <Text>When?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>How long for?</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text>Was it the same or different than the current episode?</Text>
                    </Unorderedlist>
                </Unorderedlist>
                
                
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Previous or current treatment for this skin problem (did it work?):</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Prescribed medication</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Over the counter medication</Text>    
                </Unorderedlist>
               
                
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Contact history - has the patient been in contact with as infectious skin problem (e.g. chickenpox)?</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>Sun exposure (including snubed use)</Text>
                    <Unorderedlist>
                    <Text>Important when considering skin cancer in the differential diagnosis</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                    <Text>Ask the patient about how their skin reacts to sun exposure to help determine their skin type (Fitzpatrick scale)</Text>        
                    </Unorderedlist>
                </Unorderedlist>                
                
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Key Symptoms</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Pain</Text>
                </Unorderedlist>
                
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Itch</Text>
                </Unorderedlist>
                
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Bleeding</Text>   
                </Unorderedlist>
                
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Discharge</Text>
                </Unorderedlist>
                
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Blistering</Text>    
                </Unorderedlist>
                
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Systemetic symptoms - fever/malaise/weight loss/ arthralgia</Text>    
                </Unorderedlist>        
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Pain</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                <Text>If pain is a symptom, clarify the details of the pain using SOCRATES</Text>
                    <Unorderedlist><Text>Site - where is the pain?</Text></Unorderedlist>
                    <Unorderedlist><Text>Onset - when did it start? / sudden vs gradual</Text></Unorderedlist>
                    <Unorderedlist><Text>Character - sharp / dull ache / burning</Text></Unorderedlist>
                    <Unorderedlist><Text>Radiation - does the pain move anywhere else?</Text></Unorderedlist>
                    <Unorderedlist><Text>Associations - other symptoms associated with the pain?</Text></Unorderedlist>
                    <Unorderedlist><Text>Time course - worsening / improving / fluctuating / time of day dependent</Text></Unorderedlist>
                    <Unorderedlist><Text>Exacerbating / Relieving factors - doe anything make the pain worse or better?</Text></Unorderedlist>
                    <Unorderedlist><Text>Severity - on a scale of 0-10, how severe is the pain?</Text></Unorderedlist>
                </Unorderedlist>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Ideas, Concerns and Expectations</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Ideas - what are the patient's thoughts regarding their symptoms?</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Concerns - explore any worries the patient may have regarding their symptoms</Text>
                </Unorderedlist>            
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Expectations - gain an understanding of what the patient is hoping to achieve from the consultation</Text>
                </Unorderedlist>                       
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Summarising</Text>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Summarise what the patient has told you about their presenting complaint.</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>This allows you to check your understanding regarding everything the patient has told you.</Text>
                </Unorderedlist>            
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>It also allows the patient to check any inaccurate information and expand further on certain aspects</Text>
                </Unorderedlist>            
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Once you have semmerised, ask the patient if there's anything else that you've overlooked</Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x29BF}>
                    <Text>Continue to periodically summarise as you move through the rest of the history</Text>
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

export default History_One;