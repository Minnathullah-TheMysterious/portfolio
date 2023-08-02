import React from "react";
import Layout from "../components/layouts/Layout";

const Education = () => {
  return (
    <Layout title={"Minnathullah's Portfolio - Education"}>
      <div className="qualification">
        <h2 className="mx-4 text-center fw-semibold">
          Education & Qualification
        </h2>
        <div className="container my-4">
          {/* Degree */}

          <ul className="my-4">
            <li className="list-disc">
              <h4 className="fw-semibold">Degree</h4>
            </li>
          </ul>
          <div className="row g-4 my-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <p className="fs-4 text-info">
                  Bachelor of Technology : Electrical & Electronics Enginnering
                </p>
                <div>
                  <span className="fs-5">
                    Medak College of Engineering & Technology.{" "}
                  </span>
                  <span className="text-gray">
                    Kondapak (502372), Siddipet, Telangana State, India.
                  </span>
                </div>
                <div>
                  <span className="text-gray">Affiliated to </span>
                  <span className="fs-4 text-info">
                    Jawaharlal Nehru Technological University (JNTU), Hyderabad
                  </span>
                </div>
                <div className="d-flex align-items-end flex-column">
                  <div className="text-gray">JUN 2019 - JUL 2022</div>
                  <div className="text-lightgreen">
                    {" "}
                    Graduated with First Class | CGPA : 6.82
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img-thumbnail img-fluid"
                src="images/deg.jpg"
                alt="OD"
              />
            </div>
          </div>
          <hr />
          {/* Diploma */}

          <ul className="my-4">
            <li className="list-disc">
              <h4 className="fw-semibold">Diploma</h4>
            </li>
          </ul>
          <div className="row g-4 my-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <p className="fs-4 text-info">
                  Diploma : Electrical & Electronics Enginnering
                </p>
                <div>
                  <span className="fs-4 text-info">
                    Government Polytechnic Cherial.{" "}
                  </span>
                  <span className="text-gray">
                    Cherial (506223), Siddipet, Telangana State, India.
                  </span>
                </div>
                <div>
                  <span className="text-gray">Under </span>
                  <span className="fs-5">
                    Telangana State, State Board of Technical Education &
                    Training (TS SBTET),
                  </span>
                </div>
                <div className="d-flex align-items-end flex-column">
                  <div className="text-gray">JUN 2016 - APR 2019</div>
                  <div className="text-lightgreen">
                    {" "}
                    First Class with Distinction | Aggregate Percentage : 88.42
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="images/dip.jpg"
                alt="Diploma Memo"
                className="img-thumbnail img-fluid"
              />
            </div>
          </div>
          <hr />
          {/* School */}

          <ul className="my-4">
            <li className="list-disc">
              <h4 className="fw-semibold">Secondary School</h4>
            </li>
          </ul>
          <div className="row g-4 my-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <div className="fs-4 text-info">
                  Zilla Praja Parishad Secondary School (ZPPSS) Maddur.{" "}
                  <span className="fs-6 text-gray">
                    Maddur (506367), Siddipet, Telangana State, India.
                  </span>
                </div>

                <div className="d-flex align-items-end flex-column">
                  <div className="text-gray">MAR 2016</div>
                  <div className="text-lightgreen"> CGPA : 9.2</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="images/ssc.jpg"
                alt="SSC Memo"
                className="img-thumbnail img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
