import {ApiPTUT,PostApiPTUT} from '../api/TMDBapi.js'
import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator } from 'react-native'


class ApiDialog extends React.Component {


    constructor(props){
        super(props)
        this.messageToPost=""
    }

    swapTest(_text){
        this.messageToPost = _text;
    }

    _TestApi(){
        console.log('TEST DE L API EN COUR')
         ApiPTUT(9).then(data => {
        console.log(data)
        })
        
      }
    _TestPostApi(){
        console.log('TEST DE L API POST EN COUR')
        PostApiPTUT(this.messageToPost)
        this.messageToPost=""
    }
      
    render(){
        return (


            <View>
            <Button title = 'Recuperer les données de l api ' onPress={()=> this._TestApi()}></Button>     
             
            <TextInput
            placeholder='Message à envoyer'
            onChangeText={(messageToPost)=> this.swapTest(messageToPost)}
            onSubmitEditing={() => this._TestPostApi()}
            >
            </TextInput>   
            <Button title = 'POST API SIMON  ' onPress={()=> this._TestPostApi()}></Button> 
            
            </View>
        )
    }

}

export default ApiDialog
    