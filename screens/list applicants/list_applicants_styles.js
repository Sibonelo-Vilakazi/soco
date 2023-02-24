import { StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
    mainColumn: {
      backgroundColor: '#ffffff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingVertical: 20.0
    },
  
    childColumn: {
      paddingHorizontal: 20.0
    },
  
    button: {
      backgroundColor: "#ff0000",
      borderRadius: 10.0
    },
  
    applicantsText: {
      color: '#000000',
      fontSize: 16.0,
      fontWeight: '500',
      marginBottom: 40.0,
      marginLeft: 40.0
    },
  
    backIcon: {
      marginVertical: 15.0,
      marginLeft: 20.0,
      alignContent: 'flex-start'
    },
  
    applicantCardRow: {
      paddingLeft: 25.0,
      paddingRight: 15.0,
      flexDirection: 'row',
      alignContent: 'space-between',
      justifyContent: 'center'
    },
  
    applicantCardRowSpacer: {
      flex: 1,
    },
  
    applicantTextColumn: {
      flexDirection: 'column'
    },
  
    applicantButtonRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      paddingTop: 5.0
    },
  
    applicantName: {
      color: "#000000",
      textDecorationLine: 'underline'
    },
  
    applicantStatus: {
      color: "#fd7900",
    },
  
    acceptButton: {
      backgroundColor: '#000000',
      paddingVertical: 6.0,
      paddingHorizontal: 20.0,
      borderRadius: 5.0,
      marginRight: 5.0
    },
  
    declineButton: {
      paddingVertical: 5.0,
      paddingHorizontal: 20.0,
      borderColor: '#000000',
      borderRadius: 5.0,
      borderWidth: 1.0
  
    },
  
    acceptText: {
      fontWeight: '100',
      fontSize: 12.0,
    },
  
    declineText: {
      fontWeight: '100',
      fontSize: 12.0,
      color: '#000000'
    }
  
  });

  export default styles;