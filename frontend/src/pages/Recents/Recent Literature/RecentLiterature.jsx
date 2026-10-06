import { Plus, Search } from "lucide-react";

import "./RecentLiterature.css";

const RecentLiterature = () => {
  return (
    <main className="recent-literature">
      <section className="recent-literature-card">
        <div className="literature-content">
          <div className="literature-heading">
            <div>
              <div className="literature-route">
                <span>KNOWLEDGE DISCOVERY</span>
                <span>/</span>
                <strong>RECENT RETRIEVALS</strong>
              </div>
              <h1>Recent Literature Registry</h1>
              <p>
                Peer-reviewed research and validated molecular evidence
                supporting active drug discovery targets.
              </p>
            </div>

            <div className="literature-actions">
              <button type="button" className="literature-new-button">
                <Plus size={18} />
                Fetch New Literature
              </button>
            </div>
          </div>

          <div className="literature-toolbar">
            <label className="literature-search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search papers by title, author, DOI, or target..."
                aria-label="Search papers by title, author, DOI, or target"
              />
            </label>

            <label className="literature-sort">
              <span>SORT :</span>
              <select defaultValue="recent">
                <option value="recent">Recently Added</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="citations">Citation Count</option>
              </select>
            </label>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecentLiterature;
