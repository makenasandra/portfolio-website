import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import defaultProj from "../assets/img/project-section/default.png";
import metproj from "../assets/img/project-section/app-screenshot.JPG";
import fotomatic from "../assets/img/project-section/fotmatic.png";
import ycDirectory from "../assets/img/project-section/yc-directory.png";
import adoptpet from "../assets/img/project-section/adoptpet.JPG";


const projects = [
  {
      title: "DevShowCase",
      description: "A platform for developers to highlight their work and connect with opportunities.",
      techStack: "Next, TypeScript, Prisma, PostgreSQL",
      imgUrl: defaultProj,
      // codeUrl: "https://github.com/makenasandra/company-home-page",
      projectUrl: "https://devshowcase.dev/"
    },
    {
      title: "Job Portal",
      description: "A smart job-matching platform that connects job seekers with top employers, offering easy search, quick applications, and tailored career opportunities.",
      techStack: "Next, TypeScript, Prisma, PostgreSQL",
      imgUrl: defaultProj,
      // codeUrl: "https://github.com/makenasandra/company-home-page",
      projectUrl: "https://zunedjobs.netlify.app/"
    },
    {
      title: "Productivity SAAS",
      description: "A cloud-based productivity platform that streamlines workflows, boosts team collaboration, and helps you get more done with less effort.",
      techStack: "Next, TypeScript, Prisma, PostgreSQL",
      imgUrl: defaultProj,
      // codeUrl: "https://github.com/makenasandra/company-home-page",
      projectUrl: "https://productivity-saas-zuned.netlify.app/"
    },
    {
      title: "Zenith Minds",
      description: "An educational platform connecting students and instructors, fostering global collaboration and continuous learning",
      techStack: "Next.js, React, TypeScript",
      imgUrl: defaultProj,
      // codeUrl: "https://github.com/makenasandra/company-home-page",
      projectUrl: "https://academy.aayushbharti.in/"
    },
    {
      title: "StarForge",
      description: "An AI SaaS landing page showcasing modern UI/UX excellence. It delivers an engaging user experience and serves as an inspiring reference for developers and designers.",
      techStack: "React.js, React.js",
      imgUrl: defaultProj,
      // codeUrl: "https://github.com/makenasandra/met-virtual-art-gallery-nextjs",
      projectUrl: "https://ai-saas-landing-starter.vercel.app/"
    },
    {
      title: "Met Virtual Gallery",
      description: "This is a full stack Next.js project that makes use to the Met gallery API to display featured and user-searched art pieces.",
      techStack: "Next.js, React.js",
      imgUrl: metproj,
      codeUrl: "https://github.com/makenasandra/met-virtual-art-gallery-nextjs",
      projectUrl: "https://met-virtual-art-gallery.vercel.app/"
    },
     {
      title: "YC Directory",
      description: "A startup directory that allows users to create and view startups",
      techStack: "Next.js, React.js",
      imgUrl: ycDirectory,
      codeUrl: "https://github.com/makenasandra/yc-directory-nextjs",
      projectUrl: "https://yc-directory-nextjs-pi.vercel.app/"
    },
    {
      title: "Fotomatic",
      description: "React and Express.js application that makes use of the Google Maps API to get shipping location and ETA",
      techStack: "Express.js, React.js",
      imgUrl: fotomatic,
      codeUrl: "https://github.com/makenasandra/fotomatic-react",
      projectUrl: "https://fotomatic-frontend.vercel.app/"
    },
    {
      title: "Adopt a Pet",
      description: "A pet adoption website that allows users to view all the animals of a particular species and view the profiles of specific animals.",
      techStack: "React.js",
      imgUrl: adoptpet,
      codeUrl: "https://github.com/makenasandra/adopt-pet-react",
      projectUrl: "https://adopt-pet-react.vercel.app/"
    },
    {
      title: "Tea Cozy",
      description: "A fictional tea shop website built purely on HTML and CSS highlighting the flexbox",
      techStack: "HTML5, CSS",
      imgUrl: defaultProj,
      codeUrl: "https://github.com/makenasandra/tea-cozy",
      // projectUrl: "https://fotomatic-frontend.vercel.app/"
    },
    {
      title: "Company Home Page",
      description: "This project, uses flexbox to design and build the layout for a company’s homepage.",
      techStack: "HTML5, CSS",
      imgUrl: defaultProj,
      codeUrl: "https://github.com/makenasandra/company-home-page",
      // projectUrl: "https://fotomatic-frontend.vercel.app/"
    },
  ];

export default projects;