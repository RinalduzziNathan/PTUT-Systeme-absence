import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator,Image } from 'react-native'

class SardComponent extends React.Component{

    // constructor(){
    //   this.sourceImage = require('../Image/casser.png')

    // }  



    render() {
        return (
          <View style={{backgroundColor: 'grey', flex:1 ,flexDirection:'column'}}>
            <View style={{backgroundColor: 'green', flex: 0.5}}>
                <Text style={{fontFamily:"Gurmukhi MN",flex: 1}}>Monte un compte 0 => 30 contre des bots en stream </Text>
            </View>
              <View style={{backgroundColor: 'brown', flex: 1}}>
              <Text style={{fontFamily:"Kohinoor Bangla",flex: 1}}>Perds une game en placement contre des golds => rage</Text>
              <Text style={{fontFamily:"Menlo",flex: 1}}>Stuck low diam, commence à craquer mentalement</Text>  
            </View>
            <View style={{backgroundColor: 'red', flex: 2}}>
              <Text style={{fontFamily:"Heiti TC",flex: 1}}>Mais voila mais c'était sûr enfaite ! (mental breakdown)</Text>
              <Text style={{fontFamily:"Optima", flex: 1,fontSize:25}}>Tout casser !!</Text>
              <Image
              style={{width: 200, height: 200,flex:2}}
              source={
                require('../Image/casser.png')}/>
            </View>
          </View>  
            
          
        )}
}

export default SardComponent