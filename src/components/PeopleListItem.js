import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity  } from 'react-native';
import {capitalizeFirstLetter} from '../util';



const PeopleListItem = props =>{
    const {people,navigateToPeopleDetail} = props;
    const {title, first,last } = people.name;
    const {thumbnail} = people.picture;
    return(
        <TouchableOpacity onPress ={() => {
        console.log('Clicou', first);
        navigateToPeopleDetail({people});
        
        }}>
    <View  style={style.line}>
      
    <Image style = {style.avatar} source = {{uri:`${thumbnail}`}}/>
    
    <Text style={style.lineText}>
      {`${capitalizeFirstLetter(title)
      } ${capitalizeFirstLetter(first)
      }${capitalizeFirstLetter(last)}`
    }





    </Text>
    
</View>
</TouchableOpacity> 

);
}

 
const style = StyleSheet.create({

line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    alignItems: 'center',
    flexDirection: 'row',




},
lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex:7





},
avatar: {
    aspectRatio: 1,
    width:40,
    flex:1,
    borderRadius: 50,
    marginLeft: 15





}
});

export default PeopleListItem;