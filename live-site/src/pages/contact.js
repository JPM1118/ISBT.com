import React, { Component } from "react"
import Layout from '../components/layout/layout'
import axios from 'axios';

import contactStyles from './styles/contact.module.scss'


const initialState =
{
  name: "",
  message: "",
  emailAddress: "",
  successSubmit: false,
  isLoading: false,
}

class Contact extends Component {
  state = initialState
  signal = axios.CancelToken.source();
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    setTimeout(() => { }, 3000)
  }

  handleSubmit = (e) => {
    this.setState(initialState)
    e.preventDefault()

    axios.post(
      'https://large-quetzal.dev.with-datafire.io/contact',
      this.state,
      {
        cancelToken: this.signal.token
      })
      .then(res => {
        this.setState({ isLoading: true })
        return res
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ successSubmit: true })
        }
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message)
        } else {
          this.setState({ isLoading: false })
          console.log(err)
        }
      });
  }

  componentWillUnmount() {
    if (this.state.isLoading) {
      this.signal.cancel('Component is unmounting.');
    }
  }

  enableButton = () => {
    return !(
      this.state.name &&
      this.state.message &&
      this.state.emailAddress
    )
  }

  render() {
    return (
      <Layout>
        <div className={contactStyles.container}>
          <div className={contactStyles.main}>
            {this.state.successSubmit ?
              <div className={contactStyles.success}>
                <h2>Thank You!</h2>
                <p>Your message has been sent and I will respond as soon as possible.</p>
              </div>
              : <form onSubmit={this.handleSubmit}>
                <h1>Contact Me</h1>
                <div className={contactStyles.name}>
                  <label>Your Name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className={contactStyles.message}>
                  <label>Message</label>
                  <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                </div>
                <div className={contactStyles.email}>
                  <label>Your Email Address</label>
                  <input type="email" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} />
                </div>
                <button className={contactStyles.btn} disabled={this.enableButton()}>Submit</button>
              </form>
            }
          </div>
        </div>
      </Layout>
    )
  }
}
export default Contact;


