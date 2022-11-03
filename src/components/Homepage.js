import Footer from "./Footer";
import Introduction from "./Introduction";
import About from "./About";
import Experience from "./Timeline";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Container } from "../styledComponents/cardComponents";

const projects = [
  {
    name: "Jobly",
    description: "A web app that allows users to search for and apply to jobs.",
    technologies: [
      "React",
      "Bootstrap",
      "Bcrypt",
      "Express",
      "PostgreSQL"
    ],
    demo: "https://jobby-lobby.surge.sh",
    github: "https://github.com/msunnnnn/react-jobly"
  },
  {
    name: "ShareBnb",
    description: "An Airbnb clone that allows users to post and book listings.",
    technologies: [
      "React",
      "Bootstrap",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "AWS S3"
    ],
    demo: "https://sharebnb-rh.surge.sh",
    github: "https://github.com/ndrewjensen/share-bnb-frontend"
  },
  {
    name: "Warbler",
    description: "A Twitter clone where users 'warble' about what's happening.",
    technologies: [
      "Flask",
      "WTForms",
      "Bootstrap",
      "Jinja",
      "PostgreSQL"
    ],
    demo: "https://warblerrh.herokuapp.com",
    github: "https://github.com/raytene-han/flask-warbler"
  },
  {
    name: "Portfolio",
    description: "My personal website that I built from scratch.",
    technologies: [
      "React",
      "Styled Components",
      "Framer Motion",
      "React Scroll"
    ],
    github: "https://github.com/raytene-han/portfolio-v2"
  }
]

function Homepage() {

  return (
    <>
      <Container id="home">
        <Introduction />
      </Container>
      <Container id="about">
        <About />
      </Container>
      <Container id="portfolio">
        <Portfolio tabs={projects} />
      </Container>
      <Container id="history">
        <Experience />
      </Container>
      <Container id="contact">
        <Contact />
      </Container>
      <Footer />
    </>
  );
}



export default Homepage;
