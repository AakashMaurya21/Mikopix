import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  Linking,
  Modal
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Toast from "react-native-toast-message";
import ImageGrid from "@/components/ImageGrid";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { initializeCoinsOnce } from "@/utils/coinStorage";
import coinEvents from "@/utils/coinEvents";

import AsyncStorage from "@react-native-async-storage/async-storage";


import Constants from "expo-constants";

import NetInfo from "@react-native-community/netinfo";

const currentVersion = Constants.expoConfig?.android?.versionCode;;

// import 'expo-dev-client';
import mobileAds from 'react-native-google-mobile-ads';

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    console.log('Initialized adapter statuses:', adapterStatuses);
  });

export default function index() {
  const [isConnected, setConnected] = useState(true);
  const [forceUpdateRequired, setForceUpdateRequired] = useState(false);
  const [coinCount, setCoinCount] = useState(0);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const tab = "anime";

  useEffect(() => {
    const checkPolicyAccepted = async () => {
      const accepted = await AsyncStorage.getItem("policyAccepted");
      if (!accepted) {
        setShowPolicyModal(true);
      }
    };
  
    checkPolicyAccepted();
  }, []);

  const handleAcceptPolicy = async () => {
    await AsyncStorage.setItem("policyAccepted", "true");
    setShowPolicyModal(false);
  };


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

  const checkForUpdate = useCallback(async () => {
    try {
      const response = await fetch("https://api.npoint.io/db962de753940ed4ba90"); // Replace this with your own URL
      const data = await response.json();
      const latestVersion = data.latestVersion;
      const forceUpdate = data.forceUpdate;
  
      if (forceUpdate && currentVersion !== latestVersion) {
        setForceUpdateRequired(true);
      }
    } catch (error) {
      console.log("Version check failed:", error);
    }
  }, []);

  const fetchCoins = async () => {
    const coins = await initializeCoinsOnce();
    setCoinCount(coins);
  };
  

  useEffect(() => {
    checkInternet();
    checkForUpdate();
    fetchCoins();

    const listener = (newCount: number) => {
      setCoinCount(newCount);
    };

    const unsubscribe = NetInfo.addEventListener((state) => {
      const connected = state.isConnected ?? false;
      setConnected(connected);
    });
    coinEvents.on("coinsUpdated", listener);

    return () =>{ unsubscribe();coinEvents.off("coinsUpdated", listener);};
  }, [checkInternet, fetchCoins]);

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

  useEffect(() => {
    if (forceUpdateRequired) {
      Alert.alert(
        "Update Required",
        "A new version of the app is available. Please update to continue.",
        [
          {
            text: "Update",
            onPress: () => {
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=com.zymogenlabs.mikopix"
              );
            },
            style: "default",
          },
        ],
        { cancelable: false }
      );
    }
  }, [forceUpdateRequired]);

  if (forceUpdateRequired) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
         <View style={{ flex: 1.5, alignItems: "flex-start" }}>
              <Text style={styles.header}>MikoPix</Text>
            </View>
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 20 }}>Please update the app to continue.</Text>
        <Pressable onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.zymogenlabs.mikopix')}>
          <Text style={{ color: '#00f', fontSize: 16 }}>Update Now</Text>
        </Pressable>
      </SafeAreaView>
    );
  }
  
  

  return (
    <View style={{backgroundColor: "#000"}}>
      <StatusBar style="dark" />
      <ScrollView>
        <Pressable style={{ alignItems: "center", backgroundColor: "#000" }}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View style={styles.coinsBtn}>
              <Pressable style={styles.coinToggleBtn}>
              <FontAwesome5 style={{marginTop: 5}} name="coins" size={22} color="white" />{" "}
              <Text style={{ color: "white", marginLeft: 10,paddingRight: 5, fontSize: 22 }}>{coinCount}</Text>
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
          <ImageGrid tab={tab}/>
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

      <Modal
  visible={showPolicyModal}
  transparent={true}
  animationType="fade"
  onRequestClose={() => {
    // Block Android back button from closing modal
  }}
>
  <View style={{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <View style={{
      backgroundColor: '#111',
      padding: 20,
      borderRadius: 10,
      width: '90%',
      maxHeight: '80%',
    }}>
      <Text style={{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
      }}>
        Copyright & Privacy Policy
      </Text>
      <ScrollView style={{ marginBottom: 20 }}>
        <Text style={{ color: 'white', fontSize: 14 }}>
          • All wallpapers in this app are copyright-protected and cannot be redistributed or used commercially without permission from the app developer.{"\n\n"}
          • Sharing of content is restricted without prior written consent.{"\n\n"}
          • This app respects your privacy. No personal data is collected or shared.{"\n\n"}
          By tapping "I Agree", you acknowledge and accept this policy.
        </Text>
      </ScrollView>
      <Pressable
        onPress={handleAcceptPolicy}
        style={{
          backgroundColor: "#4CAF50",
          paddingVertical: 12,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>I Agree</Text>
      </Pressable>
    </View>
  </View>
</Modal>

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
