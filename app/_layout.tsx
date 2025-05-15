// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "black" }}}>
//             {/* <Stack.Screen name="(tabs)" /> */}
//     </Stack>
//     ;
// }

import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RootLayout() {
return (
<>
<StatusBar style="auto" />
<Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#000", borderColor: "#000", height: 50}, tabBarActiveTintColor: "#1e90ff"}}>

<Tabs.Screen name="index"
options={{
  tabBarLabel: "Anime",
  tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
}}
/>
<Tabs.Screen name="minimalist" 
options={{
  tabBarLabel: "Minimalist",
  tabBarIcon: ({ color, size }) => <AntDesign name="minussquareo" size={size} color={color} />,
}}
/>
<Tabs.Screen
        name="storeScreen"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="image"
        options={{
          href: null,
        }}
      />
</Tabs>
</>
);
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});