import React, { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout title={"Minnathullah's Portfolio - About Me"}>
      <div className="container" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="row g-4">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src="images/myPic.png" alt="profile" className="img-fluid" />
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <p className="fs-3 fw-semibold text-info">Introduction</p>
              <div className="container">
                <p>
                  Hello! I am{" "}
                  <b className="text-lightgreen">Mohammed Minnathullah</b> -
                  MERN Full Stack{" "}
                  <b className="text-lightgreen">Web Developer</b>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <p className="fs-3 fw-semibold text-info text-center my-4 border-bottom">
              Education and Certifications
            </p>

            <div className="row g-4">
              <div className="col-md-8 d-flex justify-content-center align-items-center">
                <ul>
                  <li>
                    <span className="text-lightgreen">
                      Bachelor of Technology
                    </span>
                    ,{" "}
                    <span className="text-warning">
                      Electrical & Electronics Engineering
                    </span>{" "}
                    - Jawaharlal Nehru Technological University Hyderabad
                    (JNTUH).
                    <span className="text-gray"> (2019-2022.)</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img
                  src="images/jntuh.png"
                  alt="profile"
                  className="img-fluid"
                />
              </div>

              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img
                  src="images/mcet.png"
                  alt="profile"
                  className="img-fluid"
                />
              </div>

              <div className="col-md-8 d-flex justify-content-center align-items-center">
                <ul>
                  <li>
                    <span className="text-lightgreen">Diploma</span> in{" "}
                    <span className="text-warning">
                      Electrical & Electronics Engineering
                    </span>{" "}
                    - Government Polytechnic, Cherial.{" "}
                    <span className="text-gray">(2016-2019)</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-8 d-flex justify-content-center align-items-center">
                <ul>
                  <li>
                    <span className="text-lightgreen">Diploma</span> in{" "}
                    <span className="text-warning">
                      Electrical & Electronics Engineering
                    </span>{" "}
                    - Government Polythechnic, Cherial.{" "}
                    <span className="text-gray">(2016-2019)</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img
                  src="images/edureka.png"
                  alt="profile"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <p className="fs-3 fw-semibold text-info mt-4 border-bottom text-center">
              My Story
            </p>

            <p className="container">
              From Aspiring{" "}
              <span className="text-warning">Electrical Engineer</span> to
              trying pursue a professional career in{" "}
              <span className="text-warning">Cricket</span> : My Journey into{" "}
              <span className="text-warning">Web Development</span>.
            </p>
          </div>

          <div className="col-md-6">
            <p className="fs-3 fw-semibold text-info my-4 border-bottom text-center">
              Skills & Expertise
            </p>
            <b>Skills: </b>
            <div className="d-flex">
            <ul className="text-warning">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.Js</li>
              <li>Express.js</li>
              <li>Mongodb</li>
            </ul>
            <ul className="text-warning">
              <li>React.js</li>
              <li>Redux</li>
              <li>Redux-Toolkit</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul></div>
          </div>

          <div className="col-md-6">
            <p className="fs-3 fw-semibold text-info mt-4 border-bottom text-center">
              Achievements and Awards
            </p>

            <p className="container">
              Recipient of the{" "}
              <span className="text-lightgreen">'Best Urdu Student'</span> Award
              from the{" "}
              <span className="text-warning">Government of Telangana </span>
              <span className="text-gray">2016</span>.
            </p>
          </div>

          <div className="col-md-6">
            <p className="fs-3 fw-semibold text-info mt-4 border-bottom text-center">
              My Approach or Philosophy
            </p>
            <p className="container">
              Clean Code and efficient code organisation for Seamless
              Experiences.
            </p>
          </div>

          <div className="col-md-6">
            <p className="fs-3 fw-semibold text-info mt-4 border-bottom text-center">
              Hobbies and Interests
            </p>
            <p className="container">
              Beyond Coding : <span className="text-lightgreen">Cricket</span>{" "}
              (Playing & Watching), Learning things related to{" "}
              <span className="text-lightgreen">electrical power</span>.
            </p>
          </div>

          <div className="col-md-6">
            <p className="fs-3 fw-semibold text-info mt-4 border-bottom text-center">
              Contact Information
            </p>
            <div className="container">
              <p>
                Ready to Collaborate? Let's build something amazing together!
              </p>
              <Link to={"/contact"} className="btn btn-info fw-semibold w-25">
                CTA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
