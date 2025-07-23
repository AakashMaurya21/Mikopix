// import { View, Text, Pressable, Image, StyleSheet,Alert } from 'react-native'
// import React from 'react'
// import { Link } from 'expo-router'
// import * as MediaLibrary from 'expo-media-library';
// import * as FileSystem from 'expo-file-system';
// import Toast from 'react-native-toast-message';
// import { useRouter } from 'expo-router';

// export default function ImageCard({item}) {

//     const router = useRouter();

//     const randomNumber = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

//     // const downloadAndSaveImage = async () => {
//     //     const { status } = await MediaLibrary.requestPermissionsAsync();
//     //     if (status !== 'granted') {
//     //         Toast.show({
//     //             type: 'error',
//     //             text1: 'Permison Denied',
//     //             text2: "We need access to your media library."
//     //           });
//     //     //   Alert.alert('Permission Denied', 'We need access to your media library.');
//     //       return;
//     //     }

//     //     try {
//     //         const fileUri = FileSystem.documentDirectory + `wallpaper-${randomNumber}.jpg`;
//     //         const downloadResumable = FileSystem.createDownloadResumable(item, fileUri);
//     //         const { uri } = await downloadResumable.downloadAsync();

//     //         const asset = await MediaLibrary.createAssetAsync(uri);
//     //         await MediaLibrary.createAlbumAsync('Wallpapers', asset, false);

//     //         Toast.show({
//     //             type: 'success',
//     //             text1: 'Saved!',
//     //             text2: 'Set it as wallpaper from your gallery.'
//     //           });
//     //         // Alert.alert('Saved!', 'Image has been saved to your gallery. Set it as wallpaper manually.');
//     //       } catch (error) {
//     //         console.error(error);
//     //         Toast.show({
//     //             type: 'error',
//     //             text1: 'Error',
//     //             text2: "Couldn't save the image."
//     //           });
//     //       }
//     //     };

//     const randomHeight = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
// //  randomHeight = 200;
//   return (
//    <Pressable onPress={() => router.push({ pathname: '/image', params: { url: item } })} style={[styles.wrappers, { height: randomHeight }]}>
//     {/* <Link href={item}>Item</Link> */}
//     <View style={{ flex: 1 }}>
//     <Image
//         source={{uri: item }}
//         transition={100}
//         style={{
//           width: "100%",
//           height: "100%",
//         //   aspectRatio: 135 / 76,
//         //   aspectRatio: 9/16
//         }}
//           resizeMode='cover'
//       />
//       </View>
//    </Pressable>

//   )
// }

// const styles = StyleSheet.create({
//     wrappers: {
//         backgroundColor: "grey",
//         borderRadius: 40,
//         borderCurve: "Continuous",
//         overflow: 'hidden',
//        margin: 9,
//     }
// })

/*import React, { useState, useEffect } from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Modal,
  Dimensions,
  Text,
  ActivityIndicator,
} from "react-native";
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import Toast from "react-native-toast-message";
// import {
//   RewardedInterstitialAd,
//   RewardedAdEventType,
//   TestIds,
// } from "react-native-google-mobile-ads";

// const adUnitId = __DEV__
//   ? TestIds.REWARDED_INTERSTITIAL
//   : "ca-app-pub-3940256099942544/5354046379";

// let rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(
//   adUnitId,
//   {
//     requestNonPersonalizedAdsOnly: true,
//   }
// );

const { width, height } = Dimensions.get("window");

export default function ImageCard({ item }) {
  const router = useRouter();
  // const [loaded, setLoaded] = useState(false);
  // const [isAdLoading, setIsAdLoading] = useState(true);
  // const [isAdShowing, setIsAdShowing] = useState(false);
  // const [isDownloadEnabled, setIsDownloadEnabled] = useState(true);

  // useEffect(() => {
  //   const unsubscribeLoaded = rewardedInterstitial.addAdEventListener(
  //     RewardedAdEventType.LOADED,
  //     () => {
  //       setLoaded(true);
  //       setIsAdLoading(false);
  //       setIsDownloadEnabled(true);
  //     }
  //   );
  //   let unsubscribeEarned = rewardedInterstitial.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //      () => {
  //       setIsAdShowing(false); // Hide spinner once reward is earned
  //       // Optionally, you could show a success toast here or do something after reward is earned.
  //       setIsAdLoading(true);
  //       setIsDownloadEnabled(true);
  //       // rewardedInterstitial = null;
  //       rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(
  //         adUnitId,
  //         {
  //           requestNonPersonalizedAdsOnly: true,
  //         }
  //       );
  //       rewardedInterstitial.load(); // Reload the ad for next time
  //     }
  //   );

  //   // const unsubscribeClosed = rewardedInterstitial.addAdEventListener(
  //   //   RewardedAdEventType.CLOSED,
  //   //   () => {
  //   //     Toast.show({
  //   //       type: "success",
  //   //       text1: "Ad closed",
  //   //       text2: "Try again in a few seconds.",
  //   //     })
  //   //   }
  //   // );


  //   // const unsubscribeError = rewardedInterstitial.addAdEventListener(
  //   //     RewardedAdEventType.ERROR,
  //   //     () => {
  //   //       setLoaded(false);
  //   //       setIsAdLoading(false);
  //   //       setIsDownloadEnabled(true); // Enable download again even if ad failed
  //   //       Toast.show({
  //   //         type: "error",
  //   //         text1: "Ad failed to load",
  //   //         text2: "Try again in a few seconds.",
  //   //       });
  //   //     }
  //   //   );

  //   // Start loading the rewarded interstitial ad straight away
  //   rewardedInterstitial.load();

  //   // Unsubscribe from events on unmount
  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };
  // }, []);

  // No advert ready to show yet
  //   if (!loaded) {
  //     return null;
  //   }

  const [modalVisible, setModalVisible] = useState(false);
  const randomHeight = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

  const randomNumber = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

  const downloadAndSaveImage = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Toast.show({
        type: "error",
        text1: "Permison Denied",
        text2: "We need access to your media library.",
      });
      //   Alert.alert('Permission Denied', 'We need access to your media library.');
      return;
    }

    try {
      const fileUri =
        FileSystem.documentDirectory + `wallpaper-${randomNumber}.jpg`;
      const downloadResumable = FileSystem.createDownloadResumable(
        item,
        fileUri
      );
      const { uri } = await downloadResumable.downloadAsync();

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("MikoPix", asset, false);

      Toast.show({
        type: "success",
        text1: "Saved!",
        text2: "Set it as wallpaper from your gallery.",
      });
      // Alert.alert('Saved!', 'Image has been saved to your gallery. Set it as wallpaper manually.');
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Couldn't save the image.",
      });
    }
  };

  return (
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[styles.wrappers, { height: randomHeight }]}
      >
        <Image
          source={{ uri: item }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.modalImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.actionsRow}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.iconBtn}
            >
              <Ionicons name="close" size={22} color="white" />
              <Text style={styles.btnText}>Close</Text>
            </Pressable>
            {/* <Pressable
              onPress={async () => {
                if (isDownloadEnabled) {
                  if (loaded) {
                    setIsAdShowing(true);

                     unsubscribeEarned = rewardedInterstitial.addAdEventListener(
                      RewardedAdEventType.EARNED_REWARD,
                      () => {
                        unsubscribeEarned();
                        downloadAndSaveImage(); // Only this image
                        setIsAdShowing(false);
                        //   unsubscribe(); // Important: Clean up after
                        //   rewardedInterstitial.load(); //load next ad
                      }
                    );

                    rewardedInterstitial.show();
                  } else {
                    setIsAdLoading(true);
                    rewardedInterstitial.load(); // Load the ad again

                    setTimeout(() => {
                      setIsAdLoading(false);
                    }, 4000); // Show loading spinner briefly
                  }
                } else {
                  Toast.show({
                    type: "error",
                    text1: "Ad not available",
                    text2: "Restart the app to load ads.",
                  });
                }
              }}
              style={styles.iconBtn}
            >
              {isAdLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <>
                  <Ionicons name="download-outline" size={22} color="white" />
                  <Text style={styles.btnText}>Download</Text>
                </>
              )}
            </Pressable> }
            <Pressable onPress={() => {setModalVisible(false); router.push({ pathname: '/image', params: { url: item } })}} style={styles.iconBtn}>
              <Ionicons name="arrow-forward" size={22} color="white" />
              <Text style={styles.btnText}>Go</Text>
            </Pressable>
            {/* <Pressable onPress={() => {}} style={styles.iconBtn}>
              <Ionicons name="share-social-outline" size={22} color="white" />
              <Text style={styles.btnText}>Share</Text>
            </Pressable> }
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  wrappers: {
    backgroundColor: "grey",
    borderRadius: 40,
    borderCurve: "continuous",
    overflow: "hidden",
    margin: 9,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.5,
    height: height * 0.5,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  modalImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtn: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 10,
    borderRadius: 12,
    width: 80,
  },
  btnText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});
*/


import React, { useState } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Modal,
  Dimensions,
  Text,
  Image
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FastImage from "react-native-fast-image";

const { width, height } = Dimensions.get("window");

export default function ImageCard({ item }) {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const randomHeight = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

  return (
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[styles.wrappers, { height: randomHeight }]}
      >
        <FastImage
          source={{
            uri: item,
            priority: FastImage.priority.normal,
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode={FastImage.resizeMode.cover}
          // cache = {FastImage.cacheControl.web}
        />
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.imageContainer}>
            <FastImage
              source={{ uri: item }}
              style={styles.modalImage}
              resizeMode={FastImage.resizeMode.cover}
              // cache = {FastImage.cacheControl.web}
            />
          </View>

          <View style={styles.actionsRow}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.iconBtn}
            >
              <Ionicons name="close" size={22} color="white" />
              <Text style={styles.btnText}>Close</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setModalVisible(false);
                router.push({ pathname: "/image", params: { url: item } });
              }}
              style={styles.iconBtn}
            >
              <Ionicons name="arrow-forward" size={22} color="white" />
              <Text style={styles.btnText}>Go</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  wrappers: {
    backgroundColor: "grey",
    borderRadius: 40,
    borderCurve: "continuous",
    overflow: "hidden",
    margin: 9,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.5,
    height: height * 0.5,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  modalImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtn: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 10,
    borderRadius: 12,
    width: 80,
  },
  btnText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});




/*
import React, { useState, useEffect } from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Modal,
  Dimensions,
  Text,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import Toast from "react-native-toast-message";
import {
  RewardedInterstitialAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.REWARDED_INTERSTITIAL
  : 'ca-app-pub-3940256099942544/5354046379';


const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});


const { width, height } = Dimensions.get("window");

export default function ImageCard({ item }) {
  
    const [rewardedInterstitialLoaded, setRewardedInterstitialLoaded] = useState(false);
    const [isAdShowing, setIsAdShowing] = useState(false);

    const loadRewardedInterstitial = () => {
        const unsubscribeLoaded = rewardedInterstitial.addAdEventListener(
          RewardedAdEventType.LOADED,
          () => {
            setRewardedInterstitialLoaded(true);
          }
        );
    
        const unsubscribeEarned = rewardedInterstitial.addAdEventListener(
          RewardedAdEventType.EARNED_REWARD,
          reward => {
            downloadAndSaveImage();
          }
        );
    
        const unsubscribeClosed = rewardedInterstitial.addAdEventListener(
          RewardedAdEventType.CLOSED,
          () => {
            setIsAdShowing(false);
            setRewardedInterstitialLoaded(false);
            rewardedInterstitial.load();
          }
        );
    
        rewardedInterstitial.load();
    
        return () => {
          unsubscribeLoaded();
          unsubscribeClosed();
          unsubscribeEarned();
        }
      };


      useEffect(() => {
        const unsubscribeRewardedInterstitialEvents = loadRewardedInterstitial();
    
        return () => {
          unsubscribeRewardedInterstitialEvents();
        };
      }, [])
    

  const [modalVisible, setModalVisible] = useState(false);
  const randomHeight = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

  const randomNumber = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

  const downloadAndSaveImage = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Toast.show({
        type: "error",
        text1: "Permison Denied",
        text2: "We need access to your media library.",
      });
      //   Alert.alert('Permission Denied', 'We need access to your media library.');
      return;
    }

    try {
      const fileUri =
        FileSystem.documentDirectory + `wallpaper-${randomNumber}.jpg`;
      const downloadResumable = FileSystem.createDownloadResumable(
        item,
        fileUri
      );
      const { uri } = await downloadResumable.downloadAsync();

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("MikoPix", asset, false);

      Toast.show({
        type: "success",
        text1: "Saved!",
        text2: "Set it as wallpaper from your gallery.",
      });
      // Alert.alert('Saved!', 'Image has been saved to your gallery. Set it as wallpaper manually.');
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Couldn't save the image.",
      });
    }
  };

  return (
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[styles.wrappers, { height: randomHeight }]}
      >
        <Image
          source={{ uri: item }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.modalImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.actionsRow}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.iconBtn}
            >
              <Ionicons name="close" size={22} color="white" />
              <Text style={styles.btnText}>Close</Text>
            </Pressable>
            <Pressable
             onPress={() =>{setIsAdShowing(true); 
              if (rewardedInterstitialLoaded) {
                rewardedInterstitial.show();
              } else {
                Toast.show({
                  type: "info",
                  text1: "Ad Loading",
                  text2: "Please try again in a moment.",
                });}}}
              style={styles.iconBtn}
            >
              {isAdShowing ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <>
                  <Ionicons name="download-outline" size={22} color="white" />
                  <Text style={styles.btnText}>Download</Text>
                </>
              )}
            </Pressable>
            {/* <Pressable onPress={() => {}} style={styles.iconBtn}>
              <Ionicons name="share-social-outline" size={22} color="white" />
              <Text style={styles.btnText}>Share</Text>
            </Pressable> }
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  wrappers: {
    backgroundColor: "grey",
    borderRadius: 40,
    borderCurve: "continuous",
    overflow: "hidden",
    margin: 9,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.5,
    height: height * 0.5,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  modalImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtn: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 10,
    borderRadius: 12,
    width: 80,
  },
  btnText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
}); */
