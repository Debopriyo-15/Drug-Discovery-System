import {
  FlaskConical,
  LayoutDashboard,
  BotMessageSquare,
  BookOpenText,
  Microscope,
  ChartNoAxesCombined,
  ClipboardList,
  ListClock,
  PanelLeftOpen,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import "./CollapsedBar.css";
import { useState } from "react";

const CollapsedBar = ({ panelAction }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="collapsed">
      <div className="title-container">
        <div className="title">
          {!hover ? (
            <FlaskConical
              className="flask"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          ) : (
            <div className="panel-open">
              <PanelLeftOpen
                size={24}
                onClick={panelAction}
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
            <NavLink to="/" end><LayoutDashboard className="icons"/></NavLink>
            <NavLink to="/assistant"><BotMessageSquare className="icons"/></NavLink>
          </ul>

          <ul>
            <NavLink to="/literature-retrieval"><BookOpenText className="icons"/></NavLink>
            <NavLink to="/recent-literature"><ListClock className="icons"/></NavLink>
          </ul>

          <ul>
            <NavLink to="/compound-analysis"><Microscope className="icons"/></NavLink>
            <NavLink to="/recent-compounds"><ListClock className="icons"/></NavLink>

            <NavLink to="/similarity-analysis"><ChartNoAxesCombined className="icons"/></NavLink>
            <NavLink to="/recent-similarity"><ListClock className="icons"/></NavLink>
          </ul>

          <ul>
            <li><ClipboardList className="icons"/> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollapsedBar;
