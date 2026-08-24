// src/data/items.js
export const navSections = [
  { id: "trending", label: "Trending", subcategories: ["Best Sellers", "New Arrivals", "Featured"] },
  { id: "around-the-world", label: "Around the world", subcategories: ["Canada", "West Asia", "East Asia", "Africa", "Europe"] },
  { id: "home-decor", label: "Home Decor", subcategories: ["Vases", "Wall Art", "Cushions", "Rugs"] },
  { id: "entertainment", label: "Entertainment", subcategories: ["Board Games", "Puzzles", "Books", "Audio"] },
  { id: "kitchenware", label: "Kitchenware", subcategories: ["Cookware", "Tableware", "Glassware", "Cutlery"] },
  { id: "planting-gardening", label: "Planting and Gardening", subcategories: ["Pots & Planters", "Indoor Plants", "Garden Tools", "Seeds"] },
  { id: "candles", label: "Candles", subcategories: ["Scented", "Beeswax", "Holders", "Diffusers"] },
  { id: "seasonal", label: "Seasonal", subcategories: ["Spring", "Summer", "Autumn", "Winter", "Holiday"] },
];

export const items = [
  { id: 1, name: "Maple Syrup Set", section: "around-the-world", subcategory: "Canada", image: "https://placehold.co/200x150?text=Canada+Syrup" },
  { id: 2, name: "Persian Ceramic Plate", section: "around-the-world", subcategory: "West Asia", image: "https://placehold.co/200x150?text=West+Asia+Plate" },
  { id: 3, name: "Ceramic Minimalist Vase", section: "home-decor", subcategory: "Vases", image: "https://placehold.co/200x150?text=Ceramic+Vase" },
  { id: 4, name: "Handmade Scented Candle", section: "candles", subcategory: "Scented", image: "https://placehold.co/200x150?text=Candle" },
  { id: 5, name: "Cast Iron Skillet", section: "kitchenware", subcategory: "Cookware", image: "https://placehold.co/200x150?text=Skillet" },
  { id: 6, name: "Terracotta Planter", section: "planting-gardening", subcategory: "Pots & Planters", image: "https://placehold.co/200x150?text=Planter" },
  { id: 7, name: "Classic Wooden Chess Set", section: "entertainment", subcategory: "Board Games", image: "https://placehold.co/200x150?text=Chess+Set" },
  { id: 8, name: "Holiday Pine Wreath", section: "seasonal", subcategory: "Holiday", image: "https://placehold.co/200x150?text=Wreath" },
];