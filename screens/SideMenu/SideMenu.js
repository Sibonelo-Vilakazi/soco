import {  Text, View,  } from 'react-native';
import styles from './side_menu_styles';


const SideMenu = ()  =>{
  return (
    <View style={styles.mainColumn}>
      <Text style={styles.closeIconText}>X</Text>
      <Text style={styles.settings}>Settings</Text>
      <Text style={styles.settingsType}>Account Settings</Text>
      <Text style={styles.settingsTitle}>Profile</Text>
      <Text style={styles.recommendText}>We recommend completing your profile to gain more interest</Text>
      <Text style={styles.settingsTitle}>Help Center</Text>
      <Text style={styles.settingsTitle}>Notifications</Text>
      <Text style={styles.settingsType}>Support</Text>
      <Text style={styles.settingsTitle}>Safety Center</Text>
      <Text style={styles.settingsTitle}>Give us feedback</Text>
      <Text style={styles.settingsType}>Legal</Text>
      <Text style={styles.settingsTitle}>Terms of service</Text>
      <Text style={styles.settingsTitle}>Privacy settings</Text>
    </View>

  );
}

export {SideMenu}