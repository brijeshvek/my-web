import React from "react";

export default function MyPortfolio() {
  return (
    <>
      <section className="section-4 " style={{margin:"15rem 0px"}}>
        <div className="container">
          <h1 className="text-light text-center" style={{fontSize:"50px",margin:"6rem 0px"}}>Portofolio</h1>
          <div className="row d-flex justify-contant-center mx-5 my-5">
            <div className="card col-6 col-md-4 bg-dark border border-2 p-2 mx-4 my-4" style={{ width: "18rem" }}>
              <img src="portfolio1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-light text-center ">My News</h5>
                <p className="card-text text-light">
                  This website is all news read website and free available. This
                  website is all Country in available.
                </p>
                <button className="btn btn-primary d-flex justify-contant-center mx-4 px-4 text-center">
                  <a href="https://github.com/brijeshvek/My_News.git" target="_blank" rel="noreferrer" className=" text-center text-light nav-link">Show This Website</a>
                </button>
              </div>
            </div>
            <div className="card col-6 col-md-4 bg-dark border border-2 p-2 mx-4 my-4" style={{ width: "18rem" }}>
              <img src="Protfolio2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-light text-center ">Musicology Classes</h5>
                <p className="card-text text-light">
                 This website Musicolgy classes. This Classes Learning all the Dance.
                </p>
                <button className="btn btn-primary d-flex justify-contant-center mx-4 px-4 text-center">
                  <a href="https://musicologyclasses.netlify.app/" target="_blank" rel="noreferrer" className="text-center text-light nav-link">Show This Website</a>
                </button>
              </div>
            </div>
            {/* <div className="card col-6 col-md-4 bg-dark border border-2 p-2 mx-4 my-4" style={{ width: "18rem" }}>
              <img src="portfolio1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-light text-center ">My News</h5>
                <p className="card-text text-light">
                  This website is all news read website and free available. This
                  website all Country in available.
                </p>
                <button className="btn btn-primary d-flex justify-contant-center mx-4 px-4 text-center">
                  <a href="https://github.com/brijeshvek/My_News.git" className=" text-center text-light nav-link">Show This Website</a>
                </button>
              </div>
            </div>
            <div className="card col-6 col-md-4 bg-dark border border-2 p-2 mx-4 my-4" style={{ width: "18rem" }}>
              <img src="portfolio1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-light text-center ">My News</h5>
                <p className="card-text text-light">
                  This website is all news read website and free available. This
                  website all Country in available.
                </p>
                <button className="btn btn-primary d-flex justify-contant-center mx-4 px-4 text-center">
                  <a href="https://github.com/brijeshvek/My_News.git" className=" text-center text-light nav-link">Show This Website</a>
                </button>
              </div>
            </div>
            <div className="card col-6 col-md-4 bg-dark border border-2 p-2 mx-4 my-4" style={{ width: "18rem" }}>
              <img src="portfolio1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-light text-center ">My News</h5>
                <p className="card-text text-light">
                  This website is all news read website and free available. This
                  website all Country in available.
                </p>
                <button className="btn btn-primary d-flex justify-contant-center mx-4 px-4 text-center">
                  <a href="https://github.com/brijeshvek/My_News.git" className=" text-center text-light nav-link">Show This Website</a>
                </button>
              </div>
            </div>
            <div className="card col-6 col-md-4 bg-dark border border-2 p-2 mx-4 my-4" style={{ width: "18rem" }}>
              <img src="portfolio1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-light text-center ">My News</h5>
                <p className="card-text text-light">
                  This website is all news read website and free available. This
                  website all Country in available.
                </p>
                <button className="btn btn-primary d-flex justify-contant-center mx-4 px-4 text-center">
                  <a href="https://github.com/brijeshvek/My_News.git" className=" text-center text-light nav-link">Show This Website</a>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
