import { View, Text, Button } from "react-native";
import React from "react";

export default function Episodio({ route, navigation }) {
  const { name } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
