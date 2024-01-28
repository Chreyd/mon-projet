// Exercice 1
import React, { useState } from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";

export default function App() {
  const obj = [
    {
      role: "Père",
      data: ["Stan", 45],
    },
    {
      role: "Mère",
      data: ["Francine", 45],
    },
    {
      role: "Fille",
      data: ["hayley", 18],
    },
    {
      role: "Fils",
      data: ["Steve", 14],
    },
    {
      role: "Alien",
      data: ["Roger", 1020],
    },
    {
      role: "Poisson",
      data: ["Klaus", 30],
    },
  ];

  const [family, setFamily] = useState(obj);

  return (
    <View style={styles.container}>
      <SectionList
        sections={family}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({section}) => (
          <View style={styles.list}>
            <Text style={styles.textList}>
              {section.role}
            </Text>
          </View>
        )}
        renderItem={({ item }) => {
          return (
            <View >
              <Text style={styles.textListData}>
               {item}
              </Text>
            </View>
          );
        }}
      />

      {/*       <FlatList
        data={family}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View style={styles.list}>
              <Text style={styles.textList}>
                Nom: {item.name} | Age: {item.age}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        inverted={invert}
        refreshControl={<RefreshControl onRefresh={onRefresh} />}
      /> */}
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
  textListData:{
    color: 'grey',
    padding: 9,
    fontSize: 19,
    textAlign: "center",

  }
});
