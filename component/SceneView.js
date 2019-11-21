import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator,Image } from 'react-native'

class SardComponent extends React.Component{

  



    render() {
        return (
          <View style={{backgroundColor: 'grey', flex:1 ,flexDirection:'column'}}>
            <View style={{backgroundColor: 'green', flex: 1}}>
                <Text style={{fontFamily:"Gurmukhi MN",flex: 1}}>Monte un compte 0 => 30 contre des bots en stream </Text>
            </View>
              <View style={{backgroundColor: 'yellow', flex: 1}}>
              <Text style={{fontFamily:"Kohinoor Bangla",flex: 1}}>Perds une game en placement contre des golds => rage</Text>
              <Text style={{fontFamily:"Menlo",flex: 1}}>Stuck low diam, commence à craquer mentalement</Text>  
            </View>
            <View style={{backgroundColor: 'red', flex: 1}}>
              <Text style={{fontFamily:"Heiti TC",flex: 1}}>Mais voila mais c'était sûr enfaite ! (mental breakdown)</Text>
              <Text style={{fontFamily:"Optima", flex: 1}}>Tout casser !!</Text>
              <Image
              style={{width: 66, height: 58,flex:1}}
              source={require('../Image/casser.png')}/>
            </View>
          </View>  
            
          
        )}
}

export default SardComponent