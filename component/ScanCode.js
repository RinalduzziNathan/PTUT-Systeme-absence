import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import * as Permissions from 'expo-permissions';

//pour le scan
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Notifications} from "expo";

import Scanner from './Scanner';



class ScanCode extends Scanner{

//SCAN CODE POUR LA CONNEXION

    _displayNewView = () => {
      this.navigate.navigate("App")
    }

    state = {
        hasCameraPermission: null,
        scanned: false,
      };
    
      // async componentDidMount() {
      //   this.getPermissionsAsync();
      // }
    
      // getPermissionsAsync = async () => {
      //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
      //   this.setState({ hasCameraPermission: status === 'granted' });
      // };
      
    
      // render() {
      //   const { hasCameraPermission, scanned } = this.state;
        
      //   if (hasCameraPermission === null) {
      //     return <Text>Requesting for camera permission</Text>;
      //   }
      //   if (hasCameraPermission === false) {
      //     return <Text>No access to camera</Text>;
      //   }
      //   return (
      //     <View
      //       style={{
      //         flex: 1,
      //         flexDirection: 'column',
      //         justifyContent: 'flex-end',
      //       }}>
      //       <BarCodeScanner
      //         onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
      //         style={StyleSheet.absoluteFillObject}
      //       />
    
      //       {scanned && (
      //         <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
      //       )}
      //     </View>
      //   );
      // }

      //NOTIFICATION IMEDIATE "BIEN CONNECTE"
      sendNotificationImmediately = async () => {


        console.log("on entre dans la function")
        let notificationId = await Notifications.presentLocalNotificationAsync({
      
          title: "UCA Absence",
      
          body: "Vous êtes bien connecté",
      
          ios: {
            _displayInForeground: true,
            sound: true
          },
      
          android: {
            channelId: 1
          }
      
        });
      
        console.log(notificationId); 
      }
    
      handleBarCodeScanned = ({ type, data }) => {
        this.sendNotificationImmediately();
        this.setState({ scanned: true });
        
        // console.log(ApiAuth.Token + "This is the token")
        // if(data.includes("tok"))
        // {
        //   this._displayNewView();
        //   ApiAuth.StoreToken(data)
        //   console.log("Un Token a été scanné")
        //   ApiAuth.GetUserInfo()
        // }else
        // {
        //   console.log("Vous n'avez pas scanné de token")
        // }
      };
}

export default ScanCode;