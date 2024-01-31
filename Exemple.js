import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Exemple = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textParent}>
        <Text>Texte</Text>
        <Text>Texte</Text>
      </Text>
      <Text style={styles.textParent2}>
        <View>
          <Text style={{ fontSize: 20 }}>
            Text<Text style={{ color: "orange" }}>Toto</Text>
          </Text>
          <Text>Texte</Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: 300,
    width: "75%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textParent: {
    color: "red",
  },
  textParent2: {
    color: "green",
  },
});

export default Exemple;
