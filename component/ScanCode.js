import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import * as Permissions from 'expo-permissions';

//pour le scan
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Notifications} from "expo";



class ScanCode extends React.Component{

//SCAN CODE POUR LA CONNEXION

    constructor(props){
      super(props);
      this.navigate = props.navigation;
    }

    _displayNewView = () => {
      console.log("Vue autentification")
      console.log(this);
      this.navigate.navigate("App")
    }

    state = {
        hasCameraPermission: null,
        scanned: false,
      };
    
      async componentDidMount() {
        this.getPermissionsAsync();
      }
    
      getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      };
      
    
      render() {
        const { hasCameraPermission, scanned } = this.state;
        
        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        }
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
    
            {scanned && (
              <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
            )}
          </View>
        );
      }

      //NOTIFICATION IMEDIATE
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
      
        console.log(notificationId); // can be saved in AsyncStorage or send to server
      
      }

      // scheduleLocalNotification = async () =>{

      //   console.log("ahhhhh")
      //   let notificationId = await Notifications.scheduleLocalNotificationAsync({

      //     localNotification: {
      
      //       title: "Message de votre application",
        
      //       body: "Vous venez de scanner votre QRCode.",
        
      //       ios: {
      //         _displayInForeground: true,
      //         sound: true
      //       }

      //     },

      //     time: addSeconds((Date.now()),5),
      //   });
      // }
    
      handleBarCodeScanned = ({ type, data }) => {
        this.sendNotificationImmediately();
        this.setState({ scanned: true });
        this._displayNewView();
        
      };
}

export default ScanCode;