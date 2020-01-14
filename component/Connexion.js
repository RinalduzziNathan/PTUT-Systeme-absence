import { TextInput, View, StyleSheet, Button, Image, TouchableOpacity, Text} from "react-native";
import React from 'react';
import ScanCode from "./ScanCode";

class Connexion extends React.Component{

    constructor(props){
        super(props);
        this.navigate = props.navigation;
    }

    _displayNewView = () => {
        console.log("Vue autentification")
        console.log(this);
        this.navigate.navigate("App")
   }
    
    render(){
        return(
            <View style={styles.main_container}>
                <View style={styles.container, styles.logo_container}>
                    <Image style={styles.image} source={require('../Image/logo-uca-.png')} />
                </View>
                {/* <View style={styles.container, styles.input_button_container}>
                    <TextInput style = {styles.textinput} placeholder='Identifiant' placeholderTextColor="#FFFFFF" color='#FFFFFF'/>
                    <TextInput style = {styles.textinput} placeholder='Mot De Passe' placeholderTextColor="#FFFFFF" color='#FFFFFF' />
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity = { .5 }  onPress={this._displayNewView}>
                        <Text style={styles.buttonText}>CONNEXION</Text>
                    </TouchableOpacity>
                </View> */}
                <View>
                    <ScanCode style={styles.scan}/>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      justifyContent : 'center',
      backgroundColor: '#38B2A8',
      alignItems:"center"
    },
    image:{
        width: 100,
        height: 100,
        marginTop: 40
    },
    container: {
        justifyContent: 'center'
    },
    input_button_container: {
        flex:4
    },
    logo_container: {
        flex:1
    },
    scan:{
        flex:3
    }
 })

  export default Connexion;