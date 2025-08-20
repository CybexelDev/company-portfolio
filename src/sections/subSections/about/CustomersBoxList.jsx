import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchCustomers } from "../../../api/api"; // Ensure API is correct

const CustomersBoxList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers()
      .then((res) => {
        setCustomers(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load customers:", err);
        setLoading(false);
      });
  }, []);

  const renderRow = (direction = "left", rowIndex) => {
    if (customers.length === 0) return null;

    const isLeft = direction === "left";
    const animateX = isLeft ? ["0%", "-100%"] : ["-100%", "0%"];

    // Duplicate customers to create seamless infinite scroll
    const data = [...customers, ...customers];

    return (
      <div
        key={rowIndex}
        className="relative overflow-hidden w-full py-3"
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: animateX }}
          transition={{
            duration: 30, // adjust speed here
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {data.map((customer, idx) => (
            <div
              key={`${rowIndex}-${idx}`}
              className="relative flex-shrink-0 
                w-[65vw] sm:w-[40vw] md:w-[25vw] lg:w-[18vw] 
                min-w-[120px] max-w-[280px] 
                h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] xl:h-[220px]
                rounded-2xl overflow-hidden mx-3
                bg-white shadow-lg flex items-center justify-center
              "
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="w-full h-full object-contain p-3"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  if (loading) return <div className="text-center py-6">Loading...</div>;

  return (
    <div className="w-full space-y-4 px-3 sm:px-6 md:px-10 rounded-3xl">
      {renderRow("left", 0)}
      {renderRow("right", 1)}
    </div>
  );
};

export default CustomersBoxList;
