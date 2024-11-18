import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getInfoById } from "./api";

const Details = () => {
  const params = useLocalSearchParams();
  const [animal, setAnimal] = useState({} as any);
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await getInfoById(params.id as string);
      setAnimal(response);
    };

    fetchInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Details",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      {animal && (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            width: "90%",
            margin: 16,
            padding: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{animal.name}</Text>
          <Text style={{ fontWeight: "normal" }}>{animal.species}</Text>
          <Text style={{ fontWeight: "normal" }}>{animal.habitat}</Text>
          <Text style={{ fontWeight: "normal" }}>{animal.diet}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Details;
