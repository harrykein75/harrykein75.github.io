import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jeremiah Souza — Senior Web Developer",
  author: "Jeremiah Souza",
  description:
    "Software Engineer based in Florida, USA. I specialize in web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jeremiah-souza-7a82b13a6" },
    { text: "Github", href: "https://github.com/jeremiahsouza" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jeremiah Souza",
    specialty: "Senior Web Developer",
    summary:
      "Developer based in Florida, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "jeremiah.work93@outlook.com",
  },
  experience: [
    {
      company: "TechMD",
      position: "Senior Software Engineer",
      startDate: "Sep 2023",
      endDate: "Present",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "REIndicator",
      position: "Full-Stack Software Engineer",
      startDate: "Mar 2020",
      endDate: "Jul 2023",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Accenture",
      position: "Full-Stack Developer",
      startDate: "May 2017",
      endDate: "Feb 2020",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
    {
      company: "Jellyfish",
      position: "Web Developer",
      startDate: "Oct 2015",
      endDate: "Apr 2017",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/jeremiahsouza",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/jeremiahsouza",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/jeremiahsouza",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Jeremiah Souza, a full-stack developer with 8+ years of experience building production-ready web applications. I work across the front end, back end, and cloud infrastructure to turn ideas into scalable, reliable products. I enjoy solving complex problems, writing clean and maintainable code, and building systems that are fast, secure, and easy to grow over time.
    `,
    image: "/alejandro-big.jpg",
  },
};
