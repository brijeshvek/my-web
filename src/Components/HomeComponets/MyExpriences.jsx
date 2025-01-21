import React from "react";

export default function MyExpriences() {
  return (
    <>
      <section className="section-5"  style={{margin:"15rem 0px"}}>
        <div className="container">
          <h3 className="text-light"  style={{fontSize:"50px",margin:"5rem 0px"}}>Exprience</h3>
          <div className="row" style={{ margin: "70px 47px" }}>
            <div className=" row col-2 col-md-1">
              <div className="circle col-6 col-md-6 bg-dark">
                <div className="line"></div>
              </div>
            </div>
            <div className=" col-11 col-md-11 mx-5 mx-md-5 my-1 my-md-5 ">
              <h3 className="text-light fs-1">TOPS Technology</h3>
              <p className="mytext text-light text-break fs-5">
                I have 1 year of experience in Front-End Developer/ Web Designing Course. I have experience in Html, CSS, Js, Jquery, React Js, Bootstrap, etc.
              </p>
            </div>
          </div>
          <div className="row" style={{ margin: "70px 47px" }}>
            <div className=" row col-2 col-md-1">
              <div className="circle col-6 col-md-6 bg-dark">
                <div className="line"></div>
              </div>
            </div>
            <div className="col-11 col-md-11 mx-5 mx-md-1 my-1 my-md-5">
              <h3 className="text-light fs-1">IntersElite</h3>
              <p className="mytext text-light text-break fs-5">
              I have 3 months experience of experience of web development course. I have experience in Html, CSS, Js, Jquary, Bootstrap, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
