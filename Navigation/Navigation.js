import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Search from '../component/Search'
import FilmDetail from '../component/FilmDetail'
//import Search from '../component/Search'
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher"
    }
  },
  FilmDetail:{
    screen:FilmDetail
  }

})

export default createAppContainer(SearchStackNavigator)