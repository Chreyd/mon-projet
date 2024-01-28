// Exercice 1
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, RefreshControl } from "react-native";

export default function App() {
  const obj = [
    { id: "1", name: "Stan", age: 45 },
    { id: "2", name: "Francine", age: 45 },
    { id: "3", name: "hayley", age: 18 },
    { id: "4", name: "Steve", age: 14 },
    { id: "5", name: "Roger", age: 1020 },
    { id: "6", name: "Klaus", age: 30 },
  ];

  const [family, setFamily] = useState(obj);

  return (
    
    <View style={styles.container}>
      <ScrollView refreshControl={
        <RefreshControl/>
      } >
        {family.map((member) => (
          
          <View key={member.id} style={styles.list}>
            <Text  style={styles.textList}>
              Nom: {member.name} | Age: {member.age}
            </Text>
          </View>
        ))}
        </ScrollView>
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
  list:{
    backgroundColor:"deepskyblue",
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
textList:{
  color: "#fff",
  padding: 6,
  fontSize: 40,
  width: 350,  
  textAlign: 'center'
}
,
});
