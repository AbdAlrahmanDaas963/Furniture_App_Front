import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";

export default function Search() {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  console.log("searchKey :>> ", searchKey);

  // http://192.168.1.10:3000/api/products/search/${searchKey}

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.10:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            style={styles.searchInput}
            onChangeText={setSearchKey}
            placeholder="what are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.serachImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
}
