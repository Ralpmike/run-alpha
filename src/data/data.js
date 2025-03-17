import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const navLinksItems = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/aboutus" },
  { name: "Strategies", href: "/strategies" },
  { name: "Meet the Team", href: "/team" },
  { name: "Contact Us", href: "/getintouch" },
  // { name: "", href: "/getintouch" },
];


export const socials = [
  {
    href: "",
    name: "LinkedIn",
    icon: FaLinkedin
  },
  {
    href: "",
    name: "X(Twitter)",
    icon: FaSquareXTwitter 
  },
  {
    href: "",
    name: "Facebook",
    icon: FaFacebook 
  },
  {
    href: "",
    name: "Instagram",
    icon: FaInstagram , 
  },
]

const teamMembers = [
  {
    id: 1,
    name: "Doron Breen",
    title: "Co-Founder & Managing Partner",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Ron Senator",
    title: "Managing Partner, PM Sphera Strategy",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Amir Levi",
    title: "Managing Partner, CEO",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sophia Green",
    title: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Michael Thompson",
    title: "Lead Software Engineer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Emma Williams",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "John Doe",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Emily Johnson",
    title: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Daniel White",
    title: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Olivia Brown",
    title: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 11,
    name: "James Anderson",
    title: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 12,
    name: "Ava Scott",
    title: "QA Engineer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 13,
    name: "William Martinez",
    title: "Security Analyst",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 14,
    name: "Mia Rodriguez",
    title: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 15,
    name: "Benjamin Harris",
    title: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 16,
    name: "Charlotte Lewis",
    title: "Cloud Architect",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    id: 17,
    name: "Lucas Walker",
    title: "Machine Learning Engineer",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: 18,
    name: "Amelia Young",
    title: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    id: 19,
    name: "Henry King",
    title: "Financial Analyst",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: 20,
    name: "Ella Wright",
    title: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: 21,
    name: "Jack Hall",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 22,
    name: "Lily Allen",
    title: "Legal Advisor",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 23,
    name: "Ethan Harris",
    title: "Customer Success Manager",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  }
];

export default teamMembers;


export const strategies = [
  {
    title: "Family Office",
    image: "/strategies-one.png",
  },
  {
    title: "Private Wealth",
    image: "/strategies-two.png",
  },
  {
    title: "Hedge Fund",
    image: "/strategies-three.png",
  },
  {
    title: "FX Currency Solution",
    image: "/strategies-four.png",
  },
];

export const heroSectionData = {
  about: {
    title: "ABOUT US",
    backgroundImage: "/pexels.jpg",
    description:
      "At Run Alpha, we believe that the future of investment lies in the intersection of technology and human ingenuity. We strive to create a platform that empowers individuals to make informed decisions, while also fostering a culture of continuous learning and growth. Our mission is to provide clients with a safe, transparent, and accessible investment experience that aligns with their financial goals and risk tolerance.",
  },
  strategies: {
    title: "OUR STRATEGIES",
    backgroundImage: "/skyline.jpg",
    description:
      "At Run Alpha, our strategies are built on data-driven insights, advanced algorithms, and expert analysis. We harness the power of artificial intelligence and machine learning to optimize investment opportunities. Our approach focuses on risk management, diversification, and long-term sustainability, ensuring that our clients achieve consistent growth while minimizing uncertainties in the market.",
  },  
  teams: {
    title: "MEET OUR TEAM",
    backgroundImage: "/strategies/splash.jpg",
    description:
      "At Run Alpha, our strategies are built on data-driven insights, advanced algorithms, and expert analysis. We harness the power of artificial intelligence and machine learning to optimize investment opportunities. Our approach focuses on risk management, diversification, and long-term sustainability, ensuring that our clients achieve consistent growth while minimizing uncertainties in the market.",
  },
};
