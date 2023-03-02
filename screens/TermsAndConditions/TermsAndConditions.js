
import { View ,Text} from "react-native";
import React, { useState, useRef } from "react";
import styles from './TermsAndConditionsStyle';
import { CheckBox } from "react-native-elements";
const TermsAndConditions = () =>{   
    const [isSelected, setSelection] = useState(false);
    return(
        <View style={styles.termsContainer}>
            <Text style={styles.termsHeader}>Accept Soco’s Terms and Review Privacy Policy.</Text>
            <Text style={styles.termsDescription}>By Selecting <Text style={styles.bold}>“I Agree”</Text> below, I have reviewed and agree to the <Text style={styles.boldUnderline}>Terms of Use</Text> and acknowledge the <Text style={styles.boldUnderline}>Privacy Policy.</Text> </Text>

            <View style={styles.btnAgree}>
                <Text style={styles.agree}>I Agree</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
            </View>
        </View>
    )
}

export {TermsAndConditions}