import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/PBLkk_NDSJ2v2k4NMyph_Q",
            }}
          />
        }
        headerBackgroundColor={{ dark: "black", light: "white" }}
      >
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
        <Text>Explore Page</Text>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}
