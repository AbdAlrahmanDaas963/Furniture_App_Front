import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaFrameContext } from "react-native-safe-area-context";

export default function Cart() {
  return (
    <SafeAreaFrameContext>
      <Text>Cart</Text>
    </SafeAreaFrameContext>
  );
}

const styles = StyleSheet.create({});
