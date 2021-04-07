import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            {/* <div className="underline"></div> */}
            <h4>Hi, my name is </h4>
            <h1>Akshay Kumar</h1>
            <div className="underline"></div>
            <h2>I build things for the web.</h2>
            <div className="hero-text">
              <p>I'm a Boston-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. <br /> Currently, I'm an engineer at Upstatement focused on building accessible, human-centered products.</p>
            </div>
            <Link to="/contact" className="btn">
              Get In Touch
            </Link>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
