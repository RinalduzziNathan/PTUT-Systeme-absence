import { TextInput, View, StyleSheet, Button, Image } from "react-native";
import React from 'react';

class Connexion extends React.Component{

    render(){
        return(
            <View style={styles.main_container}>
                <Image style={styles.image} source={require('../Image/logo-uca-.png')} />
                <TextInput style = {styles.textinput} placeholder='Identifiant'/>
                <TextInput style = {styles.textinput} placeholder='Mot De Passe'/>
                <Button title="Connexion" />
            </View>
        )
    }

    //faire deux view 
    //la grande à l'horizontal

}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      justifyContent : 'center',
      backgroundColor: '#158988'
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    image:{
        width: 150,
        height: 150,
        
        
    }
  })

  export default Connexion;