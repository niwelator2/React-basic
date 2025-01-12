import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SimplePage = () => {
  return (
    <div className="container mt-5">
      <h2>Grid Layout Example</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="p-3 border bg-light">Column 1</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border bg-light">Column 2</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border bg-light">Column 3</div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="p-3 border bg-light">Column 1 (50%)</div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border bg-light">Column 2 (50%)</div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <div className="p-3 border bg-light">Column 1 (25%)</div>
        </div>
        <div className="col-md-9">
          <div className="p-3 border bg-light">Column 2 (75%)</div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
