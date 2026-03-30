import { Image, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { rentalProperties } from "../../constants/propertyList";

export default function ProductDetailScreen() {
  //below for param, id-line 6 give id that we click on- we get id frm here
  const { productDetail } = useLocalSearchParams() as any;


//for test
  //find product match that id and the whole product it self
  const selectedProduct = rentalProperties.find(
    (item) => item.id.toString() === productDetail,
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
