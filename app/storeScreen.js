// import React from 'react';
// import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
// import { FlashList } from '@shopify/flash-list';
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { useLocalSearchParams, useRouter } from "expo-router";

// const products = [
//   { id: '1', name: 'Stylish Shirt', price: '$29.99', image: 'https://placehold.co/600x400' },
//   { id: '2', name: 'Cool Sneakers', price: '$49.99', image: 'https://placehold.co/600x400' },
//   { id: '3', name: 'Leather Bag', price: '$79.99', image: 'https://placehold.co/600x400' },
//   { id: '4', name: 'Casual Watch', price: '$39.99', image: 'https://placehold.co/600x400' },
//   // Add more items if needed
// ];

// export default function StoreScreen() {
//   const router = useRouter();
//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.price}>{item.price}</Text>
//       <Pressable style={styles.toggleBtn}><Text style={{fontSize: 22}}>Buy</Text></Pressable>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//        <Pressable style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="arrow-back" size={24} color="white" />
//       </Pressable>
//        <View style={{ alignItems: "center", justifyContent: "center"}}>
//               <Text style={styles.header}>MikoPix Store</Text>
//             </View>

//       <FlashList
//         data={products}
//         renderItem={renderItem}
//         estimatedItemSize={150}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingHorizontal: 10,
//     marginTop: 10,
//     paddingTop: 20,
//     marginLeft: 30
//   },
//   header: {
//     color: "white",
//     paddingTop: 30,
//     fontSize: 40,
//     fontWeight: "bold",
//   },
//   card: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   price: {
//     fontSize: 14,
//     color: '#777',
//   },
//   toggleBtn: {
//     // backgroundColor: "#444",
//     backgroundColor: "#4CAF50",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 15,
//     alignItems: "center",
//   },
// });

// import React from 'react';
// import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
// import { FlashList } from '@shopify/flash-list';
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const products = [
//   { id: '1', name: 'Stylish Shirt', price: '$29.99', image: 'https://placehold.co/600x400' },
//   { id: '2', name: 'Cool Sneakers', price: '$49.99', image: 'https://placehold.co/600x400' },
//   { id: '3', name: 'Leather Bag', price: '$79.99', image: 'https://placehold.co/600x400' },
//   { id: '4', name: 'Casual Watch', price: '$39.99', image: 'https://placehold.co/600x400' },
// ];

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = (width - 60) / 2; // Adjusted for padding and spacing

// export default function StoreScreen() {
//   const router = useRouter();

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.price}>{item.price}</Text>
//       <Pressable style={styles.buyBtn}>
//         <Text style={styles.buyText}>Buy</Text>
//       </Pressable>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="arrow-back" size={24} color="white" />
//       </Pressable>

//       <Text style={styles.header}>MikoPix Store</Text>

//       <FlashList
//         data={products}
//         renderItem={renderItem}
//         estimatedItemSize={200}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingTop: 40,
//     paddingHorizontal: 15,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 15,
//     zIndex: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 25,
//     padding: 8,
//   },
//   header: {
//     color: "white",
//     fontSize: 34,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   card: {
//     width: CARD_WIDTH,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 10,
//     margin: 7,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   image: {
//     width: '100%',
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 10,
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 10,
//   },
//   buyBtn: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   buyText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Pressable,
//   Dimensions,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import { FlashList } from '@shopify/flash-list';
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { useIAP } from 'expo-iap';
// import { InteractionManager } from 'react-native';

// // Replace these with your actual in-app product SKUs
// const productSkus = [
//   'coin_5',
//   'coin_10'
// ];

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = (width - 60) / 2;

// export default function StoreScreen() {
//   const router = useRouter();
//   const {
//     connected,
//     products,
//     currentPurchase,
//     currentPurchaseError,
//     getProducts,
//     requestPurchase,
//   } = useIAP();

//   const [isReady, setIsReady] = useState(false);

//   // Fetch products from Play Console
//   useEffect(() => {
//     if (!connected) return;

//     const fetchProducts = async () => {
//       try {
//         await getProducts(productSkus);
//         setIsReady(true);
//       } catch (error) {
//         console.error('IAP Product Fetch Error:', error);
//       }
//     };

//     fetchProducts();
//   }, [connected]);

//   // Handle successful or failed purchases
//   useEffect(() => {
//     if (currentPurchase) {
//       InteractionManager.runAfterInteractions(() => {
//         Alert.alert('Purchase Successful', JSON.stringify(currentPurchase, null, 2));
//       });
//     }

//     if (currentPurchaseError) {
//       InteractionManager.runAfterInteractions(() => {
//         Alert.alert('Purchase Error', JSON.stringify(currentPurchaseError, null, 2));
//       });
//     }
//   }, [currentPurchase, currentPurchaseError]);

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: 'https://placehold.co/600x400' }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.price}>{item.oneTimePurchaseOfferDetails?.formattedPrice}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <Pressable
//         style={styles.buyBtn}
//         onPress={() => {
//           requestPurchase({ request: { skus: [item.id] } });
//         }}
//       >
//         <Text style={styles.buyText}>Buy</Text>
//       </Pressable>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="arrow-back" size={24} color="white" />
//       </Pressable>

//       <Text style={styles.header}>MikoPix Store</Text>

//       {!connected || !isReady ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#fff" />
//           <Text style={{ color: '#fff', marginTop: 10 }}>Loading Products...</Text>
//         </View>
//       ) : (
//         <FlashList
//           data={products}
//           renderItem={renderItem}
//           estimatedItemSize={200}
//           numColumns={2}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingTop: 40,
//     paddingHorizontal: 15,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 15,
//     zIndex: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 25,
//     padding: 8,
//   },
//   header: {
//     color: "white",
//     fontSize: 34,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: CARD_WIDTH,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 10,
//     margin: 7,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   image: {
//     width: '100%',
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 10,
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 13,
//     color: '#444',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 10,
//   },
//   buyBtn: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   buyText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Pressable,
//   Dimensions,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import { FlashList } from '@shopify/flash-list';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useIAP, finishTransaction, currentEntitlement } from 'expo-iap';
// import { InteractionManager } from 'react-native';
// import { addCoins } from "@/utils/coinStorage";
// import coinEvents from "@/utils/coinEvents";

// const productSkus = ['mikocoin_5', 'mikocoin_10'];
// const { width } = Dimensions.get('window');
// const CARD_WIDTH = (width - 60) / 2;

// export default function StoreScreen() {
//   const router = useRouter();
//   const {
//     connected,
//     products,
//     currentPurchase,
//     currentPurchaseError,
//     getProducts,
//     requestPurchase,
//   } = useIAP();

//   const [isReady, setIsReady] = useState(false);

//   // Fetch products from Google Play
//   useEffect(() => {
//     if (!connected) return;

//     const fetchProducts = async () => {
//       try {
//         await getProducts(productSkus);
//         setIsReady(true);
//       } catch (error) {
//         console.error('IAP Product Fetch Error:', error);
//       }
//     };

//     fetchProducts();
//   }, [connected, getProducts]);

//   // Handle successful purchases
//   useEffect(() => {
//     const handlePurchase = async () => {
//       if (currentPurchase) {
//         // const purchaseDetails = JSON.stringify(currentPurchase, null, 2); // Pretty-print

//         // Alert.alert('Current Purchase', purchaseDetails); // 🧾 Show details in alert

//         try {
//           await finishTransaction({ purchase: currentPurchase, isConsumable: true });
//           const { id } = currentPurchase;
//         //  Handle rewards based on SKU
//         switch (id) {
//           case 'mikocoin_5':
//             // Award 5 coins
//             addCoins(5);
//             break;
//           case 'mikocoin_10':
//             // Award 10 coins
//             addCoins(10);
//             break;
//           // Add more SKUs as needed
//           default:
//             console.warn('Unknown SKU:', productId);
//         }

//           InteractionManager.runAfterInteractions(() => {
//             Alert.alert('Purchase Successful', 'Thank you for your purchase!');
//           });
//         } catch (error) {
//           console.error('finishTransaction Error:', error);
//           Alert.alert('Transaction Error', String(error));
//         }
//       }
//     };

//     handlePurchase();
//   }, [currentPurchase]);

//   // Handle failed purchases
//   useEffect(() => {
//     if (currentPurchaseError) {
//       InteractionManager.runAfterInteractions(() => {
//         Alert.alert('Purchase Error', JSON.stringify(currentPurchaseError, null, 2));
//       });
//     }
//   }, [currentPurchaseError]);

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: 'https://placehold.co/600x400' }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.price}>{item.oneTimePurchaseOfferDetails?.formattedPrice}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <Pressable
//         style={styles.buyBtn}
//         onPress={() => {
//           requestPurchase({ request: { skus: [item.id] } });
//         }}
//       >
//         <Text style={styles.buyText}>Buy</Text>
//       </Pressable>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="arrow-back" size={24} color="white" />
//       </Pressable>

//       <Text style={styles.header}>MikoPix Store</Text>

//       {!connected || !isReady ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#fff" />
//           <Text style={{ color: '#fff', marginTop: 10 }}>Loading Products...</Text>
//         </View>
//       ) : (
//         <FlashList
//           data={products}
//           renderItem={renderItem}
//           estimatedItemSize={200}
//           numColumns={2}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingTop: 40,
//     paddingHorizontal: 15,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 15,
//     zIndex: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 25,
//     padding: 8,
//   },
//   header: {
//     color: "white",
//     fontSize: 34,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: CARD_WIDTH,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 10,
//     margin: 7,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   image: {
//     width: '100%',
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 10,
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 13,
//     color: '#444',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 10,
//   },
//   buyBtn: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   buyText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Pressable,
//   Dimensions,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import { FlashList } from '@shopify/flash-list';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useIAP, finishTransaction } from 'expo-iap';
// import { InteractionManager } from 'react-native';
// import { addCoins, getCoins, initializeCoinsOnce } from "@/utils/coinStorage";
// import coinEvents from "@/utils/coinEvents";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

// const productSkus = ['mikocoin_5', 'mikocoin_10'];
// const { width } = Dimensions.get('window');
// const CARD_WIDTH = (width - 60) / 2;

// const adUnitId = __DEV__ ? TestIds.REWARDED : TestIds.REWARDED;
// let rewardedAd = RewardedAd.createForAdRequest(adUnitId, {
//   keywords: ['wallpapers', 'images', 'customization'],
// });

// export default function StoreScreen() {
//   const router = useRouter();
//   const {
//     connected,
//     products,
//     currentPurchase,
//     currentPurchaseError,
//     getProducts,
//     requestPurchase,
//   } = useIAP();

//   const [isReady, setIsReady] = useState(false);
//   const [adLoaded, setAdLoaded] = useState(false);
//   const [coinCount, setCoinCount] = useState(0);
//   const [pendingSku, setPendingSku] = useState(null);

//   // Load IAP products
//   useEffect(() => {
//     if (!connected) return;

//     const fetchProducts = async () => {
//       try {
//         await getProducts(productSkus);
//         setIsReady(true);
//       } catch (error) {
//         console.error('IAP Product Fetch Error:', error);
//       }
//     };

//     fetchProducts();
//   }, [connected, getProducts]);

//   // const fetchCoins = async () => {
//   //   const coins = await initializeCoinsOnce();
//   // setCoinCount(coins);
//   // };

//   useEffect(() => {
//     const fetchCoins = async () => {
//       const coins = await initializeCoinsOnce();
//       setCoinCount(coins);
//     };

//     fetchCoins(); // Load initial coins

//     const listener = (newCount) => {
//       setCoinCount(newCount);
//     };

//     coinEvents.on("coinsUpdated", listener);

//     return () => {
//       coinEvents.off("coinsUpdated", listener);
//     };
//   }, []);

//   // Handle purchases
//   useEffect(() => {
//     const handlePurchase = async () => {
//       if (currentPurchase) {
//         try {
//           await finishTransaction({ purchase: currentPurchase, isConsumable: true });

//           const { id } = currentPurchase;

//           switch (id) {
//             case 'mikocoin_5':
//               addCoins(5);
//               break;
//             case 'mikocoin_10':
//               addCoins(10);
//               break;
//             default:
//               console.warn('Unknown SKU:', id);
//           }

//           InteractionManager.runAfterInteractions(() => {
//             Alert.alert('Purchase Successful', 'Thank you for your purchase!');
//           });

//           // rewardedAd.load(); // Load next ad
//         } catch (error) {
//           console.error('finishTransaction Error:', error);
//           Alert.alert('Transaction Error', String(error));
//         }
//       }
//     };

//     handlePurchase();
//   }, [currentPurchase]);

//   // Handle purchase errors
//   useEffect(() => {
//     if (currentPurchaseError) {
//       InteractionManager.runAfterInteractions(() => {
//         Alert.alert('Purchase Error', JSON.stringify(currentPurchaseError, null, 2));
//       });
//     }
//   }, [currentPurchaseError]);

//   // Handle ad events
//   useEffect(() => {
//     const unsubscribeLoaded = rewardedAd.addAdEventListener(RewardedAdEventType.LOADED, () => {
//       setAdLoaded(true);
//     });

//     const unsubscribeEarned = rewardedAd.addAdEventListener(
//       RewardedAdEventType.EARNED_REWARD,
//       () => {
//         addCoins(1); // 🎁 Reward 1 free coins
//         Alert.alert('Thanks!', 'You earned 1 free coin.');
//         rewardedAd = RewardedAd.createForAdRequest(adUnitId, {
//           keywords: ['wallpapers', 'images', 'customization'],
//         });
//         setAdLoaded(false);
//         rewardedAd.load();
//       }
//     );

//     rewardedAd.load();

//     return () => {
//       unsubscribeLoaded();
//       unsubscribeEarned();
//     };
//   }, []);

//   const handleBuy = (sku) => {
//     setPendingSku(null);
//     requestPurchase({ request: { skus: [sku] } });
//   };

//   const renderAdCard = () => (
//     <View style={styles.card}>
//       <Image source={{ uri: 'https://placehold.co/600x400?text=Free+Coins' }} style={styles.image} />
//       <Text style={styles.title}>Watch Ad to Earn Coins</Text>
//       <Text style={styles.description}>Earn 1 coin by watching a short ad.</Text>
//       <Pressable
//         style={[styles.buyBtn, { backgroundColor: '#ff9800' }]}
//         onPress={() => {
//           if (adLoaded) {
//             rewardedAd.show();
//           } else {
//             Alert.alert('Ad Not Ready', 'Please try again in a moment.');
//           }
//         }}
//       >
//         <Text style={styles.buyText}>Watch Ad</Text>
//       </Pressable>
//     </View>
//   );

//   const renderPurchaseCard = (item) => (
//     <View style={styles.card}>
//       <Image source={{ uri: 'https://placehold.co/600x400' }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.price}>{item.oneTimePurchaseOfferDetails?.formattedPrice}</Text>
//       <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
//       <Pressable
//         style={styles.buyBtn}
//         onPress={() => handleBuy(item.id)}
//       >
//         <Text style={styles.buyText}>Buy</Text>
//       </Pressable>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="arrow-back" size={24} color="white" />
//       </Pressable>

//       <Text style={styles.header}>MikoPix Store</Text>
//       <Pressable style={styles.coinsBtn}>
//       <FontAwesome5 style={{marginTop: 5}} name="coins" size={22} color="white" />{" "}
//         <Text style={{ color: '#fff', fontSize: 22, marginLeft: 5 }}>{coinCount}</Text>
//       </Pressable>

//       {!connected || !isReady ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#fff" />
//           <Text style={{ color: '#fff', marginTop: 10 }}>Loading Products...</Text>
//         </View>
//       ) : (
//         <FlashList
//           data={[{ type: 'ad' }, ...products.map(p => ({ type: 'product', ...p }))]}
//           renderItem={({ item }) =>
//             item.type === 'ad' ? renderAdCard() : renderPurchaseCard(item)
//           }
//           estimatedItemSize={200}
//           numColumns={2}
//           keyExtractor={(item, index) => item.id || `ad-${index}`}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingTop: 40,
//     paddingHorizontal: 15,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 15,
//     zIndex: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 25,
//     padding: 8,
//   },
//   header: {
//     color: "white",
//     fontSize: 34,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: CARD_WIDTH,
//     height: 260, // ✅ Set a fixed height
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 10,
//     margin: 7,
//     alignItems: 'center',
//     justifyContent: 'space-between', // ✅ Distribute space
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   image: {
//     width: '100%',
//     height: 100, // ✅ Fixed height for all images
//     borderRadius: 8,
//     marginBottom: 10,
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 13,
//     color: '#444',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 10,
//   },
//   buyBtn: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   buyText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   coinsBtn: {
//     position: 'absolute',
//     top: 40,
//     flexDirection: 'row',
//     right: 15,
//     backgroundColor: "#1e90ff",
//     borderRadius: 15,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     alignItems: "center",
//     zIndex: 10,
//   },
// });

/*
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useIAP, finishTransaction } from 'expo-iap';
import { InteractionManager } from 'react-native';
import { addCoins, getCoins, initializeCoinsOnce } from "@/utils/coinStorage";
import coinEvents from "@/utils/coinEvents";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const productSkus = ['mikocoin_5', 'mikocoin_10'];
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2;

const adUnitId = __DEV__ ? TestIds.REWARDED : TestIds.REWARDED;

export default function StoreScreen() {
  const router = useRouter();
  const {
    connected,
    products,
    currentPurchase,
    currentPurchaseError,
    getProducts,
    requestPurchase,
  } = useIAP();

  const [isReady, setIsReady] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [coinCount, setCoinCount] = useState(0);
  const [rewardedAds, setRewardedAds] = useState({});
  const [currentAdKey, setCurrentAdKey] = useState(null);

  const createNewRewardedAd = () => {
    const randomId = Math.floor(Math.random() * 1000000);
    const adKey = `rewardedAd_${randomId}`;
    const adInstance = RewardedAd.createForAdRequest(adUnitId, {
      keywords: ['wallpapers', 'images', 'customization'],
    });

    setRewardedAds(prev => ({ ...prev, [adKey]: adInstance }));
    setCurrentAdKey(adKey);
    return { adKey, adInstance };
  };

  // Load IAP products
  useEffect(() => {
    if (!connected) return;

    const fetchProducts = async () => {
      try {
        await getProducts(productSkus);
        setIsReady(true);
      } catch (error) {
        console.error('IAP Product Fetch Error:', error);
      }
    };

    fetchProducts();
  }, [connected, getProducts]);

  useEffect(() => {
    const fetchCoins = async () => {
      const coins = await initializeCoinsOnce();
      setCoinCount(coins);
    };

    fetchCoins();

    const listener = (newCount) => {
      setCoinCount(newCount);
    };

    coinEvents.on("coinsUpdated", listener);

    return () => {
      coinEvents.off("coinsUpdated", listener);
    };
  }, []);

  // Handle purchases
  useEffect(() => {
    const handlePurchase = async () => {
      if (currentPurchase) {
        try {
          await finishTransaction({ purchase: currentPurchase, isConsumable: true });

          const { id } = currentPurchase;

          switch (id) {
            case 'mikocoin_5':
              addCoins(5);
              break;
            case 'mikocoin_10':
              addCoins(10);
              break;
            default:
              console.warn('Unknown SKU:', id);
          }

          InteractionManager.runAfterInteractions(() => {
            Alert.alert('Purchase Successful', 'Thank you for your purchase!');
          });
        } catch (error) {
          console.error('finishTransaction Error:', error);
          Alert.alert('Transaction Error', String(error));
        }
      }
    };

    handlePurchase();
  }, [currentPurchase]);

  useEffect(() => {
    if (currentPurchaseError) {
      InteractionManager.runAfterInteractions(() => {
        Alert.alert('Purchase Error', JSON.stringify(currentPurchaseError, null, 2));
      });
    }
  }, [currentPurchaseError]);

  // Handle rewarded ad
  useEffect(() => {
    const { adInstance } = createNewRewardedAd();

    const unsubscribeLoaded = adInstance.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    const unsubscribeEarned = adInstance.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
      addCoins(1);
      Alert.alert('Thanks!', 'You earned 1 free coin.');

      const { adInstance: newAd } = createNewRewardedAd();
      newAd.load();
      setAdLoaded(false);
    });

    adInstance.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const handleBuy = (sku) => {
    requestPurchase({ request: { skus: [sku] } });
  };

  const handleWatchAd = () => {
    if (currentAdKey && rewardedAds[currentAdKey]?.loaded) {
      rewardedAds[currentAdKey].show();
    } else {
      Alert.alert('Ad Not Ready', 'Please try again in a moment.');
    }
  };

  const renderAdCard = () => (
    <View style={styles.card}>
      <Image source={{ uri: 'https://placehold.co/600x400?text=Free+Coins' }} style={styles.image} />
      <Text style={styles.title}>Watch Ad to Earn Coins</Text>
      <Text style={styles.description}>Earn 1 coin by watching a short ad.</Text>
      <Pressable
        style={[styles.buyBtn, { backgroundColor: '#ff9800' }]}
        onPress={handleWatchAd}
      >
        <Text style={styles.buyText}>Watch Ad</Text>
      </Pressable>
    </View>
  );

  const renderPurchaseCard = (item) => (
    <View style={styles.card}>
      <Image source={{ uri: 'https://placehold.co/600x400' }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.oneTimePurchaseOfferDetails?.formattedPrice}</Text>
      <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
      <Pressable
        style={styles.buyBtn}
        onPress={() => handleBuy(item.id)}
      >
        <Text style={styles.buyText}>Buy</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>

      <Text style={styles.header}>MikoPix Store</Text>
      <Pressable style={styles.coinsBtn}>
        <FontAwesome5 style={{ marginTop: 5 }} name="coins" size={22} color="white" />
        <Text style={{ color: '#fff', fontSize: 22, marginLeft: 5 }}>{coinCount}</Text>
      </Pressable>

      {!connected || !isReady ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{ color: '#fff', marginTop: 10 }}>Loading Products...</Text>
        </View>
      ) : (
        <FlashList
          data={[{ type: 'ad' }, ...products.map(p => ({ type: 'product', ...p }))]}
          renderItem={({ item }) =>
            item.type === 'ad' ? renderAdCard() : renderPurchaseCard(item)
          }
          estimatedItemSize={200}
          numColumns={2}
          keyExtractor={(item, index) => item.id || `ad-${index}`}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    padding: 8,
  },
  header: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: 260,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  buyBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  coinsBtn: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    right: 15,
    backgroundColor: "#1e90ff",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    zIndex: 10,
  },
});
*/

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useIAP, finishTransaction } from "expo-iap";
import { InteractionManager } from "react-native";
import { addCoins, getCoins, initializeCoinsOnce } from "@/utils/coinStorage";
import coinEvents from "@/utils/coinEvents";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";
import AsyncStorage from '@react-native-async-storage/async-storage';

import adLogo from '../assets/icons/adlogo.png';
const adLogoSource = Image.resolveAssetSource(adLogo).uri;
import coinLogo from '../assets/icons/coin.png';
const coinLogoSource = Image.resolveAssetSource(coinLogo).uri;


const COOLDOWN_KEY = 'reward_ad_cooldown_end';
const MAX_ADS_PER_DAY = 10;
const AD_HISTORY_KEY = 'reward_ad_history';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const BASE_COOLDOWN = 30; // in seconds
const COOLDOWN_INCREMENT = 30;


const productSkus = ["mikocoin_5", "mikocoin_10"];
const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 60) / 2;

const adUnitId = __DEV__ ? TestIds.REWARDED : TestIds.REWARDED;

export default function StoreScreen() {
  const router = useRouter();
  const {
    connected,
    products,
    currentPurchase,
    currentPurchaseError,
    getProducts,
    requestPurchase,
  } = useIAP();

  const [isReady, setIsReady] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [coinCount, setCoinCount] = useState(0);
  const [rewardedAds, setRewardedAds] = useState({});
  const [currentAdKey, setCurrentAdKey] = useState(null);
  const [adCooldown, setAdCooldown] = useState(false);
  const [cooldownTimeLeft, setCooldownTimeLeft] = useState(0);

  const checkAdLimit = async () => {
    const now = Date.now();
    const raw = await AsyncStorage.getItem(AD_HISTORY_KEY);
    const history = raw ? JSON.parse(raw) : [];
  
    const filtered = history.filter(ts => now - ts < ONE_DAY_MS);
    const adsWatched = filtered.length;
  
    if (adsWatched >= MAX_ADS_PER_DAY) {
      return { allowed: false, remaining: 0 };
    }
  
    return {
      allowed: true,
      remaining: MAX_ADS_PER_DAY - adsWatched,
      updatedHistory: filtered,
      adsWatchedToday: adsWatched,
    };
  };

  const logAdWatch = async () => {
    const now = Date.now();
    const raw = await AsyncStorage.getItem(AD_HISTORY_KEY);
    const history = raw ? JSON.parse(raw) : [];
  
    history.push(now);
    await AsyncStorage.setItem(AD_HISTORY_KEY, JSON.stringify(history));
  };
  

  useEffect(() => {
    let interval;
  
    if (adCooldown && cooldownTimeLeft > 0) {
      // Start the interval to update the time left every second
      interval = setInterval(() => {
        setCooldownTimeLeft(prev => {
          if (prev <= 1) {
            setAdCooldown(false); // Reset cooldown status
            clearInterval(interval); // Clear the interval
            AsyncStorage.removeItem(COOLDOWN_KEY); // Clear cooldown from storage
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // If the cooldown is not active, stop the interval (if any)
      if (interval) clearInterval(interval);
    }
  
    return () => {
      if (interval) clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [adCooldown, cooldownTimeLeft]);
  

  useEffect(() => {
    const checkCooldown = async () => {
      const storedTime = await AsyncStorage.getItem(COOLDOWN_KEY);
      if (storedTime) {
        const cooldownEnd = parseInt(storedTime, 10);
        const now = Date.now();
        if (cooldownEnd > now) {
          const secondsLeft = Math.floor((cooldownEnd - now) / 1000);
          setCooldownTimeLeft(secondsLeft);
          setAdCooldown(true);
        } else {
          await AsyncStorage.removeItem(COOLDOWN_KEY);
        }
      } 
    };
  
    checkCooldown();
  }, []);

  const createNewRewardedAd = () => {
    const randomId = Math.floor(Math.random() * 1000000);
    const adKey = `rewardedAd_${randomId}`;
    const adInstance = RewardedAd.createForAdRequest(adUnitId, {
      keywords: ["wallpapers", "images", "customization"],
    });

    setRewardedAds((prev) => ({ ...prev, [adKey]: adInstance }));
    setCurrentAdKey(adKey);
    return { adKey, adInstance };
  };

  // Load IAP products
  useEffect(() => {
    if (!connected) return;

    const fetchProducts = async () => {
      try {
        await getProducts(productSkus);
        setIsReady(true);
      } catch (error) {
        console.error("IAP Product Fetch Error:", error);
      }
    };

    fetchProducts();
  }, [connected, getProducts]);

  useEffect(() => {
    const fetchCoins = async () => {
      const coins = await initializeCoinsOnce();
      setCoinCount(coins);
    };

    fetchCoins();

    const listener = (newCount) => {
      setCoinCount(newCount);
    };

    coinEvents.on("coinsUpdated", listener);

    return () => {
      coinEvents.off("coinsUpdated", listener);
    };
  }, []);

  // Handle purchases
  useEffect(() => {
    const handlePurchase = async () => {
      if (currentPurchase) {
        try {
          await finishTransaction({
            purchase: currentPurchase,
            isConsumable: true,
          });

          const { id } = currentPurchase;

          switch (id) {
            case "mikocoin_5":
              addCoins(5);
              break;
            case "mikocoin_10":
              addCoins(10);
              break;
            default:
              console.warn("Unknown SKU:", id);
          }

          InteractionManager.runAfterInteractions(() => {
            Alert.alert("Purchase Successful", "Thank you for your purchase!");
          });
        } catch (error) {
          console.error("finishTransaction Error:", error);
          Alert.alert("Transaction Error", String(error));
        }
      }
    };

    handlePurchase();
  }, [currentPurchase]);

  useEffect(() => {
    if (currentPurchaseError) {
      InteractionManager.runAfterInteractions(() => {
        Alert.alert(
          "Purchase Error",
          JSON.stringify(currentPurchaseError, null, 2)
        );
      });
    }
  }, [currentPurchaseError]);

  // Handle rewarded ad
  // useEffect(() => {
  //   const { adInstance } = createNewRewardedAd();

  //   const unsubscribeLoaded = adInstance.addAdEventListener(
  //     RewardedAdEventType.LOADED,
  //     () => {
  //       setAdLoaded(true);
  //     }
  //   );

  //   const unsubscribeEarned = adInstance.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //    async () => {
  //       // addCoins(1);
  //       // Alert.alert("Thanks!", "You earned 1 free coin.");
  //       // setAdCooldown(true);
  //       // setCooldownTimeLeft(60); // 60 seconds cooldown

  //       // const { adInstance: newAd } = createNewRewardedAd();
  //       // newAd.load();
  //       // setAdLoaded(false);

  //       addCoins(1);
  //       Alert.alert('Thanks!', 'You earned 1 free coin.');
      
  //       const cooldownSeconds = 30;
  //       const cooldownEnd = Date.now() + cooldownSeconds * 1000;
      
  //       await AsyncStorage.setItem(COOLDOWN_KEY, cooldownEnd.toString());
  //       setAdCooldown(true);
  //       setCooldownTimeLeft(cooldownSeconds);
      
  //       const { adInstance: newAd } = createNewRewardedAd();
  //       newAd.load();
  //       setAdLoaded(false);
  //     }
  //   );

  //   adInstance.load();

  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };
  // }, []);

  useEffect(() => {
    let adInstance;
    let unsubscribeLoaded;
    let unsubscribeEarned;
  
    const loadAndListenRewardedAd = () => {
      const { adInstance: newAd, adKey } = createNewRewardedAd();
      setCurrentAdKey(adKey);
  
      unsubscribeLoaded = newAd.addAdEventListener(
        RewardedAdEventType.LOADED,
        () => {
          setAdLoaded(true);
        }
      );
  
      unsubscribeEarned = newAd.addAdEventListener(
        RewardedAdEventType.EARNED_REWARD,
        async () => {
          addCoins(1);
          await logAdWatch();
          Alert.alert("Thanks!", "You earned 1 free coin.");
  
          const storedCooldown = await AsyncStorage.getItem('NEXT_AD_COOLDOWN');
    const cooldownSeconds = storedCooldown ? parseInt(storedCooldown, 10) : BASE_COOLDOWN;
    const cooldownEnd = Date.now() + cooldownSeconds * 1000;

    await AsyncStorage.setItem(COOLDOWN_KEY, cooldownEnd.toString());
    setAdCooldown(true);
    setCooldownTimeLeft(cooldownSeconds);
  
          setAdLoaded(false);
          // Recurse: setup new ad after cooldown
          loadAndListenRewardedAd();
        }
      );
  
      newAd.load();
      adInstance = newAd;
    };
  
    loadAndListenRewardedAd();
  
    return () => {
      unsubscribeLoaded?.();
      unsubscribeEarned?.();
    };
  }, []);
  

  const handleBuy = (sku) => {
    requestPurchase({ request: { skus: [sku] } });
  };

  // const handleWatchAd = async() => {
  //   if (adCooldown) {
  //     Alert.alert(
  //       "Cooldown",
  //       `Please wait ${cooldownTimeLeft}s before watching another ad.`
  //     );
  //     return;
  //   }


  //   const { allowed, remaining, updatedHistory, adsWatchedToday } = await checkAdLimit();

  // if (!allowed) {
  //   Alert.alert("Limit Reached", "You've watched the maximum of 10 ads in the last 24 hours.");
  //   return;
  // }

  //   if (currentAdKey && rewardedAds[currentAdKey]?.loaded) {
  //     rewardedAds[currentAdKey].show();
  //   } else {
  //     Alert.alert("Ad Not Ready", "Please try again in a moment.");
  //   }
  // };

  const handleWatchAd = async () => {
    if (adCooldown) {
      Alert.alert("Cooldown", `Please wait ${cooldownTimeLeft}s before watching another ad.`);
      return;
    }
  
    const { allowed, remaining, updatedHistory, adsWatchedToday } = await checkAdLimit();
  
    if (!allowed) {
      Alert.alert("Limit Reached", "You've watched the maximum of 10 ads in the last 24 hours.");
      return;
    }
  
    if (currentAdKey && rewardedAds[currentAdKey]?.loaded) {
      await AsyncStorage.setItem(AD_HISTORY_KEY, JSON.stringify(updatedHistory));
  
      // Save the current cooldown value to storage for use in reward callback
      const nextCooldown = BASE_COOLDOWN + (adsWatchedToday * COOLDOWN_INCREMENT);
      await AsyncStorage.setItem('NEXT_AD_COOLDOWN', nextCooldown.toString());
  
      rewardedAds[currentAdKey].show();
    } else {
      Alert.alert("Ad Not Ready", "Please try again in a moment.");
    }
  };
  

  const renderAdCard = () => (
    <View style={styles.card}>
      <Image
        source={{ uri: adLogoSource}}
        style={styles.image}
      />
      <Text style={styles.title}>Watch Ad to Earn Coins</Text>
      <Text style={styles.description}>
        Earn 1 coin by watching a short ad.
      </Text>
      <Pressable
        style={[
          styles.buyBtn,
          { backgroundColor: adCooldown ? "#999" : "#ff9800" },
        ]}
        onPress={handleWatchAd}
        disabled={adCooldown}
      >
        <Text style={styles.buyText}>
          {adCooldown ? `Wait ${cooldownTimeLeft}s` : "Watch Ad"}
        </Text>
      </Pressable>
    </View>
  );

  const renderPurchaseCard = (item) => (
    <View style={styles.card}>
      <Image
        source={{ uri: coinLogoSource}}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>
        {item.oneTimePurchaseOfferDetails?.formattedPrice}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>
      <Pressable style={styles.buyBtn} onPress={() => handleBuy(item.id)}>
        <Text style={styles.buyText}>Buy</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>

      <Text style={styles.header}>MikoPix Store</Text>
      <Pressable style={styles.coinsBtn}>
        <FontAwesome5
          style={{ marginTop: 5 }}
          name="coins"
          size={22}
          color="white"
        />
        <Text style={{ color: "#fff", fontSize: 22, marginLeft: 5 }}>
          {coinCount}
        </Text>
      </Pressable>

      {!connected || !isReady ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{ color: "#fff", marginTop: 10 }}>
            Loading Products...
          </Text>
        </View>
      ) : (
        <FlashList
          data={[
            { type: "ad" },
            ...products.map((p) => ({ type: "product", ...p })),
          ]}
          renderItem={({ item }) =>
            item.type === "ad" ? renderAdCard() : renderPurchaseCard(item)
          }
          estimatedItemSize={200}
          numColumns={2}
          keyExtractor={(item, index) => item.id || `ad-${index}`}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 25,
    padding: 8,
  },
  header: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: 260,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    margin: 7,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: "#444",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  buyBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buyText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  coinsBtn: {
    position: "absolute",
    top: 40,
    flexDirection: "row",
    right: 15,
    backgroundColor: "#1e90ff",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    zIndex: 10,
  },
});
