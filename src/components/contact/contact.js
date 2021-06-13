import React from "react";

import contactStyles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={contactStyles.container}>
      <h2>Contact Us</h2>
      <div className={contactStyles.main}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={contactStyles.name}>
            <label htmlFor="name">
              Your Name
              <input type="text" name="name" />
            </label>
          </div>
          <div className={contactStyles.message}>
            <label htmlFor="message">
              Message
              <textarea name="message" />
            </label>
          </div>
          <div className={contactStyles.email}>
            <label htmlFor="email">
              Your Email Address
              <input type="email" name="emailAddress" />
            </label>
          </div>
          <button className={contactStyles.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
