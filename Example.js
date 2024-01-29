import React, { useEffect } from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";

const Example = () => {
  useEffect(() => {
   const CKeyboardDidShow =  Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
   const CKeyboardDidHide =  Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
        CKeyboardDidShow.remove();
        CKeyboardDidHide.remove();

    //   Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
    //   Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    // alert("Veuillez remplire le champ") ;
  };

  const _keyboardDidHide = () => {
    alert("Merci d'avoir validé le Text input");
  };

  /* les évenement de  Keyboard.addListener()
  
        keyboardWillShow
        keyboardDidShow
        keyboardWillHide
        keyboardDidHide
        keyboardWillChangeFrame
        keyboardDidChangeFrame
 */

  /* 
    si [] est vide alorss il joue le role de componentDidMount
    si [] a un state qui permet de l'enclancher à chaque modification alors il joue le rôle de componentDidUpdate
    La fonction c'est en phase de démontage
*/

  return (
    <TextInput
      style={styles.input}
      onSubmitEditing={() => Keyboard.dismiss()}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: "#fff",
    width: 270,
  },
});

export default Example;
