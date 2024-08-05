import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';

import { OneSignal } from 'react-native-onesignal';
import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';


OneSignal.initialize("4abbfec4-2a63-4790-8b38-9ca86b9a404d")
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  tagUserInfoCreate()

  // useEffect(() => {
  //   const handleNotificationClick = (event: NotificationClickEvent): void => {
  //     const { actionId } = event.result 

  //     switch(actionId){
  //       case "1":
  //         console.log("See all")
  //         break
  //       case "2":
  //         console.log("See request")
  //         break
  //       default:
  //         console.log("No one option above it was selected")
  //         break
  //     }
  //   }
    
  //   OneSignal.Notifications.addEventListener("click", handleNotificationClick)
  // },[])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}