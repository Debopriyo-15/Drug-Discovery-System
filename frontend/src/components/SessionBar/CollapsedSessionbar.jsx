import { useState } from "react";

import {
  Atom,
  Virus,
  Dna,
  ScrollText,
  MonitorDot,
  PanelLeftOpen
} from "lucide-react";

import "./CollapsedSessionbar.css";

const CollapsedSessionbar = ({ sessionPanelAction }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="collapsed-sessionbar">
      <div className="title-container">
        <div className="title">
          {!hover ? (
            <MonitorDot
              className="monitor"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          ) : (
            <div className="panel-open">
              <PanelLeftOpen
                size={24}
                onClick={sessionPanelAction}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="navigations-container">
        <div className="navigations">
          <ul>
            <li><Atom className="icons" /></li>
            <li><Virus className="icons" /></li>
            <li><Dna className="icons" /></li>
            <li><ScrollText className="icons" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollapsedSessionbar;