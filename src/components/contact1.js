import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"

const contact = () => {
  return (

      <section id="contact" className="contact-page">
        <Title title="Get in Touch" />
        <div className="contact-text"> 
            <p> I'm currently looking for any new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! </p>
          </div>
        <article className="contact-form">
          {/* <h3></h3> */}
          <form action="https://formspree.io/f/mdoyozea" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>

  )
}

export default contact
