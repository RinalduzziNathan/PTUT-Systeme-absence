import {ApiPTUT,PostApiPTUT} from '../api/TMDBapi.js'
import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator } from 'react-native'


class ApiDialog extends React.Component {


    _TestApi(){
        console.log('TEST DE L API EN COUR')
         ApiPTUT(9).then(data => {
        console.log(data)
        })
        
      }
      _TestPostApi(){
        console.log('TEST DE L API POST EN COUR')
        PostApiPTUT()
        
      }
      
    render(){
        return (


            <View>
            <Button title = 'Simon API ' onPress={()=> this._TestApi()}></Button>     
                 
            <Button title = 'Simon API POST ' onPress={()=> this._TestPostApi()}></Button>    
            </View>
        )
    }

}

export default ApiDialog
    