import React from 'react'
import { Text,StyleSheet } from 'react-native'

const RezultatiText = ({children}) => {
    return (
      <Text style={styles.rezultati}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    rezultati:{
        fontSize:24,
        fontWeight:"bold",
        color:"tomato",
        borderRadius:8,
        borderColor:"tomato",
        borderWidth:2,
        width:"100%",
        height: 50,
        paddingLeft: 10,
        justifyContent: "center"
    }
})
export default RezultatiText
