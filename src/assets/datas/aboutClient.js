// data/aboutClients.js
import image1 from "../images/clients/c1.jpg";
import image2 from "../images/clients/c2.avif";
import image3 from "../images/clients/c3.avif";
import image4 from "../images/clients/c4.avif";
import image5 from "../images/clients/c5.jpg";

const images = [image1, image2, image3, image4, image5];

const aboutClient = Array.from({ length: 15 }, (_, i) => ({
  name: `Client ${i + 1}`,
  img: images[i % images.length],
}));

export default aboutClient;
