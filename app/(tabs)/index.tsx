import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const wallpapers = useWallpapers();

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
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name}
            />
          </View>
          <View style={styles.innerContainer}>
            {wallpapers.map((w, key) => {
              return <ImageCard key={key} wallpaper={w} />;
            })}
          </View>
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
