import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import items from '../../../assets/datas/works.js';
import { fetchWorks } from '../../../api/api.js';

const ImageSection = () => {
  const [firstThree, setFirstThree] = useState([])
  
  useEffect (() => {
    fetchWorks()
      .then((res) =>{
        const  data = res.data.slice(0,3);
        setFirstThree(data);
      })
      .catch((err) => console.error("Failed to fetch works:", err));
  },[]);

  if (firstThree.length < 1) return null;

  return (
    <section className="w-full px-4 md:px-12 pt-8 space-y-6">
      {/* First item - Full Width */}
      <Link
        to={`/work?id=${firstThree[0].id}`}
        key={firstThree[0].id}
        className="block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
      >
        <div className="aspect-[2/1] w-full relative">
          <video
            src={firstThree[0].landscape_video}
            alt={firstThree[0].full_name}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />
          
        </div>
      </Link>

      {/* Second + Third - Side by side */}
      {/* <div className="flex flex-col md:flex-row gap-6">
        {firstThree.slice(1).map((card) => (
          <Link
            to={`/work?id=${card.id}`}
            key={card.id}
            className="flex-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="aspect-[3/4] w-full relative">
              <video
                src={card.portrait_video}
                alt={card.title}
                className="w-[50vw] h-[90vh] object-cover rounded-3xl"
              />
            </div>
          </Link>
        ))}
      </div> */}
      {/* Second + Third - Side by side on desktop, stacked on mobile */}
<div className="flex flex-col lg:flex-row gap-6">
  {firstThree.slice(1).map((card) => (
    <Link
      to={`/work?id=${card.id}`}
      key={card.id}
      className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="aspect-[3/4] relative">
        <img
          src={card.portrait_image1}
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
