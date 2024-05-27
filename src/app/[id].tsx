import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function MenuScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>product id is {id}</Text>
    </View>
  );
}
