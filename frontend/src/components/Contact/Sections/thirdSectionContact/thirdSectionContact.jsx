import React from "react";
import "../thirdSectionContact/thirdSectionContact.css";

const thirdSectionContact = () => {
  return (
    <div className="contact-third-section">
      <div className="contact-third-container">
        <div className="contact-third-upper-container">
          <h2>Have Any Questions?</h2>
          <h4>
            It is a long established fact that a reader will be distracted
            content of a page when looking.
          </h4>
        </div>
        <div className="contact-third-lower-container">
          <div className="form-container">
            <form action="#" method="#">
              <input
                type="text"
                name="FirstName"
                id="name-field"
                placeholder="Name"
              />
              <input
                type="text"
                name="Lastname"
                id="surname-field"
                placeholder="Lastname"
              />
              <input
                type="email"
                name="Email"
                id="email-field"
                placeholder="Email"
              />
              <select name="subject" id="select-field">
                <option value="Subject ">Subject</option>
                <option value="Subject 1 ">Doner</option>
                <option value="Subject 2">Volunteer</option>
                <option value="Subject 3">NGO</option>
                <option value="Subject 4">Needy</option>
              </select>
              <textarea placeholder="Message" />
              <button type="submit" id="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default thirdSectionContact;
