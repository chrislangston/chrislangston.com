import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Not Found" />
            <h1>Page Not Found</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound