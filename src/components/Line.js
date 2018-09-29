import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const Line = ({label, content}) =>{







return(
    <View style = {styles.line}>
        <Text style = {styles.cellContent}>{label} </Text>
        <Text style = {styles.cell}>{content}</Text>
    </View>




);

}

const styles = StyleSheet.create({
    line:{
        flexDirection : 'row',
        paddingTop: 2,
        paddingBottom: 2,
        borderWidth: 1,
        borderColor: '#e2f9ff'


    },
    cell:{
        fontSize : 15,
        paddingLeft:5,
        flex: 4
        

    },
    cellContent:{
    fontWeight: 'bold',
    fontSize : 15,
    paddingLeft:5,
    flex: 1

    }
    


});


export default Line;