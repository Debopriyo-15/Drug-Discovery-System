import {
  Brackets,
  CheckSquare,
  Circle,
  Filter,
  Search,
  X,
  ListOrdered,
  ArrowDownCircle,
  Microscope,
  Sparkles,
  Brain,
  ScrollText,
  BookOpenText,
  Cpu,
  MessageSquareText,
  Link2,
  SendHorizontal,
} from 'lucide-react';
import { useState } from 'react';
import './LiteratureRetrieval.css';

const queryPresets = [
  'Aspirin COX-1',
  'Cancer Immunotherapy PD-L1',
  'EGFR T790M Resistance',
  'KRAS G12D Scaffolds',
  'Ibuprofen vs Acetaminophen',
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
              Retrieve literature, compute semantic chunk embeddings,
              and inspect citation-grounded evidence. Connected to Europe PMC.
            </p>
          </div>

          <div className="engine-ready">
            <ScrollText size={17} />
            <span>Engine Ready</span>
          </div>
        </div>

        <form className="analysis-form literature-form">
          <div className="compound-input literature-input">
            <Search size={18} />
            <input
              type="text"
              placeholder="Aspirin platelet aggregation and COX-1 inhibition"
            />
            <button type="button" className="clear-input">
              <X size={17} />
            </button>
          </div>

          <div className="max-papers-box" aria-label="Maximum papers selector">
            <ListOrdered size={16} />
            <div className="max-papers-meta">
              <span className="meta-label">MAX PAPERS</span>
              <input className="meta-value" 
                type="number"
                min="1"
                placeholder="100"
              />
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
          <div className="literature-pipeline-row">
            <span className="pipeline-label">
              <Circle size={8} fill="currentColor" /> PIPELINE:
            </span>
            <span className="pipeline-metric">
              <BookOpenText size={14} /> 24 Papers Retrieved                
            </span>
            <span className="pipeline-metric">
              <CheckSquare size={14} /> 18 Newly Indexed
            </span>
            <span className="pipeline-metric">
              <Filter size={14} /> 6 Duplicates Filtered
            </span>
            <span className="pipeline-metric pipeline-chunks">
              <Brackets size={14} /> 412 Chunks Added
            </span>
          </div>
        </div>

        <div className="vector-row literature-vector-row">
          <span className="vector-item">
            <Cpu size={13} style={{color: "0649db"}}/> Qdrant HNSW-Dense
          </span>
          <span className="vector-separator">•</span>
          <span className="vector-item">Metric : Cosine</span>
          <span className="vector-separator">•</span>
          <label className="vector-item k-value">
            Top k papers :
            <input
              type="number"
              min="1"
              placeholder="5"
            />
          </label>
        </div>
      </section>
    </main>
  );
};

export default LiteratureRetrieval;