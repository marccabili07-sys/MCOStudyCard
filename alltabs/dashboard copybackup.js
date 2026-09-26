// import React, { useRef, useState } from "react";
// import { Text, View, TouchableOpacity, Animated,  TextInput, Button } from "react-native";
// import {styleko} from './style.js';
// export default function Dashboard( { route, navigation  } ) {

//   const { inputl } = route.params || {};


//   const flipAnim = useRef(new Animated.Value(0)).current;
//   const [flipped, setFlipped] = useState(false);

//   // User input states
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   const frontInterpolate = flipAnim.interpolate({
//     inputRange: [0, 180],
//     outputRange: ["0deg", "180deg"],
//   });

//   const backInterpolate = flipAnim.interpolate({
//     inputRange: [0, 180],
//     outputRange: ["180deg", "360deg"],
//   });

//   const flipCard = () => {
//     if (flipped) {
//       Animated.spring(flipAnim, {
//         toValue: 0,
//         friction: 8,
//         tension: 10,
//         useNativeDriver: true,
//       }).start();
//       setFlipped(false);
//     } else {
//       Animated.spring(flipAnim, {
//         toValue: 180,
//         friction: 8,
//         tension: 10,
//         useNativeDriver: true,
//       }).start();
//       setFlipped(true);
//     }
//   };

//    return (
//     <View style={styleko.container}>
//       <Text style={styleko.title}>Welcome, { inputl }</Text>
      


//            <Text style={styleko.title}>Log Out</Text>
//             <Button
//               title="Go to Default Screen"
//               // onPress={() => navigation.navigate('Login')}
//               onPress={() => navigation.goBack()}
//             />

//       <TouchableOpacity onPress={flipCard}>
//         <View>
//           {/* Front side: Question input */}
//           <Animated.View
//             style={[
//               styleko.card,
//               { transform: [{ rotateY: frontInterpolate }] },
//             ]}
//           >
//             <Text style={styleko.titledashboard}>Enter Question</Text>
//             <TextInput
//               style={styleko.input}
//               placeholder="Type your question..."
//               value={question}
//               onChangeText={setQuestion}
//             />
//             <Text style={ styleko.preview}>{question}</Text>
//           </Animated.View>

//           {/* Back side: Answer input */}
//           <Animated.View
//             style={[
//               styleko.card,
//               styleko.cardBack,
//               { transform: [{ rotateY: backInterpolate }] },
//             ]}
//           >
//             <Text style={styleko.titledashboard}>Enter Answer</Text>
//             <TextInput
//               style={styleko.input}
//               placeholder="Type your answer..."
//               value={answer}
//               onChangeText={setAnswer}
//             />
//             <Text style={styleko.preview}>{answer}</Text>
//           </Animated.View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }
