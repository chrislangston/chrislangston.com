import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () => {


    const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
  }
`);

    return (
        <footer>
            <p>Created by {data.site.siteMetadata.author}, {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer