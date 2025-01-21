import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky-top">
      <nav className="navbar bg-secondary navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/home">
            <img
              src="Mylogo.png"
              alt="logo"
              style={{ width: "50px" }}
              className="mx-3"
            />
            Brijesh Vekariya
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link text-light text-center fs-4" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light text-center fs-4" to="/skill">
                  Skill
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light text-center fs-4"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light text-center fs-4" to="https://wa.me/9737539533">
                  Contant
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-light align-items-center"
              >
                <a
                  className="nav-link"
                  href="My Resume.pdf"
                  download="Brijesh Vekariya CV"
                >
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
