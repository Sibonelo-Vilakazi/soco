import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import styles from './all_events_styles';



const ListEventsTabView = () => {
  return (
    <View style={styles.eventCard}>
      <Text style={styles.dayText}>Today</Text>
      <View style={styles.eventCardRow}>
        <View style={styles.eventImage}>
          <Image
            style={{
              width: 150.0,
              height: 150.0
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
      <View style={styles.viewEventText}>
        <Text>View Event</Text>
      </View>
    </View>
  );
}

const AllTabView = () => {
  const [activeTabTwo, setActiveTabTwo] = useState(0);

  return (
    <View style={styles.allTabView}>
      <Text>Events</Text>
      <View style={styles.tabRowTwo}>
        <TouchableOpacity
          style={{
            width: 70.0,
            height: 36.0,
            backgroundColor: activeTabTwo === 0 ? 'black' : 'white',
            borderRadius: 5.0,
            borderWidth: 1.0,
            justifyContent: 'center',
            marginRight: 10.0,

          }}
          onPress={() => setActiveTabTwo(0)}
        >
          <Text style={{ textAlign: 'center', color: activeTabTwo === 0 ? 'white' : 'black', fontSize: 12.0 }}>
            List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 70.0,
            height: 36.0,
            backgroundColor: activeTabTwo === 1 ? 'black' : 'white',
            borderRadius: 5.0,
            borderWidth: 1.0,
            justifyContent: 'center'
          }}
          onPress={() => setActiveTabTwo(1)}
        >
          <Text style={{ textAlign: 'center', color: activeTabTwo === 1 ? 'white' : 'black', fontSize: 12.0 }}>
            Map
          </Text>
        </TouchableOpacity>
        <View style={styles.locationIcon}>
          <Icon name="location-on" size={30} color="black"></Icon></View>
        <Text style={styles.locationText}>Notting Hill</Text>
        <Text style={styles.locationText}>(Change)</Text>
      </View>
      {activeTabTwo === 0 && <ListEventsTabView />}
    </View>
  );
};

const HostedByMeTabView = () => (
  <View style={{ flex: 1, height: 50 }}>
    <Text style={{ textAlign: 'center' }}>Tab 2 contents</Text>
  </View>
);

const AllEvents = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.mainColumn}>
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={{
            flex: 0.4,
            height: 50,
            backgroundColor: activeTab === 0 ? 'black' : 'white',
            justifyContent: 'center'
          }}
          onPress={() => setActiveTab(0)}
        >
          <Text style={{ textAlign: 'center', color: activeTab === 0 ? 'white' : 'black' }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.6,
            height: 50,
            backgroundColor: activeTab === 1 ? 'black' : 'white',
            justifyContent: 'center'

          }}
          onPress={() => setActiveTab(1)}
        >
          <Text style={{ textAlign: 'center', color: activeTab === 1 ? 'white' : 'black' }}>
            Hosted by me
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 0 && <AllTabView />}
      {activeTab === 1 && <HostedByMeTabView />}
    </View>
  );
};



export {AllEvents};
