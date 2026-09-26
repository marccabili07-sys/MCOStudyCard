import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import {styleko} from './style.js';

export default function LoginScreen({ navigation }) {



  const [inputl, setUserdatal] = useState("");
    const ifvalnoval = () => {
        if (inputl){
          navigation.navigate('Dashboard', {inputl});
        }else{
          alert('No UserName!! You Cant Proceed to the Next Screen/Dashboard');
        }
      };
 
  return (
    <View style={styleko.container}>
      <Text style={styleko.title}>Login Screen</Text>
          <TextInput 
              placeholder="Type your Name/Email"
              value={inputl}
              onChangeText={setUserdatal}
              style = {styleko.input}
            />

      <TouchableOpacity style = {styleko.buttonstylesignin}
        onPress={() => navigation.navigate('Signin', {inputl})}
      >
        <Text style={styleko.title}>Sign in</Text>
        </TouchableOpacity>



      <TouchableOpacity style = {styleko.buttonstyleDashboard}
        // onPress={() => { navigation.navigate("Dashboard", { inputl })}}
        onPress = {ifvalnoval}
      >
        <Text style={styleko.title}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}