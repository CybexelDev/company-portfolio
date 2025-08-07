import { useParams, useNavigate, data } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchExpertiseDetail } from "../../../api/api"; // You'll create this API call
import Footer from "../../../components/Footer";

const ExpertiseItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchExpertiseDetail(id)
      .then((res) => {
        console.log(res)
        setItem(res.data)
      })
      .catch((err) => console.error("Failed to load expertise:", err));
  }, [id]);

  if (!item) return <div className="text-center py-10 text-white">Loading...</div>;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 bg-gradient-to-r from-pink-500  to-indigo-500">
      {/* Top Buttons */}
      <div className="flex justify-between gap-2 text-lg">
        <div className="bg-black hover:bg-white/30 hover:scale-105 transition-transform  font-semibold  px-4 py-2 rounded-full shadow   transition-normal">
            <span className="bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent">{item.name}</span>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="bg-black hover:bg-white/30 hover:scale-105 transition-transform  font-semibold px-4 py-2 rounded-full shadow   transition-normal">
            <span className="bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent font-extrabold "> Close </span>
        
        </button>
      </div>

      {/* Title + Image */}
      <div className="text-center mt-8 ">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <img
          src={item.image_l}
          alt={item.title}
          className="w-full rounded-2xl mt-6"
        />
        <p className="mt-4 text-lg">{item.description}</p>
      </div>

      {/* Left image + text */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
        <img
          src={item.image_p1}
          alt={item.sub_title1}
          className="rounded-xl w-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">{item.sub_title1}</h2>
          <p className="mt-2">{item.sub_description1}</p>
        </div>
      </div>

      {/* Right text + image */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold">{item.sub_title2}</h2>
          <p className="mt-2">{item.sub_description2}</p>
        </div>
        <img
          src={item.image_p2} // If you have another image for this section
          alt={item.subtitle2}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700">
          Work With Us
        </button>
      </div>
      <Footer />
    </div>
    
  );
};

export default ExpertiseItemDetail;
