import { Link } from 'react-router-dom';
import items from '../../../assets/datas/works.js';

const ImageSection = () => {
  const firstThree = items.slice(0, 3);

  return (
    <section className="w-full px-4 md:px-12 pt-8 space-y-6">
      {/* First item - Full Width */}
      <Link
        to={`/work?id=${firstThree[0].id}`}
        key={firstThree[0].id}
        className="block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
      >
        <div className="aspect-[2/1] w-full relative">
          <img
            src={firstThree[0].image}
            alt={firstThree[0].title}
            className="w-full h-full object-cover rounded-3xl"
          />
          
        </div>
      </Link>

      {/* Second + Third - Side by side */}
      <div className="flex flex-col md:flex-row gap-6">
        {firstThree.slice(1).map((card) => (
          <Link
            to={`/work?id=${card.id}`}
            key={card.id}
            className="flex-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="aspect-[3/4] w-full relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
