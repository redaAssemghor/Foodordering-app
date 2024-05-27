import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "@components/EditScreenInfo";
import { Text, View } from "@components/Themed";
import products from "@assets/data/products";
import Colors from "src/constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`/${product.id}`} asChild>
      <View style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <text style={styles.title}>{product.name}</text>
        <text style={styles.price}>${product.price}</text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
