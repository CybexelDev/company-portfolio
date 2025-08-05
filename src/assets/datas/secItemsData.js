// sectionItems.js
import image1 from "../images/image1.jpg";
import video3 from "../videos/video5.mp4";
import { CgWebsite } from "react-icons/cg";

const sectionItems = [
  {
    id: 1,
    sectionId: 0, // Links to "Design & Identity"
    title: "Web Development",
    fullName: "Hybrid web development",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 2,
    sectionId: 0, // Links to "Design & Identity"
    title: "Digital Marketing",
    fullName: "Professional Logo Design",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 3,
    sectionId: 0, // Links to "Design & Identity"
    title: "Ecommerce ",
    fullName: "Professional Logo Design",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 4,
    sectionId: 0, // Links to "Design & Identity"
    title: "LOGO DESIGN",
    fullName: "Professional Logo Design",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 5,
    sectionId: 0, // Links to "Design & Identity"
    title: "PAYMENT INTEGRATION",
    fullName: "Professional Logo Design",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 1,
    sectionId: 1, // Links to "Design & Identity"
    title: "Logo Design",
    fullName: "Professional Logo Design",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 2,
    sectionId: 1, // "Development"
    title: "UI Design",
    fullName: "Interactive Frontend Development",
    quote1: "We build what you imagine.",
    quote2: "Bringing ideas to code.",
    image: image1,
    video: video3,
    color: "#0000FF", // default for id 2: blue
  },
  {
    id: 3,
    sectionId: 1, // "Marketing"
    title: "UX Design",
    fullName: "Boost Search Visibility",
    quote1: "Be found, be relevant.",
    quote2: "Your growth, our strategy.",
    image: image1,
    video: video3,
    color: "#008000", // default for id 3: green
  },
  {
    id: 4,
    sectionId: 1, // "Strategy & Planning"
    title: "Prototype",
    fullName: "Data-driven Planning",
    quote1: "Plan smart. Execute smarter.",
    quote2: "Every move counts.",
    image: image1,
    video: video3,
    color: "#FFA500", // user override
  },
  {
    id: 5,
    sectionId: 1, // another in "Design & Identity"
    title: "Poster",
    fullName: "User-centered Interface Design",
    quote1: "Design for experience.",
    quote2: "Where function meets aesthetics.",
    image: image1,
    video: video3,
    color: "#FF0000", // fallback to red for id 1
  },
  {
    id: 1,
    sectionId: 2, // Links to "Design & Identity"
    title: "NEXT JS",
    fullName: "Professional Logo Design",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 2,
    sectionId: 2, // "Development"
    title: "REACT JS",
    fullName: "Interactive Frontend Development",
    quote1: "We build what you imagine.",
    quote2: "Bringing ideas to code.",
    image: image1,
    video: video3,
    color: "#0000FF", // default for id 2: blue
  },
  {
    id: 3,
    sectionId: 2, // "Marketing"
    title: "FIGMA",
    fullName: "Boost Search Visibility",
    quote1: "Be found, be relevant.",
    quote2: "Your growth, our strategy.",
    image: image1,
    video: video3,
    color: "#008000", // default for id 3: green
  },
  {
    id: 4,
    sectionId: 2, // "Strategy & Planning"
    title: "SCHEMA.ORG",
    fullName: "Data-driven Planning",
    quote1: "Plan smart. Execute smarter.",
    quote2: "Every move counts.",
    image: image1,
    video: video3,
    color: "#FFA500", // user override
  },
  {
    id: 5,
    sectionId: 2, // another in "Design & Identity"
    title: "META.ADS",
    fullName: "User-centered Interface Design",
    quote1: "Design for experience.",
    quote2: "Where function meets aesthetics.",
    image: image1,
    video: video3,
    color: "#FF0000", // fallback to red for id 1
  },
  {
    id: 1,
    sectionId: 3, // Links to "Design & Identity"
    title: "TRAVEL & HOSPITALITY",
    fullName: "Professional Logo Design",
    quote1: "Design is intelligence made visible.",
    quote2: "Your brand starts here.",
    image: image1,
    video: video3,
    color: "#FF0000", // default for id 1: red
  },
  {
    id: 2,
    sectionId: 3, // "Development"
    title: "FOOD & BEVERAGE",
    fullName: "Interactive Frontend Development",
    quote1: "We build what you imagine.",
    quote2: "Bringing ideas to code.",
    image: image1,
    video: video3,
    color: "#0000FF", // default for id 2: blue
  },
  {
    id: 3,
    sectionId: 3, // "Marketing"
    title: "ECOMMERCE",
    fullName: "Boost Search Visibility",
    quote1: "Be found, be relevant.",
    quote2: "Your growth, our strategy.",
    image: image1,
    video: video3,
    color: "#008000", // default for id 3: green
  },
  {
    id: 4,
    sectionId: 3, // "Strategy & Planning"
    title: "HEALTH & WELLNESS",
    fullName: "Data-driven Planning",
    quote1: "Plan smart. Execute smarter.",
    quote2: "Every move counts.",
    image: image1,
    video: video3,
    color: "#FFA500", // user override
  },
  {
    id: 5,
    sectionId: 3, // another in "Design & Identity"
    title: "EDUCATION",
    fullName: "User-centered Interface Design",
    quote1: "Design for experience.",
    quote2: "Where function meets aesthetics.",
    image: image1,
    video: video3,
    color: "#FF0000", // fallback to red for id 1
  },
  
];

export default sectionItems;
