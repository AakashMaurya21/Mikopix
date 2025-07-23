// import { View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// export default function image() {
//   const { url } = useLocalSearchParams();
//   const router = useRouter();

//   return (
//     <Pressable style={styles.container} onPress={() => router.back()}>
//       <Image
//         source={{ uri: url }}
//         style={styles.image}
//         resizeMode="contain"
//       />
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// app/image.js

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Pressable,
//   ActivityIndicator,
// } from "react-native";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import * as MediaLibrary from "expo-media-library";
// import * as FileSystem from "expo-file-system";
// import { Ionicons } from "@expo/vector-icons";

// export default function ImageScreen() {

//   const router = useRouter();

//   const { url } = useLocalSearchParams();
//   const [downloading, setDownloading] = useState(false);
//   const [message, setMessage] = useState(null); // { text: '', type: 'success' | 'error' }
//   const randomNumber = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

//   const showMessage = (text, type = "success") => {
//     setMessage({ text, type });

//     // Auto hide after 3.5 seconds
//     setTimeout(() => {
//       setMessage(null);
//     }, 3500);
//   };

//   const downloadImage = async () => {
//     const { status } = await MediaLibrary.requestPermissionsAsync();
//     if (status !== "granted") {
//       showMessage("Permission denied to save image.", "error");
//       return;
//     }

//     try {
//       setDownloading(true);
//       const fileUri =
//         FileSystem.documentDirectory + `wallpaper-${randomNumber}.jpg`;
//       const downloadResumable = FileSystem.createDownloadResumable(
//         url,
//         fileUri
//       );
//       const { uri } = await downloadResumable.downloadAsync();

//       const asset = await MediaLibrary.createAssetAsync(uri);
//       await MediaLibrary.createAlbumAsync("MikoPix", asset, false);

//       showMessage("Image saved to gallery!");
//     } catch (error) {
//       console.error(error);
//       showMessage("Failed to download image.", "error");
//     } finally {
//       setDownloading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//   source={url ? { uri: url } : require("../assets/images/placeholder.png")}
//   style={styles.image}
//   resizeMode="cover"
// />

//       <Pressable style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="arrow-back" size={24} color="white" />
//         <Text style={styles.downloadText}>Back</Text>
//       </Pressable>

//       <Pressable
//         style={styles.downloadBtn}
//         onPress={downloadImage}
//         disabled={downloading}
//       >
//         {downloading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <>
//             <Ionicons name="download-outline" size={20} color="white" />
//             <Text style={styles.downloadText}>Download</Text>
//           </>
//         )}
//       </Pressable>

//       {message && (
//         <View
//           style={[
//             styles.messageBox,
//             {
//               backgroundColor: message.type === "error" ? "#ff4d4d" : "#4CAF50",
//             },
//           ]}
//         >
//           <Text style={styles.messageText}>{message.text}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#111",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   image: {
//     width: "90%",
//     height: "60%",
//     borderRadius: 20,
//   },
//   text: {
//     marginTop: 20,
//     color: "#fff",
//   },
//   downloadBtn: {
//     flexDirection: "row",
//     backgroundColor: "#1e90ff",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 15,
//     marginTop: 20,
//     alignItems: "center",
//     gap: 10,
//   },
//   downloadText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   messageBox: {
//     position: "absolute",
//     bottom: 30,
//     padding: 12,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     alignSelf: "center",
//   },
//   messageText: {
//     color: "#fff",
//     fontWeight: "600",
//   },
//   backButton: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//     zIndex: 10,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     padding: 8,
//     borderRadius: 20,
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import * as setModule from "../modules/set-wallpaper";
// import {hello} from "../modules/set-wallpaper";

export default function ImageScreen() {
  const router = useRouter();
  const { url } = useLocalSearchParams();
  const [imageSize, setImageSize] = useState(null); // { width, height }
  const [fileSize, setFileSize] = useState(null); // in bytes
  const [downloading, setDownloading] = useState(false);
  const [message, setMessage] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const randomNumber = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

  useEffect(() => {
    if (!url) return;

    // Get resolution
    Image.getSize(url, (width, height) => {
      setImageSize({ width, height });
    });

    // Get file size using fetch + blob
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        setFileSize(blob.size); // size in bytes
      })
      .catch((err) => console.warn("Error fetching image info:", err));
  }, [url]);

  // const handleSetWallpaper = async () => {
  //   try {
  //     setDownloading(true);
  //     // const result = await myModule.setWallpaper(url);// calls the Kotlin function
  //     showMessage("Wallpaper set successfully!");
  //   } catch (error) {
  //     console.error("Failed to set wallpaper:", error);
  //     showMessage("Failed to set wallpaper.", "error");
  //   } finally {
  //     setDownloading(false);
  //   }
  // };

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3500);
  };

  const downloadImage = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      showMessage("Permission denied to save image.", "error");
      return;
    }

    try {
      setDownloading(true);
      const fileUri =
        FileSystem.documentDirectory + `wallpaper-${randomNumber}.jpg`;
      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        fileUri
      );
      const { uri } = await downloadResumable.downloadAsync();
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("MikoPix", asset, false);
      showMessage("Image saved to gallery!");
    } catch (error) {
      console.error(error);
      showMessage("Failed to download image.", 'error');
    } finally {
      setDownloading(false);
    }
  };

  // Popular app icons
  const popularApps = [
    { name: "Instagram", icon: require("../assets/icons/instagram.png") },
    { name: "YouTube", icon: require("../assets/icons/youtube.png") },
    { name: "WhatsApp", icon: require("../assets/icons/whatsapp.png") },
    // { name: "Snapchat", icon: require("../assets/icons/snapchat.png") },
    { name: "Facebook", icon: require("../assets/icons/facebook.png") },
    { name: "Twitter", icon: require("../assets/icons/twitter.png") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.wallpaperContainer}>
        <Image
          source={
            url ? { uri: url } : require("../assets/images/placeholder.png")
          }
          style={styles.image}
          resizeMode="cover"
        />
        {previewMode && (
          <>
            {/* Simulated Status Bar */}
            <View style={styles.statusBar}>
              <Text style={styles.statusText}>9:41</Text>
              <View style={styles.statusIcons}>
                <Ionicons name="wifi" size={16} color="white" />
                <Ionicons name="battery-full" size={16} color="white" />
              </View>
            </View>

            {/* Popular Apps Grid */}
            <View style={styles.dock}>
              {popularApps.map((app, i) => (
                <View key={i} style={styles.appIcon}>
                  <Image source={app.icon} style={styles.appImage} />
                </View>
              ))}
            </View>

            {/* Simulated Dock
            <View style={styles.dock}>
              {[...Array(4)].map((_, i) => (
                <View key={i} style={styles.appIcon}>
                  <MaterialIcons name="apps" size={24} color="white" />
                </View>
              ))}
            </View> */}
          </>
        )}
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: "row", marginTop: 20, gap: 10 }}>
        <Pressable
          style={styles.toggleBtn}
          onPress={() => setPreviewMode(!previewMode)}
        >
          <Ionicons name="eye" size={18} color="white" />
          <Text style={styles.downloadText}>
            {previewMode ? "Image View" : "Home Preview"}
          </Text>
        </Pressable>

        <Pressable
          style={styles.downloadBtn}
          onPress={downloadImage}
          disabled={downloading}
        >
          {downloading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Ionicons name="download-outline" size={20} color="white" />
              <Text style={styles.downloadText}>Download</Text>
            </>
          )}
        </Pressable>
        {/* <Pressable
          style={styles.downloadBtn}
          onPress={handleSetWallpaper}
          disabled={downloading}
        >
          {downloading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Ionicons name="image-outline" size={20} color="white" />
              <Text style={styles.downloadText}>Set as Wallpaper</Text>
            </>
          )}
        </Pressable> */}
      </View>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>

      {imageSize && fileSize !== null && (
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            {/* <Text style={styles.infoLabel}>Resolution</Text> */}
            <Text style={styles.infoValue}>
              Resolution: {imageSize.width} × {imageSize.height}
            </Text>
          </View>
          <View style={styles.infoItem}>
            {/* <Text style={styles.infoLabel}>Size</Text> */}
            <Text style={styles.infoValue}>
              Size: {(fileSize / (1024 * 1024)).toFixed(2)} MB
              {/* {hello()} */}
            </Text>
          </View>
        </View>
      )}

      {message && (
        <View
          style={[
            styles.messageBox,
            {
              backgroundColor: message.type === "error" ? "#ff4d4d" : "#4CAF50",
            },
          ]}
        >
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  wallpaperContainer: {
    width: "90%",
    height: "80%",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  statusBar: {
    position: "absolute",
    top: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
  },
  statusIcons: {
    flexDirection: "row",
    gap: 8,
  },
  appGrid: {
    position: "absolute",
    top: 60,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    rowGap: 20,
  },
  appIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  appImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    resizeMode: "contain",
  },
  dock: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  downloadBtn: {
    flexDirection: "row",
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    gap: 10,
  },
  toggleBtn: {
    flexDirection: "row",
    // backgroundColor: "#444",
    backgroundColor: "#444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    gap: 10,
  },
  downloadText: {
    color: "#fff",
    fontSize: 16,
  },
  messageBox: {
    position: "absolute",
    bottom: 30,
    padding: 12,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  messageText: {
    color: "#fff",
    fontWeight: "600",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 8,
    borderRadius: 20,
  },
  infoBox: {
    marginTop: 16,
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  infoItem: {
    // backgroundColor: "#4CAF50",
    backgroundColor: "transparent",
    borderColor: "#4CAF50",
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: "center",
    // minWidth: 130,
  },
  // infoLabel: {
  //   color: "#e0f5e9",
  //   fontWeight: "bold",
  //   fontSize: 14,
  // },
  infoValue: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
  },
});
