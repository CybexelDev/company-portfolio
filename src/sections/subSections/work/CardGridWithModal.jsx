import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardGrid from "./CardGrid";
import Modal from "./Modal";
import { fetchWorks } from "../../../api/api.js";

// Correct category mapping: label (display) ↔ value (backend)
const FILTER_OPTIONS = [
  { label: "Web Development", value: "webdevelopment" },
  { label: "App Development", value: "appdevelopment" },
  { label: "UI UX Design", value: "uiuxdesign" },
  { label: "Graphic Design", value: "graphicdesign" },
  { label: "Digital Marketing", value: "digitalmarketing" },
];

const CardGridWithModal = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const location = useLocation();

  // Fetch all works from backend
  useEffect(() => {
    fetchWorks()
      .then((res) => {
        setCards(res.data);
        setFilteredCards(res.data); // Initially show all
      })
      .catch((err) => console.error("Failed to load works:", err));
  }, []);

  // Open modal if URL contains ?id=
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      const found = cards.find((card) => String(card.id) === id);
      if (found) {
        setActiveCard(found);
        setScrolled(false);
      }
    }
  }, [location.search, cards]);

  // Scroll lock when modal is active
  useEffect(() => {
    document.body.style.overflow = activeCard ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCard]);

  // Filter cards when selected filters change
  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredCards(cards); // show all if none selected
    } else {
      const filtered = cards.filter((card) =>
        selectedFilters.includes(card.category)
      );
      setFilteredCards(filtered);
    }
  }, [selectedFilters, cards]);

  // Toggle filter selection
  const toggleFilter = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-6 flex flex-wrap gap-3">
        {FILTER_OPTIONS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => toggleFilter(value)}
            className={`px-4 py-2 rounded-full border transition-all duration-300
              ${
                selectedFilters.includes(value)
                  ? "bg-black text-black border-white"
                  : "bg-transparent text-white border-white hover:bg-black/25 "
              }
            `}
          >
            <span className="bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent">{label}</span>
          </button>
        ))}
        <button onClick={() => setSelectedFilters([])}><span className="bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent hover:text-black">Clear All</span></button>

      </div>

      {/* Card Grid */}
      <CardGrid
        cards={filteredCards}
        setActiveCard={setActiveCard}
        setScrolled={setScrolled}
      />

      {/* Modal */}
      <Modal
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        scrolled={scrolled}
        setScrolled={setScrolled}
      />
    </>
  );
};

export default CardGridWithModal;
