import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
          <span> Designed & Built by <span  className="auth-name"> Akshay Kumar </span> </span> {/*{new Date().getFullYear()} */}
      </div>
    </footer>
  )
}

export default Footer
