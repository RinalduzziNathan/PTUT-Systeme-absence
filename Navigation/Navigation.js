import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../component/Search'
import FilmDetail from '../component/FilmDetail'
import Favorites from '../component/Favorite'
import ScanCodeAuthentification from '../component/ScanCodeAuthentification'
import ItemCour from '../component/ItemCour'
import SearchCour from '../component/SearchCour'
import ApiDialog from '../component/ApiComponent'
import Connexion from '../component/Connexion'
import Scanner from '../component/Scanner'
import AutoAutenthification from '../component/AutoAuthentification'


const SearchStackNavigator = createStackNavigator({

  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher"
    }
  },
  FilmDetail:{
    screen:FilmDetail,
    navigationOptions: {
      title: "détaille du film"
    }
  },
})

const StackNavigatorCoursApi = createStackNavigator({

  SearchCour: {
    screen: SearchCour,
    navigationOptions: {
      title: "UCA Gestion des absences ",
      headerTitleStyle:{
        color: "white"
      },
      headerStyle:{
        backgroundColor:"#316B7F"
      }
    }
  },
  ScannerCour:{
    screen: Scanner,
    navigationOptions: {
      title: "ALED"
    }
  }
})


const MoviesTabNavigator = createBottomTabNavigator({
  Cours:{
    screen: StackNavigatorCoursApi
  },
  Scanner: {
    screen: Scanner
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
    App: MoviesTabNavigator,
    Auth: ScanCodeAuthentification,
    StorageCheck : AutoAutenthification
    },
    {
      initialRouteName: 'StorageCheck',
    }
  )
);