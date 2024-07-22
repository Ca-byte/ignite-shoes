import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'native-base';

import { useEffect, useState } from 'react';
import { NotificationWillDisplayEvent, OneSignal, OSNotification } from 'react-native-onesignal';
import { Notification } from '../components/Notification';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { colors } = useTheme();
  const [notification, setNotifications] = useState<OSNotification>()

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
    const handleNotification = (e: NotificationWillDisplayEvent): void => {
      e.preventDefault()
        const response = e.getNotification()
        setNotifications(response)
      
    }
    OneSignal.Notifications.addEventListener(
      "foregroundWillDisplay", 
      handleNotification
    )

    return () => OneSignal.Notifications.removeEventListener(
      "foregroundWillDisplay", 
      handleNotification
    )
  }, [])
  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
      {
        notification?.title &&
      <Notification title={notification?.title} onClose={() => setNotifications(undefined)} />
      }
    </NavigationContainer>
  );
}