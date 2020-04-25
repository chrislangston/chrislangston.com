import React from 'react';
import {Link} from 'gatsby';
import Layout from '../../components/layout';

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <h2>About Chris Langston</h2>
            
            <p>Feel free to reach me at <Link to="/contact">Contact Page</Link></p>
            
            </Layout>
        </div>
    )

}

export default AboutPage
