// src/App.jsx
import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { categories, items } from "./data/items";

export default function App() {
  const [currentView, setCurrentView] = useState("home"); // Default landing page is Home
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    setCurrentView("items"); // Switch to items gallery view
  };

  const handleGoHome = () => {
    setCurrentView("home"); // Switch to home view
  };

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        currentView={currentView}
        onSelectCategory={handleSelectCategory}
        onGoHome={handleGoHome}
      />
      
      {currentView === "home" ? (
        <Home />
      ) : (
        <Gallery items={filteredItems} />
      )}
    </div>
  );
}