import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FlaskConical,
  LayoutDashboard,
  BotMessageSquare,
  BookOpenText,
  Microscope,
  ChartNoAxesCombined,
  ClipboardList,
  ListClock,
  PanelLeftClose,
  ListChevronsUpDown,
} from "lucide-react";

import CollapsedBar from "./CollapsedBar";
import "./Sidebar.css";

const Sidebar = () => {
  const [closePanel, setClosePanel] = useState(false);

  const panelAction = () => {
    setClosePanel(!closePanel);
  };

  return (
    !closePanel ? (
    <div className="sidebar">
      <div className="title-container">
        <div className="title">
          <h2>Drug <FlaskConical className="flask" /></h2>
          <h2>Discovery AI</h2>
          <h3>AI RAG Research Station</h3>
        </div>
        <div className="panel-close">
          <PanelLeftClose size={24} onClick={panelAction} />
        </div>
      </div>

      <div className="navigations-container">
        <div className="navigations">
          <ul>
            <span>
              <h4>MAIN CONSOLE</h4>
              <ListChevronsUpDown className="icon" />
            </span>
            <NavLink to="/" end>
              <LayoutDashboard />
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/assistant">
              <BotMessageSquare />
              <p>AI Assistant</p>
            </NavLink>
          </ul>

          <ul>
            <span>
              <h4>KNOWLEDGE RETRIEVAL</h4>
              <ListChevronsUpDown className="icon" />
            </span>
            <NavLink to="/literature-retrieval">
              <BookOpenText />
              <p>Literature Retrieval</p>
            </NavLink>
            <NavLink className="recents" to="/recent-literature">
              <ListClock />
              <p>Recent Retrievals</p>
            </NavLink>
          </ul>

          <ul>
            <span>
              <h4>COMPOUND DISCOVERY</h4>
              <ListChevronsUpDown className="icon" />
            </span>
            <NavLink to="/compound-analysis">
              <Microscope />
              <p>Compound Analysis</p>
            </NavLink>
            <NavLink className="recents" to="/recent-compounds">
              <ListClock />
              <p>Recent Analysis</p>
            </NavLink>

            <NavLink to="/similarity-analysis">
              <ChartNoAxesCombined />
              <p>Similarity Analysis</p>
            </NavLink>
            <NavLink className="recents" to="/recent-similarity">
              <ListClock />
              <p>Recent Analysis</p>
            </NavLink>
          </ul>

          <ul>
            <span>
              <h4>RESEARCH FINDINGS</h4>
              <ListChevronsUpDown className="icon" />
            </span>
            <li>
              <ClipboardList />
              <p>Research Reports</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    ) : (
      <CollapsedBar panelAction={panelAction}/>
    )
  );
};

export default Sidebar;
