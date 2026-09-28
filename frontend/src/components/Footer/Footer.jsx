import {
  FlaskConical,
  CircleAlert,
  Atom,
  Waypoints,
  Dna,
  BookOpenText,
  Shapes,
  Pill,
  PillBottle,
  TriangleAlert,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="title-sources">
        <div className="title-container">
          <div className="title">
            <FlaskConical className="flask" />
            <h2>Drug Discovery AI</h2>
            <h3>v1.0</h3>
          </div>

          <div className="description">
            <p>
              An AI-assisted research platform that combines scientific
              literature retrieval, biomedical databases, molecular analysis,
              and knowledge-graph reasoning to support early-stage drug
              discovery.
            </p>
          </div>
        </div>

        <div className="sources-container">
          <div className="sources">
            <h4>CHEMICAL INDICES</h4>
            <a
              href="https://www.ebi.ac.uk/chembl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <Atom className="icons" />
                <h5>ChEMBL :</h5>
              </div>
              <p>Bioactivity Data</p>
            </a>
            <a
              href="https://www.ebi.ac.uk/unichem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <Waypoints className="icons" />
                <h5>UniChem :</h5>
              </div>
              <p>Compound Mapping</p>
            </a>
            <a
              href="https://www.uniprot.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <Dna className="icons" />
                <h5>UniProt :</h5>
              </div>
              <p>Protein Data</p>
            </a>
          </div>

          <div className="sources">
            <h4>EVIDENCE & CLINICAL</h4>
            <a
              href="https://europepmc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <BookOpenText className="icons" />
                <h5>Europe PMC :</h5>
              </div>
              <p>Biomedical Literature</p>
            </a>
            <a
              href="https://www.nlm.nih.gov/mesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <Shapes className="icons" />
                <h5>MeSH :</h5>
              </div>
              <p>Biomedical Terms</p>
            </a>
          </div>

          <div className="sources">
            <h4>SAFETY & THERAPEUTICS</h4>
            <a
              href="https://sideeffects.embl.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <TriangleAlert className="icons" />
                <h5>SIDER :</h5>
              </div>
              <p>Adverse Effects</p>
            </a>
            <a
              href="https://www.nlm.nih.gov/research/umls/rxnorm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <Pill className="icons" />
                <h5>RxNorm :</h5>
              </div>
              <p>Drug Names</p>
            </a>
            <a
              href="https://lhncbc.nlm.nih.gov/RxNav/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="source-label">
                <PillBottle className="icons" />
                <h5>RxClass :</h5>
              </div>
              <p>Drug Classes</p>
            </a>
          </div>
        </div>
      </div>

      <div className="notice-copyright">
        <div className="notice">
          <CircleAlert className="icon" />
          <p>
            Data and literature are retrieved from third-party scientific
            databases and remain the property of their respective providers.
            Results are computational and informational only. Always consult the
            original source records.
          </p>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Drug Discovery AI. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
