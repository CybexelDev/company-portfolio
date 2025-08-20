import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchWorks } from '../../../api/api.js';

const ImageSection = () => {
  const [firstThree, setFirstThree] = useState([]);
  const [section1Height, setSection1Height] = useState(0);
  const section1Ref = useRef(null);

  useEffect(() => {
    fetchWorks()
      .then((res) => {
        const data = res.data.slice(0, 3);
        setFirstThree(data);
      })
      .catch((err) => console.error("Failed to fetch works:", err));
  }, []);

  // Measure Section 1 height after render
  useEffect(() => {
    if (section1Ref.current) {
      setSection1Height(section1Ref.current.offsetHeight);
    }

    const handleResize = () => {
      if (section1Ref.current) {
        setSection1Height(section1Ref.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [firstThree]);

  if (firstThree.length < 1) return null;

  return (
    <section className="w-full px-4 md:px-12 pt-8 space-y-6">

      {/* Section 1 - First item full width */}
      <Link
        to={`/work?id=${firstThree[0].id}`}
        key={firstThree[0].id}
        ref={section1Ref}
        className="group block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative"
      >
        <div className="aspect-[2/1] w-full relative">
          <video
            src={firstThree[0].landscape_video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-none group-hover:backdrop-blur-md transition duration-500 z-10"></div>

        {/* Centered Explore button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div
            className="
              md:w-[15%] aspect-[2/1] w-[25%] rounded-full 
              md:bg-[#4025e9]/70 bg-[#4025e9] backdrop-blur-md 
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
      </Link>

      {/* Section 2 - Two side-by-side (half height) */}
      <div className="w-full flex gap-6" style={{ height: section1Height / 1.5 }}>
        {/* Left card */}
        <CardBoxLink item={firstThree[1]} />

        {/* Right card */}
        <CardBoxLink item={firstThree[2]} />
      </div>
    </section>
  );
};

const CardBoxLink = ({ item }) => {
  if (!item) return null;

  return (
    <Link
      to={`/work?id=${item.id}`}
      key={item.id}
      className="group w-1/2 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative"
    >
      {/* Background image/video */}
      <img
        src={item.portrait_image1}
        alt={item.full_name}
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-none group-hover:backdrop-blur-md transition duration-500 z-10"></div>

      {/* Centered Explore button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          className="
            md:w-[20%] aspect-[2/1] w-[50%] rounded-full 
            bg-[#4025e9]/70 backdrop-blur-md 
            flex items-center justify-center 
            text-[clamp(0.8rem,1.5vw,1rem)] md:text-xl font-semibold text-white
            opacity-70 group-hover:opacity-100 
            transform scale-90 group-hover:scale-110 
            transition-all duration-500 ease-in-out
          "
        >
          Explore &gt;
        </div>
      </div>
    </Link>
  );
};

export default ImageSection;
