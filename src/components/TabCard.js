import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Title } from "../styledComponents/textComponents";
import {
  StyledSectionLeft,
  StyledTabsCard,
  StyledProjectInfoCard,
} from "../styledComponents/cardComponents";



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
    <StyledSectionLeft className="tabs" id="projects"
      ref={ref}
      style={scrollIntoView}
    >
      <Title> Portfolio </Title>
      <StyledTabsCard>
        <nav>
          <ul>
            {tabs.map((tab, idx) => (
              <li key={tab}
                className={`tab-${idx} ${tab === selectedTab ? "selected" : ""}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
                {tab === selectedTab ? (
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
              key={selectedTab ? selectedTab : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab : "😋"}
              <StyledProjectInfoCard>
                <img src="/up_arrow_icon.png" alt="proj" />
              <p>Some details about what it's</p>
              <p>React, Express, Node.js</p>
              <a href="/">Link to Repo</a>

              </StyledProjectInfoCard>
            </motion.div>
          </AnimatePresence>
        </main>
      </StyledTabsCard>
    </StyledSectionLeft>
  );
}



export default TabsCard;