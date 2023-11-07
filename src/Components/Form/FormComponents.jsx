import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Work Email
              </label>
              <input
                type="email"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Website URL
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="btn-button-form">
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill"
              >
                Schedule a Demo
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq">
              <h1>FAQS</h1>
              {/* Add your FAQ content here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
