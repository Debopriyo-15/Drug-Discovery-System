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
  ListChevronsUpDown,
  ListChevronsDownUp,
} from "lucide-react";

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
            <li><LayoutDashboard className="icons"/></li>
            <li><BotMessageSquare className="icons"/></li>
          </ul>

          <ul>
            <li><BookOpenText className="icons"/></li>
            <li><ListClock className="icons"/></li>
          </ul>

          <ul>
            <li><Microscope className="icons"/></li>
            <li><ListClock className="icons"/></li>

            <li><ChartNoAxesCombined className="icons"/></li>
            <li><ListClock className="icons"/></li>
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
