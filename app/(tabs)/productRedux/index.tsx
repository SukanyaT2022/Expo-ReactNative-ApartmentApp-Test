import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
//redux step 1 line below
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {rentalProperties} from '../../../constants/propertyList'
import CardComp from '@/components/ui/CardComp';
import { useRouter } from 'expo-router';
import { storeProductID } from '@/store/productSlice';

export default function AllProductRedux() {
  const router = useRouter()
  //redux step 2- dispatch send is from udser click send to store
  const dispatch = useAppDispatch()

const handleSelectedFunc = (id:any)=>{
  //this function and dispatch() is that user click to the store redux
dispatch(storeProductID(id))
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