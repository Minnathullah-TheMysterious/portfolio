import React, { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout title={"Minnathullah's Portfolio - Projects"}>
      <div
        className="container"
        style={{ marginTop: "80px", marginBottom: "80px" }}
      >
        <h1 className="text-center fw-semibold">Projects</h1>
        <div className="row g-4">
          {/* WristWorthy */}
          <div className="col-md-5">
            <p className="my-2 fs-2 fw-semibold text-info">
              1. WristWorthy <span className="fs-6 text-gray">(Deployed)</span>
            </p>
            <div className="my-4">
              <img src="images/ecommerce.png" alt="..." className="img-fluid" />
            </div>
            <div className="my-4">
              <b className="text-lightgreen">Project Description :</b>{" "}
              <p className="container mt-2">
                "WristWorthy" is a feature-rich e-commerce application designed
                to provide watch enthusiasts and customers with a seamless and
                captivating shopping experience for high-quality watches. Built
                using the MERN stack (MongoDB, Express, React, and Node.js),
                this platform offers a user-friendly interface and a wide
                selection of watches, Smart Phones, Laptops, etc. from various
                renowned brands and unique designs.
              </p>
              <div className="container d-flex justify-content-around">
                <Link
                  to={"https://wrist-worthy.vercel.app"}
                  className=" btn btn-info fw-semibold mx-1"
                  target="_blank"
                >
                  Explore Project
                </Link>
                <Link
                  to={
                    "https://github.com/Minnathullah-TheMysterious/Ecommerce_App_Server"
                  }
                  className="btn btn-success fw-semibold mx-1"
                  target="_blank"
                >
                  Visit Github Repository - Server
                </Link>
                <Link
                  to={
                    "https://github.com/Minnathullah-TheMysterious/Ecommerce_App_Client"
                  }
                  className="btn btn-success fw-semibold mx-1"
                  target="_blank"
                >
                  Visit Github Repository - Client
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div>
              <div className="my-4">
                <b className="text-lightgreen">Technologies Used : </b>{" "}
                <div className="d-flex">
                  <ul className="mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <ul className="mt-2">
                    <li>React.js</li>
                    <li>Redux-Toolkit</li>
                    <li>Tailwind CSS</li>
                  </ul>
                  <ul className="mt-2">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Mongodb</li>
                    <li>Mongoose</li>
                  </ul>
                </div>
              </div>
              <div>
                <b className="text-lightgreen">Key Features :</b>{" "}
                <ul className="mt-2">
                  <li>
                    <b className="text-warning">
                      User Authentication with Passport JS :{" "}
                    </b>
                    To ensure a secure and personalized experience, the app
                    provides user authentication using{" "}
                    <span className="text-info fw-semibold">
                      Local Strategy & JWT Strategy of Passport JS
                    </span>
                    , allowing users to create accounts, log in securely, and
                    access their order history and preferences.
                  </li>
                  <li>
                    <b className="text-warning">
                      Easy Navigation, Filtering & Sorting :{" "}
                    </b>
                    Customers can effortlessly browse through the collection
                    using intuitive filters & sorting, such as price range,
                    brand, category and more. The app's search functionality
                    allows users to quickly find specific models or brands.
                  </li>
                  <li>
                    <b className="text-warning">
                      Smooth Shopping Cart and Checkout Process :{" "}
                    </b>
                    The app offers a hassle-free shopping cart system, enabling
                    users to add multiple products, review their selections, and
                    proceed to a secure and smooth checkout process with the
                    integrated payment gateway.
                  </li>
                  <li>
                    <b className="text-warning">Secure Payments : </b>
                    WristWorthy integrates a reliable and secure payment gateway
                    of <span className="text-info fw-semibold">Stripe</span>,
                    enabling customers to make purchases using various payment
                    methods, such as credit cards, debit cards, and digital
                    wallets.
                  </li>
                  <li>
                    <b className="text-warning">Responsive Design : </b>The app
                    is designed to be responsive and compatible with various
                    devices using the invisible powers of{" "}
                    <span className="text-info fw-semibold">Tailwind CSS</span>,
                    including desktops, tablets, and smartphones, ensuring a
                    seamless user experience across different platforms.
                  </li>
                  <li>
                    <b className="text-warning">Wishlist and Favorites : </b>
                    Users can create wishlists and mark favorite their favorite
                    products for future reference, enhancing the overall
                    shopping experience.
                  </li>
                  <li>
                    <b className="text-warning">Admin Panel : </b>A very
                    attractive & interactive panel for admin to create, update,
                    delete & restore the products, brands, categories & promos.
                    A responsive orders table to manage all the orders with
                    sufficient filters, sorting. With the features to update
                    payment status & order status.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          {/* E-commerce */}
          <div className="col-md-5">
            <p className="my-2 fs-2 fw-semibold text-info">
              2. E-commerce <span className="fs-6 text-gray">(Deployed, Working On Responsiveness)</span>
            </p>
            <div className="my-4">
              <img src="images/watch20.jpg" alt="..." className="img-fluid" />
            </div>
            <div className="my-4">
              <b className="text-lightgreen">Project Description :</b>{" "}
              <p className="container mt-2">
                "E-commerce" is a feature-rich e-commerce application designed
                to provide watch enthusiasts and customers with a seamless and
                captivating shopping experience for high-quality watches on vast
                categories. Built using the MERN stack (MongoDB, Express, React,
                and Node.js), this platform offers a user-friendly interface and
                a wide selection of watches. from various renowned brands and
                unique designs.
              </p>
              <div className="container d-flex justify-content-around">
                <Link
                  to={"https://mmr-ecommerce.vercel.app"}
                  className=" btn btn-info fw-semibold mx-1"
                  target="_blank"
                >
                  Explore Project
                </Link>
                <Link
                  to={
                    "https://github.com/Minnathullah-TheMysterious/Ecommerce_App_Server"
                  }
                  className="btn btn-success fw-semibold mx-1"
                  target="_blank"
                >
                  Visit Github Repository - Server
                </Link>
                <Link
                  to={
                    "https://github.com/Minnathullah-TheMysterious/Ecommerce_App_Client"
                  }
                  className="btn btn-success fw-semibold mx-1"
                  target="_blank"
                >
                  Visit Github Repository - Client
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div>
              <div className="my-4">
                <b className="text-lightgreen">Technologies Used : </b>{" "}
                <div className="d-flex">
                  <ul className="mt-2">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Mongodb</li>
                    <li>Mongoose</li>
                  </ul>
                  <ul className="mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <ul className="mt-2">
                    <li>React.js</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
              <div>
                <b className="text-lightgreen">Key Features :</b>{" "}
                <ul className="mt-2">
                  <li>
                    <b className="text-warning">
                      User Authentication with JWT :{" "}
                    </b>
                    To ensure a secure and personalized experience, the app
                    provides user authentication using{" "}
                    <span className="text-info fw-semibold">
                      JsonWebToken
                    </span>
                    , allowing users to create accounts, log in securely, and
                    access their order history and preferences.
                  </li>
                  <li>
                    <b className="text-warning">
                      Easy Navigation, Filtering & Sorting :{" "}
                    </b>
                    Customers can effortlessly browse through the collection
                    using intuitive filters & sorting, such as price range,
                    category and more. The app's search functionality
                    allows users to quickly find specific models or brands.
                  </li>
                  <li>
                    <b className="text-warning">
                      Smooth Shopping Cart and Checkout Process :{" "}
                    </b>
                    The app offers a hassle-free shopping cart system, enabling
                    users to add multiple products, review their selections, and
                    proceed to a secure and smooth checkout process with the
                    integrated payment gateway.
                  </li>
                  <li>
                    <b className="text-warning">Secure Payments : </b>
                    WristWorthy integrates a reliable and secure payment gateway
                    of <span className="text-info fw-semibold">Braintree</span>,
                    enabling customers to make purchases using various payment
                    methods, such as credit cards, debit cards, and digital
                    wallets.
                  </li>
                  <li>
                    <b className="text-warning">Responsive Design : </b>The app
                    is designed to be responsive and compatible with various
                    devices using the invisible powers of{" "}
                    <span className="text-info fw-semibold">Bootstrap</span>,
                    including desktops, tablets, and smartphones, ensuring a
                    seamless user experience across different platforms.
                  </li>
                  <li>
                    <b className="text-warning">Wishlist and Favorites : </b>
                    Users can create wishlists and mark favorite their favorite
                    products for future reference, enhancing the overall
                    shopping experience.
                  </li>
                  <li>
                    <b className="text-warning">Admin Panel : </b>A very
                    attractive & interactive panel for admin to create, update &
                    delete the products & categories.
                    A responsive orders & users table to manage all the orders & users.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          {/* NewsMMR */}
          <div className="col-md-5">
            <p className="my-2 fs-2 fw-semibold text-info">
              3. NewsMMR <span className="fs-6 text-gray">(Deployed)</span>
            </p>
            <div>
              <img src="images/news.png" alt="..." className="img-fluid" />
            </div>
            <div className="my-4">
              <b className="text-lightgreen">Project Description :</b>{" "}
              <p className="container mt-2">
                "NewsMMR" is an all-inclusive news website built with React,
                offering a comprehensive selection of news articles from diverse
                categories and countries. Users can effortlessly access the
                latest and most relevant news in real-time, tailored to their
                individual interests and geographical preferences.
              </p>
              <div className="container d-flex justify-content-around">
                <Link
                  to={"https://newsmmr.vercel.app"}
                  className=" btn btn-info fw-semibold"
                  target="_blank"
                >
                  Explore Project
                </Link>
                <Link
                  to={"https://github.com/Minnathullah-TheMysterious/newsmmr"}
                  className="btn btn-success fw-semibold"
                  target="_blank"
                >
                  Visit Github Repository
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div>
              <div>
                <b className="text-lightgreen">Technologies Used : </b>{" "}
                <ul className="mt-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div>
                <b className="text-lightgreen">Key Features :</b>{" "}
                <ul className="mt-2">
                  <li>
                    <b className="text-warning">Category-Based News : </b>
                    The website organizes news articles into various categories,
                    ensuring that users can easily navigate and explore topics
                    that pique their curiosity. Categories encompass everything
                    from general, business, technology, sports, entertainment,
                    health, science, and more.
                  </li>
                  <li>
                    <b className="text-warning">News by Country : </b>
                    With NewsMMR, users can access news from different countries
                    worldwide. This feature fosters global awareness, allowing
                    users to stay updated on international affairs and events.
                  </li>
                  <li>
                    <b className="text-warning">Keyword Search : </b>
                    The website incorporates a robust search functionality,
                    enabling users to enter specific keywords and discover news
                    articles directly related to their search queries. This
                    powerful tool facilitates easy access to in-depth
                    information on particular subjects of interest.
                  </li>
                  <li>
                    <b className="text-warning">Pagination : </b>
                    To ensure a smooth and efficient browsing experience,
                    NewsMMR implements pagination. Users can navigate through
                    multiple pages of news articles effortlessly, making it
                    convenient to explore a vast array of news content.
                  </li>
                  <li>
                    <b className="text-warning">Intuitive User Interface : </b>
                    The website boasts an intuitive and visually appealing user
                    interface, making it simple for users to navigate and find
                    the news they desire quickly. A streamlined design and
                    user-friendly menus contribute to a seamless experience.
                  </li>
                  <li>
                    <b className="text-warning">Article Readability : </b>
                    News articles are presented in a reader-friendly format,
                    optimizing readability with adjustable font sizes,
                    responsive design, and additional readability features.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          {/* TextUtils */}
          <div className="col-md-5">
            <p className="my-2 fs-2 fw-semibold text-info">
              4. TextUtils <span className="fs-6 text-gray">(Deployed)</span>
            </p>
            <div>
              <img src="images/textutils.png" alt="..." className="img-fluid" />
            </div>
            <div className="my-4">
              <b className="text-lightgreen">Project Description :</b>{" "}
              <p className="container mt-2">
                "TextUtils" is a versatile text manipulation app built with
                React, designed to streamline and simplify various text-related
                tasks. This powerful tool empowers users to manipulate, format,
                and analyze text effortlessly, making it an invaluable asset for
                writers, students, developers, and anyone dealing with
                text-based content.
              </p>
              <div className="container d-flex justify-content-around">
                <Link
                  to={"https://text-utils-two-woad.vercel.app"}
                  className=" btn btn-info fw-semibold"
                  target="_blank"
                >
                  Explore Project
                </Link>
                <Link
                  to={
                    "https://github.com/Minnathullah-TheMysterious/TextUtils-react"
                  }
                  className="btn btn-success fw-semibold"
                  target="_blank"
                >
                  Visit Github Repository
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div>
              <div>
                <b className="text-lightgreen">Technologies Used : </b>{" "}
                <ul className="mt-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                </ul>
              </div>
              <div>
                <b className="text-lightgreen">Key Features :</b>{" "}
                <ul className="mt-2">
                  <li>
                    <b className="text-warning">Text Formatting : </b>
                    TextUtils offers an array of text formatting options,
                    including converting text to uppercase, lowercase, title
                    case, and sentence case. Users can easily transform their
                    text to suit specific writing styles and requirements.
                  </li>
                  <li>
                    <b className="text-warning">Word and Character Count : </b>
                    The app provides real-time word and character count for the
                    entered text, helping users keep track of their content's
                    length and meeting word count restrictions.
                  </li>
                  <li>
                    <b className="text-warning">Average Time to Read : </b>
                    The app provides time required to read the sentence for the
                    entered text, helping users keep track of their time.
                  </li>
                  <li>
                    <b className="text-warning">Preview : </b>
                    The app provides Preview of the entered text.
                  </li>

                  <li>
                    <b className="text-warning">Responsive Design : </b>
                    The app is built with a responsive layout, ensuring seamless
                    usage across different devices, including desktops, tablets,
                    and smartphones.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
