import React, { Fragment } from "react";
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment> 
      <title>{title} | {data.site.siteMetadata.title}</title>
      <meta name="description" content={description}></meta> 
    </Fragment>    
  )
}

export default Seo