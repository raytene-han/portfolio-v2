import { Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Resume from "./Resume";

/** RoutesList Component
 *
 */

function RoutesList() {
  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </div>
  );
}

export default RoutesList;