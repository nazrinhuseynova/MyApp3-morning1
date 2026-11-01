import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import {
  ALL,
  CATEGORIES,
  CATEGORY_ICONS,
  Category,
  FILTERS,
  Filter,
  initialProducts,
  Product,
} from "@/constants/market";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MarketSection = {
  key: string;
  title: Category;
  data: Product[][];
};

export default function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Filter>(ALL);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const columns = isLandscape ? 3 : 2;

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const sections: MarketSection[] = CATEGORIES.filter(
    (c) => selected === ALL || c === selected,
  )
    .map((c) => ({
      key: c,
      title: c,
      data: [products.filter((p) => p.category === c)],
    }))
    .filter((s) => s.data[0].length > 0);

  const handleAddToCart = (item: Product) => {
    setCart([...cart, item]);
    Alert.alert("Səbət", `${item.name} səbətə əlavə olundu`);
  };

  const handleRemoveProduct = (item: Product) => {
    setProducts(products.filter((p) => p.id !== item.id));
    setCart(cart.filter((p) => p.id !== item.id));
  };

  const handleSubmit = () => {
    if (selected === ALL) {
      Alert.alert(
        "Kateqoriya seçilməyib",
        "Məhsul əlavə etmək üçün əvvəlcə kateqoriya seçin.",
      );
      return;
    }

    const trimmedName = name.trim();
    const value = Number(price.trim().replace(",", "."));

    if (!trimmedName) {
      Alert.alert("Xəta", "Məhsulun adını daxil edin.");
      return;
    }

    if (isNaN(value) || value <= 0) {
      Alert.alert("Xəta", "Qiyməti düzgün daxil edin.");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: trimmedName,
      price: value,
      category: selected,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    Keyboard.dismiss();
  };

  const renderChip = (item: Filter) => {
    const active = item === selected;
    return (
      <TouchableOpacity
        key={item}
        style={[styles.chip, active && styles.chipActive]}
        onPress={() => setSelected(item)}
      >
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {CATEGORY_ICONS[item]} {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const hint = (
    <Text style={styles.hint}>
      {selected === ALL
        ? "Məhsul əlavə etmək üçün kateqoriya seçin"
        : `"${selected}" kateqoriyasına məhsul əlavə et`}
    </Text>
  );

  const formFields = (
    <>
      <TextInput
        style={[styles.input, !isLandscape && styles.nameInput]}
        placeholder="Məhsulun adı"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, !isLandscape && styles.priceInput]}
        placeholder="Qiymət"
        placeholderTextColor="#888"
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Əlavə et</Text>
      </TouchableOpacity>
    </>
  );

  const productList = (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item[0].category}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={
        <Text style={styles.empty}>Bu kateqoriyada məhsul yoxdur</Text>
      }
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {CATEGORY_ICONS[section.title]} {section.title}
          </Text>
          <Text style={styles.sectionCount}>{section.data[0].length}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.productRow}>
          {item.map((product) => (
            <ProductCard
              key={product.id}
              item={product}
              columns={columns}
              onAdd={handleAddToCart}
              onRemove={handleRemoveProduct}
            />
          ))}
        </View>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header count={cart.length} total={cartTotal} isLandscape={isLandscape} />

      {isLandscape ? (
        <View style={styles.landscapeBody}>
          <ScrollView
            style={styles.sidePanel}
            contentContainerStyle={styles.sideContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.chipWrap}>{FILTERS.map(renderChip)}</View>
            {hint}
            <View style={styles.formColumn}>{formFields}</View>
          </ScrollView>
          <View style={styles.listPanel}>{productList}</View>
        </View>
      ) : (
        <>
          <FlatList
            data={FILTERS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            style={styles.chipList}
            contentContainerStyle={styles.chipContent}
            renderItem={({ item }) => renderChip(item)}
          />
          {hint}
          <View style={styles.inputRow}>{formFields}</View>
          {productList}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  landscapeBody: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  sidePanel: {
    flex: 4,
  },
  sideContent: {
    gap: 10,
    paddingBottom: 16,
  },
  listPanel: {
    flex: 6,
  },
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chipList: {
    flexGrow: 0,
  },
  chipContent: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 8,
    alignItems: "center",
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cfd8dc",
  },
  chipActive: {
    backgroundColor: "#2e7d32",
    borderColor: "#2e7d32",
  },
  chipText: {
    color: "#333",
    fontWeight: "600",
  },
  chipTextActive: {
    color: "#fff",
  },
  hint: {
    paddingHorizontal: 4,
    marginBottom: 6,
    color: "#555",
    fontSize: 13,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 8,
  },
  formColumn: {
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cfd8dc",
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#222",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  nameInput: {
    flex: 2,
  },
  priceInput: {
    flex: 1,
  },
  submitBtn: {
    backgroundColor: "#2e7d32",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
  },
  listContent: {
    paddingHorizontal: 6,
    paddingBottom: 32,
    flexGrow: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  sectionCount: {
    minWidth: 26,
    textAlign: "center",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#2e7d32",
    color: "#fff",
    fontWeight: "bold",
  },
  productRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#777",
    fontSize: 16,
  },
});
