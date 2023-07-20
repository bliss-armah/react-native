import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Title = () => {
  return (
    <Text style={styles.title}>Oppponent's Guess</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    screen:{
      flex:1,
      padding:24
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#ddb52f',
      textAlign:'center',
      borderWidth:2,
      borderColor:'#ddb52f',
      padding:12,
    }
  })