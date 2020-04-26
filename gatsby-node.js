const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === 'MarkdownRemark'){
        //console.log(JSON.stringify(node, undefined, 4))
        //fileAbsolutePath
        const slug = path.basename(node.fileAbsolutePath, '.md');

        //console.log(slug);
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }

  }

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
module.exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    
    // Create pages for each markdown file.
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    
    const result = await graphql(
      `query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                    slug
                }
              }
            }
          }
        }
      `
    )

    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: blogPostTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          slug: node.fields.slug
        },
      })
    })
  }
