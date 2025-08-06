import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../../components/Footer";
import video5 from "../../../assets/videos/video5.mp4"
import { Sparkles } from "lucide-react"; 
import { Link } from "react-router-dom";

const Modal = ({ activeCard, setActiveCard, scrolled, setScrolled }) => {
  const modalRef = useRef(null);
  const modalWrapperRef = useRef(null);

  useEffect(() => {
    if (activeCard && modalRef.current) {
      modalRef.current.scrollTop = 0;
      setTimeout(() => {
        modalWrapperRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [activeCard]);

  useEffect(() => {
    const node = modalRef.current;
    const handleScroll = () => {
      if (!node) return;
      setScrolled(node.scrollTop > 40);
    };
    if (node) node.addEventListener("scroll", handleScroll);
    return () => {
      if (node) node.removeEventListener("scroll", handleScroll);
    };
  }, [activeCard, setScrolled]);

  if (!activeCard) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-wrapper"
        ref={modalWrapperRef}
        className="fixed inset-0 z-[1000] backdrop-blur-sm flex items-end justify-center w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key={activeCard?.id}
          ref={modalRef}
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            width: scrolled ? "100vw" : "90vw",
            height: scrolled ? "100vh" : "70vh",
            borderTopLeftRadius: scrolled ? "0rem" : "1.5rem",
            borderTopRightRadius: scrolled ? "0rem" : "1.5rem"
          }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=" p-2 bg-gradient-to-tr from-purple-200 via-yellow-50  to-pink-100 backdrop-blur-3xl shadow-2xl overflow-y-auto no-scrollbar relative text-shadow-gray-900"
          style={{
            WebkitOverflowScrolling: "touch",
            overflowY: "scroll",
          }}
        >
       {/* Close and Category Row */}
        <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white/0">
          {/* Category Button - Left */}
          <span className="bg-white hover:bg-black/70 hover:scale-105 transition-transform text-sm font-semibold ml-7 px-4 py-2 rounded-full shadow   transition-normal">
            <span className="bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent  ">
            {activeCard.category || "Category"}
          </span>
          </span>

          {/* Close Button - Right */}
          <button
            onClick={() => {
              setActiveCard(null);
              window.history.replaceState({}, "", "/work");
            }}
            className="text-2xl p-1 font-bold  hover:text-red-500"
          >
            ✕
          </button>
        </div>

          {/* Content */}
          <div className="p-4 space-y-16">
            <div className="w-full py-6 px-0 md:px-4">
              {/* Main Content */}
              <div className="flex flex-col md:flex-row w-full md:mx-auto gap-6 items-center">
                
                {/* Left Section - Title and Link */}
                <div className="w-full md:w-[15%] flex flex-col items-center justify-center space-y-4 order-2 md:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-black/55 to-indigo-500 bg-clip-text text-transparent">{activeCard.title}</h2>
                  <a
                    href={activeCard.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#70cbfc] px-8 text-lg md:text-xl font-semibold py-2 rounded-full hover:bg-black transition"
                  >
                    <span className="bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent">Visit</span>
                  </a>
                </div>

                {/* Right Section - Video */}
                <div className="w-full md:w-[85%] rounded-3xl overflow-hidden mt-6 md:mt-10 aspect-video order-1 md:order-2">
                  <video
                    src={activeCard.landscape_video }
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Two Side-by-Side Images */}
            <div className="grid px-0 md:px-6 grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center items-center">
              <img
                src={activeCard.portrait_image1 || activeCard.image}
                alt=""
                className="w-full max-h-[90vh] aspect-[4/5] object-cover rounded-4xl"
              />
              <img
                src={activeCard.portrait_image2 || activeCard.image}
                alt=""
                className="w-full max-h-[90vh] aspect-[4/5] object-cover object-bottom rounded-4xl"
              />
            </div>


            {/* Video + Text Section */}
            <div className="flex flex-col md:flex-row  sm:px-6 md:px-10 mt-12 gap-8 md:gap-12">
              {/* Video Section */}
              <div className="w-full md:w-3/5 flex justify-center items-center">
                <div className="h-[60] md:h-[90vh] aspect-[4/5] rounded-4xl overflow-hidden">
                  <video
                    src={activeCard.portrait_video || video5 }
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5 flex flex-col justify-center text-start md:text-left p-2 md:p-3">
                <h3 className="text-3xl bg-gradient-to-r from-pink-500 via-black/55 to-indigo-500 bg-clip-text text-transparent md:text-5xl font-semibold mb-4">
                  {activeCard.full_name || "Feature Title"}
                </h3>
                <p className="text-lg bg-gradient-to-r from-pink-500 via-black/55 to-indigo-500 bg-clip-text text-transparent md:text-2xl text-justify ">
                  {activeCard.description || "Description goes here for this section. go get it Description goes here for this section"}
                </p>
              </div>
            </div>



            {/* List + Image Section */}
            

<div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:px-10 md:px-20 py-10">
  {/* Left: Highlights Section */}
  <div className="w-full md:w-1/2 flex justify-center my-auto items-center">
    <div className="text-center md:text-left space-y-6">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
        <span className="bg-gradient-to-r from-pink-500 via-black/55 to-indigo-500 bg-clip-text text-transparent">
          Tech Used
        </span>
      </h3>

      <ul className="space-y-4">
        {(activeCard.tech_used || ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"]).map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 mt-1 text-purple-500" />
            <span className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-black/55 to-indigo-500 bg-clip-text text-transparent">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Right: Image Section */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img
      src={activeCard.portrait_image3 }
      alt="Highlight"
      className="w-full max-w-[500px] h-[60vh] md:h-[90vh] object-cover rounded-xl shadow-lg"
    />
  </div>
</div>



            {/* CTA Link */}
            <div className="text-center">
              <Link
                to={"/contact"}
                rel="noopener noreferrer"
                className="inline-block bg-[#9cd7f7] font-semibold px-6 py-3 rounded-full hover:scale-105 hover:bg-black hover:text-white hover:shadow-xl transition"
              >
                <span className="bg-gradient-to-r from-pink-500  to-indigo-700 bg-clip-text text-transparent">Let's Work Together </span>
                
              </Link>
            </div>

            {/* Scroll Message */}
            <Footer className="bg-white" />
          </div>
        </motion.div>
      </motion.div>

    </AnimatePresence>
  );
};

export default Modal;
