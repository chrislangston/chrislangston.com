import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'


const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title="About Chris" />
            <h2>About Chris</h2>
            
            <p>Feel free to reach me at <Link to="/contact">Contact Page</Link></p>
            
            </Layout>
        </div>
    )

}

export default AboutPage
