import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import {
  StyledSectionLeft,
  StyledTabsCard,
  StyledProjectInfoCard,
} from "../styledComponents/cardComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCircleArrowLeft,
  faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Portfolio({ tabs }) {
  const [tabIdx, setTabIdx] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
  };

  const activeTab = tabs[tabIdx];

  function handleRightArrow() {
    setTabIdx(tabIdx === tabs.length - 1 ? 0 : tabIdx + 1);
  }

  function handleLeftArrow() {
    setTabIdx(tabIdx === 0 ? tabs.length - 1 : tabIdx - 1);
  }

  return (
    <StyledSectionLeft className="tabs"
      ref={ref}
      style={scrollIntoView}
    >
      <Title>Portfolio</Title>
      <StyledTabsCard>
        <nav>
          <ul className="tabs">
            {tabs.map((tab, idx) => (
              <li key={tab.name}
                className={`tabs ${tab.name === activeTab.name ? "selected" : ""}`}
                onClick={() => setTabIdx(idx)}
              >
                {tab.name}
                {tab.name === activeTab.name ? (
                  <motion.div className="underline"
                    layoutId="underline"
                    transition={{
                      layout: {
                        duration: 0.35,
                      },
                    }} />
                ) : null}
              </li>
            ))}
          </ul>
          <div>
            <h3>{activeTab.name}</h3>
          </div>
        </nav>
        <main>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeTab.name ? activeTab.name : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <StyledProjectInfoCard>
                <div className="image-container">
                  <button className="left-arrow" onClick={handleLeftArrow}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                  </button>
                  <img
                    src={`/${activeTab.name.toLowerCase()}.png`}
                    alt={`screenshot of ${activeTab.name} application demo`} />
                  <button className="right-arrow" onClick={handleRightArrow}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </button>
                </div>
                <div>
                  <div className="project-description">
                    <p>{activeTab.description}</p>
                  </div>
                  <div className="links">
                    {activeTab.demo &&
                      <a href={activeTab.demo} title={`Live Demo for ${activeTab.name}`}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>}
                    <a href={activeTab.github} title={`Github Repo for ${activeTab.name}`}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                  <ul>
                    {activeTab.technologies.map(tech => (
                      <li
                        key={`${activeTab.name}-${tech}`}
                        className="project-tech"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </StyledProjectInfoCard>
            </motion.div>
          </AnimatePresence>
        </main>
      </StyledTabsCard>
    </StyledSectionLeft>
  );
}



export default Portfolio;