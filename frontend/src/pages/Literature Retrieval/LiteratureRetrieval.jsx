import React from 'react';
import {
  BookOpenText,
  Search,
  X,
  ListOrdered,
  ArrowDownCircle,
  Microscope,
  Sparkles,
  Brain,
  MessageSquareText,
  Link2,
  SendHorizontal,
} from 'lucide-react';
import './LiteratureRetrieval.css';

const queryPresets = [
  'Aspirin COX-1',
  'Cancer Immunotherapy PD-L1',
  'EGFR T790M Resistance',
  'KRAS G12D Scaffolds',
  'Ibuprofen vs Acetaminophen',
];

const pipelineChecks = [
  '24 Papers Retrieved',
  '18 Newly Indexed',
  '6 Duplicates Filtered',
  '412 Chunks Added',
];

const LiteratureRetrieval = () => {
  return (
    <main className="compound-analysis literature-analysis">
      <section className="compound-card literature-card">
        <div className="compound-header">
          <div>
            <div className="route">
              <span>LITERATURE DISCOVERY</span>
              <span>/</span>
              <strong>RETRIEVAL</strong>
            </div>
            <h1>Literature Acquisition &amp; Semantic RAG Engine</h1>
            <p>
              Retrieve peer-reviewed literature, compute semantic chunk embeddings,
              and inspect citation-grounded evidence. Connected to Europe PMC,
              PubMed &amp; Qdrant Vector Store (38.4M papers indexed).
            </p>
          </div>

          <div className="engine-ready">
            <Microscope size={17} />
            <span>Engine Ready</span>
          </div>
        </div>

        <form className="analysis-form literature-form">
          <div className="compound-input literature-input">
            <Search size={18} />
            <input
              type="text"
              value="Aspirin platelet aggregation and COX-1 inhibition"
              readOnly
            />
            <button type="button" className="clear-input">
              <X size={17} />
            </button>
          </div>

          <div className="max-papers-box" aria-label="Maximum papers selector">
            <ListOrdered size={16} />
            <div className="max-papers-meta">
              <span className="meta-label">MAX PAPERS</span>
              <span className="meta-value">25</span>
            </div>
          </div>

          <button type="submit" className="run-analysis fetch-button">
            <ArrowDownCircle size={17} />
            <span>Fetch Papers</span>
          </button>
        </form>

        <div className="quick-samples literature-presets">
          <span className="quick-samples-label">Query Presets:</span>
          {queryPresets.map((preset) => (
            <button key={preset} type="button" className="sample">
              {preset}
            </button>
          ))}
        </div>

        <div className="analyzed-compounds literature-pipeline">
          <div className="analyzed-compounds-heading">
            <span>
              <Brain size={16} /> Pipeline
            </span>
           
          </div>

          <div className="analyzed-compounds-list literature-checks">
            {pipelineChecks.map((check) => (
              <button key={check} type="button" className="queue-item literature-status-pill">
                
                {check}
              </button>
            ))}
          </div>
        </div>

        <div className="vector-row literature-vector-row">
          <span className="vector-item">
            <BookOpenText size={14} /> Qdrant HNSW-Dense
          </span>
          <span className="vector-separator">•</span>
          <span className="vector-item">Metric: Cosine</span>
          <span className="vector-separator">•</span>
          <span className="vector-item">k=8</span>
        </div>
      </section>
    </main>
  );
};

export default LiteratureRetrieval;