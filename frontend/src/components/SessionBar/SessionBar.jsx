import { 
  Atom, 
  Virus, 
  Dna, 
  ScrollText,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import "./Sessionbar.css";

const Sessionbar = () => {
  return (
    <div className="sessionbar">
      <div className="title-container">
        <div className="title">
          <h2>Research Session</h2>
          <h3>Contextual Evidence</h3>
        </div>
        <div className="panel-close">
          <PanelLeftOpen size={24}  />
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
  );
};

export default Sessionbar;
