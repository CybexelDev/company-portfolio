import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardGrid from "./CardGrid";
import Modal from "./Modal";
import { fetchWorks } from "../../../api/api.js";

const CardGridWithModal = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [cards, setCards] = useState([])
  useEffect(() => {
      fetchWorks()
        .then((res) =>{
          console.log("Fetched works from backend:", res.data);
           setCards(res.data)
        })
        .catch((err) => console.error("Failed to load team members:", err));
    }, []);

  

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

  useEffect(() => {
    document.body.style.overflow = activeCard ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCard]);

  return (
    <>
      <CardGrid cards={cards} setActiveCard={setActiveCard} setScrolled={setScrolled} />
      <Modal activeCard={activeCard} setActiveCard={setActiveCard} scrolled={scrolled} setScrolled={setScrolled} />
    </>
  );
};

export default CardGridWithModal;
