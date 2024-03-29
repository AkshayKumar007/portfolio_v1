import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { RiShareBoxLine} from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const Project = ({ description, title, github, stack, url, image, index }) => {
  description = Array.from(description);
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        {/* <p className="project-desc">{description}</p> */}
        
        {description.map(item => {
          return (
              <p key={item.id} className="project-desc">{item.name}</p>
          )
        })}
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FiGithub className="project-icon" />
          </a>
          <a href={url}>
            <RiShareBoxLine className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
