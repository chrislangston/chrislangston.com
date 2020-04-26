import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
          }
          html
          excerpt,
          fields {
            slug
          }
        }
      }
    }
`);

    return (
        <div>
            <Layout>
            <h2>Blog Posts</h2>
            <ol>
            {
                data.allMarkdownRemark.nodes.map((node) => {
                    return (
                    <li key={node.frontmatter.title}>
                      <Link to={`/blog/${node.fields.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                      </Link>
                      <p>{node.frontmatter.date}</p>
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
