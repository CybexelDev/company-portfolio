import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = [
  { id: "webdevelopment", label: "Web Development" },
  { id: "appdevelopment", label: "App Development" },
  { id: "uiuxdesign", label: "UI/UX Design" },
  { id: "graphicdesign", label: "Graphic Design" },
  { id: "digitalmarketing", label: "Digital Marketing" },
];

const WorkFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [works, setWorks] = useState([]);

  // Toggle categories on click
  const toggleCategory = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  // Fetch works whenever selectedCategories change
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        let url = "http://localhost:8000/api/works/";
        if (selectedCategories.length > 0) {
          url += `?categories=${selectedCategories.join(",")}`;
        }
        const response = await axios.get(url);
        setWorks(response.data);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchWorks();
  }, [selectedCategories]);

  return (
    <div className="p-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => toggleCategory(cat.id)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              selectedCategories.includes(cat.id)
                ? "bg-blue-600 text-white border-blue-600 scale-105"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Works List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-all"
          >
            <img
              src={work.landscape_image}
              alt={work.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{work.name}</h3>
            <p className="text-gray-600">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFilter;
