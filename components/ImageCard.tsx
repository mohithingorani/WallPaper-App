import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";

export function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.imageCardFull}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.labelContainer}>
          <ThemedText style={styles.textStyle}>{wallpaper.name}</ThemedText>

          <Ionicons
            className="flex flex-col justify-center"
            name={"heart"}
            size={30}
            color="white"
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageCardFull: {
    marginBottom: 10,
  },
  image: {
    flex: 1,
    height: 300,
    borderRadius: 10,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
    justifyContent: "space-between",
    borderRadius: 10,

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
