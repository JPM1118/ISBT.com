import React from "react"
import Layout from '../components/layout/layout'

import aboutStyles from './styles/about.module.scss';

export default () => (
  <Layout>
    <div className={aboutStyles.container}>
      <h1>About me</h1>
      <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>

    </div>
  </Layout>
)