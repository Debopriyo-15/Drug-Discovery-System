import React from 'react'
import './CompoundAnalysis.css'
import { FlaskConical ,  Play , SquareMenu , Microscope } from 'lucide-react';
const CompoundAnalysis = () => {
  return (
    <div>
      <div className="box1">
        <div className="head">
          <div>
            <h2>Compound Analysis</h2>
            <p>Enter compound name or SMILES string</p>
          </div>
          <div className="engine-ready">
            <Microscope size={17} />
            <p style={{ color: '#047857' }}>Engine Ready</p>
          </div>
          </div>
        <form>
          <div className="input_field">
            <FlaskConical style={{ marginLeft: '5px' }}  size={17} />
            <input type="text" placeholder="Enter compound name or SMILES string" />
          </div>
          <button type="submit"><Play color="white" size={17} /><p>Analyze</p></button>
        </form>
        <div className="quick_select">
          <p>Quick Select:</p>
          <button>Aspirin</button>
          <button>Ibuprofen</button>
          <button>Quercetin</button>
          <button>Curcumin</button>
        </div>
        <div className="analyzed_compounds">
          <div className='analyzed_compounds_heading'><SquareMenu size={17} /> <p>Analyzed Compounds</p></div>
          <div className="analyzed_compounds_list">
            <p>Aspirin</p>
            <p>Ibuprofen</p>
            <p>Quercetin</p>
            <p>Curcumin</p>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default CompoundAnalysis