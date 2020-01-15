import * as React from 'react';
import { Text, View, StyleSheet, Button,AsyncStorage } from 'react-native';

import * as Permissions from 'expo-permissions';

//pour le scan
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Notifications} from "expo";

import Scanner from './Scanner';
import { ApiAuth } from './Api';



class ScanCodeAuthentification extends Scanner{

//SCAN CODE POUR LA CONNEXION


    constructor(props) {
      super(props)
    }
     

    _displayNewView = () => {
      this.navigate.navigate("App")
    }

    state = {
        hasCameraPermission: null,
        scanned: false,
      };
 


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


      //NOTIFICATION IMEDIATE "ERREUR"
      sendNotificationErreur= async () => {


        console.log("on entre dans la function")
        let notificationId = await Notifications.presentLocalNotificationAsync({
          
          title: "UCA Absence",
      
          body: "Erreur de connexion, réessayez.",
      
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
        this.setState({ scanned: true });
        console.log(ApiAuth.Token + "This is the token")

        if(data.includes("tok"))
        {
          this.sendNotificationImmediately();
          this._displayNewView();
          ApiAuth.StoreToken(data)
          this.save(data)
          console.log("Un Token a été scanné et stocké")
          ApiAuth.GetUserInfo()
        }else
        {
          this.sendNotificationErreur();
          console.log("Vous n'avez pas scanné de token")
        }
      };
      save = async (data) => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, data)
          alert('Votre authentification est sauvegardée')
        } catch (e) {
          alert('Votre anthentification a crash')
        }
      }

}

export default ScanCodeAuthentification;