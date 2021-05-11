import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import MainText from '../components/MainText';

const Info = () => {
    return (
        <View style={{margin:40}}>
            
            <View style={{marginVertical: 30}}>
                 <MainText>INFORMATA MBI TATIMET</MainText>  
            </View>    
            <Text style={styles.textDec}>Tatimi mbi vlerën e shtuar (TVSH) është një tatim i përgjithshëm, mbi konsumin e mallrave dhe shërbimeve.</Text>
            <View style={styles.borderText} />
            <Text style={styles.textDec}>
            Të ardhura të tatueshme për një periudhë të tatueshme
 janë të ardhurat që rezultojnë nga ndryshimi ndërmjet
 të ardhurave bruto të pranuara ose të krijuara gjatë
 periudhës tatimore dhe zbritjeve të lejueshme sipas
 Ligjit për TAP lidhur me të ardhurat e tilla bruto.
            </Text>
            <View style={styles.borderText} />
            <Text style={styles.textDec}>
            Taksa është një detyrim financiar që personat fizikë (individët) ose personat juridikë (të gjitha entitetet e tjera ligjore) janë të detyruar ti paguajnë shtetit
            </Text>
            <View style={styles.borderText} />
            <Text style={styles.textDec}>
            Dogana është një autoritet ose agjensi qeveritare e një vendi që ka për detyrë mbledhjen e detyrimeve të importit si dhe kontrollin e mjeteve dhe mallrave që hyjnë/dalin në/nga territori doganor i atij vendi.
            </Text>
            <View style={styles.borderText}/>
 
        </View>
     )
 }
 
 const styles = StyleSheet.create({
     textDec:{
         fontSize:16,
         fontWeight:"bold",
         color:"green",
         marginBottom:14
     },
     borderText:{
         borderBottomColor: "tomato",
         borderWidth:1
     }
 
 })


export default Info
