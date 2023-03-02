import {  Text, View, } from 'react-native';
import {  Card, Image } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import styles from './view_applicant_styles';


const ViewApplicant = () =>{


  return (
    <View style={styles.mainColumn}>
      <Text style={styles.closeIconText}>X</Text>
      <View style={styles.profileColumn}>
        <View style={styles.firstRow}>
          <View style={styles.checkCircle}>
            <AntDesign name="check" size={14} style={styles.checkIcon} />
          </View>
          <Text style={styles.identityVerified}>Identity verified</Text>
        </View>
        <View style={styles.profilePicture}>
          <Image
            style={{
              width: 160.0,
              height: 160.0
            }}
            source={{ uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEhXJ1lfuk2J1uTzEQ0mEsevS-j9NPaoh3MpWS2jwCfAFGtBI2dyq-glTwkWt_nUCPNsrSsg_BaEVWTysFDG4wzINj9ibAIKMPE5aJT8bXV7KrlysimjX0zy4XeQakYap3mx520j1_by85d3wACAUEpj_0gKZbaUB5tOGZCG8sBrB7mVLEqtSN3rnRO5=s16000' }}
          />
        </View>
        <Text style={styles.nameAge}>Mabilo P, 25</Text>
        <Text style={styles.profileInfo}>Living in Centurion, SA</Text>
        <Text style={styles.profileInfo}>Hometown Matatiyele</Text>
        <Text style={styles.profileInfo}>Founder BugArray</Text>
      </View>
      <View>
        <Text style={styles.lowerTitle}>Ice Breakers</Text>
        <Card containerStyle={styles.lowerCard}>
          <Text style={styles.lowerCardTitle}>What do you bring to the table?</Text>
          <Text style={styles.lowerCardSubtitle}>I can probably drink you under the table</Text>
        </Card>
        <Card containerStyle={styles.lowerCard}>
          <Text style={styles.lowerCardTitle}>Who is your dream dinner guest?</Text>
          <Text style={styles.lowerCardSubtitle}>David Blaine</Text>
        </Card>
        <Card containerStyle={styles.lowerCard}>
          <Text style={styles.lowerCardTitle}>Interest</Text>
          <Text style={styles.lowerCardSubtitle}>Yoga, Chocolate, PnP Shopping</Text>
        </Card>
      </View>
    </View>

  );
}

 export {ViewApplicant}