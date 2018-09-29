import {StackNavigator} from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import capitalizeFirstLetter from './src/util/capitalizeFirstLetter';





export default StackNavigator({
  'Main':
  {
    screen: PeoplePage
   },
   
    'PeopleDetail':{
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) => {
     const peopleName = navigation.state.params.people.name.first;
      const peopleNameLast = navigation.state.params.people.name.last;
     
      return({
        
        
        
      title : capitalizeFirstLetter(peopleName) +' '+capitalizeFirstLetter(peopleNameLast),
      headerTitleStyle:{
        color:'white',
        fontSize:30,
      }
    });
    }
  }
  ,

  },{
    navigationOptions:{
    title:'PESSOAS',
    headerTintColor : 'white',
    headerStyle:{
      backgroundColor : '#474747',
      borderWidth: 1,
      
      /*alignSelf:'center'  */


  },
  headerTitleStyle:{
    color:'white',
    fontSize:30,
    alignSelf:'center'


    
  }
}

});



