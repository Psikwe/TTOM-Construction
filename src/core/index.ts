import img1 from "../assets/images/Image1.jpg";
import img2 from "../assets/images/Image2.jpg";
import img3 from "../assets/images/Image3.jpg";
import facebook from "../assets/icons/facebook.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import instagram from "../assets/icons/instagram.svg";
import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";

export const navItems = [
  {
    name: "About Us",
    link: "#about-us",
  },

  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Call Now",
    link: "tel://+233546738339",
  },
];

export const socialLinks = [
  {
    icon: whatsapp,
    link: "https://api.whatsapp.com/send?phone=233546738339",
  },
  {
    icon: facebook,
    link: "#",
  },
  {
    icon: instagram,
    link: "#",
  },
];

export const projectItems = [
  {
    title: "Project 1",
    description: "A construction site at Amasaman",
    image: img1,
  },
  {
    title: "Project 2",
    description: "A construction site at ACP",
    image: img2,
  },
  {
    title: "Project 3",
    description: "A construction site at Nsawam",
    image: img3,
  },
];
export const addressItems = [
  {
    title: "ACP - Pokuase",
    icon: location,
    link: "https://maps.app.goo.gl/QDrP2C1NTzDXocMn6",
  },
  {
    title: "0546738339",
    icon: phone,
    link: "tel://+233546738339",
  },
  {
    title: "tennahthomas@gmail.com",
    icon: email,
    link: "mailto:tennahthomas@gmail.com",
  },
];

export const iconColor =
  "invert(72%) sepia(83%) saturate(3666%) hue-rotate(1deg) brightness(105%) contrast(104%)";
