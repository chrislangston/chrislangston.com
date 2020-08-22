import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About Chris" />
        <h2>About Chris</h2>

        <p>
          If you're looking for technical articles that I've created, please
          visit Medium where I do most of my writing.
        </p>
        <p>
          <a
            href="https://medium.com/@chrislangston_17322"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris on Medium
          </a>
        </p>
        <p>
          Feel free to reach me at <Link to="/contact">Contact Page</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
