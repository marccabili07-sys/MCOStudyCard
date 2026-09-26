import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { styleko } from "./style.js";

export default function Dashboard({ route, navigation }) {
  const { inputl } = route.params || {};
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  // an pag add san items 
  const addItem = () => {
    if (inputText.trim() === "") return;
    setItems([...items, { id: Date.now().toString(), text: inputText, done: false }]);
    setInputText("");
  };


  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };


  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styleko.itemRow}>
      <TouchableOpacity onPress={() => toggleItem(item.id)}>
        <Text style={[styleko.itemText, item.done && styleko.itemDone]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Text style={styleko.deleteBtn}>               delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styleko.container}>
      <Text style={styleko.title}>Welcome, {inputl}</Text>


      <TextInput
        style={styleko.input}
        placeholder="Type new item..."
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity style={styleko.addBtn} onPress={addItem}>
        <Text style={styleko.addText}>Add Item</Text>
      </TouchableOpacity>


      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />


      <TouchableOpacity
        style={styleko.buttonstylelogin}
        onPress={() => navigation.goBack()}
      >
        <Text style={styleko.title}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
