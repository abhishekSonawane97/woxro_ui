import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <img src="https://woxro.com/public/assets/png/woxrologo.png" alt="" />
      </div>

      <nav
        className="navbar navbar-expand-lg bg-dark sticky-top bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://woxro.com/aboutus"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://woxro.com/service"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://woxro.com/technology"
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://woxro.com/careers"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://woxro.com/blog"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://woxro.com/ourworks"
                >
                  Our Works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://woxro.com/contactus"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ border: "1px solid white" }}></div>
    </>
  );
};

export default Navbar;
