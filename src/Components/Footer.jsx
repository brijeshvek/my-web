import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary">
        <div className="container-fulid row py-5  mx-5 mt-5 overflow-hidden">
          <div className="myDetails col-12 col-md-3">
            <h3 className="text-light">Brijesh Vekariya</h3>
            <p className="text-light">
              I am Front-end Developer and Web Designer. I have many Skills and
              Many Exprenece. I have many project Completed.
            </p>
          </div>
          <div className="col-12 col-md-3  ">
            <ul>
              <h5 className="text-light">
                  Skills
              </h5>
              <li>
                <Link to="/skill" className="text-light">
                  HTML
                </Link>
              </li>
              <li>
                <Link to="/skill" className="text-light">
                  CSS
                </Link>
              </li>
              <li>
                <Link to="/skill" className="text-light">
                  JAVA SCRIPT
                </Link>
              </li>
              <li>
                <Link to="/skill" className="text-light">
                  BOOTSTRAP
                </Link>
              </li>
              <li>
                <Link to="/skill" className="text-light">
                  jQUARY
                </Link>
              </li>
              <li>
                <Link to="/skill" className="text-light">
                  REACT JS
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 ">
            <ul>
              <h5 className="text-light">
                About
              </h5>
              <li>
                <Link to="https://wa.me/9737539533" className="text-light">
                  Contant
                </Link>
              </li>
              <li>
                <Link to="/skill" className="text-light">
                  Skill
                </Link>
              </li>
              <li>
                <a href="My Resume.pdf" className="text-light"
                  download="Brijesh Vekariya CV">
                  CV
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 ">
            <h4 className="text-light">Contant us</h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Someone Massege"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text bg-dark" id="basic-addon2">
                <a href="https://t.me/+Lnv_t3S-rz0xZGI1">
                  <img
                    src="https://img.icons8.com/?size=40&id=Eawzmcklku9D&format=png&color=000000"
                    alt=""
                  />
                </a>
                <img src="" alt="" />
              </span>
            </div>
          </div>
          <div className="container row my-5 ">
            <div className="col col-md-4">
              <hr className="text-light" />
            </div>
            <div className="col col-md-4 ">
              <ul className="d-flex ">
                <li className="mx-md-2">
                  <a href="https://x.com/BrijeshV2004">
                    <img
                      src="https://img.icons8.com/?size=40&id=fJp7hepMryiw&format=png&color=FFFFFF"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li className="mx-md-2">
                  <a href="https://www.instagram.com/_itsbrijeshcall_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img
                      src="https://img.icons8.com/?size=40&id=32292&format=png&color=FFFFFF"
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li className="mx-md-2">
                  <a href="https://github.com/brijeshvek">
                    <img
                      src="https://img.icons8.com/?size=40&id=12598&format=png&color=FFFFFF"
                      alt="Github"
                    />
                  </a>
                </li>
                <li className="mx-md-2">
                  <a href="https://www.facebook.com/brijesh.vekariya.7792?mibextid=ZbWKwL">
                    <img
                      src="https://img.icons8.com/?size=40&id=118468&format=png&color=FFFFFF"
                      alt="Fasebook"
                    />
                  </a>
                </li>
                <li className="mx-md-2">
                  <a href="https://t.me/+Lnv_t3S-rz0xZGI1">
                    <img
                      src="https://img.icons8.com/?size=40&id=TCnKnYZFoOzM&format=png&color=FFFFFF"
                      alt="Telegram"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-md-4">
              <hr className="text-light"/>
            </div>
          </div>
          <span className="text-center text-light">
            &copy;copyright by www.brijeshvekariya.com
          </span>
        </div>
      </footer>
    </>
  );
}
