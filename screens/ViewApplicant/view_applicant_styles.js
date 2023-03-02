import { StyleSheet, Dimensions } from 'react-native';


const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mainColumn: {
    paddingTop: 50.0,
    paddingHorizontal: 20.0,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20.0,
  },

  profileColumn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 20.0,
    paddingBottom: 40.0,
    alignItems: 'center',
    flexDirection: 'column',

  },

  closeIconText: {
    color: "#000000",
    fontSize: 16.0,
    alignSelf: 'flex-end',
    textAlign: 'right',
    textDecorationLine: 'underline'
  },

  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  checkIcon: {
    color: 'white',
  },

  identityVerified: {
    color: 'black',
    fontWeight: '600',
  },

  profilePicture: {
    height: 160.0,
    width: 160.0,
    borderRadius: 80.0,
    borderColor: '#000000',
    borderWidth: 2.0,
    marginVertical: 30.0,
    alignItems: 'center',
    overflow: 'hidden'

  },

  nameAge: {
    color: 'black',
    fontSize: 14.0,
    fontWeight: '400'
  },

  profileInfo: {
    color: '#6F6F6F',
    fontSize: 14.0,
    fontWeight: '400'
  },

  profileLowerInfo: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1

  },

  lowerTitle: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 10.0
  },

  lowerCard: {
    backgroundColor: 'white',
    marginLeft: 0,
    width: width - 40.0,
    borderWidth: 0.0,
    elevation: 0.0,
    padding: 0.0
  },

  lowerCardTitle: {
    color: '#000000',
    fontWeight: '400',
  },

  lowerCardSubtitle: {
    color: '#6F6F6F',
    fontWeight: '300',
  }


});

export default styles;
