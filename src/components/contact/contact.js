import React, { Component } from 'react';

import contactStyles from './contact.module.scss';

const initialState = {
  name: '',
  message: '',
  emailAddress: '',
};

class Contact extends Component {
  state = initialState;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  enableButton = () => {
    return !(this.state.name && this.state.message && this.state.emailAddress);
  };

  render() {
    return (
      <div className={contactStyles.container}>
        {this.state.successSubmit ? (
          <div className={contactStyles.success}>
            <h2>Thank You!</h2>
            <p>
              Your message has been sent and I will respond as soon as
              possible.
                </p>
          </div>
        ) : (
            <>
              <h2>Contact Us</h2>
              <div className={contactStyles.main}>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="bot-field" value="contact" />
                  <div className={contactStyles.name}>
                    <label htmlFor="name">
                      Your Name
                      <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className={contactStyles.message}>
                    <label htmlFor="message">
                      Message
                      <textarea
                        name='message'
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className={contactStyles.email}>
                    <label htmlFor="email">
                      Your Email Address
                      <input
                        type='email'
                        name='emailAddress'
                        value={this.state.emailAddress}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <button
                    className={contactStyles.btn}
                    disabled={this.enableButton()}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </>
          )}
      </div>
    );
  }
}
export default Contact;
