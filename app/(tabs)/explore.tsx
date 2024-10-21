import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  return (
    <SafeAreaView>
      <Text>Explore Page</Text>
      <Link href="/accountinfo">Account Information</Link>
    </SafeAreaView>
  );
}
