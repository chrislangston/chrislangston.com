import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h3>
        Professionally I'm an Enterprise Software Architect focusing on the
        Azure Cloud.
      </h3>
      <h3>
        Personally I'm a husband and dad trying to enjoy this journey called
        Life :-)
      </h3>

      <p>
        To find more about me, visit the <Link to="/about">About Page</Link>
      </p>

      <p>
        I'm always glad to discuss Cloud concepts. Feel free to reach me at{" "}
        <Link to="/contact">Contact Page</Link>
      </p>
    </Layout>
  )
}
export default IndexPage

// export default () => <div>Welcome to Chris Langston</div>
