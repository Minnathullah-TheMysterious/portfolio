import React from "react";
import Layout from "../components/layouts/Layout";
import "../styles/home.css";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <Layout title={"Minnathullah's Portfolio - Home"}>
      <div className="intro">
        <Intro />
      </div>
      <div className="container">
        <hr />
        <h2 className="m-4 fw-semibold">Qualification</h2>
        <div className="d-flex justify-content-center align-items-center my-4">
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
                Passed with First Class | CGPA : 6.82
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="m-4 fw-semibold">Courses</h2>
        <div className="d-flex justify-content-center align-items-center my-4">
          <div>
            <div className="text-info fs-3">
              Full Stack Web Development{" "}
              <span className="text-gray fs-6">from</span>{" "}
              <span className="text-lightgreen">Edureka!</span>
            </div>
            <p className="text-gray d-flex justify-content-end">
              MAR 2023 - JUN 2023
            </p>
          </div>
        </div>
        <hr />
        <h2 className="m-4 fw-semibold">Technical Skills</h2>
        <div className="row fs-5 text-info mx-4">
          <div className="col-md-3">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>NodeJs</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>Mongoose</li>
              <li>Mongodb</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>React</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <hr />
        <h2 className="m-4 fw-semibold">Skills</h2>
        <div className="row fs-5 text-info mx-4">
          <div className="col-md-4">
            <ul>
              <li>Decision Making</li>
              <li>Calm Under Pressure</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Basic Math</li>
              <li>Teamwork and Collaboration</li>
              <li>Leadership</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Computer Skills</li>
              <li>Problem Resolution</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
        <hr />
        <h2 className="m-4 fw-semibold">Languages</h2>
        <div className="row fs-5 text-info mx-4">
          <div className="col-md-6">
            <div>
              Urdu : <span className="text-gray">First Language</span>
            </div>
            <div>
              Hindi : <span className="text-gray">Native Speaker</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              English : <span className="text-gray">Intermediate</span>
            </div>
            <div className="">
              Telugu : <span className="text-gray">Elementary</span>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="m-4 fw-semibold">Hobies</h2>
        <div className="container">
          <ul className=" mx-4">
            <li className="text-info fs-5">Playing & Watching Cricket</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
