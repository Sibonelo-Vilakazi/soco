import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mainColumn: {
    paddingTop: 50.0,
    marginLeft: 40.0,
    marginRight: 30.0,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  closeIconText: {
    color: "#000000",
    fontSize: 16.0,
    alignSelf: 'flex-end',
    textAlign: 'right',
    textDecorationLine: 'underline'
  },

  settings: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18.0,
    marginVertical: 30.0
  },

  settingsType: {
    color: '#A39F9F',
    fontSize: 12.0,
    fontWeight: '500',
    marginTop: 30.0,
    marginBottom: 5.0
  },

  settingsTitle: {
    color: 'black',
    fontWeight: '400',
    fontSize: 17.0,
    marginTop: 10.0
  },

  recommendText: {
    color: '#A39F9F',
    fontSize: 10.0,
    marginBottom: 20.0,
  }

});

export default styles;
