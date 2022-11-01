import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Title } from "../styledComponents/textComponents";
import {
  StyledSectionLeft,
  StyledTabsCard,
  StyledProjectInfoCard,
} from "../styledComponents/cardComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



function TabsCard({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
  };

  return (
    <StyledSectionLeft className="tabs"
      ref={ref}
      style={scrollIntoView}
    >
      <Title> Portfolio </Title>
      <StyledTabsCard>
        <nav>
          <ul className="tabs">
            {tabs.map((tab, idx) => (
              <li key={tab.name}
                className={`tabs ${tab.name === selectedTab.name ? "selected" : ""}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab.name}
                {tab.name === selectedTab.name ? (
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
        </nav>
        <main>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab.name ? selectedTab.name : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <StyledProjectInfoCard>
                {/* <h3>{selectedTab ? selectedTab : "😋"}</h3> */}
                {/* <div> */}
                  <img src={`/${selectedTab.name.toLowerCase()}.png`} alt={`screenshot of ${selectedTab}`} />
                {/* </div> */}
                <div>
                  <div className="project-description">
                    <p>{selectedTab.description}</p>
                  </div>
                  <div className="links">
                    <a href={selectedTab.demo} title="Live Demo"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    <a href={selectedTab.github} title="Github"><FontAwesomeIcon icon={faGithub} /></a>
                  </div>
                  <ul>
                    {selectedTab.technologies.map(tech => (
                      <li
                        key={`${selectedTab.name}-${tech}`}
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



export default TabsCard;