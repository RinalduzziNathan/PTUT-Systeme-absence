import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../component/Search'
import SardComponent from '../component/SceneView'
import FilmDetail from '../component/FilmDetail'
import Favorites from '../component/Favorite'
import ScanCode from '../component/ScanCode'


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
      title: "détaille + sardoche"
    }
  },
  NewViewSardoche:{
    screen: SardComponent,
    navigationOptions:{
      title: "PrionsLeCycle"
    }

  }
})


const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: Search
  },
  Scanner: {
    screen: ScanCode
  }
})
export default createAppContainer(MoviesTabNavigator)