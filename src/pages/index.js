import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
// import Blogs from "../components/Blogs";
import Skills from "../components/Skills";
import SEO from "../components/SEO";
import About from "../components/about1";
import Contact from "../components/contact1";

export default ({ data }) => {
  const {
    allStrapiNprojects: { nodes: projects },
    // allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Akshay Kumar" description="This is Akshay Kumar\'s Portfolio Site" />
      <Hero />
      <About />
      {/* <Services /> */}
      <Skills />
      <Jobs />
      <Projects projects={projects} title="featured projects" />
      {/* <Blogs blogs={blogs} title="latest articles" showLink /> */}
      <Contact/>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiNprojects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
        description {
            id
            name
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
