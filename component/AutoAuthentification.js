//this component will be the first of the application, he will check if there is a viable token in the storage
//if the token is missing or outdated, you will be redirected to the scanner authentification,
// else you will acces the classroom list
import * as React from 'react';
import {AsyncStorage, View, ActivityIndicator, StyleSheet } from 'react-native';



const STORAGE_KEY ='@save_token'

export default class AutoAutenthification extends React.Component{

    constructor(props)
    {
        super(props)
        this.navigate = props.navigation
    }
    //waiting icon
    render() {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
    }

    //overload of this lifecycle, compute the logic if the token is viable or not and redirecte to the correct view
    async componentWillMount(){
        const IsAlreadyAuthentified = await this.retrieveData() 

        console.log("LA VALEUR DU BOOLEN " +IsAlreadyAuthentified)
        
        if(IsAlreadyAuthentified)
        {
          this._displayClassroom()
          alert("Super, vous etes déjà authentifié !")
          //AsyncStorage.clear()
          console.log("REUSSI")
        }else
        {
          this._displayAuth();
          alert("Veuillez scanner le qr code d'authentification du site")
          console.log("PAS REUSSI")
        }
      }
      //find the data (token)
      retrieveData = async () => {
        try {
          const data = await AsyncStorage.getItem(STORAGE_KEY)
         
          if(data===null){
            return false;
          }else
          {
            return true;
          }
        } catch (e) {
          alert('Echec load data')
      
          return false;
        }
      }

      //Display the nice view
      _displayClassroom = () => {
        this.navigate.navigate("App")
      }
      _displayAuth= () => {
        this.navigate.navigate("Auth")
      }
      

}
//waiting effect
const styles = StyleSheet.create({
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})