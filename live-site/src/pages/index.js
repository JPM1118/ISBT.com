import React from "react"
import Layout from '../components/layout/layout'
import indexStyle from './styles/index.module.scss'

export default () =>
  <Layout>
    <div className={indexStyle.container}>
      <h1>Thoughtfully curated resourcing for all interior design projects.</h1>
    </div>
  </Layout>
