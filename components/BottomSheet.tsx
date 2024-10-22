import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { SafeAreaView } from "react-native-safe-area-context";

export const DownloadPicture = ({
  onClose,
  wallPaper,
}: {
  onClose: () => void;
  wallPaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      backgroundComponent={null}
      onClose={onClose}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["90%"]}
      enablePanDownToClose
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{ height: 0 }}
      style={{ padding: 0, margin: 0 }}
    >
      <BottomSheetView
        style={[styles.contentContainer, { paddingTop: 0, marginTop: 0 }]}
      >
        <Image style={styles.image} source={{ uri: wallPaper.url }} />
        <Text>{wallPaper.name}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.text}>DOWNLOAD WALLPAPER</Text>
        </Pressable>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    height: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
