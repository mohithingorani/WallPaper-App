import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

export function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <View>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <ThemedText style={styles.textStyle}>{wallpaper.name}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    margin: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 10,
  },
});
