import { Check, Circle, Database, RefreshCw, Search } from "lucide-react";

import "./RecentLiterature.css";

const RecentLiterature = () => {
  return (
    <main className="recent-literature">
      <section className="recent-literature-card">


        <div className="literature-content">
          <div className="literature-heading">
            <div>
              <div className="literature-route">
                <span>LITERATURE</span>
                <span>/</span>
                <strong>INGESTED EVIDENCE CORPUS</strong>
              </div>
              <h1>Literature &amp; Grounding Evidence</h1>
              <p>
                Peer-reviewed research and validated molecular evidence supporting
                active drug discovery targets.
              </p>
            </div>

            <div className="literature-actions">
              <span className="literature-connection-status">
                <i />
                Europe PMC Connected
              </span>

            </div>
          </div>

          <div className="literature-toolbar">
            <label className="literature-search">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search papers by title, author, DOI, or target..."
                aria-label="Search papers by title, author, DOI, or target"
              />
            </label>

            <div className="literature-filters" aria-label="Literature filters">
              <button type="button" className="literature-filter active" aria-pressed="true">
                All Articles (164)
              </button>
              <button type="button" className="literature-filter" aria-pressed="false">
                <Check size={13} />
                Grounded Only
              </button>
              <button type="button" className="literature-filter" aria-pressed="false">
                <Circle size={12} />
                Recent (Past 7 Days)
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecentLiterature;
