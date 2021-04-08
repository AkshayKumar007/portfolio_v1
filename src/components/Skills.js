import React from "react"
import Title from "./Title"
import skills from "../constants/skills"

const Services = () => {
  return (
    <section id="skill" className="bg-grey"> {/* section */}
      <Title title="skills" />
      <div className="skill-center"> {/*section-center*/}
        {skills.map(skill => {
          const { id, icon, title} = skill
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
