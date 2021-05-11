import React from 'react'
import { TextInput,StyleSheet } from 'react-native'

const TxtInput = ({onChangeText}) => {
    return (
       <TextInput 
       style={styles.textinput}
       onChangeText={onChangeText}
       />
    )
}
const styles = StyleSheet.create({
    textinput: {
        width:"100%",
        height:56,
        borderRadius:5,
        backgroundColor: "#a6f1a6",
        margin:"auto",
        color:"#fff",
        fontSize:18,
        paddingLeft: 8,
        fontWeight:"bold",
     
    },
})
export default TxtInput
