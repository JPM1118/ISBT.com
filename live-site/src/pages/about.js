import React from "react"
import Layout from '../components/layout/layout'

import aboutStyles from './styles/about.module.scss';

export default () => (
  <Layout>
    <div className={aboutStyles.container}>
      <div className={aboutStyles.hero}>
        <h1>Barb is the best in the business.</h1>
      </div>
      <div className={aboutStyles.aboutBody}>
        <h2>I’m good enough, I’m smart enough, and gosh darn it, people like me!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora inventore mollitia quibusdam dolorem nesciunt beatae officiis quod molestias provident odit distinctio at, quis commodi quia. Sed impedit deserunt fuga.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quidem, consequuntur debitis dolorem, saepe minima odit neque hic veritatis officia voluptatum, soluta error! Earum hic laboriosam nihil ut beatae blanditiis.</p>
      </div>
    </div>
  </Layout>
)