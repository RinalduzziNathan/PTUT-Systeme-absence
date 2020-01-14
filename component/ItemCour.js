import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'

class ItemCour extends React.Component {


  render() {
    //Objet contenant le cour (prof, matière heure)
    const Cour = this.props.Cour
    return (
    <TouchableOpacity>
     <View style={styles.main_container}>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontSize:10, fontWeight: "bold"}}>{Cour.date}</Text>
        </View>

        <View style={styles.cours_style}>
        <Text>{Cour.title}</Text><Text style={{marginTop:9}}>{Cour.professeur}</Text>
        </View>
        
      </View>
    </TouchableOpacity>  
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1, height: 90, flexDirection: 'column', backgroundColor: "#E0E0E0",
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: '#6b6e6c',
  },

  cours_style:{
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10
  }
})

export default ItemCour