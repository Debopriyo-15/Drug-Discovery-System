import { useState } from "react";

import {
  Atom,
  Virus,
  Radar,
  ScrollText
} from "lucide-react";

import CollapsedBar from "../Sidebar/CollapsedBar";
import "./Sessionbar.css";

const Sessionbar = () => {
  

  
  return (
    <div className="sessionbar">
      <div className="sessionbar-title">
        <h2>Research Session</h2>
        <h3>Contextual Evidence</h3>
      </div>
      <div className="sessionbar-content">
        <div className="sessionbar-item">
          <Atom className="sessionbar-icon" />
          <p>Active Compounds</p>
        </div>
        <div className="sessionbar-item">
          <Virus className="sessionbar-icon" />
          <p>Diseases</p>
        </div>
      
      
        <div className="sessionbar-item">
          <Radar className="sessionbar-icon" />
          <p>Targets</p>
        </div>
        <div className="sessionbar-item">
          <ScrollText className="sessionbar-icon" />
          <p>Reference Paper</p>
        </div>
     
      </div>
    </div>
  )
}
      
          

export default Sessionbar;
