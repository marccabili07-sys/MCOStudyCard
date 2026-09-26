import { Text, View, Button,TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from "react";
import { styleko } from './style.js';
export default function SigninScreen({ navigation, route }) {
  const { inputl } = route.params || {};
  const [input, setUserdata] = useState("");
  
  const ifvalnoval = () => {
        if (inputl && input){
          navigation.navigate('Dashboard', {inputl});
        }else{
          alert('Invalid User Name/Password');
        }
      };
  return (
    <View style={styleko.container}>
      <Text style={styleko.title}>Signin Screen</Text>
      <Text>Welcome, {inputl}</Text>
      <TextInput 
        placeholder="Enter Password"
        value={input}
        onChangeText={setUserdata}
        style = {styleko.input}
      />



      <TouchableOpacity style = {styleko.buttonstylesignin}
           onPress={ifvalnoval}
          >
          <Text style={styleko.title}>Sign in</Text>
      </TouchableOpacity>


      <TouchableOpacity style = {styleko.buttonstylelogin}
           onPress={() => navigation.navigate('Login')}
          >
          <Text style={styleko.title}>To log in</Text>
      </TouchableOpacity>
    </View>
  );
}