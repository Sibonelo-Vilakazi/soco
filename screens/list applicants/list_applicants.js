import { Text, View } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';
import styles from './list_applicants_styles';


const ListApplicants = () => {

  return (
    <View style={styles.mainColumn}>
      <Icon
        type='ionicon'
        name="chevron-back-outline"
        style={styles.backIcon}
      ></Icon>
      <Text style={styles.applicantsText}>Applicants</Text>
      <Card
        containerStyle={{ backgroundColor: '#EFEEEB', height: 75.0, width: '100%', marginLeft: 0, justifyContent: 'center' }}
      >
        <View style={styles.applicantCardRow}>
          <View style={styles.applicantTextColumn}>
            <Text style={styles.applicantName}>Kira Posner</Text>
            <Text style={styles.applicantStatus}>Pending</Text>
          </View>
          <View style={styles.applicantCardRowSpacer}></View>
          <View style={styles.applicantButtonRow}>
            <Button title='Accept' buttonStyle={styles.acceptButton} titleStyle={styles.acceptText}></Button>
            <Button title='Decline' type='ouline' buttonStyle={styles.declineButton} titleStyle={styles.declineText}></Button>
          </View>
        </View>
      </Card>
      {/* Applicant Card */}
    </View>
  );
}




export {ListApplicants};