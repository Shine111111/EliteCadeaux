// src/App.jsx
import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { navSections, items } from "./data/items";
import Footer from "./components/Footer"; // Import Footer

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedFilter, setSelectedFilter] = useState({ section: null, subcategory: null });

  const handleSelectCategory = (sectionId, subcategory = null) => {
    setSelectedFilter({ section: sectionId, subcategory });
    setCurrentView("items");
  };

  const handleGoHome = () => {
    setCurrentView("home");
    setSelectedFilter({ section: null, subcategory: null });
  };

  const filteredItems = useMemo(() => {
    if (!selectedFilter.section) return items;

    return items.filter((item) => {
      const matchesSection = item.section === selectedFilter.section;
      if (!selectedFilter.subcategory) return matchesSection;
      return matchesSection && item.subcategory === selectedFilter.subcategory;
    });
  }, [selectedFilter]);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar
        navSections={navSections}
        selectedFilter={selectedFilter}
        currentView={currentView}
        onSelectCategory={handleSelectCategory}
        onGoHome={handleGoHome}
      />

      <div style={{ flex: 1 }}>
        {currentView === "home" ? <Home /> : <Gallery items={filteredItems} />}
      </div>

      <Footer />
    </div>
  );
}