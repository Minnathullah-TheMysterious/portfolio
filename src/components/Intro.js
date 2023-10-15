import React from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Intro = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="card my-4" style={{ backgroundColor: "rgb(6, 1, 46)" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src="/images/myPic.png"
              className="img-fluid rounded-start"
              alt="profile"
            />
          </div>
          <div className="col-md-8 d-flex justify-content-center align-items-center">
            <div className="card-body">
              <p className="card-text fs-1 text-light">
                Hi, My name is{" "}
                <span className="text-info">Mohammed Minnathullah</span>
                <div>And I am a passionate</div>
                {/* Element to contain animated typing*/}
                <span ref={el} className="text-info" />
              </p>
              <div className="d-flex align-items-center">
                <a href="/images/resume.pdf" download="minnathullah-resume.pdf">
                  <button className="btn btn-success fs-5 mx-2">
                    Download Resume
                  </button>
                </a>
                <button className="btn btn-success fs-5 mx-2">
                  <Link
                    to={"https://github.com/Minnathullah-TheMysterious"}
                    target="_blank"
                    className="text-light text-decoration-none"
                  >
                    Visit Github
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
