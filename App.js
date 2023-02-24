import { Text, View, } from 'react-native';
import {  Card, Image } from 'react-native-elements';
import styles from './screens/cancel event/cancel_event_styles'



export default function CancelEvent() {
  return (
    <View style={styles.mainColumn}>
      <Text style={styles.eventDate}>28 December 2022</Text>
      <View style={styles.eventRow}>
        <View style={styles.eventImage}>
          <Image
            style={{
              width: 140.0,
              height: 140.0
            }}
            source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/615d9a31a7fca8f4813ba9b6/0x0.jpg?format=jpg&width=1200' }}
          />
        </View>
        <View style={styles.eventDetails}>
          <Text style={styles.eventAddress}><Text style={styles.eventAddressUnderlined}>Chucs</Text> - Notting Hill</Text>
          <Text style={styles.eventDetailsText}>Hosted by <Text style={{ textDecorationLine: 'underline' }}>Josh</Text></Text>
          <Text style={styles.eventDetailsText}>Time 21:00</Text>
        </View>
      </View>
      <Card containerStyle={styles.lowerCard}>
        <Text style={styles.lowerCardTitle}>What's the vide:</Text>
        <Text style={styles.lowerCardSubtitle}>Great food and chit chat</Text>
      </Card>
      <Card containerStyle={styles.hostCard}>
        <View style={styles.hostCardRow}>
          <View style={styles.hostImage}>
            <Image
              style={{
                width: 100.0,
                height: 100.0
              }}
              source={{ uri: 'https://www.ronnyleber.com/wp-content/uploads/2021/02/Ronny-Leber-Event-Host.jpg' }}
            />
          </View>
          <View style={styles.hostCardColumn}>
            <Text style={styles.hostedBy}>Hosted by Josh</Text>
            <View style={styles.meetHost}>
              <Text>Meet host</Text>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.meetHost}>
        <Text>Cancel Event</Text>
      </View>
    </View>

  );
}

