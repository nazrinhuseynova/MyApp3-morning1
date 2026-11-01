export type Category = "Meyvələr" | "Ət məhsulları" | "Şirniyyatlar" | "İçkilər";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: Category;
};

export const ALL = "Hamısı";

export type Filter = Category | typeof ALL;

export const CATEGORIES: Category[] = [
  "Meyvələr",
  "Ət məhsulları",
  "Şirniyyatlar",
  "İçkilər",
];

export const FILTERS: Filter[] = [ALL, ...CATEGORIES];

export const CATEGORY_ICONS: Record<Filter, string> = {
  Hamısı: "🛒",
  Meyvələr: "🍎",
  "Ət məhsulları": "🥩",
  Şirniyyatlar: "🍫",
  İçkilər: "🥤",
};

export const initialProducts: Product[] = [
  { id: 1, name: "Alma", price: 2.5, category: "Meyvələr" },
  { id: 2, name: "Banan", price: 3.2, category: "Meyvələr" },
  { id: 3, name: "Portağal", price: 2.8, category: "Meyvələr" },
  { id: 4, name: "Mal əti", price: 14, category: "Ət məhsulları" },
  { id: 5, name: "Toyuq", price: 7.5, category: "Ət məhsulları" },
  { id: 6, name: "Kolbasa", price: 9, category: "Ət məhsulları" },
  { id: 7, name: "Şokolad", price: 3, category: "Şirniyyatlar" },
  { id: 8, name: "Peçenye", price: 2, category: "Şirniyyatlar" },
  { id: 9, name: "Tort", price: 18, category: "Şirniyyatlar" },
  { id: 10, name: "Su", price: 0.8, category: "İçkilər" },
  { id: 11, name: "Meyvə şirəsi", price: 2.4, category: "İçkilər" },
  { id: 12, name: "Limonad", price: 1.6, category: "İçkilər" },
];

export const formatPrice = (value: number) => `${Number(value.toFixed(2))} AZN`;
