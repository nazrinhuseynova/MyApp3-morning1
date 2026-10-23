import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type FoodItem = {
  id: number;
  name: string;
  price: number;
};

type FoodCardProps = {
  item: FoodItem;
  onAdd: (item: FoodItem) => void;
};

export default function FoodCard({ item, onAdd }: FoodCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.price}$</Text>
      <TouchableOpacity style={styles.btn} onPress={() => onAdd(item)}>
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "45%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#ef5350",
    padding:8,
    borderRadius:6
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});
