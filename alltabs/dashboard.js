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
import { styleko } from "./style.js";

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
    <View style={styleko.card}>
      <Text style={styleko.cardText}>
        {item.text}{" "}
        {item.answer ? (
          <Text
            style={[
              styleko.answer,
              item.type === "true" && styleko.trueAnswer,
            ]}
          >
            {item.answer}
          </Text>
        ) : null}
      </Text>

      <Pressable style={styleko.cardMenu} hitSlop={10}>
        <Ionicons name="ellipsis-vertical" size={21} color="#10192d" />
      </Pressable>
    </View>
  );
}

export default function Dashboard({route, navigation }) {
  const { inputl } = route.params || {};



  return (
    <SafeAreaView style={styleko.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <View style={styleko.screen}>


        {/* Top navigation */}
        <View style={styleko.topBar}>
          <Pressable style={styleko.circleButton} onPress={() => alert("This section is not yet Ready!")}>
            <Ionicons name="chevron-back" size={20} color="#10192d" />
          </Pressable>

          <View style={styleko.topActions}>
            {/* <Pressable style={styleko.circleButton}>
              <Ionicons name="share-outline" size={20} color="#10192d" />
            </Pressable> */}
            <Pressable style={styleko.circleButton} onPress={() => alert("This section is not yet Ready!")}>
              <Ionicons name="search-outline" size={20} color="#10192d" />
            </Pressable>
            <Pressable style={styleko.circleButton} onPress={() => alert("This section is not yet Ready!")}>
              <Ionicons name="bookmark" size={20} color="#10192d" />
            </Pressable>
            <Pressable style={styleko.circleButton} onPress={() => alert("This section is not yet Ready!")}>
              <Ionicons name="ellipsis-horizontal" size={20} color="#10192d" />
            </Pressable>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styleko.scrollContent}
        >
          {/* Deck heading */}
          <View style={styleko.deckHeading}>
            <View style={styleko.aquaSquare} />
            <Text style={styleko.deckTitle}>LONG TEST REVIEWER</Text>
          </View>

          <View style={styleko.authorPill}>
            <View style={styleko.avatar}>
              <Text style={styleko.avatarEmoji}>ð¦</Text>
            </View>
            <Text style={styleko.byText}>by </Text>
            <Text style={styleko.authorName}>{inputl}</Text>
          </View>

          {/* Tabs */}
          <View style={styleko.tabs}>
            <Pressable style={styleko.activeTab}>
              <Text style={styleko.activeTabText}>Cards</Text>
            </Pressable>
            <Pressable style={styleko.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styleko.tabText}>Notes</Text>
            </Pressable>
            <Pressable style={styleko.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styleko.tabText} onPress={() => alert("This section is not yet Ready!")}>Lessons</Text>
            </Pressable>
            <Pressable style={styleko.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styleko.tabText}>Imports</Text>
            </Pressable>
            <Pressable style={styleko.tab} onPress={() => alert("This section is not yet Ready!")}>
              <Text style={styleko.tabText}>Leaderboard</Text>
            </Pressable>
          </View>

          <View style={styleko.divider} />

          {/* Card heading */}
          <View style={styleko.cardsHeader}>
            <Text style={styleko.cardsTitle}>Cards (8)</Text>
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
        <Pressable style={styleko.studyButton}>
          <Text style={styleko.gamepad}>ð®</Text>
          <Text style={styleko.studyText}>Study deck</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
