//this component will be the first of the application, he will check if there is a viable token in the storage
//if the token is missing or outdated, you will be redirected to the scanner authentification,
// else you will acces the classroom list
import * as React from 'react';
import {AsyncStorage, View, Text } from 'react-native';



const STORAGE_KEY ='@save_token'

export default class AutoAutenthification extends React.Component{

    constructor(props){
        super(props)
        
        this.navigate = props.navigation

    }
    render() {
        return (
            <View>
                
                <Text>AutoAutenthification</Text>
            </View>
        )
    }

    componentWillMount(){
        if(this.retrieveData()){
          this._displayClassroom()
          
          console.log("REUSSI")
        }else
        {
          this._displayAuth();
          console.log("PAS REUSSI")
        }
      }
      retrieveData = async () => {
        try {
          const data = await AsyncStorage.getItem(STORAGE_KEY)
          alert("Token id : "+data)
   
          return true;
        } catch (e) {
          alert('Echec load data')
      
          return false;
        }
      }
      _displayClassroom = () => {
        this.navigate.navigate("App")
      }
      _displayAuth = () => {
        this.navigate.navigate("Auth")
      }
      

}