import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const navLinksItems = [
  { name: "Home", href: "/home", id: 1 },
  { name: "About Us", href: "/aboutus", id: 2 },
  { name: "Strategies", href: "/strategies", id: 3 },
  { name: "Team", href: "/team", id: 4 },
  { name: "Contact Us", href: "/getintouch", id: 5 },
  // { name: "", href: "/getintouch" },
];

export const socials = [
  {
    id: 1,
    href: "",
    name: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    id: 2,
    href: "",
    name: "X(Twitter)",
    icon: FaSquareXTwitter,
  },
  {
    id: 3,
    href: "",
    name: "Facebook",
    icon: FaFacebook,
  },
  {
    id: 4,
    href: "",
    name: "Instagram",
    icon: FaInstagram,
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Ajoke Toluwaloju",
    title: "Head, Fund Management",
    quote:
      `Ajoke Toluwaloju has over 6 years of experience spanning accounting, audit, tax, research, and fund and portfolio management. She is experienced in formulating complex investment management solutions to institutional investors and high net worth investors. Previously, she worked at FBNQuest Asset Management, curating investment/trading strategies for over NGN300bn in funds under management, guided by adequate research and analysis to grow wealth sustainably. 
      Ajoke holds a Bachelor of Science degree from The University of Lagos, Nigeria. She is an affiliate of the Association of Certified Chartered Accountants (ACCA) and is currently enrolled as a candidate in the Certified Financial Analyst (CFA) Program.`,
    image: "/team/Picture3.jpg",
  },
  {
    id: 2,
    name: "Ayooluwade Ogunwale",
    title: "Fund Management",
    quote:
      `Ayooluwade Ogunwale has over 4 years of experience in the financial services industry, spanning Research, Portfolio/Fund management. Prior to joining Run Alpha, he worked at FBNQuest Asset Management Ltd where he developed macro-driven investment strategies for NGN500bn in funds managed under his purview. He leverages macro data to maximize financial returns by identifying optimal investment opportunities. In his role, he provides insights through comprehensive analyses of fiscal and monetary policies, along with other influencing factors.
      Ayooluwade holds a BSc. Accounting Ekiti State University, Nigeria. He is  a member of the Institute of Chartered Accountant of Nigeria (ACA) and is currently enrolled as a candidate in the Certified Financial Analyst (CFA) Program.`,
    image: "/team/Picture1.jpg",
  },
  {
    id: 3,
    name: "Reanat Adamson",
    title: "Head, Finance",
    quote:
      `Reanat Adamson has over six years in the Audit practice specializing in the financial statement audits of corporate listed and regulated entities in the UK. With extensive experience in auditing complex financial structures and internal controls, she has developed a deep understanding of regulatory requirements, risk assessment, and compliance within highly regulated industries.
      She plays a key role in ensuring audit quality, identifying financial reporting risks, and advising clients on best practices to meet evolving regulatory standards.
      Reanat holds a Bachelor of Science degree from The University of Swansea, England. She is an affiliate of the Association of Certified Chartered Accountants (ACCA).
`,
    image: "/team/Picture4.jpg",
  },
  {
    id: 4,
    name: "Folashade Adedun",
    title: "Head, Risk Management",
    quote:
      `Folashade previously worked in Ernst & Young in the Financial Services Risk Management practice where she helped shape the compliance initiatives for Systemically Important Banks within the Nigerian financial industry. She currently works within the Internet Regulation department of Deloitte UK leading regulatory change management initiatives for FAANG companies.
      Folashade holds a Bachelor of Science degree from The University of Lagos, Nigeria.`,
    image: "/team/Picture2.jpg",
  },
  {
    id: 5,
    name: "Bashir Lawal",
    title: "Head, Growth/Strategy",
    quote:
      "Bashir Lawal has over 5 years of experience in the financial services industry, spanning Research, Portfolio/Fund management. Prior to joining Run Alpha, he worked at FBNQuest Asset Management Ltd where he developed macro-driven investment strategies for NGN500bn in funds managed under his purview. He leverages macro data to maximize financial returns by identifying optimal investment opportunities. In his role, he provides insights through comprehensive analyses of fiscal and monetary policies, along with other influencing factors.",
    image: "/team/Picture5.jpg",
  },
  {
    id: 6,
    name: "Adeola Ogunwale",
    title: "Head, Operations",
    quote:
      `Adeola Ogunwale has over 5 years of experience in the financial services industry, spanning Research, Portfolio/Fund management. Prior to joining Run Alpha, he worked at FBNQuest Asset Management Ltd where he developed macro-driven investment strategies for NGN500bn in funds managed under his purview. He leverages macro data to maximize financial returns by identifying optimal investment opportunities. In his role, he provides insights through comprehensive analyses of fiscal and monetary policies, along with other influencing factors.
      Adeola holds a BSc. Accounting Ekiti State University, Nigeria. He is  a member of the Institute of Chartered Accountant of Nigeria (ACA) and is currently enrolled as a candidate in the Certified Financial Analyst (CFA) Program.`,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  
];

export default teamMembers;

export const strategies = [
  {
    id: "family-office",  // Added an id field
    title: "Family Office",
    description: `The event that will go down in history...`,
    image: "/pexels-rdne-7951553.jpg",
  },
  {
    id: "private-wealth",  // Added an id field
    title: "Private Wealth",
    description: `Your wealth is more than money...`,
    image: "/meditation-2262835.jpg",
  },
  {
    id: "hedge-fund",  // Added an id field
    title: "Hedge Fund",
    description: `At Run Alpha, we provide strategic foreign exchange...`,
    image: "/pexels-rickyrecap-2295433.jpg",
  },
  {
    id: "fx-currency-solution",  // Added an id field
    title: "FX Currency Solution",
    description: "Just include a disclaimer that the offering cannot be accessed...",
    image: "/pexels-anna-nekrashevich-6801874.jpg",
  },
];

export const statisticsData = {
  founded: {
    year: 2021,
    description:
      "We have crafted winning investing strategies which have demonstrated resilience and adaptability across market cycles and attracted a diverse group of high-net-worth individuals.",
  },
  assets: {
    title: "Assets Management",
    amount: 1500000000,
    description:
      "We currently manage over NGN 1.50bn in assets, driving strong returns for our investors.",
  },
  clients: {
    title: "Client Retention Rate",
    percent: 95,
    description:
      "Our client rate is a testament to our commitment to excellence, reflecting trust and satisfaction within our service",
  },
  team: {
    title: "Experienced Team",
    count: 6,
    description:
      "Our team of experts is dedicated to providing you with the best investment opportunities.",
  },
  years: {
    title: "Cumulative Experience",
    count: 36,
    description:
      "With a combined 36 years of experience, our team excels at navigating complex market conditions.",
  },
};

export const heroSectionData = {
  about: {
    title: "ABOUT US",
    backgroundImage: "/pexels.jpg",
    description:
      "At Run Alpha, we believe that the future of investment lies in the intersection of technology and human ingenuity. We strive to create a platform that empowers individuals to make informed decisions, while also fostering a culture of continuous learning and growth.",
  },
  strategies: {
    title: "OUR STRATEGIES",
    backgroundImage: "/skyline.jpg",
    description:
      "Our strategies are built on data-driven insights, advanced algorithms, and expert analysis. We harness the power of artificial intelligence and machine learning to optimize investment opportunities.",
  },
  teams: {
    title: "MEET OUR TEAM",
    backgroundImage: "/pexels-edmond-dantes-8553867.jpg",
    description:
      "Our team is comprised of seasoned professionals with diverse backgrounds and expertise. We are dedicated to providing innovative solutions that drive success for our clients.",
  },
};

export const strategiesData = [
  {
    id: "family-office",
    title: "Family Office",
    description: `The event that will go down in history as the most significant transfer of wealth is right around the corner. Globally, it is projected that baby boomers will transfer more than USD60 trillion in wealth to millennials over the course of the next decade.
    The great wealth transfer is happening. Millennials are on the cusp of an unprecedented shift in wealth. Beyond investment management, we provide an exclusive suite of family office services, ensuring a smooth transition of wealth to Millennials and Gen Z and aligning investment strategies with the family’s evolving investment preferences. Our services include:
    Wealth planning and preservation – structuring portfolios for long-term financial security
    Estate and planning succession – ensuring seamless wealth transfer across generations
    Tax and legal coordination – collaborating with top-tier professionals for optimal financial efficiency
    Philanthropy and legacy building – setting common family values and crafting strategies to align wealth with purpose
    At Run Alpha, we believe that true alpha comes from resilience, innovation, adaptability, and a relentless pursuit of excellence. Whether in bull or bear markets, we remain committed to protecting and growing our investor’s capital with integrity, transparency, and a long-term perspective.
`,
    image: "/pexels-rdne-7951553.jpg",
  },
  {
    id: "private-wealth",
    title: "Private Wealth",
    description: `Your wealth is more than money. At Run Alpha, our Private Wealth services are designed to help high-net-worth individuals and ultra high-net-worth individuals navigate the complexities of wealth management with confidence, transparency and clarity. We provide personalized strategies that focus on  liquidity management, financial planning and long-term wealth preservation, ensuring that your financial resources are optimized for both immediate needs and future goals.
    Strategic Liquidity Management – we help clients:
    Maintain the right balance between liquid and invested assets
    Structure cash flows for major purchases, business investments or unforeseen expenses
    Access customized lending solutions to maximize financial flexibility
    Comprehensive Financial Planning – our team provides tailored guidance on:
    Investment and portfolio management – building strategies that align with your risk tolerance and long-term objectives
    Tax and estate planning – working alongside legal and tax professionals to structure assets efficiently
    Wealth transfer and legacy planning- ensuring a seamless transition of wealth to future generations
    Risk management – protecting assets against market volatility and economic shifts
  `,
    image: "/meditation-2262835.jpg",
  },
  {
    id: "hedge-fund",
    title: "Hedge Fund",
    description: `At Run Alpha, we provide strategic foreign exchange (FX) solutions to help clients manage currency exposure, optimize international transactions, and hedge against market volatility. Whether you are an investor, business owner, or family office managing global wealth, our FX services are designed to enhance financial efficiency and mitigate currency risks.
    Our FX Currency Solutions include:
    Currency Risk Management – we offer:
    Hedging strategies to protect against currency depreciation and volatility
    Forward contracts and options to lock in favourbale exchange rates
    Customized FX risk assessments tailored to individual financial goals
    Global Payments and Transactions – we facilitate seamless international payments for clients with cross-border financial commitments including liquidity management, fast and secure executin of FX transactions, efficient multi-currency transfers with competitive exchange rates.
`,
    image: "/pexels-rickyrecap-2295433.jpg",
  },
  {
    id: "fx-currency-solution",
    title: "FX Currency Solution",
    description:
      "Just include a disclaimer that the offering cannot be accessed. Contact us for more information.",
    image: "/pexels-anna-nekrashevich-6801874.jpg",
  },
];

export const aboutSections = [
  {
    title: "Driven by Alpha. Powered by Data",
    text: `At Run Alpha, we believe that true alpha comes from resilience, innovation, adaptability, and a relentless pursuit of excellence. We combine institutional expertise with a boutique, client-centric approach, offering tailored solutions that align with your financial goals. Whether navigating volatile markets or securing multi-generational wealth, our commitment remains unwavering: to protect, grow and optimize your financial legacy with integrity, transparency and a long-term perspective.`,
    buttonText: "READ MORE",
    imageUrl: "/about/pexels-filipgrobgaard-28426645.jpg",
  },
  {
    title: "Proven Performance, Trusted by Investors",
    text: `At Run Alpha, our commitment to delivering consistent returns has led to a growing track record of success and increasing investor confidence. As our performance continues to strengthen, we have attracted a diverse group of high-net-worth individuals and institutional investors. By refining our portfolio strategies and leveraging data-driven insights, we have further optimized risk-adjusted performance, deepening trust among our investors and partners. Our dedication to excellence and innovation has positioned us as a trusted partner in the investment community, driving long-term growth and success for our clients.`,
    buttonText: "OUR STRATEGIES",
    // buttonText: "OUR TEAM",
    imageUrl: "/two-african-businessman-sitting-outside-cafe.jpg",
  },
  {
    title: "Our Investment Philosophy",
    text: `We specialize in generating consistent, risk-adjusted returns by employing a dynamic mix of fundamental research, quantitative analysis, and macroeconomic insights. Our investment strategies span across equities, fixed income, derivatives, and alternative assets, providing diversified exposure while maintaining a strong focus on risk management. By staying nimble and adaptable, we aim to protect and grow our clients’ wealth over the long term. Our quantitative strategies are designed to deliver alpha in any market environment, providing a competitive edge and driving long-term success for our clients.`,
    // buttonText: "STRATEGIES",
    imageUrl: "/business.jpg",
  },
  {
    title: "Building for the future",
    text: `Investor confidence is built on transparency, integrity and a relentless focus on delivering results. We maintain open communication, providing insights and strategic guidance to our clients. With a track record of success, we continue to refine and expand our approach, ensuring alignment with evolving market opportunities. As we grow, our mission remains unchanged: to generate data-driven alpha and create lasting value for our clients.
    At Run Alpha, our momentum is strong, our strategies are refined, and our clients’ trust continues to grow as we scale new heights, we remain focused on delivering excellence and positioning our clients for long-term success. `,
    buttonText: "LEARN MORE",
    imageUrl: "/unsplash.jpg",
  },
];

export const logos = [
  "/strategies/growth.jpg",
  "/strategies/valueinvestment.jpg",
  "/strategies/splash.jpg",
  "/strategies/spooky.jpg",
  "/strategies/strategy-one.jpg",
  "/strategies/redd-francisco.jpg",
  "/strategies/incomeinvestment.jpg",
];
