import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(nobottombar)"
        options={{
          headerShown: true,
          headerTitle: "Account Information",
          headerBackTitle: "Go Back",
        }}
      />
    </Stack>
  );
}
