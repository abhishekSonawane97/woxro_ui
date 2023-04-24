import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <div className="contact">
      <div className="contactLine">
        <p>We offer all kinds of IT services that ensure your success</p>
      </div>
      <div className="buttons">
        <button className="btn btn-outline-light btn-lg m-2">
          <a
            href="https://chatting.page/awy0oqhfhhgorwbfeet8ywkbg4off9sl"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faComment} /> Let's Talk
          </a>
        </button>
        <button className="btn btn-outline-light btn-lg m-2">
          <a href="https://woxro.com/contactus" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faPhone} /> Contact us
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contacts;
