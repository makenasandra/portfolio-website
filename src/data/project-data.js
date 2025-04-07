import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import metproj from "../assets/img/project-section/app-screenshot.JPG";
import fotomatic from "../assets/img/project-section/fotmatic.png";
import ycDirectory from "../assets/img/project-section/yc-directory.png";
import adoptpet from "../assets/img/project-section/adoptpet.JPG";


const projects = [
    {
      title: "Met Virtual Gallery",
      description: "This is a full stack Next.js project that makes use to the Met gallery API to display featured and user-searched art pieces.",
      techStack: "Next.js, React.js",
      imgUrl: metproj,
      codeUrl: "https://github.com/makenasandra/met-virtual-art-gallery-nextjs",
      projectUrl: "https://met-virtual-art-gallery.vercel.app/"
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
      title: "YC Directory",
      description: "A startup directory that allows users to create and view startups",
      techStack: "Next.js, React.js",
      imgUrl: ycDirectory,
      codeUrl: "https://github.com/makenasandra/yc-directory-nextjs",
      projectUrl: "https://yc-directory-nextjs-pi.vercel.app/"
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
      imgUrl: metproj,
      codeUrl: "https://github.com/makenasandra/tea-cozy",
      // projectUrl: "https://fotomatic-frontend.vercel.app/"
    },
    {
      title: "Company Home Page",
      description: "This project, uses flexbox to design and build the layout for a company’s homepage.",
      techStack: "HTML5, CSS",
      imgUrl: metproj,
      codeUrl: "https://github.com/makenasandra/company-home-page",
      // projectUrl: "https://fotomatic-frontend.vercel.app/"
    },
  ];

export default projects;