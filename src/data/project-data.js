import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import metproj from "../assets/img/project-section/app-screenshot.JPG";

const projects = [
    {
      title: "Met Virtual Gallery",
      description: "This is a full stack Next.js project that makes use to the Met gallery API to display featured and user-searched art pieces. It invites interaction by displaying existing comments for each piece and allowing users to contribute their thoughts through a comment feature.",
      techStack: "Next.js",
      imgUrl: metproj,
      codeUrl: "https://github.com/makenasandra/met-virtual-art-gallery-nextjs",
      projectUrl: "https://met-virtual-art-gallery.vercel.app/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

export default projects;