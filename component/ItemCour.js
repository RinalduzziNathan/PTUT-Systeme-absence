import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class ItemCour extends React.Component {


  render() {
    //Objet contenant le cour (prof, matière heure)
    const Cours = this.props.Cour
    return (
    <TouchableOpacity>
     <View style={styles.main_container}>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontSize:20, fontWeight: "bold"}}>{Cours.date}</Text>
        </View>

        <View style={styles.cours_style}>
        <Text style={{fontSize:15}}>{Cours.title}</Text><Text style={{marginTop:9, fontSize:15}}>{Cours.professeur}</Text>
        </View>
      </View>
    </TouchableOpacity>  
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1, height: 90, flexDirection: 'column'/*, backgroundColor: "#0C6851"*/,
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: 'white',
  },

  cours_style:{
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ItemCour