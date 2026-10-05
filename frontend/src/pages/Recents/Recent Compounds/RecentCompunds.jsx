import { Download, Plus, Search, SquareArrowOutUpRight } from "lucide-react";

import "./RecentCompunds.css";

const RecentCompunds = () => {
  return (
    <main className="recent-compounds">
      <section className="recent-compounds-card">
        <div className="recent-compounds-heading">
          <div>
            <div className="recent-compounds-route">
              <span>COMPOUND DISCOVERY</span>
              <span>/</span>
              <strong>RECENT COMPOUNDS</strong>
            </div>
            <h1>Recent Compounds Registry</h1>
            <p>
              Session catalog of analyzed small molecules, molecular properties,
              and Lipinski Ro5 compliance.
            </p>
          </div>

          <div className="recent-compounds-actions">
            <button type="button" className="export-button">
              <Download size={16} />
              Export CSV
            </button>
            <button type="button" className="screen-button">
              <Plus size={18} />
              Screen New Molecule
            </button>
          </div>
        </div>

        <div className="recent-compounds-toolbar">
          <label className="recent-compounds-search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Filter compounds by name, ChEMBL ID, formula..."
            />
          </label>

          <label className="recent-compounds-sort">
            <span>SORT:</span>
            <select defaultValue="recent">
              <option value="recent">Recently Added</option>
              <option value="name">Name</option>
              <option value="chembl">ChEMBL ID</option>
            </select>
          </label>
        </div>
      </section>

      <section className="recent-compounds-card">
        <div className="compounds-heading">
          <div className="compounds-title">
            <h4>All Registry Entries</h4>
            <span>6 of 148</span>
          </div>
          <div className="compounds-legend">
            <span className="legend-item">
              <i className="legend-dot compliant-dot" />
              Lipinski Compliant
            </span>
            <span className="legend-item">
              <i className="legend-dot flagged-dot" />
              Lipinski Flagged
            </span>
          </div>
        </div>

        <div className="grid-headings">
          <p>STRUCTURE</p>
          <p>COMPOUND NAME</p>
          <p>IDENTIFIERS</p>
          <p>MOL FORMULA</p>
          <p>MOL WGT</p>
          <p>LOGP</p>
          <p>LIPINSKI</p>
          <p>ACTIONS</p>
        </div>

        <div className="list">
          <div className="list-item">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="item">
              <h5>Aspirin</h5>
              <h3>Acetylsalicylic Acid</h3>
            </div>
            <div className="item">
              <h5>CHEMBL25</h5>
            </div>
            <div className="item">
              <h3>C9H8O4</h3>
            </div>
            <div className="item">
              <h3>180.16 Da</h3>
            </div>
            <div className="item">
              <h3>1.19</h3>
            </div>
            <div className="item">
              <span>
                <i className="legend-dot compliant-dot" />
                <p>Pass</p>
              </span>
            </div>
            <div className="item">
              <span className="view">
                <h3>View</h3>
                <SquareArrowOutUpRight size={11} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecentCompunds;
