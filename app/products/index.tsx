import { Image } from 'expo-image';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import CardComp from '@/components/ui/CardComp';
import {rentalProperties} from '../../constants/propertyList'
import { useState } from 'react';

export default function AllProducts() {
  //this is not redux this select by method-- explain select id
const router = useRouter() as any

const handleSelectedFunc = (id:any)=>{

router.push(`/products/${id}`);
}

  return (
  <View style={styles.main}>
     <FlatList
    //  put gap top and bottom bet each box we put contentContainerStyle =
     contentContainerStyle = {{gap:10}}
        data={rentalProperties} // array of items
        keyExtractor={(item:any) => item.id} // unique key for each item
        renderItem={({ item }) => (
          // part 2 select id 
          <TouchableOpacity onPress={()=>handleSelectedFunc(item.id)}>
            <CardComp
    imageProp ={item.images[0]}
    priceProp={item.price}
    titleProp={item.type}
    cityProp={item.city}
   />
   </TouchableOpacity>
        )}
      />

  </View>
  );
}

const styles = StyleSheet.create({
 main:{
paddingHorizontal:20,


 } 
});
