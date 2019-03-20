import React from "react"
import Layout from '../components/layout/layout'

import indexStyles from './styles/index.module.scss';
import Title from '../components/title/title';
import bentoImg from '../img/index_img/bento.jpg'

export default () =>
  <Layout>
    <div className={indexStyles.container}>
      <Title />
      <div className={indexStyles.bentoForm}>
        <form name="subscribe" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contac" />
          <label htmlFor="subscribe">
            <h2>Singup for your complimentary Sample Bento Box.</h2>
            <img className src={bentoImg} alt="bento sample box" />
            <input type="email" placeholder="email..." />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </div>
  </Layout>
