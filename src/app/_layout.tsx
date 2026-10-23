const users = [
  {
    id: 1,
    name: "Elnur",
    job: "Developer",
    city: "Baku",
    image:
      "https://img.magnific.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66523.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "John",
    job: "QA Engineer",
    city: "Ganja",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
  },
  {
    id: 3,
    name: "Murad",
    job: "Designer",
    city: "London",
    image:
      "https://png.pngtree.com/png-clipart/20230930/original/pngtree-man-avatar-isolated-png-image_13022161.png",
  },
  {
    id: 4,
    name: "Tural",
    job: "Developer",
    city: "Baku",
    image:
      "https://img.magnific.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66523.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 5,
    name: "Ali",
    job: "IT Specialist",
    city: "Lankaran",
    image: "https://cdn-icons-png.flaticon.com/512/3641/3641963.png",
  },
  {
    id: 6,
    name: "Ayan",
    job: "Manager",
    city: "Baku",
    image:
      "https://img.magnific.com/free-vector/woman-with-braided-hair-illustration_1308-174675.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 7,
    name: "Leyla",
    job: "QA Engineer",
    city: "Baku",
    image:
      "https://img.magnific.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 8,
    name: "Jale",
    job: "Developer",
    city: "Baku",
    image:
      "https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg",
  },
  {
    id: 9,
    name: "Sevinc",
    job: "QA Engineer",
    city: "Baku",
    image:
      "https://st3.depositphotos.com/3428903/15827/v/1600/depositphotos_158276272-stock-illustration-confident-business-asian-woman-avatar.jpg",
  },
  {
    id: 10,
    name: "Gulcan",
    job: "Finance Specialist",
    city: "Baku",
    image:
      "https://www.shutterstock.com/image-vector/face-happy-girl-avatar-laughing-260nw-1459862774.jpg",
  },
  {
    id: 11,
    name: "Aysel",
    job: "QA Engineer",
    city: "Baku",
    image:
      "https://st3.depositphotos.com/3428903/15827/v/1600/depositphotos_158276272-stock-illustration-confident-business-asian-woman-avatar.jpg",
  },
  {
    id: 12,
    name: "Yasemen",
    job: "Finance Specialist",
    city: "Baku",
    image:
      "https://www.shutterstock.com/image-vector/face-happy-girl-avatar-laughing-260nw-1459862774.jpg",
  },
];

import FoodCard, { FoodItem } from "@/components/FoodCard";
import Header from "@/components/Header";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

// export default function App() {
//   return (
//     <ScrollView
//       contentContainerStyle={[
//         styles.container,
//         { paddingTop: StatusBar.currentHeight },
//       ]}
//     >
//       {users.map((user) => (
//         <View key={user.id} style={styles.card}>
//           <Image source={{ uri: user.image }} style={styles.avatar} />
//           <Text style={styles.name}>
//             <MaterialCommunityIcons
//               name="human"
//               size={22}
//               color="deepskyblue"
//             />
//             {user.name}
//           </Text>

//           <Text style={styles.detail}>{user.job}</Text>
//           <Text style={styles.detail}>
//             <Ionicons name="location" size={20} color="deepskyblue" />
//             {user.city}
//           </Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     paddingVertical: 20,
//   },
//   card: {
//     width: "45%",
//     backgroundColor: "#f9f9f9",
//     marginBottom: 20,
//     borderRadius: 10,
//     padding: 10,
//     alignItems: "center",
//     shadowColor: "deepskyblue",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.5,
//     //only for Android
//     elevation: 10,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 8,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   detail: {
//     fontSize: 14,
//     color: "#444",
//   },
// });

// export default function App() {
//   const [balance, setBalance] = useState<number>(0);

//   const handleAddMoney = () => {
//     setBalance(balance + 50);
//   };

//   const handleWithDraw = () => {
//     if (balance <= 30) {
//       Alert.alert("Warning", "You do not have enough money!");
//       return;
//     }
//     setBalance(balance - 30);
//   };

//   const handleReset = () => {
//     Alert.alert("Resetting", "Balance resetted");
//     setBalance(0);
//   };

//   return (
//     <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
//       <Text style={styles.title}>
//         <FontAwesome
//           name="money"
//           size={26}
//           color={"#607d8b"}
//           style={{ marginRight: 5 }}
//         />
//         Simple Balance
//       </Text>

//       <Text
//         style={[
//           styles.balance,
//           { color: balance > 0 ? "#4caf50" : balance < 0 ? "#f44336" : "#333" },
//         ]}
//       >
//         Balance : {balance}$
//       </Text>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.button, styles.green]}
//           onPress={handleAddMoney}
//         >
//           <Text style={styles.buttonText}>
//             <FontAwesome name="plus" size={22} color="#607d8b" />{" "}
//             <Text>50 $</Text>
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.red]}
//           onPress={handleWithDraw}
//         >
//           <Text style={styles.buttonText}>
//             <FontAwesome name="minus" size={22} color="#607d8b" />{" "}
//             <Text>30 $</Text>
//           </Text>
//         </TouchableOpacity>

//         <TouchableHighlight
//           style={[styles.button, styles.gray]}
//           onLongPress={handleReset}
//         >
//           <Text style={styles.buttonText}>Reset</Text>
//         </TouchableHighlight>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     margin: 24,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   balance: {
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flexDirection: "column",
//     gap: 15,
//   },
//   button: {
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 22,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   green: {
//     backgroundColor: "#4caf50",
//   },
//   red: {
//     backgroundColor: "#f44336",
//   },
//   gray: {
//     backgroundColor: "#607d8b",
//   },
// });

const initialItems = [
  { id: 1, name: "Pizza", price: 10.5 },
  { id: 2, name: "Burger", price: 8.1 },
  { id: 3, name: "Sushi", price: 24 },
  { id: 4, name: "Salad", price: 12 },
  { id: 5, name: "Shaurma", price: 5 },
];

export default function App() {
  const [cart, setCart] = useState<FoodItem[]>([]);
  const [foodItems, setFoodItems] = useState<FoodItem[]>(initialItems);

  const [newFood, setNewFood] = useState<string>("");

  const handleAdd = (item: FoodItem) => {
    setCart([...cart, item]);
    Alert.alert("Cart Summary", `${item.name} added to cart!`);
  };

  const handleNewFoodSubmit = () => {
    if (!newFood.trim()) {
      Alert.alert("Required", "Please fill food name input!");
      return;
    }

    const newItem: FoodItem = {
      id: foodItems.length + 1,
      name: newFood,
      price: Math.floor(Math.random() * 10 + 15),
    };

    setFoodItems([newItem, ...foodItems]);
    setNewFood("");
    Keyboard.dismiss();
  };

  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Header />

      <View style={styles.cartInfo}>
        <Text style={styles.cartText}>
          <FontAwesome5 name="shopping-cart" size={22} color="#ef5350" />
          Cart : {cart.length} product
        </Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add new food"
          value={newFood}
          onChangeText={setNewFood}
          onSubmitEditing={handleNewFoodSubmit}
        />

        <Button title="Add food" onPress={handleNewFoodSubmit}></Button>
      </View>

      <FlatList
        data={foodItems}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodCard item={item} onAdd={handleAdd} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartInfo: {
    alignItems: "center",
    padding: 10,
  },
  cartText: {
    fontSize: 20,
  },
  inputRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: "#ccc",
  },
});
