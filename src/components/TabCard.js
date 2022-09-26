import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Title } from "../styledComponents/textComponents";
import {
  StyledSection,
  StyledTabsCard,
} from "../styledComponents/cardComponents";



function TabsCard({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  };

  return (
    <StyledSection className="tabs" id="projects"
    ref={ref}
    style={scrollIntoView}
    >
      <Title> hello, this is the Tabs section </Title>
      <StyledTabsCard>
        <nav>
          <ul>
            {tabs.map(tab => (
              <li key={tab}
                className={tab === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
                {/* {tab === selectedTab ? (
                  ) : null} */}
              </li>
            ))}
            <motion.span className="underline"
            layout
            transition={{
              layout: {
                duration: 1.5,
              },
            }}/>
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
              <p>Some details about what it's</p>
              <p>React, Express, Node.js</p>
              <a href="/">Link to Repo</a>
            </motion.div>
          </AnimatePresence>
        </main>
      </StyledTabsCard>
    </StyledSection>
  );
}



export default TabsCard;