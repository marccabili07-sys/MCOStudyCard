import React from "react";
import { SafeAreaView, View, Text, StatusBar, FlatList, Pressable } from "react-native";
import {styleko} from './style.js';
const SLIDES = [
  { id: "1", title: "Welcome", body: "This is slide one" },
  { id: "2", title: "Learn", body: "This is slide two" },
];

export default function App({ onStart }) {
  const renderSlide = ({ item }) => (
    <View style={styleko.slide}>
      <Text style={styleko.title}>{item.title}</Text>
      <Text style={styleko.body}>{item.body}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <FlatList
        data={SLIDES}
        keyExtractor={(item) => item.id}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      <View style={{ padding: 20 }}>
        <Pressable onPress={onStart} style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}>
          <Text style={{ color: "white", textAlign: "center" }}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}