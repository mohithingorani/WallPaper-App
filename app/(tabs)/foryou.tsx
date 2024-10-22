import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Home Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View>
      <Text>Welcome to Settings Screen</Text>
    </View>
  );
}
