import React, { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout title={"Minnathullah's Portfolio - Services"}>
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1 className="text-center text-paleblue fw-bold">
          Services - Full-Stack Web Development
        </h1>
        <h3 className="text-center mb-4">
          Building Seamless Web Solutions for Your Business
        </h3>
        <div className="row g-4">
          <div className="col-md-6">
            <img src="images/developer.png" alt="..." className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img src="images/developer2.png" alt="..." className="img-fluid" />
          </div>
        </div>
        <h4 className="my-4 text-info fw-semibold">Service Categories</h4>
        <div className="container">
          <ul>
            <li>
              <h5>Web Development Services</h5>
            </li>
            <li>
              <h5>E-commerce Solutions</h5>
            </li>{" "}
          </ul>
        </div>
        <h4 className=" text-info fw-semibold text-center my-4 border-bottom">
          Service Sections
        </h4>
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="fw-semibold">Web Development Services</h5>
            <ul>
              <li>
                <b>Service Title : </b>Custom Web Development
              </li>
              <li>
                <b>Service Description : </b> Develop and deploy custom web
                applications tailored to your specific business needs. From MVPs
                to fully-featured web platforms, I bring your ideas to life with
                clean and scalable code.
              </li>
              <li>
                <b>Benefits : </b> Improved workflow, enhanced user experience,
                and higher customer engagement.
              </li>
              <li>
                <b>Technologies/Skills Used : </b>MERN stack (MongoDB/MySQL,
                Express.js, React.js, Node.js), RESTful APIs, TypeScript, JavaScript ES6+,
                HTML5, CSS3.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="fw-semibold"> E-commerce Solutions</h5>
            <ul>
              <li>
                <b>Service Title : </b>E-commerce Website Development
              </li>
              <li>
                <b>Service Description : </b>Build secure and scalable
                e-commerce websites to help you reach a wider audience and drive
                online sales. Integrating payment gateways and inventory
                management systems for a seamless shopping experience.
              </li>
              <li>
                <b>Benefits : </b>Increased revenue, simplified inventory
                management, and personalized customer experiences.
              </li>
              <li>
                <b>Technologies/Skills Used : </b>MERN stack, Payment Gateway
                Integration, E-commerce Platforms (WooCommerce, Shopify).
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-info fw-semibold my-4 border-bottom text-center">
              Call-to-Action (CTA)
            </h5>
            <ul>
              <li>
                Ready to Empower Your Business with a Cutting-Edge Web Solution
              </li>
              <div className="d-flex justify-content-center">
                <Link
                  to={"/contact"}
                  className="btn btn-info my-4 w-50 fw-bold fs-6 "
                >
                  CTA
                </Link>
              </div>
            </ul>
          </div>
          <div className="col-md-8">
            <h5 className="text-info fw-semibold my-4 border-bottom text-center">
              {" "}
              Process and Workflow
            </h5>
            <ul>
              <li>
                <p>
                  <b>Discovery Phase: </b>Understanding your project
                  requirements, target audience, and business goals.
                </p>
              </li>
              <li>
                <p>
                  <b>Design and Planning: </b>Creating wire frames, prototypes,
                  and outlining the project scope.
                </p>
              </li>
              <li>
                <p>
                  <b>Development: </b>Implementing the design and coding the
                  application using the MERN stack.
                </p>
              </li>
              <li>
                <p>
                  <b>Testing and Quality Assurance: </b>Conducting thorough
                  testing to ensure a bug-free application.
                </p>
              </li>
              <li>
                <p>
                  <b>Deployment and Support: </b>Deploying the application and
                  providing post-launch support.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="text-info fw-semibold my-4 border-bottom text-center">
              FAQs
            </h5>
            <ul>
              <li>
                <p>Q : What is the MERN stack?</p>
                <ul>
                  <li>
                    <p className="text-gray">
                      A : The MERN stack is a collection of technologies used
                      for full-stack web development, including MongoDB,
                      Express.js, React.js, and Node.js.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Q : Do you provide ongoing maintenance and support?</p>{" "}
                <ul>
                  <li>
                    <p className="text-gray">
                      A : Yes, I offer ongoing support and maintenance packages
                      to ensure your web application remains secure and
                      up-to-date.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div>
              <h5 className="text-info fw-semibold my-4 border-bottom text-center">
                Contact Information
              </h5>
              <div className="container">
                <p>
                  email :{" "}
                  <Link
                    to="mailto:minnathullahmohammed@gmail.com"
                    className="text-decoration-none text-lightgreen"
                  >
                    minnathullahmohammed@gmail.com
                  </Link>
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to={"/contact"}
                    className="btn btn-info fw-semibold fs-6 w-50"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
