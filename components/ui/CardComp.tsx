import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
interface CardCompProp{
    imageProp: string,
    priceProp:number,
    titleProp:string,
    cityProp:string,
}
const CardComp = ({imageProp,priceProp,titleProp, cityProp}:CardCompProp) => {
  return (
    
    <View style={styles.main}>     
  <Image
       source={{uri:imageProp}}
        style={{ width:'100%', height: 200,  }}
      />
      <View style={styles.textSection}>
        <Text>price:{priceProp}</Text>
          <Text>title:{titleProp}</Text>
            <Text>city:{cityProp}</Text>
      </View>
    </View>
  )
}

export default CardComp

const styles = StyleSheet.create({
    main:{

    },
    textSection:{
        backgroundColor:'gray',
    }
})