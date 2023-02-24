import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Icon,  } from 'react-native-elements';
import styles from './add_event_styles';

const AddEvent = () => {

  return (
    <ScrollView>
    <View style={styles.mainColumn}>
      <Icon
        type='ionicon'
        name="chevron-back-outline"
        style={styles.backIcon}
      ></Icon>
      <View style={styles.childColumn}>
        <Text style={styles.leadingText}>Host an event</Text>
        <TextInput
          style={styles.locationInput}
          placeholder="Where is the event?"
          placeholderTextColor="#a0a0a0"
          textAlign='center'

        />
        <Text style={styles.labelText}>Date</Text>
        <View style={styles.dateRow}>
          <TextInput
            style={styles.dateInput}
            placeholder="D"
            maxLength={2}
            keyboardType="numeric"
            textAlign='center'
          />
          <TextInput style={[styles.monthInput]} placeholder="Month" textAlign='center' />
          <TextInput
            style={styles.dateInput}
            placeholder="Y"
            maxLength={2}
            keyboardType="numeric"
            textAlign='center'
          />
        </View>
        <Text style={styles.labelText}>Time</Text>
        <TextInput style={[styles.monthInput]} placeholder="00:00" textAlign='center' />
        <TextInput
          style={styles.vibeInput}
          placeholder="What's the vibe?"
          placeholderTextColor="#A0A0A0"
          maxLength={150}
          multiline={true}
          textAlignVertical='top'
        />
        <Text style={styles.labelText}>Generate Instant Invite Code</Text>
        <Text style={styles.subLabelText}>Generate a code and send to your contacts</Text>
        <View style={styles.instantCodeRow}>
          <View style={styles.instantCode}>
            <Text>XDI2</Text>
          </View>
          <Text style={styles.copyText}>Copy</Text>
        </View>
        <View style={styles.guestRow}>
          <Icon
            name='user-plus'
            type='font-awesome'
            color='#000'
            size={20}
            marginRight={10.0}
          />
          <Text>How many guests do you want you invite?</Text>

        </View>
        <View style={styles.guestRow}>
          <Text>Max number of invites</Text>
          <View style={styles.indexRow}>
            <View style={styles.circle}>
              <Text style={styles.circleSign}>-</Text>
            </View>
            <Text> 4</Text>
            <View style={styles.circle}>
              <Text style={styles.circleSign}>+</Text>
            </View>
          </View>
        </View>
        <View style={styles.createButton}>
          <Text style={styles.createButtonText}>Create</Text>
        </View>
        <View style={styles.spacer}></View>
      </View>

    </View>
    </ScrollView>
  );
};


export {AddEvent};
