import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../images/logo.png")} />
      <TouchableOpacity>
        <Image style={styles.menu} source={require("../../images/menu.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
