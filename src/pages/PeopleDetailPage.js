import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import Line from '../components/Line';



export default class PeopleDetailPage extends React.Component {


    render(){  
        
        
        const{people} = this.props.navigation.state.params;
        /*const people ={"gender":"female","name":{"title":"miss","first":"juliana","last":"rodrigues"},"location":{"street":"7415 rua um","city":"rio de janeiro","state":"minas gerais","postcode":51222,"coordinates":{"latitude":"-52.3451","longitude":"121.8299"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"juliana.rodrigues@example.com","login":{"uuid":"8d2cbeb7-7740-4f40-a548-14e543a36c4a","username":"orangebutterfly376","password":"davide","salt":"Cqb9qbxu","md5":"2c4d34195f39d8ec4f092dfc6abdc903","sha1":"1ce03a7fe1ac3b806653b7f9d809d3d527281b33","sha256":"f76dbdda389f5399f8c75184fc8fd958b17037fc6cc58e5f85046e5ef1f2f136"},"dob":{"date":"1991-08-09T19:22:16Z","age":27},"registered":{"date":"2008-01-02T18:44:16Z","age":10},"phone":"(26) 1482-6205","cell":"(45) 7277-9066","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/29.jpg","medium":"https://randomuser.me/api/portraits/med/women/29.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/29.jpg"},"nat":"BR"}*/
       

        return (
        
<View style = {styles.container}>
<Image style = {styles.avatar}  source = {{uri:people.picture.large}}/>
<View style = {styles.deailContainer}>
  
    <Line label = "Email : " content = {people.email} />
    <Line label = "Cidade : " content = {people.location.city} />
    <Line label = "Estado : " content = {people.location.state} />
    <Line label = "Tel : " content = {people.phone} />
    <Line label = "Cel : " content = {people.cell} />
    <Line label = "Nacionalidade : " content = {people.nat} />
    
    

  
</View>
</View>





);}
}



const styles = StyleSheet.create({
    container: {
       padding: 15,
    },
    avatar: {
        aspectRatio: 1,
    
    
    },
    deailContainer:{
        backgroundColor : '#e2f9ff',
        marginTop:8,
        elevation:1,





    },
    line:{
        flexDirection : 'row',
        paddingTop: 2,
        paddingBottom: 2,
        borderWidth: 1,
        borderColor: '#e2f9ff'


    }
    ,

    cell:{
        fontSize : 14,
        paddingLeft:5,
        borderWidth: 1
        

    },
    cellContent:{
    
    fontWeight: 'bold',
    fontSize : 14,
    paddingLeft:5,


    },
    longLabel:{
        fontSize:12,


    }

    });

    

