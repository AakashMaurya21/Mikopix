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
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useIAP } from 'expo-iap';
import { InteractionManager } from 'react-native';

// Replace these with your actual in-app product SKUs
const productSkus = [
  'coin_5',
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2;

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

  // Fetch products from Play Console
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
  }, [connected]);

  // Handle successful or failed purchases
  useEffect(() => {
    if (currentPurchase) {
      InteractionManager.runAfterInteractions(() => {
        Alert.alert('Purchase Successful', JSON.stringify(currentPurchase, null, 2));
      });
    }

    if (currentPurchaseError) {
      InteractionManager.runAfterInteractions(() => {
        Alert.alert('Purchase Error', JSON.stringify(currentPurchaseError, null, 2));
      });
    }
  }, [currentPurchase, currentPurchaseError]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: 'https://placehold.co/600x400' }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.oneTimePurchaseOfferDetails?.formattedPrice}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Pressable
        style={styles.buyBtn}
        onPress={() => {
          requestPurchase({ request: { skus: [item.id] } });
        }}
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

      {!connected || !isReady ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{ color: '#fff', marginTop: 10 }}>Loading Products...</Text>
        </View>
      ) : (
        <FlashList
          data={products}
          renderItem={renderItem}
          estimatedItemSize={200}
          numColumns={2}
          keyExtractor={(item) => item.id}
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
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 7,
    alignItems: 'center',
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
});
