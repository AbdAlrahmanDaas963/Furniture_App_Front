import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";

export default function ProductRow() {
  const { data, isLoading, error } = useFetch();
  // console.log("data :>> ", data);
  // console.log("isLoading :>> ", isLoading);
  // console.log("error :>> ", error);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => <ProductCardView item={item} />}
        />
      )}
      {/* <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => <ProductCardView />}
      /> */}
    </View>
  );
}
