const CardGrid = ({ cards, setActiveCard, setScrolled }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 gap-4">
      {cards.map((card, index) => {
        const isFullWidth = index % 3 === 0;
        return (
          <div
            key={card.id}
            onClick={() => {
              setActiveCard(card);
              setScrolled(false);
            }}
            className={`relative rounded-2xl overflow-hidden bg-cover bg-center text-white p-4 flex cursor-pointer ${
              isFullWidth ? "col-span-2 aspect-[2/1]" : "col-span-1 aspect-[3/4]"
            }`}
            style={{
              backgroundImage: `url(${isFullWidth ? card.landscape_image : card.portrait_image1})`,
            }}
          >
            <h2 className="text-xl font-bold bg-opacity-40 px-2 py-1 rounded">
              {card.name}
            </h2>
          </div>
        );
      })}
    </section>
  );
};

export default CardGrid;
