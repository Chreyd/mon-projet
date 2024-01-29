// Exercice 1
import React, { useState } from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";
import Example from "./Example";








export default function App() {
  return (
    <View style={styles.container}>
      <Example/>
    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  list: {
    backgroundColor: "deepskyblue",
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textList: {
    color: "#fff",
    padding: 6,
    fontSize: 40,
    width: 350,
    textAlign: "center",
  },
  textListData: {
    color: "grey",
    padding: 9,
    fontSize: 19,
    textAlign: "center",
  },
});
