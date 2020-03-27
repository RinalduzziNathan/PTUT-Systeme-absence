import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ScanCodeAuthentification from '../component/ScanCodeAuthentification'
import SearchCour from '../component/SearchCour'
import Scanner from '../component/Scanner'
import AutoAutenthification from '../component/AutoAuthentification'
import Profil from '../component/Profil'
import { StyleSheet, Image } from 'react-native'
import React from 'react'



const StackNavigatorCoursApi = createStackNavigator({

  SearchCour: {
    screen: SearchCour,
    navigationOptions: {
      title: "UCA Gestion des absences ",
      headerTitleStyle: {
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#316B7F"
      }
    }
  },
  ScannerCour: {
    screen: Scanner,
    navigationOptions: {
      title: "Scannez le QR Code"
    }
  }
})


const MoviesTabNavigator = createBottomTabNavigator({
  Cours: {
    screen: StackNavigatorCoursApi,
    navigationOptions: {
      tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return <Image
          source={require('../Image/cours.png')}
          style={styles.icon} /> // On applique un style pour les redimensionner comme il faut
      }
    }
  },
  Profil: {
    screen: Profil,
    navigationOptions: {
      tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return <Image
          source={require('../Image/profil.png')}
          style={styles.icon} /> // On applique un style pour les redimensionner comme il faut
      }
    }
  }
},
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF', 
      showLabel: true, 
      showIcon: true 
    }
  }
)
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      App: MoviesTabNavigator,
      Auth: ScanCodeAuthentification,
      StorageCheck: AutoAutenthification
    },
    {
      initialRouteName: 'StorageCheck',
    }
  )
);


