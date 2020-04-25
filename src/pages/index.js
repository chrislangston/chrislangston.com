import React from "react"
import {Link} from 'gatsby'
import Layout from '../../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <h1>Welcome</h1>
            <h3>Professionally I'm an Enterprise Software Architect focusing on the Cloud Scale concepts</h3>
            <h3>
                Personally I'm a married to my High School sweat heart Stephanie and I'm a father of two children adopted from Colombia.
            </h3>

            <p>To find more about me, visit the <Link to="/about">About Page</Link></p>

            <p>Feel free to reach me at <Link to="/contact">Contact Page</Link></p>
        </Layout>
    )
}
export default IndexPage;

// export default () => <div>Welcome to Chris Langston</div>
