import moment from "moment/moment";
import React from "react";
import { View, StyleSheet, Text, Image, Pressable} from "react-native";
import * as WebBrowser from 'expo-web-browser'


const MiniaturaNoticia = (props) =>{

    const goToSource = () => {
        WebBrowser.openBrowserAsync(props.url)
    }

    return(
        //<Tab.Screen name = "Noticias" component={Inicio} options={{
        //    tabBarIcon: () => <Entypo name = "home" size = {24} color = "black"/>  
        //  }}/>
        //  <Tab.Screen name = "Buscar" component={SearchScreen} options ={{
        //    tabBarIcon: () => <FontAwesome name = "search" size = {24} color="black"/>
        //  }}/>

        <Pressable style = {styles.container} onPress = {goToSource}>
            <Image source={{
                uri: props.urlToImage
            }} 
            style = {styles.image}
            />

            <View style = {{padding: 10}}>

                {/*Titulo*/}
                <Text style =  {styles.title}>
                    {props.Title} 
                </Text>

                {/*Descripcion*/}
                <Text style = {styles.description}>
                    {props.description}
                </Text>

                <View style = {styles.data}>
                    <Text style = {styles.heading}>por: <Text style = {styles.author}> {props.author}</Text></Text>
                    <Text style = {styles.date}> {moment(props.publishedAt).format("MMM Do YYYY ")}</Text>
                </View>

                {/*Fuente REVISAR ARQUITECTURA TABLA NOTICIAS*/}
                <View style = {{marginTop: 10}}>
                    <Text>fuente: <Text style = {styles.source}> {props.sourceName} </Text> </Text>
                </View>
                
            </View>
        </Pressable>
    )
}

export default MiniaturaNoticia;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "#52006A",
        elevation: 20,
        backgroundColor: "#fff",
        marginTop: 50
    },
    image: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16,
        fontWeight:"400",
        marginTop:12
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading:{

    },
    author:{
        fontWeight:"bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    }

});