import React from 'react'
import { Text ,StyleSheet} from 'react-native'

const LabelText = ({children}) => {
    return (
        <Text style={styles.textStyle}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize:18,
        color:"green",
        fontWeight:"bold"
    },
})
export default LabelText
