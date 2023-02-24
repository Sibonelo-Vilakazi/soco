import React, { useState } from 'react';
import { View, Text,  } from 'react-native';
import {  Image, } from 'react-native-elements';
import styles from './host_event_style';


const HostEvent = () => {
  
  return (
    <View style={styles.mainColumn}>
      <Image  style={styles.image} source={{uri: 'https://i.imgur.com/X5hFb9t.png'}}>
      </Image>
      <View style={styles.detailsColumn}>
        <Text style={styles.detailsText}>There are no events in your area</Text>
        <Text style={styles.detailsText}>Host an event to get started</Text>
        <View style={styles.hostButton}>
          <Text style={styles.hostButtonText}>Host an Event</Text>
        </View>
      </View>
    </View>
  );
};


export default HostEvent;
