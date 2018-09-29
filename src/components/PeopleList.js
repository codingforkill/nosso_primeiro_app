import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import PeopleListItem from './PeopleListItem';


const PeopleList = props => {
    const { peoples, onPressItem } = props;
 

    


    return (




       <FlatList style={style.container}
         data = {peoples}
            renderItem={({item})=> 
            (<PeopleListItem 
                people={item}
                navigateToPeopleDetail = {onPressItem} />)}

       
       keyExtractor = {(item => item.name.first)}/>


      
       
        
    )


};


const style = StyleSheet.create({
    container: {
        backgroundColor: '#808080'

    },


})


export default PeopleList;