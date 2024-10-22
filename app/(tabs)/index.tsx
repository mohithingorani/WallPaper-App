import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const wallpapers = useWallpapers();
  const [selectedWallPaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    wallpapers[0]
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpapers[0].url,
            }}
          />
        }
        headerBackgroundColor={{ dark: "black", light: "white" }}
      >
        <Text>{JSON.stringify(selectedWallPaper?.name)}</Text>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 == 0)}
              renderItem={({ item }) => (
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                  wallpaper={item}
                />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>

          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 == 1)}
              renderItem={({ item }) => (
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                  wallpaper={item}
                />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </ParallaxScrollView>
      {selectedWallPaper && <DownloadPicture wallPaper={selectedWallPaper} onClose={()=>{
        setSelectedWallpaper(null);
      }}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    gap: 10,
  },
  innerContainer: {
    flex: 1,
  },
});
