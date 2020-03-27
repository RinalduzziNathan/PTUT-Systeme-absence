
import React from 'react'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import ItemCour from './ItemCour'

class ScheduleNotifications extends React.Component {

  onSubmit(e) {
    Keyboard.dismiss();

    const localNotification = {
        title: 'UCA Abscence',
        body: 'Vous avez bientôt un cours!'
    };

    const schedulingOptions = {
        time: (new Date()).getTime() + //RAJOUTER DATE DU COURS
    }

    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    Notifications.scheduleLocalNotificationAsync(
        localNotification, schedulingOptions
    );
}

handleNotification() {
    console.warn('ok! got your notif');
}

async componentDidMount() {
    // We need to ask for Notification permissions for ios devices
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
        console.log('Notification permissions granted.')
    }

    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and 
    // handle them in a callback
    Notifications.addListener(this.handleNotification);
}

render() {
    return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <TextInput
                onSubmitEditing={this.onSubmit}
                placeholder={'time in ms'}
            />
        </View>
    );
}
}

export default ScheduleNotifications;