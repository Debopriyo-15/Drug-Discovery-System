import { CircleCheck, ShieldCheck } from "lucide-react";

import aspirinImg from "../../assets/CHEMBL25.svg"

import "./Compound.css";

const Compound = () => {
  return (
    <div className="compound">
      <div className="title-container">
        <div className="title">
          <h2>Aspirin</h2>
          <h3>
            <p>Acetylsalicylic acid</p>
            <div className="indexed">
              <CircleCheck size={17} />
              <p>INDEXED</p>
            </div>
          </h3>
        </div>
      </div>

      <div className="compound-container">
        <div className="compound-item">
          <div className="compound-details">
            <div className="item">
              <div className="title-container">
                <div className="title">
                  <h3>Compound Information</h3>
                  <h2>Acetylsalicylic acid</h2>
                </div>
              </div>

              <div className="details">
                <div className="items">
                  <h3>SMILES</h3>
                  <span>CC(=O)Oc1ccccc1C(=O)O</span>
                </div>
                <div className="items">
                  <h3>INCHIKEY</h3>
                  <span>BSYNRYMUTXBXSQ-UHFFFAOYSA-N</span>
                </div>
                <div className="items cluster">
                  <div className="cluster-item">
                    <h3>MOLECULAR FORMULA</h3>
                    <span>C9H8O4</span>
                  </div>
                  <div className="cluster-item">
                    <h3>CHEMBL ID</h3>
                    <span>CHEMBL25</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="image">
              <img src={aspirinImg} alt="" />
            </div>
          </div>

          <div className="lipinski">
            <div className="title">
              <h2>Lipinski's Rule of 5</h2>
              <ShieldCheck size={18}/>
            </div>

            <div className="details">
              <div className="items">
                <h4>MW &le; 500 Da</h4>
                <div className="value">
                  <h4>180.16</h4>
                  <p>PASS</p>
                </div>
              </div>
              <div className="items">
                <h4>LogP &le; 5</h4>
                <div className="value">
                  <h4>1.31</h4>
                  <p>PASS</p>
                </div>
              </div>
              <div className="items">
                <h4>H-Bond Donors &le; 5</h4>
                <div className="value">
                  <h4>1</h4>
                  <p>PASS</p>
                </div>
              </div>
              <div className="items">
                <h4>H-Bond Acceptors &le; 10</h4>
                <div className="value">
                  <h4>4</h4>
                  <p>PASS</p>
                </div>
              </div>
            </div>

            <div className="overall">
              <CircleCheck color="#0649db" size={18}/>
              <div className="title">
                <h4>PASS - Drug-like</h4>
                <span>  
                  0 violations. Compound exhibits optimal physiochemical
                  properties for oral bioavailability.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="properties">
          <div className="title">
            <h3>PHYSIOCHEMICAL METRICS</h3>
          </div>

          <div className="details">
            <div className="items">
              <h3>MOLECUALR WEIGHT</h3>
              <h4>180.16</h4>
            </div>
            <div className="items">
              <h3>LOGP</h3>
              <h4>1.31</h4>
            </div>
            <div className="items">
              <h3>TPSA</h3>
              <h4>63.60</h4>
            </div>
            <div className="items">
              <h3>H-BOND DONORS</h3>
              <h4>1</h4>
            </div>
            <div className="items">
              <h3>H-BOND ACCEPTORS</h3>
              <h4>4</h4>
            </div>
            <div className="items">
              <h3>ROTATABLE BONDS</h3>
              <h4>2</h4>
            </div>
            <div className="items">
              <h3>HEAVY ATOM COUNT</h3>
              <h4>13</h4>
            </div>
            <div className="items">
              <h3>RING COUNT</h3>
              <h4>1</h4>
            </div>
            <div className="items">
              <h3>AROMATIC RING COUNT</h3>
              <h4>1</h4>
            </div>
            <div className="items">
              <h3>FORMAL CHARGE</h3>
              <h4>0</h4>
            </div>
            <div className="items">
              <h3>FRACTION CSP3</h3>
              <h4>0.11</h4>
            </div>
            <div className="items">
              <h3>QED</h3>
              <h4>0.55</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compound;
