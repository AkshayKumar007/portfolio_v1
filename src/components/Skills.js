import React from "react"
import Title from "./Title"
import services from "../constants/skills"
const Services = () => {
  return (
    <section id="skill" className="section bg-grey">
      <Title title="skills" />
      <div className="section-center skills-center">
        {services.map(service => {
          const { id, icon, title} = service

          return (
            <article key={id} className="skill">
              {icon}
              <h4>{title}</h4>
              
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
