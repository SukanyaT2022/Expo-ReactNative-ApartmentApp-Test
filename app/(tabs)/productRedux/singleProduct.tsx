import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react'
import { useSelector } from 'react-redux';
//line below bring id from store to this screen- redux
import { useAppSelector } from '@/store/hooks';
import { rentalProperties } from '@/constants/propertyList';



const singleProduct = () => {
//line below bring id from store to this screen- redux
const {id} = useAppSelector(state => state.product);

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
       </View>
     );
   }
   
   const styles = StyleSheet.create({
     main: {},
     textSection: {},
   });
   