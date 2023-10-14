import React, { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout title={"Minnathullah's Portfolio - Contact Me"}>
      <div style={{ marginTop: "70px", marginBottom: '100px' }}>
        <div className="container">
          <div className="row g-4 my-4">
            <div className="col-md-6 d-flex justify-content-cneter align-items-center">
              <img
                src="images/contact.png"
                alt="Contact"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h2 className=" fw-semibold">
                  Don't be a stranger just say hello!
                </h2>
                <p className="text-gray">
                  Thankyou for visiting here. Please contact me through
                </p>
                <p>
                  <FiMail className="fs-5" /> Email :{" "}
                  <span className="text-info fs-6">
                    minnathullahmohammed@gmail.com
                  </span>
                </p>
                <p>
                  <span>
                    <BsWhatsapp className="fs-5" /> Whatsapp :{" "}
                    <span className="text-info fs-5">+91-9652336445</span>
                  </span>
                </p>
                <p>
                  <span>
                    <BiPhone className="fs-5" /> Phone :{" "}
                    <span className="text-info fs-5">+91-6281089096</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
