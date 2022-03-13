import Offer from "../pages/Offer";
import Home from "../pages/Home"
import Truck from "../pages/Truck";
import Testimonials from "../pages/Testimonials";
import Ontime from "../pages/Ontime";
import Application from "../pages/DriverApplication";
import Quote from "../pages/Quote";

export const dataSections = [
  {
    id: 1,
    name: "home",
    hidden: true,
    background: "var(--bg-dark)",
    section: Home,
  },
  {
    id: 2,
    name: "offer",
    hidden: true,
    background: "var(--bg-light)",
    section: Offer,
  },
  {
    id: 3,
    name: "truck",
    hidden: true,
    background: "var(--bg-light)",
    section: Truck,
  },
  {
    id: 4,
    name: "ontime",
    hidden: true,
    background: "var(--bg-light)",
    section: Ontime,
  },
  {
    id: 6,
    name: "join",
    hidden: false,
    background: "var(--bg-light)",
    section: Application,
  },
  {
    id: 7,
    name: "quote",
    hidden: false,
    background: "var(--bg-light)",
    section: Quote,
  },
  {
    id: 5,
    name: "testimonials",
    hidden: true,
    background: "var(--bg-dark)",
    section: Testimonials,
  },
];
