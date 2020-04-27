import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( 
        sort: {
          fields: publishedDate,
          order: DESC
        }
      )
      {
        nodes {         
            title  
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          
        }
      }
    }
`);

    return (
        <div>
            <Layout>
            <Head title="Blog" />
            <h2>Blog Posts</h2>
            <ol className={blogStyles.posts}>
            {
                data.allContentfulBlogPost.nodes.map((node) => {
                    return (
                    <li className={blogStyles.post} key={node.title}>
                      <Link to={`/blog/${node.slug}`}>
                        <h2>{node.title}</h2>
                      </Link>
                      <p>{node.publishedDate}</p>
                    </li>
                    )
                })
            }
            </ol>
            </Layout>
        </div>
    )

}

export default BlogPage
