import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

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
        <View style={styles.topbar}>
          <Ionicons onPress={onClose} name="close" size={30} color="white" />
          <View style={styles.topbarinner}>
            <Ionicons name="share" size={30} color="white" />
            <Ionicons name="heart" size={30} color="white" />
          </View>
        </View>
        <Text>{wallPaper.name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>DOWNLOAD WALLPAPER</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  topbar: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
    topbarinner: {
        flexDirection: "row",
        alignItems : "center",
        gap: 12
    },
});
