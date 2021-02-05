import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleTopography from "../components/title-typography"
import CustomLink from "../components/custom-link"
import Video from "../components/video"

import { useStaticQuery, graphql } from "gatsby"
import { constants } from "../constants"

import "../styles/style.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { video, link } = constants

  return (
    <Layout data={data}>
      <SEO title="Home" site={data.site} />
      <TitleTopography>
        <CustomLink {...link} />
      </TitleTopography>
      <Video {...video} />
    </Layout>
  )
}

export default IndexPage
