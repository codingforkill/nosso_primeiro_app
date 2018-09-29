import React from 'react';
import { StyleSheet, Text, View,Button, ActivityIndicator } from 'react-native';


import PeopleList from  '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);
      this.state ={
      peoples:[],
      loading : false,
      error: false,

      };

  }
  componentDidMount(){
    this.setState ({loading:true});
    setTimeout(() => {
      
      axios.get('https://randomuser.me/api/?nat=br&results=150')
      .then(response =>{
        const {results} = response.data;
        this.setState({
          peoples:results,
          loading:false,

          
        });
      }).catch(error => {
        this.setState({error: true})
        





      });
    },1500)

  }

  renderLoading(){
    if (this.state.loading){
      return <ActivityIndicator size = "large" color = "black" ></ActivityIndicator>;
    }
    return null;

    
    
    


  }


 
  
  render(){  
    //this.props.navition.navigate('')//
    
    

    return (
        <View style = {styles.container}>
        
        { this.renderLoading() }

      <View >
        
  
      <PeopleList peoples ={this.state.peoples}
      onPressItem ={pageParams => {
        this.props.navigation.navigate('PeopleDetail',pageParams);
      }} />
      </View>
      </View>
      
      
      
   
    );

    
  }

  
}




const styles = StyleSheet.create({

  container:{
    justifyContent: 'center',
    flex: 1,
    

  }
});
