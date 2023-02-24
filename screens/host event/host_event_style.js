import { StyleSheet, Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
  image: {
    height: 350.0,
    width : screenWidth
  },

  detailsColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  mainColumn: {
    alignItems: 'center',
    flex: 1,
    
  },

  detailsText: {
    color: 'black',
    paddingBottom: 20.0,
    fontSize: 16.0
  },

  hostButton: {
    height: 35.0,
    width: 160.0,
    marginTop: 15.0,
    backgroundColor: 'black',
    borderRadius: 3.0,
    borderColor: 'black',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  hostButtonText: {
    color: 'white'
  }
});

export default styles;