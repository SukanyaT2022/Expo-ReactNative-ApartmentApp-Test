import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { useSelector } from 'react-redux';
//line below bring id from store to this screen- redux
import { useAppSelector } from '@/store/hooks';
import { rentalProperties } from '@/constants/propertyList';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';


export default function SingleProduct() {
//line below bring id from store to this screen- redux
const {id} = useAppSelector(state => state.product);
const router = useRouter()
  //find product match that id and the whole product it self
  const selectedProduct = rentalProperties.find(
    //===id comefrom line 12
    (item) => item.id === id,
  );

  return (
     <View style={styles.main}>

         <Image
           source={{ uri: selectedProduct?.images[0] }}
           style={{ width: "100%", height: 200 }}
         />
  
         <View style={styles.textSection}>
           <Text>price:{selectedProduct?.price}</Text>
           <Text>title:{selectedProduct?.type}</Text>
           <Text>city:{selectedProduct?.city}</Text>
         </View>
          <TouchableOpacity style={styles.arrowIcon} onPress={() => router.push('/(tabs)/productRedux') }>
        <AntDesign name="arrow-left" size={20} color="black" onPress={() => router.push('/(tabs)/productRedux') }/>
        </TouchableOpacity>
       </View>
     );
}
   
   const styles = StyleSheet.create({
     main: {},
     textSection: {},
     arrowIcon:{
backgroundColor:'green',
zIndex:99,
position:'absolute',
width:45,
height:45,
top:30,
left: 20,
alignItems:'center',
justifyContent:'center',
     },

   });
   