
import { Plus,ExternalLink,Search } from "lucide-react";

const papers = [
  {
    journal: "J. Biol. Chem.",
    year: "2016",
    pmid: "25164478",
    title: "Mechanism of Action of Aspirin and Other Non-Steroidal Anti-Inflammatory Drugs",
    authors: ["Author list available in Europe PMC"],
    keywords: ["PTGS1 (COX-1)", "PTGS2 (COX-2)", "Aspirin", "Salicylate"],
  },
  {
    journal: "J. Med. Chem.",
    year: "2023",
    pmid: "37829104",
    title: "Structure-Guided Design and Synthesis of Biphenyl-Based Selective COX-2 Inhibitors",
    authors: ["Author list available in Europe PMC"],
    keywords: ["PTGS2 (Selective)", "Celecoxib", "SC-558"],
  },
];

import "./RecentLiterature.css";

const RecentLiterature = () => {
  return (
    <main className="recent-literature">
      {/* 1st section tag */}

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

      {/* 2nd section tag */}
      <section
        className="recent-literature-papers"
        aria-label="Literature papers"
      >
        {papers.map((paper) => {
          const paperUrl = `https://europepmc.org/article/MED/${paper.pmid}`;

          return (
            <article className="literature-paper" key={paper.pmid}>
              <div className="literature-paper-content">
                <div className="literature-paper-meta">
                  <strong>{paper.journal}</strong>
                  <span className="paper-meta-separator">•</span>
                  <span>{paper.year}</span>
                  <span className="paper-meta-separator">•</span>
                  <span className="paper-pmid">PMID {paper.pmid}</span>
                  <span className="paper-grounded">
                    <i />
                    Grounded
                  </span>
                </div>

                <h2 className="literature-paper-title">{paper.title}</h2>

                <div>
                  <div className="paper-detail-row">
                    <span className="paper-detail-label">Authors:</span>
                    <div className="paper-tags">
                      {paper.authors.map((author) => (
                        <span className="paper-tag paper-author" key={author}>
                          {author}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="paper-detail-row">
                    <span className="paper-detail-label">Keywords:</span>
                    <div className="paper-tags">
                      {paper.keywords.map((keyword) => (
                        <span className="paper-tag" key={keyword}>
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              <div className="literature-paper-actions">
                <a
                  className="paper-europe-pmc"
                  href={paperUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={12} />
                  Europe PMC
                </a>
                <a
                  className="paper-view-button"
                  href={paperUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Papers
                  <ExternalLink size={12} />
                </a>
              </div>
            </article>
          );
        })}
      </section>

    </main>
  );
};

export default RecentLiterature;
