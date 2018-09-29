import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import Header from  '../components/Header';
import PeopleList from  '../components/PeopleList';

import axios from 'axios';

export default class Teste extends React.Component {
  constructor(props){
    super(props);
      

  }
  

  
  render(){  
    

    return (

      <View>
        <Header tittle = "teste!"/>
        
      
      </View>
      
      
      
   
    );

    
  }
}
