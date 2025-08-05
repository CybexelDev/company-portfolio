import React from 'react'
import image1 from "../../../assets/images/image1.jpg";

function ContactLink() {
  return (
    
    <section className="relative h-[200vh]">
  <div className="sticky top-0 h-screen">
    <img src={image1} className="absolute w-full h-full object-cover" />
    
    <div
      className="relative z-10 flex justify-center items-end h-full"
      style={{ transform: `translateY(-${scrollY * 1.5}px)` }}
    >
      <h1 className="text-white text-4xl">Contact Us</h1>
    </div>
  </div>
</section>

  )
}

export default ContactLink