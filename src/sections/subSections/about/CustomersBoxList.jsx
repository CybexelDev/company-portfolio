import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchCustomers } from "../../../api/api"; // Make sure this function is correct

const CustomersBoxList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers()
    
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load customers:", err);
        setLoading(false);
      });
  }, []);
  

  const renderRow = (direction = "left", rowIndex) => {
    const isLeft = direction === "left";
    const animateX = isLeft ? ["0%", "-100%"] : ["-100%", "0%"];
    const data = [...customers, ...customers]; // Duplicate for seamless scroll

    return (
      <div
        key={rowIndex}
        className="relative overflow-hidden w-full py-2"
        style={{ height: "220px" }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: animateX }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {data.map((customers, idx) => (
            <div
              key={`${rowIndex}-${idx}`}
              className="relative flex-shrink-0 w-[30vw] min-w-[150px] max-w-[300px] h-[200px] rounded-2xl overflow-hidden mx-3 shadow-md"
            >
              <img
                src={customers.logo}
                alt={customers.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;

  return (
    <div className="w-full space-y-2 overflow-hidden sm:px-0 md:px-0 rounded-3xl">
      {renderRow("left", 0)}
      {renderRow("right", 1)}
    </div>
  );
};

export default CustomersBoxList;
