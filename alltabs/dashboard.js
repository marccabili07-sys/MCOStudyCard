// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import { styleko } from "./style.js";

// export default function Dashboard({ route, navigation }) {
//   const { inputl } = route.params || {};
//   const [items, setItems] = useState([]);
//   const [inputText, setInputText] = useState("");

//   // an pag add san items 
//   const addItem = () => {
//     if (inputText.trim() === "") return;
//     setItems([...items, { id: Date.now().toString(), text: inputText, done: false }]);
//     setInputText("");
//   };


//   const toggleItem = (id) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, done: !item.done } : item
//       )
//     );
//   };


//   const deleteItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const renderItem = ({ item }) => (
//     <View style={styleko.itemRow}>
//       <TouchableOpacity onPress={() => toggleItem(item.id)}>
//         <Text style={[styleko.itemText, item.done && styleko.itemDone]}>
//           {item.text}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => deleteItem(item.id)}>
//         <Text style={styleko.deleteBtn}>               delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styleko.container}>
//       <Text style={styleko.title}>Welcome, {inputl}</Text>


//       <TextInput
//         style={styleko.input}
//         placeholder="Type new item..."
//         value={inputText}
//         onChangeText={setInputText}
//       />
//       <TouchableOpacity style={styleko.addBtn} onPress={addItem}>
//         <Text style={styleko.addText}>Add Item</Text>
//       </TouchableOpacity>


//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />


//       <TouchableOpacity
//         style={styleko.buttonstylelogin}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styleko.title}>Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const cards = [
  {
    text: "Evaluation refers to getting information about how well interactive systems fulfill their goals.",
    answer: "TRUE",
    type: "true",
  },
  {
    text: "HCI is a research-driven field that focuses on understanding interaction scientifically or on designing better systems.",
    answer: "FALSE - or (and)",
  },
  {
    text: "HCI is about building passive computing systems.",
    answer: "FALSE - passive computing (interactive)",
  },
  {
    text: "In a systems development standpoint, the HCI specialist defines what makes a computing system good.",
    answer: "TRUE",
  },
  {
    text: "The interaction shapes how users experience systems.",
    answer: "FALSE - interaction (user interface)",
  },
  {
    text: "Designing refers to the application of some systematic methodology to attribute human-related values to an artifact, prototype, system, or process.",
    answer: "FALSE - Designing (Evaluation)",
  },
  {
    text: "User interface is the reciprocal influence between people and systems.",
    answer: "",
  },
  {
    text: "Verification means ensuring that the design is suitable for its intended purpose.",
    answer: "FALSE - Verification (Validation)",
  },
];

function Card({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>
        {item.text}{" "}
        {item.answer ? (
          <Text
            style={[
              styles.answer,
              item.type === "true" && styles.trueAnswer,
            ]}
          >
            {item.answer}
          </Text>
        ) : null}
      </Text>

      <Pressable style={styles.cardMenu} hitSlop={10}>
        <Ionicons name="ellipsis-vertical" size={21} color="#10192d" />
      </Pressable>
    </View>
  );
}

export default function Dashboard({route, navigation }) {
  const { inputl } = route.params || {};



  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <View style={styles.screen}>


        {/* Top navigation */}
        <View style={styles.topBar}>
          <Pressable style={styles.circleButton} onPress={() => alert("This section is not yet Ready!")}>
            <Ionicons name="chevron-back" size={20} color="#10192d" />
          </Pressable>

          <View style={styles.topActions}>
            {/* <Pressable style={styles.circleButton}>
              <Ionicons name="share-outline" size={20} color="#10192d" />
            </Pressable> */}
            <Pressable style={styles.circleButton} onPress={() => alert("This section is not yet Ready!")}>
              <Ionicons name="search-outline" size={20} color="#10192d" />
            </Pressable>
            <Pressable style={styles.circleButton} onPress={() => alert("This section is not yet Ready!")}>
              <Ionicons name="bookmark" size={20} color="#10192d" />
            </Pressable>
            <Pressable style={styles.circleButton} onPress={() => alert("This section is not yet Ready!")}>
              <Ionicons name="ellipsis-horizontal" size={20} color="#10192d" />
            </Pressable>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Deck heading */}
          <View style={styles.deckHeading}>
            <View style={styles.aquaSquare} />
            <Text style={styles.deckTitle}>LONG TEST REVIEWER</Text>
          </View>

          <View style={styles.authorPill}>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>ð¦</Text>
            </View>
            <Text style={styles.byText}>by </Text>
            <Text style={styles.authorName}>{inputl}</Text>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            <Pressable style={styles.activeTab}>
              <Text style={styles.activeTabText}>Cards</Text>
            </Pressable>
            <Pressable style={styles.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styles.tabText}>Notes</Text>
            </Pressable>
            <Pressable style={styles.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styles.tabText} onPress={() => alert("This section is not yet Ready!")}>Lessons</Text>
            </Pressable>
            <Pressable style={styles.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styles.tabText}>Imports</Text>
            </Pressable>
            <Pressable style={styles.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styles.tabText}>Leaderboard</Text>
            </Pressable>
          </View>

          <View style={styles.divider} />

          {/* Card heading */}
          <View style={styles.cardsHeader}>
            <Text style={styles.cardsTitle}>Cards (8)</Text>
            <Pressable>
              <Ionicons name="swap-vertical" size={26} color="#18223a" />
            </Pressable>
          </View>

          {/* Cards */}
          {cards.map((item, index) => (
            <Card key={index} item={item} />
          ))}

          <View style={{ height: 120 }} />
        </ScrollView>

        {/* Bottom floating button */}
        <Pressable style={styles.studyButton}>
          <Text style={styles.gamepad}>ð®</Text>
          <Text style={styles.studyText}>Study deck</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  screen: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  topBar: {
    height: 90,
    paddingHorizontal: 46,
    paddingVertical: 12,
    paddingTop: Platform.OS === "ios" ? 18 : 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topActions: {
    alignItems: "Right",
    flexDirection: "row",
    gap: 14,
  },
  circleButton: {
    width: 74,
    height: 74,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#aabada",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.025,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  scrollContent: {
    paddingHorizontal: 45,
    paddingBottom: 40,
  },
  deckHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 34,
    marginBottom: 28,
  },
  aquaSquare: {
    width: 49,
    height: 49,
    borderRadius: 13,
    backgroundColor: "#00d254",
    marginRight: 25,
  },
  deckTitle: {
    fontSize: 30,
    lineHeight: 44,
    fontWeight: "800",
    letterSpacing: -1.2,
    color: "#111a2f",
  },
  authorPill: {
    alignSelf: "flex-start",
    minHeight: 70,
    paddingLeft: 22,
    paddingRight: 30,
    borderRadius: 44,
    borderWidth: 1.5,
    borderColor: "#416193",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  avatarEmoji: {
    fontSize: 25,
  },
  byText: {
    fontSize: 25,
    color: "#68748a",
    fontWeight: "600",
  },
  authorName: {
    fontSize: 27,
    color: "#172039",
    fontWeight: "800",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 3,
  },
  activeTab: {
    paddingVertical: 12,
    paddingHorizontal: 3,
  },
  activeTabText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#151e33",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#68758d",
  },
  divider: {
    height: 1,
    backgroundColor: "#e4e8ed",
    marginTop: 30,
    marginBottom: 49,
  },
  cardsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  cardsTitle: {
    fontSize: 29,
    fontWeight: "800",
    color: "#131c31",
  },
  card: {
    minHeight: 174,
    borderRadius: 42,
    borderWidth: 1.5,
    borderColor: "#e1e5ea",
    backgroundColor: "#fff",
    marginBottom: 27,
    paddingTop: 34,
    paddingBottom: 31,
    paddingLeft: 47,
    paddingRight: 62,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.018,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardText: {
    fontSize: 25,
    lineHeight: 35,
    color: "#19233a",
    fontWeight: "500",
    letterSpacing: -0.25,
  },
  answer: {
    fontWeight: "800",
    color: "#14203a",
  },
  trueAnswer: {
    backgroundColor: "#d9f7e6",
  },
  cardMenu: {
    position: "absolute",
    top: 26,
    right: 25,
  },
  studyButton: {
    position: "absolute",
    left: 45,
    right: 45,
    bottom: 26,
    height: 96,
    borderRadius: 52,
    backgroundColor: "#111a30",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 8,
  },
  gamepad: {
    fontSize: 32,
    marginRight: 18,
  },
  studyText: {
    fontSize: 29,
    fontWeight: "800",
    color: "#fff",
  },
});