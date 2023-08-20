import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../../constants";
import styles from "./headings.style";

export default function Headings() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProductsList");
          }}
        >
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
