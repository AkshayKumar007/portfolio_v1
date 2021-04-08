import React from "react"
import Title from "./Title"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
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

const About = () => {
  const data = useStaticQuery(query)
    const {
    allStrapiAbout: { nodes: about },
  } = data
  const [value, setValue] = React.useState(0)
  const {image, title, info, stack} = about[value]
  return (
    
      <section id="about" className="about-page">
        <Title title={title} />
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            {/* <Title title={title} /> */}
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
  )
}

export default About
