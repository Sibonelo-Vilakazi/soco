import { StyleSheet, Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

  mainColumn: {
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20.0,
    paddingVertical: 30.0
  },

  childColumn: {
    paddingHorizontal: 25.0
  },

  leadingText: {
    color: '#000000',
    fontSize: 16.0,
    fontWeight: '500',
    marginVertical: 20.0,
  },

  labelText: {
    color: '#000000',
    fontSize: 18.0,
    fontWeight: '400',
    marginTop: 40.0,
    marginBottom: 10.0
  },

  subLabelText: {
    fontSize: 12.0,
    marginBottom: 10.0
  },

  locationInput: {
    width: 230.0,
    height: 30.0,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    color: 'black',
    fontSize: 16,
    paddingVertical: 0.0,

  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 40.0,
    height: 30.0,
    borderRadius: 5,
    padding: 10,
    color: 'black',
    fontSize: 16,
    padding: 0.0,
    marginRight: 10.0
  },
  monthInput: {
    width: 90.0,
    height: 30.0,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 0.0,
    marginRight: 10.0
  },

  vibeInput: {
    height: 90,
    width: 250,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    justifyContent: 'flex-start',
    marginTop: 40.0
  },

  instantCode: {
    height: 35.0,
    width: 80.0,
    borderWidth: 1.0,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  instantCodeRow: {
    flexDirection: 'row'
  },

  copyText: {
    textDecorationLine: 'underline',
    textAlignVertical: 'center',
    marginLeft: 20.0
  },


  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30.0,
  },

  circle: {
    width: 40.0,
    height: 40.0,
    borderRadius: 20.0,
    borderWidth: 1.0,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10.0
  },

  circleSign: {
    fontSize: 22.0,
    fontWeight: '400',
    color: '#6F6F6F'
  },

  indexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  indexText: {
    alignSelf: 'center',
    fontSize: 16.0,
   
  },

  createButton: {
    height: 38.0,
    width: 250.0,
    marginTop: 25.0,
    backgroundColor: 'black',
    borderRadius: 3.0,
    borderColor: 'black',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0.0,
  },

  createButtonText: {
    color: 'white'
  },

  spacer: {
    height: 40.0
  }

});

export default styles;