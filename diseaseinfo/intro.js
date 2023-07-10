import React from 'react';
import {StyleSheet,View,Text, ScrollView} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

function Introduction(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headigs}>INTRODUCTION TO DERMATOLOGY</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Intended Learning Outcomes</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Introduction.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Normal Skin histology.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Functions of the skin.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Primary & secondary lesions.</Text></Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>The Skin</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Largest organ of the body.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>1/7 of body weight.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Surface area is 1.75 m^2.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Examination of the skin is always part of the clinical
                    examination of the body, e.g. pallor & cyanosis.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Skin diseases may have associated internal organ involvement, e.g. psoriasis & arthritis</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Cutaneous findings can be a clue to internal diseases.</Text></Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Management of Skin Disease</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Complaint.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>History.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Examination.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Investigations, e.g. skin biopsy.</Text></Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}><Text>Treatment</Text></Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Structure of Skin</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Skin is composed of 3 main layers</Text>
                        <Unorderedlist>
                            <Text>Epidermis.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text>Dermis</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text>Hypodermis</Text>
                        </Unorderedlist>
                    </Unorderedlist>
                    
                    
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Epidermis</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Outermost layer.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Rests on the basement membrane.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Formed of cells.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Keratinocytes (KCs):</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>For formation of keratin.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Arranged from down upwards as</Text>
                        <Unorderedlist>
                            <Text> Basal cell layer.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text> Squamous cell layer.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text> Granular cell layer.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text> Keratinous cell layer.</Text>
                        </Unorderedlist>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Melanocytes: Formation of melanin.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Langerhan cells: Immune function  of skin.</Text>
                    </Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Dermis</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Below the basement membrane.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Composed of a matrix of collagen & elatic fibers.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Contains</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Blood vessels.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Lymphatic vessels.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Nerve fibers</Text>
                    </Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Hypodermis</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Composed of lobules of fat cells, seperated by fibrous septa which
                         are composed of collagen & large blood vessels
                         </Text>
                    </Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Skin Appendages</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Nail</Text>
                            <Unorderedlist>
                                <Text>Contain keratin</Text>
                            </Unorderedlist>
                    </Unorderedlist>
                    
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Hair follicles</Text>
                        <Unorderedlist>
                            <Text>Also Contain keratin</Text>
                        </Unorderedlist>
                    </Unorderedlist>
                    
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Sebaceous glands</Text>
                        <Unorderedlist>
                            <Text>Discharge their sebum content into hair follicles.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text>Together with hairs, they form "pilosebaceous units".</Text>
                        </Unorderedlist>
                    </Unorderedlist>
                    
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Sweat glands</Text>
                        <Unorderedlist>
                            <Text>Open on the surface of epidermis through sweat ducts</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text>Eccrine sweat glands allover body surface.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text>Apocrine sweat glands at body flexures only.</Text>
                        </Unorderedlist>
                    </Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Knowledge of normal structure of skin is important</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Any change manifests as clinical symptoms & signs.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Any skin disease has both a visual diagnosis & a structural alteration.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Examples</Text>
                        <Unorderedlist>
                            <Text>Absence of hair follicles manifests as alopecia.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text>Absence of melanocycytes manifest as vitiligo.</Text>
                        </Unorderedlist>
                    </Unorderedlist>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.headigs}>Functions of Skin</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Protection.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Prevention of water & electrolyte loss.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Temperature control through vasodilation, vasoconstriction & sweating.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Sensory function.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Formation of vitamin D.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Immunological function via Langerhans cells.</Text>
                    </Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Cutaneous Signs</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Primary Lesions</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Initial lession of skin diseases</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Secondary Lesions</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Occur as a result of modification of primary lesions.</Text>
                    </Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Primary Lesions</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Macule</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Circumscribed area of skin discolaration less than 1 cm in diameter</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Could be hypopigmented, hyperpigmented or erthematous</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Examples</Text>
                        <Unorderedlist><Text>Brown macule in pityriasis versicolor.</Text></Unorderedlist>
                        <Unorderedlist><Text>White macule in vitiligo.</Text></Unorderedlist>
                        <Unorderedlist><Text>macule more than 1 cm in diameter is called a patch</Text></Unorderedlist>
                    </Unorderedlist>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Papule</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Circumscribed solid elevation of skin less than 0.5 cm in diameter</Text>
                    </Unorderedlist>
                    
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Examples</Text>
                        <Unorderedlist>
                            <Text>Psoriasis.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text>Lichen planus.</Text>
                        </Unorderedlist>
                    </Unorderedlist>
                    
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.headigs}>Nodule</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Circumscribed solid elevation of skin more than 0.5 cm in diameter.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>A deep lesion that represents a dermal or subcutaneous pathology.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Examples</Text>
                        <Unorderedlist><Text>Lepromatous leprosy</Text></Unorderedlist>
                    </Unorderedlist>
                </View>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.headigs}>Plague</Text>
                <View>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Area of change of texture or consistency of the skin.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>May be elevated above or depressed under the skin surface.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>An elevated lesion may originate de novo or as a rresult of confluence of multiple papules.</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x29BF}>
                        <Text>Occupies a large surface area in comparison with its height in contrast to the nodule.</Text>
                    </Unorderedlist>
                </View>
            </View>
        </ScrollView>
    );
}

export default Introduction;

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