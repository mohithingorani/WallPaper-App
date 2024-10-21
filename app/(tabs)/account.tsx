import { DownloadPicture } from "@/components/BottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { useState, useCallback, useRef } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [openPicture, setOpenPicture] = useState(false);

  // function to handle opening the bottom sheet

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>
          Accounts Page
        </Text>
        <Button
          title="Click to Open Picture"
          onPress={() => {
            setOpenPicture(!openPicture);
          }}
        />
        {openPicture && (
          <DownloadPicture onClose={() => setOpenPicture(false)} />
        )}
      </View>
    </SafeAreaView>
  );
}
