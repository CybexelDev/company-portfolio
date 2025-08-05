import { motion } from "framer-motion";
import img1 from "../../../assets/images/image1.jpg";
import img2 from "../../../assets/images/image2.jpg";
import img3 from "../../../assets/images/image3.webp";

const services = [
  {
    id: 1,
    title: "Brand Identity",
    description: "We craft brands that stand out in the digital world.",
    image: img1,
  },
  {
    id: 2,
    title: "Web Development",
    description: "From idea to code, we build performant web experiences.",
    image: img2,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Grow with strategies tailored to your audience.",
    image: img3,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Interfaces that connect, inspire, and convert.",
    image: img1,
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WeDoSection = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-start ">
        We Do
      </h2>

      {/* Horizontal Scrollable Cards */}
      <div className="overflow-x-auto py-6 text-[#1c1c33]">
        <div className="flex flex-nowrap gap-8 px-2 md:px-4 pb-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="min-w-[80vw] sm:min-w-[60vw] md:min-w-[25vw] h-[50vh]   rounded-2xl overflow-hidden p-4 shadow-sm  bg-[#e5e9ff]/60 hover:bg-[#d5dbff]/80 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.1)",
                y: -8,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
            >
              {/* Image */}
              <div className="h-2/3 w-full overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-2 ">
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-sm opacity-80">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeDoSection;
