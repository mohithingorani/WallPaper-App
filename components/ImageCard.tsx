import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

export function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <View>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.labelContainer}>
        <ThemedText style={styles.textStyle}>{wallpaper.name}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    borderRadius: 10,
  },
  labelContainer: {
    
    borderRadius : 10,
    position: "absolute",
    bottom: 0,
    fontSize: 20,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
  },
  textStyle: {
    color: "white",
    padding: 10,
  },
});
