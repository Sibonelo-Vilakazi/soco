import { StyleSheet, Dimensions } from 'react-native';


const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    mainColumn: {
        paddingTop: 60.0,
        marginHorizontal: 40.0,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    eventDate: {
        fontWeight: '500',
        fontSize: 15.0,
        marginBottom: 40.0,
    },

    eventRow: {
        flexDirection: 'row',
    },

    eventImage: {
        height: 140.0,
        width: 140.0,

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

    lowerCard: {
        backgroundColor: 'white',
        marginLeft: 0,
        marginTop: 40.0,
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
    },

    hostCard: {
        backgroundColor: 'white',
        marginLeft: 0,
        marginTop: 40.0,
        marginBottom: 20.0,
        width: width - 80.0,
        borderWidth: 0.0,
        elevation: 1.0,
        paddingVertical: 35.0,
    },

    hostCardRow: {
        flexDirection: 'row'
    },

    hostImage: {
        height: 100.0,
        width: 100.0,
        borderRadius: 60.0,
        overflow: 'hidden'
    },

    hostCardColumn: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 30.0,
        justifyContent: 'center'
    },

    hostedBy: {
        color: 'black'
    },

    meetHost: {
        height: 35.0,
        width: 135.0,
        marginTop: 15.0,
        borderRadius: 3.0,
        borderColor: 'black',
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },

    meetHostText: {
        color: 'black',
        fontWeight: '200'

    },

    applyButton: {
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

    applyButtonText: {
        color: 'white'
    },

    spacer: {
        height: 40.0
    }

});

export default styles;