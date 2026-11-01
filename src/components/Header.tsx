import { formatPrice } from "@/constants/market";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  count: number;
  total: number;
  isLandscape: boolean;
};

export default function Header({ count, total, isLandscape }: HeaderProps) {
  return (
    <View
      style={[
        styles.header,
        isLandscape ? styles.headerLandscape : styles.headerPortrait,
      ]}
    >
      <Text style={styles.title}>Smart Market</Text>
      <View style={styles.cartRow}>
        <FontAwesome5 name="shopping-cart" size={16} color="#fff" />
        <Text style={styles.cartText}>
          Səbətdə: {count} məhsul / {formatPrice(total)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    backgroundColor: "#2e7d32",
    alignItems: "center",
  },
  headerPortrait: {
    paddingVertical: 14,
    gap: 6,
  },
  headerLandscape: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  cartRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  cartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
