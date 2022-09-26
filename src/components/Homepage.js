import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title, Footer } from "../styledComponents/textComponents";
import About from "./About";
import TabCard from "./TabCard";
import Contact from "./Contact";

const projects = ["Jobly", "ShareBnb", "Warbler"];
const about = ["Background", "Interests"];

function Homepage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  };

  return (
    <div id="homepage"
    ref={ref}
    >
      <Title style={scrollIntoView}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a officiis nam explicabo cumque reiciendis, incidunt aliquam illum deleniti blanditiis? Sequi libero temporibus tempora neque quod. Amet eveniet maiores eum! </Title>

      <About />
      <TabCard tabs={projects}/>
      <Contact />
      <Footer>©  Raytene  Han  2022</Footer>
    </div>
  );
}



export default Homepage;
