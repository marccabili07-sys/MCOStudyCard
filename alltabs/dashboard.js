import React, { useRef, useState } from "react";
import {   View, Text,TextInput, TouchableOpacity, FlatList, Button } from "react-native";
import {styleko} from './style.js';
export default function Dashboard( { route, navigation  } ) {

  const { inputl } = route.params || {};


   return (
    <View style={styleko.container}>
      <Text style={styleko.title}>Welcome, { inputl }</Text>
            <TouchableOpacity style = {styleko.buttonstylelogin}
        
              onPress={() => navigation.goBack()}
            >
              <Text style={styleko.title}>Log Out</Text>
           </TouchableOpacity>
    </View>
  );
}
