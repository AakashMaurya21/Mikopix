// import { View, Text, StyleSheet,Image, ScrollView, Alert, ActivityIndicator } from 'react-native'
// import React, {useEffect, useState} from 'react'
// import { FlashList } from "@shopify/flash-list";
// import { Link } from 'expo-router';
// import ImageCard from '@/components/ImageCard';
// import { MasonryFlashList } from "@shopify/flash-list";
// import NetInfo from '@react-native-community/netinfo';

// export default function ImageGrid() {

//     const [wallpapers, setWallpapers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [loaded, setLoaded] = useState(false);
//     const [isConnected, setIsConnected] = useState(true);

//     const imageKitBase = 'https://ik.imagekit.io/aakashmaurya/';

//     // 👇 Dynamically generate wallpaper image URLs
//     // const totalImages = 5; // Change this to how many wallpapers you uploaded

//     // useEffect(() => {
//     //   const urls = [];
//     //   for (let i = 1; i <= totalImages; i++) {
//     //     urls.push(`${imageKitBase}${i}.png`);
//     //   }
//     //   setWallpapers(urls);
//     //   setLoading(false);
//     // }, []);

//     const getTotalImages = async () => {
//         try {
//           const response = await fetch(`${imageKitBase}wallpapers.json?ts=${Date.now()}`);
//           const data = await response.json();
//         //   console.log("total images in getfunction:", data.totalImages);
//           return data.totalImages;
//         } catch (error) {
//           console.error("Error fetching totalImages:", error);
//           return 0; // fallback
//         }
//       };

//     //   const shuffleArray = (array) => {
//     //     return array
//     //       .map(value => ({ value, sort: Math.random() }))
//     //       .sort((a, b) => a.sort - b.sort)
//     //       .map(({ value }) => value);
//     //   };

//   //   useEffect(() => {

//   //     const checkConnection = async () => {
//   //       const state = await NetInfo.fetch();
//   //       setIsConnected(state.isConnected);
//   //       if (!state.isConnected) {
//   //         setLoading(false);
//   //         return;
//   //       }
//   //       const fetchWallpapers = async () => {
//   //         const totalImages = await getTotalImages();
//   //       //   Alert.alert("Total Images", `${totalImages}`);
//   //       // console.log("total images:", totalImages);
//   //         const urls = [];

//   //         for (let i = 1; i <= totalImages; i++) {
//   //           urls.push(`${imageKitBase}${i}.png`);
//   //         }

//   //         const shuffled = urls.sort(() => Math.random() - 0.5);
//   //       //   console.log("Shuffled URLs:", shuffled);
//   // setWallpapers(shuffled);

//   //         setWallpapers(urls);
//   //         setLoading(false);
//   //       };

//   //       fetchWallpapers();
//   //     }, []);

//   useEffect(() => {
//     const checkConnection = async () => {
//       const state = await NetInfo.fetch();
//       setIsConnected(state.isConnected);
//       if (!state.isConnected) {
//         setLoading(false);
//         return;
//       }

//       const fetchWallpapers = async () => {
//         const totalImages = await getTotalImages();
//         const urls = [];
//         for (let i = 1; i <= totalImages; i++) {
//           urls.push(`${imageKitBase}${i}.png`);
//         }
//         const shuffled = urls.sort(() => Math.random() - 0.5);
//         setWallpapers(shuffled);
//         setLoading(false);
//       };

//       fetchWallpapers();
//     };

//     checkConnection();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#fff" />
//         <Text style={styles.message}>Loading wallpapers...</Text>
//       </View>
//     );
//   }

//   if (!isConnected) {
//     return (
//       <View style={styles.center}>
//         <Text style={styles.message}>No internet connection. Please connect to the internet.</Text>
//         <View style={{ flexDirection: "row", marginTop: 20, gap: 10 }}>
//         <Pressable style={styles.retryBtn} onPress={fetchWallpapers}>
//           <Ionicons name="reload" size={18} color="white" />
//         </Pressable>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View  style={styles.container}>
//        <MasonryFlashList
//       data={wallpapers}
//       numColumns={2}
//       renderItem={({ item }) =>
//         <ImageCard item={item}/>
//     }
//       estimatedItemSize={300}
//     />
//     {/* <MasonryList
//         images={wallpapers}
//         columns={2}
//         spacing={6}
//         imageContainerStyle={{ borderRadius: 20 }}
//         customImageComponent={ImageCard}
//         sorted={true} // Optional: helps balance column height
//       /> */}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 30,
//        width: "100%",
//        height: "100%",
//     },
//     center: {
//       flex: 1,
//       marginTop: 20,
//       // marginaTop: "100%",
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     message: {
//       marginTop: 10,
//       fontSize: 16,
//       textAlign: 'center',
//       color: "#fff"
//     },
//     toggleBtn: {
//       flexDirection: "row",
//       // backgroundColor: "#444",
//       backgroundColor: "#4CAF50",
//       paddingVertical: 10,
//       paddingHorizontal: 20,
//       borderRadius: 15,
//       alignItems: "center",
//       gap: 10,
//     },
// })

/* import { View, Text, StyleSheet, Image, ScrollView, Alert, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import ImageCard from "@/components/ImageCard";
import { MasonryFlashList } from "@shopify/flash-list";

// import NetInfo from '@react-native-community/netinfo';

export default function ImageGrid() {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  let isConnected = false;

  const imageKitBase = "https://ik.imagekit.io/aakashmaurya/";

  // 👇 Dynamically generate wallpaper image URLs
  // const totalImages = 5; // Change this to how many wallpapers you uploaded

  // useEffect(() => {
  //   const urls = [];
  //   for (let i = 1; i <= totalImages; i++) {
  //     urls.push(${imageKitBase}${i}.png);
  //   }
  //   setWallpapers(urls);
  //   setLoading(false);
  // }, []);

  const getTotalImages = async () => {
    try {
      const response = await fetch(
        `${imageKitBase}wallpapers.json?ts=${Date.now()}`
      );
      const data = await response.json();
      //   console.log("total images in getfunction:", data.totalImages);
      return data.totalImages;
    } catch (error) {
      console.error("Error fetching totalImages:", error);
      return 0; // fallback
    }
  };

  //   const shuffleArray = (array) => {
  //     return array
  //       .map(value => ({ value, sort: Math.random() }))
  //       .sort((a, b) => a.sort - b.sort)
  //       .map(({ value }) => value);
  //   };

  useEffect(() => {
    const fetchWallpapers = async () => {
      const totalImages = await getTotalImages();
      //   Alert.alert("Total Images", ${totalImages});
      // console.log("total images:", totalImages);
      const urls = [];

      for (let i = 1; i <= totalImages; i++) {
        urls.push(`${imageKitBase}${i}.png`);
      }

      const shuffled = urls.sort(() => Math.random() - 0.5);
      //   console.log("Shuffled URLs:", shuffled);
      setWallpapers(shuffled);

      setWallpapers(urls);
      setLoading(false);
    };

    fetchWallpapers();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.message}>Loading wallpapers...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={wallpapers}
        numColumns={2}
        renderItem={({ item }) => <ImageCard item={item} />}
        estimatedItemSize={300}
      />
      {/* <MasonryList
        images={wallpapers}
        columns={2}
        spacing={6}
        imageContainerStyle={{ borderRadius: 20 }}
        customImageComponent={ImageCard}
        sorted={true} // Optional: helps balance column height
      /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    width: "100%",
    height: "100%",
  },
  center: {
    flex: 1,
    marginTop: 20,
    // marginaTop: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});

*/

// import React, { useEffect, useState, useCallback, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   RefreshControl,
// } from "react-native";
// import { MasonryFlashList } from "@shopify/flash-list";
// import ImageCard from "@/components/ImageCard";

// const IMAGEKIT_BASE = "https://ik.imagekit.io/aakashmaurya/";
// const MY_BASE = "https://6xf0vau4gpxo.share.zrok.io/images/compressed/anime/";
// const PAGE_SIZE = 20;

// export default function ImageGrid() {
//   const [allWallpapers, setAllWallpapers] = useState([]);
//   const [wallpapers, setWallpapers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [page, setPage] = useState(1);
//   const flashListRef = useRef(null);
//   const [loadingMore, setLoadingMore] = useState(false);

//   const fetchTotalImages = async () => {
//     try {
//       const res = await fetch(`${IMAGEKIT_BASE}wallpapers.json?ts=${Date.now()}`);
//       const data = await res.json();
//       return data.totalImages || 0;
//     } catch (e) {
//       console.error("Failed to fetch images:", e);
//       return 0;
//     }
//   };

//   // const loadInitialImages = useCallback(async () => {
//   //   setLoading(true);
//   //   const total = await fetchTotalImages();
//   //   const urls = [];

//   //   for (let i = 1; i <= total; i++) {
//   //     urls.push(`${MY_BASE}${i}.png`);
//   //   }

//   //   const shuffled = urls.sort(() => 0.5 - Math.random());
//   //   setAllWallpapers(shuffled);
//   //   setWallpapers(shuffled.slice(0, PAGE_SIZE));
//   //   setPage(1);
//   //   setLoading(false);
//   // }, []);

//   const loadInitialImages = useCallback(async () => {
//     setLoading(true);
//     const total = await fetchTotalImages();
//     const urls = [];
  
//     for (let i = 1; i <= total; i++) {
//       urls.push(`${MY_BASE}${i}.png`);
//     }
  
//     const shuffled = urls.sort(() => 0.5 - Math.random());
//     setAllWallpapers(shuffled);
//     setWallpapers(shuffled.slice(0, PAGE_SIZE)); // Only load first chunk
//     setPage(1);
//     setLoading(false);
//   }, []);
  

//   // const loadMoreImages = useCallback(() => {
//   //   if (page * PAGE_SIZE >= allWallpapers.length) return;
//   //   const nextPage = page + 1;
//   //   setWallpapers(allWallpapers.slice(0, nextPage * PAGE_SIZE));
//   //   setPage(nextPage);
//   // }, [page, allWallpapers]);

//   // const loadMoreImages = useCallback(() => {
//   //   const nextPage = page + 1;
//   //   if ((nextPage - 1) * PAGE_SIZE >= allWallpapers.length) return;
//   //   setWallpapers(allWallpapers.slice(0, nextPage * PAGE_SIZE));
//   //   setPage(nextPage);
//   // }, [page, allWallpapers]);

//   // const onRefresh = async () => {
//   //   setRefreshing(true);
//   //   await loadInitialImages();
//   //   setRefreshing(false);
//   //   flashListRef?.current?.scrollToOffset({ offset: 0, animated: true });
//   // };

//   // useEffect(() => {
//   //   loadInitialImages();
//   // }, [loadInitialImages]);

//   const loadMoreImages = useCallback(() => {
//     if (loadingMore) return; // prevent double triggers
  
//     const nextPage = page + 1;
//     const startIndex = page * PAGE_SIZE;
//     const endIndex = startIndex + PAGE_SIZE;
  
//     if (startIndex >= allWallpapers.length) return;
  
//     setLoadingMore(true);
//     const nextImages = allWallpapers.slice(startIndex, endIndex);
//     setWallpapers(prev => [...prev, ...nextImages]);
//     setPage(nextPage);
//     setLoadingMore(false);
//   }, [page, allWallpapers, loadingMore]);
  

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#fff" />
//         <Text style={styles.message}>Loading wallpapers...</Text>
//       </View>
//     );
//   }

//   const renderFooter = () => {
//     if (!loadingMore) return null;
//     return (
//       <View style={styles.footer}>
//         <ActivityIndicator size="small" color="#fff" />
//         <Text style={styles.footerText}>Loading more...</Text>
//       </View>
//     );
//   };
  

//   return (
//     <View style={styles.container}>
//       <MasonryFlashList
//         ref={flashListRef}
//         data={wallpapers}
//         numColumns={2}
//         estimatedItemSize={300}
//         renderItem={({ item }) => <ImageCard item={item} />}
//         keyExtractor={(item, index) => item + "-" + index}
//         onEndReached={loadMoreImages}
//         onEndReachedThreshold={0.5}
//         ListFooterComponent={renderFooter}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor="#fff"
//           />
//         }
//         showsVerticalScrollIndicator={false}
//         removeClippedSubviews
//         windowSize={7}
//         maxToRenderPerBatch={8}
//         initialNumToRender={10}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     backgroundColor: "#000",
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   message: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#fff",
//     textAlign: "center",
//   },
// });


// import React, { useEffect, useState, useCallback, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   RefreshControl,
// } from "react-native";
// import { MasonryFlashList } from "@shopify/flash-list";
// import ImageCard from "@/components/ImageCard";

// const IMAGEKIT_BASE = "https://ik.imagekit.io/aakashmaurya/";
// const MY_BASE = "https://6xf0vau4gpxo.share.zrok.io/images/compressed/anime/";
// const PAGE_SIZE = 20;

// export default function ImageGrid() {
//   const [allWallpapers, setAllWallpapers] = useState([]);
//   const [wallpapers, setWallpapers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [page, setPage] = useState(1);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const flashListRef = useRef(null);

//   const fetchTotalImages = async () => {
//     try {
//       const res = await fetch(`${IMAGEKIT_BASE}wallpapers.json?ts=${Date.now()}`);
//       const data = await res.json();
//       return data.totalImages || 0;
//     } catch (e) {
//       console.error("Failed to fetch images:", e);
//       return 0;
//     }
//   };

//   const loadInitialImages = useCallback(async () => {
//     setLoading(true);
//     const total = await fetchTotalImages();
//     const urls = [];

//     for (let i = 1; i <= total; i++) {
//       urls.push(`${MY_BASE}${i}.png`);
//     }

//     const shuffled = urls.sort(() => 0.5 - Math.random());
//     setAllWallpapers(shuffled);
//     setWallpapers(shuffled.slice(0, PAGE_SIZE)); // Only load first chunk
//     setPage(1);
//     setLoading(false);
//   }, []);

//   const loadMoreImages = useCallback(() => {
//     if (loadingMore) return;
  
//     const startIndex = page * PAGE_SIZE;
//     const endIndex = startIndex + PAGE_SIZE;
  
//     if (startIndex >= allWallpapers.length) return;
  
//     setLoadingMore(true);
  
//     setTimeout(() => {
//       const nextImages = allWallpapers.slice(startIndex, endIndex);
//       setWallpapers(prev => [...prev, ...nextImages]);
//       setPage(prev => prev + 1); // Safe update
//       setLoadingMore(false);
//     }, 100);
//   }, [page, allWallpapers, loadingMore]);
  

//   // const loadMoreImages = useCallback(() => {
//   //   if (loadingMore) return;

//   //   const nextPage = page + 1;
//   //   const startIndex = page * PAGE_SIZE;
//   //   const endIndex = startIndex + PAGE_SIZE;

//   //   if (startIndex >= allWallpapers.length) return;

//   //   setLoadingMore(true);

//   //   // Simulate async state update safety
//   //   setTimeout(() => {
//   //     const nextImages = allWallpapers.slice(startIndex, endIndex);
//   //     setWallpapers(prev => [...prev, ...nextImages]);
//   //     setPage(nextPage);
//   //     setLoadingMore(false);
//   //   }, 100);
//   // }, [page, allWallpapers, loadingMore]);

//   const onRefresh = async () => {
//     setRefreshing(true);
//     await loadInitialImages();
//     setRefreshing(false);
//     flashListRef?.current?.scrollToOffset({ offset: 0, animated: true });
//   };

//   useEffect(() => {
//     loadInitialImages();
//   }, [loadInitialImages]);

//   const renderFooter = () => {
//     if (!loadingMore) return null;
//     return (
//       <View style={styles.footer}>
//         <ActivityIndicator size="small" color="#fff" />
//         <Text style={styles.footerText}>Loading more...</Text>
//       </View>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#fff" />
//         <Text style={styles.message}>Loading wallpapers...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <MasonryFlashList
//         ref={flashListRef}
//         data={wallpapers}
//         numColumns={2}
//         estimatedItemSize={300}
//         renderItem={({ item }) => <ImageCard item={item} />}
//         keyExtractor={(item, index) => item + "-" + index}
//         onEndReached={loadMoreImages}
//         onEndReachedThreshold={0.5}
//         ListFooterComponent={renderFooter}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor="#fff"
//           />
//         }
//         showsVerticalScrollIndicator={false}
//         removeClippedSubviews
//         windowSize={7}
//         maxToRenderPerBatch={8}
//         initialNumToRender={10}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     backgroundColor: "#000",
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   message: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#fff",
//     textAlign: "center",
//   },
//   footer: {
//     paddingVertical: 20,
//     alignItems: "center",
//   },
//   footerText: {
//     marginTop: 5,
//     color: "#fff",
//     fontSize: 14,
//   },
// });


// import React, { useEffect, useState, useCallback, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   RefreshControl,
// } from "react-native";
// import { MasonryFlashList } from "@shopify/flash-list";
// import ImageCard from "@/components/ImageCard";

// const IMAGEKIT_BASE = "https://ik.imagekit.io/aakashmaurya/";
// const MY_BASE = "https://6xf0vau4gpxo.share.zrok.io/images/compressed/anime/";
// const PAGE_SIZE = 20;

// export default function ImageGrid() {
//   const [allWallpapers, setAllWallpapers] = useState([]);
//   const [wallpapers, setWallpapers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const flashListRef = useRef(null);

//   const fetchTotalImages = async () => {
//     try {
//       const res = await fetch(`${IMAGEKIT_BASE}wallpapers.json?ts=${Date.now()}`);
//       const data = await res.json();
//       return data.totalImages || 0;
//     } catch (e) {
//       console.error("Failed to fetch images:", e);
//       return 0;
//     }
//   };

//   const loadInitialImages = useCallback(async () => {
//     setLoading(true);
//     const total = await fetchTotalImages();
//     const urls = [];

//     for (let i = 1; i <= total; i++) {
//       urls.push(`${MY_BASE}${i}.png`);
//     }

//     const shuffled = urls.sort(() => 0.5 - Math.random());
//     setAllWallpapers(shuffled);
//     setWallpapers(shuffled.slice(0, PAGE_SIZE));
//     setLoading(false);
//   }, []);

//   const loadMoreImages = useCallback(() => {
//     if (loadingMore) return;

//     const startIndex = wallpapers.length;
//     const endIndex = startIndex + PAGE_SIZE;

//     if (startIndex >= allWallpapers.length) return;

//     setLoadingMore(true);
//     setTimeout(() => {
//       const nextImages = allWallpapers.slice(startIndex, endIndex);
//       setWallpapers(prev => [...prev, ...nextImages]);
//       setLoadingMore(false);
//     }, 100);
//   }, [wallpapers.length, allWallpapers, loadingMore]);

//   const onRefresh = async () => {
//     setRefreshing(true);
//     await loadInitialImages();
//     setRefreshing(false);
//     flashListRef?.current?.scrollToOffset({ offset: 0, animated: true });
//   };

//   useEffect(() => {
//     loadInitialImages();
//   }, [loadInitialImages]);

//   const renderFooter = () => {
//     if (!loadingMore) return null;
//     return (
//       <View style={styles.footer}>
//         <ActivityIndicator size="small" color="#fff" />
//         <Text style={styles.footerText}>Loading more...</Text>
//       </View>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#fff" />
//         <Text style={styles.message}>Loading wallpapers...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <MasonryFlashList
//         ref={flashListRef}
//         data={wallpapers}
//         numColumns={2}
//         estimatedItemSize={300}
//         renderItem={({ item }) => <ImageCard item={item} />}
//         keyExtractor={(item, index) => item + "-" + index}
//         onEndReached={loadMoreImages}
//         onEndReachedThreshold={0.5}
//         ListFooterComponent={renderFooter}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor="#fff"
//           />
//         }
//         showsVerticalScrollIndicator={false}
//         removeClippedSubviews
//         windowSize={7}
//         maxToRenderPerBatch={8}
//         initialNumToRender={10}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     backgroundColor: "#000",
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   message: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#fff",
//     textAlign: "center",
//   },
//   footer: {
//     paddingVertical: 20,
//     alignItems: "center",
//   },
//   footerText: {
//     marginTop: 5,
//     color: "#fff",
//     fontSize: 14,
//   },
// });

import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Button,
} from "react-native";
import { MasonryFlashList, FlashList } from "@shopify/flash-list";
import ImageCard from "@/components/ImageCard";

const IMAGEKIT_BASE = "https://ik.imagekit.io/aakashmaurya/";
const PAGE_SIZE = 20;

export default function ImageGrid({tab}) {
  const MY_BASE = `https://6xf0vau4gpxo.share.zrok.io/images/compressed/${tab}/`;
  const [allWallpapers, setAllWallpapers] = useState([]);
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const flashListRef = useRef(null);

  const fetchTotalImages = async () => {
    try {
      const res = await fetch(`${IMAGEKIT_BASE}wallpapers.json?ts=${Date.now()}`);
      const data = await res.json();
      if(tab === "anime") {
      return data.totalImages || 0;}
      else if(tab === "minimalist") {
        return data.minimalistImages || 0;
      }
    } catch (e) {
      console.error("Failed to fetch images:", e);
      return 0;
    }
  };

  const loadInitialImages = useCallback(async () => {
    setLoading(true);
    const total = await fetchTotalImages();
    const urls = [];

    for (let i = 1; i <= total; i++) {
      urls.push(`${MY_BASE}${i}.png`);
    }

    const shuffled = urls.sort(() => 0.5 - Math.random());
    setAllWallpapers(shuffled);
    setWallpapers(shuffled.slice(0, PAGE_SIZE)); // Only load the first chunk
    setLoading(false);
  }, []);

  const loadMoreImages = useCallback(() => {
    if (loadingMore) return;

    const startIndex = wallpapers.length;
    const endIndex = startIndex + PAGE_SIZE;

    if (startIndex >= allWallpapers.length) return;

    setLoadingMore(true);
    setTimeout(() => {
      const nextImages = allWallpapers.slice(startIndex, endIndex);
      setWallpapers((prev) => [...prev, ...nextImages]);
      setLoadingMore(false);
    }, 100);
  }, [wallpapers.length, allWallpapers, loadingMore]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadInitialImages();
    setRefreshing(false);
    flashListRef?.current?.scrollToOffset({ offset: 0, animated: true });
  };

  useEffect(() => {
    loadInitialImages();
  }, [loadInitialImages]);

  const renderFooter = () => {
    if (loadingMore) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator size="small" color="#fff" />
          <Text style={styles.footerText}>Loading more...</Text>
        </View>
      );
    }

    return (
      <View style={styles.footer}>
        {wallpapers.length < allWallpapers.length && !loadingMore && (
          <Button title="Load More" onPress={loadMoreImages} style={styles.loadMoreBtn} />
        )}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.message}>Loading wallpapers...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MasonryFlashList
        ref={flashListRef}
        data={wallpapers}
        numColumns={2}
        estimatedItemSize={300}
        renderItem={({ item }) => <ImageCard item={item} />}
        keyExtractor={(item, index) => item + "-" + index}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#fff"
          />
        }
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        windowSize={7}
        maxToRenderPerBatch={8}
        initialNumToRender={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#000",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  footerText: {
    marginTop: 5,
    color: "#fff",
    fontSize: 14,
  },
  loadMoreBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
  }
});

