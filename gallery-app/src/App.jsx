import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import { categories, items } from "./data/items";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Derive filtered items on state change without mutating original array
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <Gallery items={filteredItems} />
    </div>
  );
}