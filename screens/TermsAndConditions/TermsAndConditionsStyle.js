import { fontWeight } from '@mui/system';
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    termsContainer: {
        paddingHorizontal:16,
        marginTop: 80
    },
    termsHeader:{
        fontSize: 24,
        fontFamily: 'Roboto',
        lineHeight: 32,

    },
    termsDescription:{
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'left',
        marginTop: 8,
        fontWeight: '400'
    },
    bold:{
        fontWeight: '700'
    },
    boldUnderline:{
        textDecorationLine: 'underline',
        fontWeight: '700',
    },
    btnAgree:{
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#F4EFF4',
        borderRadius:12,
        marginTop: 24
    },
    checkbox: {
        alignSelf: 'center',
      },
    agree:{
        fontSize: 16,

    }
});

export default styles;
