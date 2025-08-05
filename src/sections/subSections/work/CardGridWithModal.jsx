import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardGrid from "./CardGrid";
import Modal from "./Modal";
import works from "../../../assets/datas/works.js";

const CardGridWithModal = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const cards = works;

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
  }, [location.search]);

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
