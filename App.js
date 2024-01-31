// Exercice 1
import React, { useState } from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";
import Example from "./Example";
import Exemple from "./Exemple";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Example/> */}
      <Exemple/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f2850d",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20,
  },

});
