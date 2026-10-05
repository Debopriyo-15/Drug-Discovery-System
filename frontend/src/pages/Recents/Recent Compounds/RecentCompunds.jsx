import { Download, Plus, Search } from "lucide-react";

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
              Session catalog of analyzed small molecules, molecular
              properties, and Lipinski Ro5 compliance.
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
    </main>
  );
};

export default RecentCompunds;