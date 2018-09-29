import React from 'react';
import {Text, View,StyleSheet,Image } from 'react-native';


/*Teste*/

const Header = (props) => {

    
    (
    





<View style = {style.container}>


    <Text style ={style.tittle }>{props.tittle}</Text>
</View>    

)};
const style= StyleSheet.create({
    container:{
        marginTop:25,
        backgroundColor : '#6ca2f7',
        alignItems:'center',
        justifyContent:'center'
    },
    tittle:{
        fontSize:50,
        color: 'white'
    },

});

export default Header;


