import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        This is a static site created by{" "}
        {data.site.siteMetadata.author}, {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
