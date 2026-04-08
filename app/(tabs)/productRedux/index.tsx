import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Dimensions, TextInput } from 'react-native';
//redux step 1 line below
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {rentalProperties} from '../../../constants/propertyList'
import CardComp from '@/components/ui/CardComp';
import { useRouter } from 'expo-router';
import { storeProductID } from '@/store/productSlice';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function AllProductRedux() {
  const router = useRouter()
  //redux step 2- dispatch send is from udser click send to store
  const dispatch = useAppDispatch()

const handleSelectedFunc = (id:any)=>{
  //this function and dispatch() is that user click to the store redux
dispatch(storeProductID(id))
// router.push(`/products/${id}`);
router.push(`/productRedux/singleProduct`);
}

// search bar function part 1
  const [storeUserType, setStoreUserType] = useState('');
  const [storeSearchItem, setStoreSearchItem] = useState(rentalProperties) as any;
  
const handleSearch = (text:string) => {
    setStoreUserType(text);

    const filtered = rentalProperties.filter(item =>
      item.type.toLowerCase().includes(text.toLowerCase())
    );

    setStoreSearchItem(filtered);
  };


  return (
 <View style={styles.main}>

  {/* search bar part2 */}
 <View style={styles.container}>
      <Ionicons name="search" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={storeUserType}
        onChangeText={handleSearch}
      />
    </View>



     <FlatList
    //  put gap top and bottom bet each box we put contentContainerStyle =
     contentContainerStyle = {{gap:10}}
     //filtr search step 3 below
        data={storeSearchItem} // array of items
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
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
 main:{
paddingHorizontal:20,
marginTop:30,
 },
 container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
    width: width * 0.9, // 90% of screen width
    height: 40,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});