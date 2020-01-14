import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import * as Permissions from 'expo-permissions';

//pour le scan
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Notifications} from "expo";
import { ApiAuth } from './Api';

class Scanner extends React.Component{


    constructor(props){
        super(props);
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

        handleBarCodeScanned = ({ type, data }) => {
          this.setState({ scanned: true });
        };
}

export default Scanner;