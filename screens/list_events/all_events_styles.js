import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainColumn: {
      flex: 1,
    },
  
    tabRow: {
      flexDirection: 'row',
      borderWidth: 1
    },
  
    tabRowTwo: {
      flexDirection: 'row',
      marginVertical: 10.0
    },
  
    allTabView: {
      flex: 0.4,
      height: 50,
      marginHorizontal: 35.0,
      marginTop: 15.0,
    },
  
    eventsText: {
      color: 'black',
      fontSize: 16.0
    },
  
    locationText: {
      color: 'black',
      textAlignVertical: 'center',
      height: '100%',
      fontSize: 10.0
    },
  
    locationIcon: {
      marginLeft: 20.0
    },
  
    eventCard: {
      marginTop: 20.0
    },
  
    eventCardRow: {
      flexDirection: 'row',
      marginTop: 10.0
    },
  
    dayText: {
      color: 'black',
      fontSize: 16.0,
      fontWeight: '700'
    },
  
    eventImage: {
      height: 150.0,
      width: 150.0,
  
    },
  
    eventDetails: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 20.0
  
    },
  
    eventDetailsText: {
      fontWeight: '300',
      color: 'black'
    },
  
    eventAddress: {
      fontWeight: '500',
      color: 'black'
    },
  
    eventAddressUnderlined: {
      textDecorationLine: 'underline',
      fontWeight: '500',
      color: 'black'
    },
  
    viewEventText: {
      height: 35.0,
      width: 150.0,
      marginTop: 15.0,
      borderRadius: 3.0,
      borderColor: 'black',
      borderWidth: 0.3,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

  export default styles;