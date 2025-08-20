import React from "react";

const CardGrid = ({ cards, setActiveCard, setScrolled }) => {
  // CASE 1: Less than 3 items (desktop only)
  if (cards.length < 3) {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 py-10">
        {cards.length === 0 && (
          <p className="text-center text-gray-500 text-lg">No items available</p>
        )}

        {cards.length === 1 && (
          <div className="flex justify-center">
            <CardBox
              card={cards[0]}
              setActiveCard={setActiveCard}
              setScrolled={setScrolled}
              aspect="aspect-square"
              className="w-1/2"
            />
          </div>
        )}

        {cards.length === 2 && (
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <CardBox
                key={card.id || index}
                card={card}
                setActiveCard={setActiveCard}
                setScrolled={setScrolled}
                aspect="aspect-square"
                className="flex-1"
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  // --- CASE 2 & 3: 3 or more items ---
  const fullGroupsEnd = Math.floor(cards.length / 3) * 3;
  const fullGroups = cards.slice(0, fullGroupsEnd);
  const remaining = cards.slice(fullGroupsEnd);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 space-y-5">
      {/* Desktop layout (>= md) */}
      <div className="hidden md:block space-y-5">
        {fullGroups.map((_, groupIndex) => {
          if (groupIndex % 3 !== 0) return null;

          const bigCard = fullGroups[groupIndex];
          const small1 = fullGroups[groupIndex + 1];
          const small2 = fullGroups[groupIndex + 2];

          if (!bigCard) return null;

          const isEven = (groupIndex / 3) % 2 === 1;

          return (
            <div
              key={bigCard?.id || groupIndex}
              className="flex flex-col md:flex-row w-full gap-4"
            >
              {/* Left side */}
              {!isEven ? (
                <CardBox
                  card={bigCard}
                  setActiveCard={setActiveCard}
                  setScrolled={setScrolled}
                  aspect="aspect-square"
                  className="flex-1"
                />
              ) : (
                <div className="flex-1 flex flex-col gap-4">
                  {small1 && (
                    <CardBox
                      card={small1}
                      setActiveCard={setActiveCard}
                      setScrolled={setScrolled}
                      aspect="aspect-[2/1]"
                      className="h-1/2"
                    />
                  )}
                  {small2 && (
                    <CardBox
                      card={small2}
                      setActiveCard={setActiveCard}
                      setScrolled={setScrolled}
                      aspect="aspect-[2/1]"
                      className="h-1/2"
                    />
                  )}
                </div>
              )}

              {/* Right side */}
              {!isEven ? (
                <div className="flex-1 flex flex-col gap-4">
                  {small1 && (
                    <CardBox
                      card={small1}
                      setActiveCard={setActiveCard}
                      setScrolled={setScrolled}
                      aspect="aspect-[2/1]"
                      className="h-1/2"
                    />
                  )}
                  {small2 && (
                    <CardBox
                      card={small2}
                      setActiveCard={setActiveCard}
                      setScrolled={setScrolled}
                      aspect="aspect-[2/1]"
                      className="h-1/2"
                    />
                  )}
                </div>
              ) : (
                <CardBox
                  card={bigCard}
                  setActiveCard={setActiveCard}
                  setScrolled={setScrolled}
                  aspect="aspect-square"
                  className="flex-1"
                />
              )}
            </div>
          );
        })}

        {/* Remaining items */}
        {remaining.length > 0 && (
          <div className="flex justify-center gap-4 mt-6">
            {remaining.map((card, index, arr) => (
              <CardBox
                key={card.id || index}
                card={card}
                setActiveCard={setActiveCard}
                setScrolled={setScrolled}
                aspect="aspect-square"
                className={arr.length === 1 ? "w-1/2" : "flex-1"}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile layout (< md) */}
      <div className="block md:hidden space-y-6">
        {fullGroups.map((_, groupIndex) => {
          if (groupIndex % 3 !== 0) return null;

          const first = fullGroups[groupIndex];
          const second = fullGroups[groupIndex + 1];
          const third = fullGroups[groupIndex + 2];

          return (
            <div key={groupIndex} className="space-y-4">
              {/* Row 1: first full width, aspect [2/1] */}
              {first && (
                <CardBox
                  card={first}
                  setActiveCard={setActiveCard}
                  setScrolled={setScrolled}
                  aspect="aspect-[2/1]"
                  className="w-full"
                />
              )}

              {/* Row 2: second + third side by side 1/1 */}
              <div className="flex gap-4">
                {second && (
                  <CardBox
                    card={second}
                    setActiveCard={setActiveCard}
                    setScrolled={setScrolled}
                    aspect="aspect-square"
                    className="flex-1"
                  />
                )}
                {third && (
                  <CardBox
                    card={third}
                    setActiveCard={setActiveCard}
                    setScrolled={setScrolled}
                    aspect="aspect-square"
                    className="flex-1"
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* Remaining items mobile */}
        {remaining.length === 1 && (
          <div className="flex justify-center">
            <CardBox
              card={remaining[0]}
              setActiveCard={setActiveCard}
              setScrolled={setScrolled}
              aspect="aspect-square"
              className="w-1/2"
            />
          </div>
        )}

        {remaining.length === 2 && (
          <div className="flex gap-4">
            {remaining.map((card, index) => (
              <CardBox
                key={card.id || index}
                card={card}
                setActiveCard={setActiveCard}
                setScrolled={setScrolled}
                aspect="aspect-square"
                className="flex-1"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Reusable Card component
const CardBox = ({ card, setActiveCard, setScrolled, aspect, className }) => {
  if (!card) return null;

  return (
    <div
      onClick={() => {
        setActiveCard(card);
        setScrolled(false);
      }}
      className={`relative group rounded-2xl overflow-hidden bg-green-300 bg-cover bg-center text-black p-4 flex items-end cursor-pointer ${aspect} ${className}`}
      style={{
        backgroundImage: `url(${card.landscape_image || card.portrait_image1})`,
      }}
    >
      {/* Blur overlay on hover */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-none group-hover:backdrop-blur-md transition duration-500 z-10"></div>

      {/* Card title (stays visible above blur) */}
      <h2 className="text-xl font-bold px-2 py-1 rounded backdrop-blur-sm relative z-20">
        {card.name}
      </h2>

      {/* Centered glass circle button */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div
          className="
            md:w-[25%] aspect-[2/1] w-[50%] rounded-full 
            bg-[#4025e9]/70 backdrop-blur-md 
            flex items-center justify-center 
            text-[clamp(0.8rem,1.5vw,1.1rem)] md:text-2xl font-semibold text-white
            opacity-70 group-hover:opacity-100 
            transform scale-90 group-hover:scale-110 
            transition-all duration-500 ease-in-out
          "
        >
          Explore &gt;
        </div>
      </div>
    </div>
  );
};



export default CardGrid;
