import { Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getInfo } from "./api";
import { Stack, Link } from "expo-router";

const Index = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await getInfo();
      setAnimals(response);
    };

    fetchInfo();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      {animals &&
        animals.map((animal) => {
          return (
            <View
              key={animal.id}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                width: "90%",
                margin: 16,
                padding: 16,
              }}
            >
              <Link
                href={{
                  pathname: "/details",
                  params: { id: animal.id },
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{animal.name}</Text>
              </Link>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default Index;
