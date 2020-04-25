import React from 'react';
import Layout from '../components/layout';


const ContactPage = () => {
    return (
        <div>
            <Layout>
            <p>
                You can reach me in any of the following ways:            
            </p>
            <ol>
                    <li>Email at chris@chrislangston.com</li>
                    <li>Linked In:  <a href="https://www.linkedin.com/in/chrislangstonga/" target="_blank" rel="noopener noreferrer">Linked In</a></li>
                    <li>Twitter: <a href="https://twitter.com/chris_langston" target="_blank" rel="noopener noreferrer">@ Chris Langston</a></li>
                </ol>
            </Layout>
        </div>
    )
}
export default ContactPage
