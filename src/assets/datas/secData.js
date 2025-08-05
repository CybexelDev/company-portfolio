// secData.js
import image1 from "../images/image1.jpg";
import video3 from "../videos/video5.mp4";
import { MdDesignServices } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import tech from "../images/wedo.webp";
import whatwedo from "../images/wedo.gif";
import design from "../images/design.webp";
import categer from "../images/categer.webp"

 const sections = [
  {
    id: 0,
    title: "What We Do",
    image: whatwedo,
    icon: MdHomeRepairService,
    video: video3,
  },
  {
    id: 1,
    title: "Design",
    image: design,
    icon: MdDesignServices,
    video: video3,
  },
  {
    id: 2,
    title: "Technologies",
    image: tech,
    icon: GrTechnology,
    video: video3,
  },
  {
    id: 3,
    title: "Categories",
    image: categer,
    icon: GrCertificate,
    video: video3,
  },
];



export default sections;
