import React from "react";
import office from "../../../assets/images/contact/office.png"

const FindUsOffline = () => {
  return (
    <section className="w-full py-16 bg-gray-">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12 tracking-wide"
      style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 5px rgba(0,0,0,0.2)",
            }}>
        Find Us Offline
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-6">
        {/* Left Image */}
        <div className="flex justify-center  items-center  ">
          <img
            src= {office}
            alt="Office"
            className="  h-[400px] aspect-square object-contain rounded-4xl"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center gap-12">
          {/* Location 1 */}
          <div className="flex  items-center gap-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.356477255266!2d76.25059287354061!3d9.987383673254737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812b947484953%3A0x765d0c12126e5ea9!2sAlfa%20Horizon!5e0!3m2!1sen!2sin!4v1755519321800!5m2!1sen!2sin"
              alt="Location 1"
              className="w-40 h-40 rounded-full object-cover shadow-lg shadow-purple-300"
            />
            <p className="mt-4 text-center text-lg font-medium">
              Head Office, <br/>2nd Floor, <br /> Kochi
            </p>
          </div>

          {/* Location 2 */}
          <div className="flex flex-row items-center  gap-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.072564482143!2d76.94210747183885!3d11.018497305180647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fec1a6e87d%3A0x61f7a20854db96f3!2sSheela%20Hospital!5e0!3m2!1sen!2sin!4v1755519149818!5m2!1sen!2sin" 
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              className="w-40 h-40 rounded-full object-cover shadow-lg shadow-purple-300"
            ></iframe>
            <p className="mt-4 text-center text-lg font-medium">
               12th street,<br/> Ghandhipuram,<br/>  Coimbatore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsOffline;
