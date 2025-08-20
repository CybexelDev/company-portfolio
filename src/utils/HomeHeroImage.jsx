import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HomeHeroImage = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/f659bc48-4330-4269-b764-f85fcc7d1696/Z6roNPxkaV.lottie"
      loop
      autoplay
      className='w-90 h-90 md:w-120 md:h-120 object-cover '
    />
  );
};

export default HomeHeroImage;