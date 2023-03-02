import { Text, View, } from 'react-native';
import {  Card, Image } from 'react-native-elements';
import styles from './screens/CancelEvent/cancel_event_styles'
import {CancelEvent,ListApplicants,HostEvent, AddEvent, Apply, SideMenu,AllEvents, ViewApplicant} from './screens/index'
import { TermsAndConditions } from './screens/TermsAndConditions/TermsAndConditions';


export default function App() {
  return(
    <TermsAndConditions></TermsAndConditions>
     
  );
}

