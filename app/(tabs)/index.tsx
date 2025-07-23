import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ImageGrid from "@/components/ImageGrid";

export default function index() {
  return (
    <View>
        <ScrollView>      
      <Pressable style={{alignItems: "center"}}>
        <Text style={styles.header}>AniPix</Text>
      </Pressable>
        <ImageGrid />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        paddingTop:30,
        fontSize: 40,
        fontWeight: "bold",
        color: "#023047",
    }
})