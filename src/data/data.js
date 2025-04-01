import { FaLinkedin } from "react-icons/fa";


export const navLinksItems = [
  { name: "Home", href: "/", id: 1 },
  { name: "About Us", href: "/aboutus", id: 2 },
  { name: "What we Offer", href: "/offerings", id: 3 },
  { name: "Team", href: "/team", id: 4 },
  { name: "Contact Us", href: "/contact", id: 5 },
];

export const socials = [
  {
    id: 1,
    href: "",
    name: "LinkedIn",
    icon: FaLinkedin,
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Ajoke Toluwaloju",
    title: "Head, Fund Management",
    quote:
      `Ajoke Toluwaloju has over 6 years of experience spanning accounting, audit, tax, research,
      and fund and portfolio management. She is experienced in formulating complex investment
      management solutions to institutional investors and high net worth investors.
      Previously, she worked at FBNQuest Asset Management, curating investment/trading
      strategies for over NGN300bn in funds under management.`,
      qualification: {
        degree: "BSc. Accounting University of Lagos, Nigeria",
        institute: "Institute of Certified Chartered Accountant of Nigeria (ACCA)",
      },
    image: "/team/Picture3.jpg",
  },
  {
    id: 2,
    name: "Ayooluwade Ogunwale",
    title: "Head, Fixed Income/Strategy",
    quote:
      `Ayooluwade Ogunwale has over 4 years of experience in the financial services industry,
      spanning Research, Portfolio/Fund management. He leverages macro data to maximize
      financial returns by identifying optimal investment opportunities.
      Prior to joining Run Alpha, he worked at FBNQuest Asset Management Ltd where he
      developed macro-driven investment strategies for NGN500bn in funds managed under his
      purview.`,
    image: "/team/Picture1.jpg",
    qualification: {
      degree: "BSc. Accounting,Ekiti State University, Nigeria",
      institute: "Institute of Chartered Accountant of Nigeria (ACA)",
    },
  },
  {
    id: 3,
    name: "Reanat Adamson",
    title: "Head, Finance",
    quote:
      `Reanat Adamson has over six years in the Audit practice specializing in the financial
      statement audits of corporate listed and regulated entities in the UK.
      With extensive experience in auditing complex financial structures and internal controls, she
      has developed a deep understanding of regulatory requirements, risk assessment, and
      compliance within highly regulated industries.  
`,
    image: "/team/Picture4.jpg",
    qualification: {
      degree: "B.Sc. Accounting, University of Swansea, England",
      institute: "Member, Association of Certified Chartered Accountants (ACCA)",
    },
  },
  {
    id: 4,
    name: "Folashade Adedun",
    title: "Head, Risk Management",
    quote:
      `Folashade has over six years in Risk Management specializing in developing compliance
      initiatives for Systemically Important Banks and leading regulatory change management
      initiatives for FAANG companies.`,
    image: "/team/Picture2.jpg",
     qualification: {
      degree: "B.Sc. Accounting, University of Lagos, Nigeria",
     }
  },
  {
    id: 5,
    name: "Bashir Lawal",
    title: "Head, Growth/Strategy",
    quote:
      "Bashir Lawal has over 5 years of experience in the financial services industry, spanning Research, Portfolio/Fund management. Prior to joining Run Alpha, he worked at FBNQuest Asset Management Ltd where he developed macro-driven investment strategies for NGN500bn in funds managed under his purview. He leverages macro data to maximize financial returns by identifying optimal investment opportunities. In his role, he provides insights through comprehensive analyses of fiscal and monetary policies, along with other influencing factors.",
    image: "/team/Picture5.jpg",
    qualification: {
      degree: "B.Sc. Accounting, University of Lagos, Nigeria",
     }
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
    image: "/pexels-pixabay-235990.jpg",
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
    image: "/pexels-pixabay-210600.jpg",
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
    title: "OFFERINGS",
    backgroundImage: "/skyline.jpg",
    description:
      "Our offerings are built on data-driven insights, advanced algorithms, and expert analysis. We harness the power of artificial intelligence and machine learning to optimize investment opportunities.",
  },
  teams: {
    title: "MEET OUR TEAM",
    backgroundImage: "/pexels-edmond-dantes-8553867.jpg",
    description:
      "Our team is comprised of seasoned professionals with diverse backgrounds and expertise. We are dedicated to providing innovative solutions that drive success for our clients.",
  },
  contact: {
    title: "Contact Us",
    backgroundImage: "/pexels-mart-production-7709242.jpg",
    description: "Get Intouch with us today"
  }
};

export const strategiesData = [
  {
    id: "family-office",
    title: "Family Office",
    description: `
      The event that will go down in history as the most significant transfer of wealth is right around the corner. 
      The great wealth transfer is happening. Globally, it is projected that baby boomers will transfer more than USD60 trillion in wealth to millennials over the course of the next decade.
      <br />
      Beyond investment management, we provide an exclusive suite of family office services, ensuring a smooth transition of wealth to Millennials and Gen Z and aligning investment strategies with the family’s evolving investment preferences. Our services include:
    `,
    services: [
  {
    id: 1,
    desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"><span class="font-bold">Wealth Planning and Preservation</span> – structuring portfolios for long-term financial security.</p>`
  },
  {
    id: 2,
    desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"><span class="font-bold">Estate and Planning Succession</span> – guiding families through effective investment strategies tailored to their goals.</p>`
  },
  {
    id: 3,
    desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"><span class="font-bold">Philanthropy and Legacy Building</span> – minimizing the tax burden and maximizing the growth potential of investments.</p>`
  }
    ],
    image: "/pexels-rdne-7951553.jpg",
  },
  {
    id: "private-wealth",
    title: "Private Wealth",
    description: `
      Your wealth is more than money. Our Private Wealth services are designed to help High-Net-Worth Individuals and Ultra High-Net-Worth Individuals navigate the complexities of wealth management with confidence, transparency, and clarity.
      <br />
      We provide personalized strategies that focus on liquidity management, financial planning, and long-term wealth preservation, ensuring that your financial resources are optimized for both immediate needs and future goals. We help clients develop:
    `,
    services: [
          {
    id: 1,
    desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"><span class="font-bold">Strategic Liquidity Management</span> – optimizing cash flow and liquidity to meet your immediate and future needs.</p>`
  },
  {
    id: 2,
    desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"><span class="font-bold">Investment Risk Management</span> – managing and mitigating risks in investment portfolios to ensure stability.</p>`
  },
  {
    id: 3,
    desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"><span class="font-bold">Access to Customized Lending Solutions</span> – offering tailored credit solutions for wealth management.</p>`
  },
  {
    id: 4,
    desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"><span class="font-bold">Comprehensive Financial Planning</span> – helping clients develop long-term, sustainable wealth strategies.</p>`
  }
    ],

    image: "/pexels-pixabay-235990.jpg",
  },
  
  {
    id: "hedge-fund",
    title: "Hedge Fund",
   description: `
      Please note that the offering cannot proceed until clients have reviewed the disclaimer. 
      For more information, kindly 
      <a href="/disclaimer" class="text-secondary underline">review the disclaimer</a> or contact us directly.
    `,
    services: [],
    image: "/pexels-rickyrecap-2295433.jpg",
  },
  {
    id: "fx-currency-solution",
    title: "FX Currency Solution",
    description: `
      At Run Alpha, we provide strategic foreign exchange (FX) solutions to help clients manage currency exposure, optimize international transactions, and hedge against market volatility.
      <br />
      Whether you are an investor, business owner, or family office managing global wealth, our FX services are designed to enhance financial efficiency and mitigate currency risks. Our FX Currency Solutions include:
    `,
    services: [
      {
        id: 1,
        desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify">Currency Risk Management</p> `
      },
      {
        id: 2,
        desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify">Global Payments and Investment Transactions</p>`
      },
      {
        id: 3,
        desc: `<p class="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify">FX Liquidity Management</p>`
      }
    ],
    image: "/pexels-pixabay-210600.jpg",
  },
];


export const aboutSections = [
  {
    title: "Driven by Alpha. Powered by Data",
    text: `At Run Alpha, we believe that true alpha comes from resilience, innovation, adaptability, and a relentless pursuit of excellence. We combine institutional expertise with a boutique, client-centric approach, offering tailored solutions that align with your financial goals. Whether navigating volatile markets or securing multi-generational wealth, our commitment remains unwavering: to protect, grow and optimize your financial legacy with integrity, transparency and a long-term perspective.`,
    imageUrl: "/about/pexels-filipgrobgaard-28426645.jpg",
  },
  {
    title: "Proven Performance, Trusted by Investors",
    text: `At Run Alpha, our commitment to delivering consistent returns has led to a growing track record of success and increasing investor confidence. As our performance continues to strengthen, we have attracted a diverse group of high-net-worth individuals and institutional investors. By refining our portfolio strategies and leveraging data-driven insights, we have further optimized risk-adjusted performance, deepening trust among our investors and partners. Our dedication to excellence and innovation has positioned us as a trusted partner in the investment community, driving long-term growth and success for our clients.`,
    imageUrl: "/two-african-businessman-sitting-outside-cafe.jpg",
  },
  {
    title: "Our Investment Philosophy",
    text: `We specialize in generating consistent, risk-adjusted returns by employing a dynamic mix of fundamental research, quantitative analysis, and macroeconomic insights. Our investment strategies span across equities, fixed income, derivatives, and alternative assets, providing diversified exposure while maintaining a strong focus on risk management. By staying nimble and adaptable, we aim to protect and grow our clients’ wealth over the long term. Our quantitative strategies are designed to deliver alpha in any market environment, providing a competitive edge and driving long-term success for our clients.`,
    imageUrl: "/pexels-googledeepmind-17485658.jpg",
  },
  {
    title: "Building for the future",
    text: `Investor confidence is built on transparency, integrity and a relentless focus on delivering results. We maintain open communication, providing insights and strategic guidance to our clients. With a track record of success, we continue to refine and expand our approach, ensuring alignment with evolving market opportunities. As we grow, our mission remains unchanged: to generate data-driven alpha and create lasting value for our clients.
    At Run Alpha, our momentum is strong, our strategies are refined, and our clients’ trust continues to grow as we scale new heights, we remain focused on delivering excellence and positioning our clients for long-term success. `,
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
