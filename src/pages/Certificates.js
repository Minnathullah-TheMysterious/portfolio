import React, { useEffect } from "react";
import Layout from "../components/layouts/Layout";

const Certificates = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout title={"Minnathullah's Portfolio - Certifications"}>
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1 className="text-center fw-semibold">Certifications</h1>
        <div className="row">
          <div className="col-sm-6 col-12 my-4 g-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">Bachelor's Degree</h4>
              <img
                src="/certificates/BTech_OD.jpg"
                alt="B-Tech Original Degree"
                className="img-fluid"
                height={"80%"}
                width={"80%"}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">Diploma</h4>
              <img
                src="/certificates/Diploma_PC.jpeg"
                alt="Diploma Provisional Certificate"
                className="img-fluid"
                height={"80%"}
                width={"80%"}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">
                Industrial Training (Diploma)
              </h4>
              <img
                src="/certificates/ECIL_Certificate.jpeg"
                alt="ECIL Training Certificate"
                className="img-fluid"
                height={"80%"}
                width={"80%"}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">SSC</h4>
              <img
                src="/certificates/SSC_Memo.jpeg"
                alt="SSC Provisional Certificate"
                className="img-fluid"
                height={"80%"}
                width={"80%"}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">
                Full Stack Web Development
              </h4>
              <img
                src="/certificates/edureka_certificate.jpg"
                alt="Full Stack Web Development Certificate"
                className="img-fluid"
                height={"90%"}
                width={"90%"}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">
                Module 1 (HTML, CSS, Bootstrap)
              </h4>
              <img
                src="/certificates/edureka_module1.jpg"
                alt="Full Stack Web Development Certificate - HTML, CSS, Bootstrap"
                className="img-fluid"
                height={"90%"}
                width={"90%"}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">Module 2 (Javascript)</h4>
              <img
                src="/certificates/edureka_module2.jpg"
                alt="Full Stack Web Development Certificate - Javascript"
                className="img-fluid"
                height={"90%"}
                width={"90%"}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">
                Module 3 (Node.js, Express.js, MongoDB)
              </h4>
              <img
                src="/certificates/edureka_module3.jpg"
                alt="Full Stack Web Development Certificate - Node, Express, MongoDB"
                height={"90%"}
                width={"90%"}
                style={{ overflow: "hidden" }}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 my-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info fw-semibold">Module 4 (React.js)</h4>
              <img
                src="/certificates/edureka_module4.jpg"
                alt="Full Stack Web Development Certificate - React"
                className="img-fluid"
                height={"90%"}
                width={"90%"}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificates;
