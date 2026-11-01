import { formatPrice, Product } from "@/constants/market";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ProductCardProps = {
  item: Product;
  onAdd: (item: Product) => void;
  onRemove: (item: Product) => void;
};

export default function ProductCard({
  item,
  onAdd,
  onRemove,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
        <TouchableOpacity
          onPress={() => onRemove(item)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={styles.removeText}>✕</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>{formatPrice(item.price)}</Text>
      <TouchableOpacity
        style={styles.addBtn}
        activeOpacity={0.7}
        onPress={() => onAdd(item)}
      >
        <Text style={styles.addText}>+ Əlavə et</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 6,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  removeText: {
    fontSize: 16,
    color: "#e53935",
    fontWeight: "bold",
  },
  price: {
    marginTop: 6,
    fontSize: 15,
    color: "#555",
  },
  addBtn: {
    marginTop: 10,
    backgroundColor: "#2e7d32",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
