import React from 'react'
import { Text, View ,StyleSheet,Platform, StatusBar} from 'react-native'

const Screen = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : "",
        width: "80%",
        marginHorizontal: "10%"
    }
})
export default Screen
