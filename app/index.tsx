import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Toast from "react-native-toast-message";
import ImageGrid from "@/components/ImageGrid";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";

import NetInfo from "@react-native-community/netinfo";

// import 'expo-dev-client';
// import mobileAds from 'react-native-google-mobile-ads';

// mobileAds()
//   .initialize()
//   .then(adapterStatuses => {
//     console.log('Initialized adapter statuses:', adapterStatuses);
//   });

export default function index() {
  const [isConnected, setConnected] = useState(true);

  const router = useRouter();

  const checkInternet = useCallback(() => {
    NetInfo.fetch().then((state) => {
      const connected = state.isConnected ?? false;
      setConnected(connected);
      if (!connected) {
        showAlert();
      }
    });
  }, []);

  useEffect(() => {
    checkInternet();

    const unsubscribe = NetInfo.addEventListener((state) => {
      const connected = state.isConnected ?? false;
      setConnected(connected);
    });

    return () => unsubscribe();
  }, [checkInternet]);

  const showAlert = () => {
    Alert.alert(
      "Internet Connection",
      "You are offline. Please connect to Internet",
      [{ text: "Retry", onPress: () => checkInternet() }]
    );
  };

  // useEffect(() => {
  //   mobileAds()
  //     .initialize()
  //     .then(adapterStatuses => {
  //       console.log('AdMob initialized');
  //     });
  // }, []);

  return (
    <View>
      <StatusBar style="dark" />
      <ScrollView>
        <Pressable style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View style={styles.coinsBtn}>
              <Pressable style={styles.coinToggleBtn}>
              <FontAwesome5 style={{marginTop: 5}} name="coins" size={22} color="white" />{" "}
              <Text style={{ color: "white", marginLeft: 10,paddingRight: 5, fontSize: 22 }}>0</Text>
              </Pressable>
            </View>
            <View style={{ flex: 1.5, alignItems: "flex-start" }}>
              <Text style={styles.header}>MikoPix</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 20 }}>
              <Pressable style={styles.toggleBtn} onPress={() => {
                router.push({ pathname: "../storeScreen"});
              }}>
                <Ionicons name="storefront" size={22} color="white" />
              </Pressable>
            </View>
          </View>
          <Text style={{ color: "white", marginTop: 10 }}>
            Elevate your phone, elevate your style.
          </Text>
        </Pressable>
        {isConnected ? (
          <ImageGrid />
        ) : (
          <View>
            <Text style={{ color: "white", textAlign: "center" }}>
              Connect to Internet to resume services.
            </Text>
            {/* <Pressable style={styles.toggleBtn} onPress={() => checkInternet()}>
                      <Ionicons name="reload" size={18} color="white" />
                    </Pressable> */}
          </View>
        )}
      </ScrollView>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "white",
    paddingTop: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
  // toggleBtn: {
  //   flexDirection: "row",
  //   // backgroundColor: "#444",
  //   backgroundColor: "#444",
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 15,
  //   alignItems: "center",
  //   gap: 10,
  // },
  toggleBtn: {
    // backgroundColor: "#444",
    backgroundColor: "#4CAF50",
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    gap: 10,
  },
coinToggleBtn: {
  backgroundColor: "#1e90ff",
  borderRadius: 15,
  flexDirection: "row",
  flex: 0.8,
  paddingVertical: 5,
  paddingHorizontal: 10,
  alignItems: "center",
  },
  coinsBtn: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 20,
  },
});
