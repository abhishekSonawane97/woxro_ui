import React from "react";
import Contact from "./Contact";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <h1 className="heading text-center">
          Kerala's Leading Web
          <br />
          Design Company
        </h1>
        <p className="text-center">
          Global Web Designing Company That Provides Full-cycle Software
          Development Services, E-commerce &amp; Mobile App Development
          Services.
        </p>
      </div>

      <div className="subHeading">
        <div className="subhead">
          <center>
            <strong>services we deliver</strong>
          </center>
        </div>
        <div className="p-4 bold">
          <center>
            <h2 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Preparing for your success, we provide truly prominent IT
              solutions.
            </h2>
          </center>
        </div>
      </div>

      <div className="services p-4 container">
        <div className="card m-2" style={{ background: "#E7F0F7" }}>
          <img
            className="p-4"
            src="https://woxro.com/public/assets/png/services/webdesigning.png"
            alt="Card cap"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Web Designing
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card  m-2" style={{ background: "#F6F5F3" }}>
          <img
            className="p-4"
            src="https://woxro.com/public/assets/png/services/webapplication.png"
            alt="Card cap"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Web Application
            </h5>
            <p className="card-text">
              We have complete projects in full-cycle web applications including
              CRM, HRM, and project management solutions. Look no further if you
              are in search of a professional partner who can develop stunning
              web applications.
            </p>
          </div>
        </div>

        <div className="card  m-2" style={{ background: "#F6F5F3" }}>
          <img
            className="p-4"
            src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png"
            alt="Card cap"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Mobile App Developement
            </h5>
            <p className="card-text">
              We develop high-quality and effective applications for your
              business. our expertise and knowledge help us create reliable
              mobile applications for iOS and android and cross-platform
              solutions.
            </p>
          </div>
        </div>

        <div className="card  m-2" style={{ background: "#FcF0E4" }}>
          <img
            className="p-4"
            src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png"
            alt="Card cap"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Ecommerce Developement
            </h5>
            <p className="card-text">
              For some of you, our involvement as an eCommerce development and
              consulting partner will mean a powerful business launch with the
              right technology stack. For others - a possibility to give their
              business a fresh start.
            </p>
          </div>
        </div>

        <div className="card  m-2" style={{ background: "#F6F5F3" }}>
          <img
            className="p-4"
            src="https://woxro.com/public/assets/png/services/digitalmarketing.png"
            alt="Card cap"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Digital Marketing
            </h5>
            <p className="card-text">
              We bring together expertise in brand marketing and sustainability
              to design and implement ideas in branding. we also bring brand
              purpose to life by communicating great stories. Now Maximize your
              online visibility.
            </p>
          </div>
        </div>

        <div className="card  m-2" style={{ background: "#EFFBFB" }}>
          <img
            className="p-4"
            src="https://woxro.com/public/assets/png/services/graphic.png"
            alt="Card cap"
            style={{ height: "100px", width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Graphic Designing
            </h5>
            <p className="card-text">
              We build sustainable, brands by connecting your product and
              message with audiences that would want to get your and or
              services. We nurture ideas to transform ands through creativity
              focussed on growth.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Banner;
