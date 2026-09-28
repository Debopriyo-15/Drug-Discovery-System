import { useState } from "react";

import { 
  Atom, 
  Virus, 
  Dna, 
  ScrollText,
  PanelLeftClose,
  PanelLeftOpen,
  MonitorDot
} from "lucide-react";

import CollapsedSessionbar from "./CollapsedSessionbar";

import "./Sessionbar.css";

const Sessionbar = () => {
 const [closeSessionPanel, setCloseSessionPanel] = useState(false);

  const sessionPanelAction = () => {
    setCloseSessionPanel(!closeSessionPanel);
  };

  return (
    !closeSessionPanel ? (
    <div className="sessionbar">
      <div className="title-container">
        <div className="title">
          <h2>Current<MonitorDot className="monitor"/></h2>
          <h2 style={{fontSize: "22px"}}>Research Session</h2>
          <h3>Contextual Evidence</h3>
        </div>
        <div className="panel-close">
          <PanelLeftOpen size={24} onClick={sessionPanelAction}/>
        </div>
      </div>

      <div className="navigations-container">
        <div className="navigations">
          <ul>
            <li><Atom /><p>Active Compounds</p><p className="qty">12</p></li>
            <li><Virus /><p>Diseases</p><p className="qty">5</p></li>
            <li><Dna /><p>Proteins</p><p className="qty">7</p></li>
            <li><ScrollText /><p>Reference Paper</p><p className="qty">10</p></li>
          </ul>
        </div>
      </div>
    </div>
    ) : (
      <CollapsedSessionbar 
        sessionPanelAction={sessionPanelAction}
      />
    )
  );
};

export default Sessionbar;
