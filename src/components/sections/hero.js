import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion, useAnimation } from "framer-motion"

import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import Social from "../social"
import SplashScreen from "../splashScreen"
import { lightTheme, darkTheme } from "../../styles/theme"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
&& {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 4rem;
  }
    .greetings {
      
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        margin-top: 3rem;
        margin-left:0.5rem;
        font-size: 1.25rem;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin-top: 3rem;
        font-size: 1.25rem;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-top: 1rem;
        font-size: 1rem;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 1rem;
        font-size: 0.9rem;
      }
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      color:${({ theme }) => theme.colors.tertiary};
      font-size: 5rem;
      font-weight:bold;
      @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        margin-top: 3rem;
        font-size: 5rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin-top: 2rem;
        font-size: 5rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-top: 2rem;
        font-size: 3rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 1rem;
        font-size: 2.5rem;
        margin-bottom: 0.5;
      }
    }
    .subtitle {
      color:${({ theme }) => theme.colors.secondary};
      font-size: 5rem;
      font-weight:bold;
      margin-top: 4rem;
      @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        margin-top: 4rem;
        font-size: 4.5rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin-top: 4rem;
        font-size: 4.5rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-top: 2rem;
        font-size: 2.5rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 1rem;
        font-size: 2rem;
        margin-bottom: 0.5;
      }
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        margin-top: 3rem;
        font-size: 1.25rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin-top: 3rem;
        font-size: 1.25rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-top: 1rem;
        font-size: 1rem;
        margin-bottom: 1.5;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 1rem;
        font-size: 0.9rem;
        margin-bottom: 0.5;
      }
    }
  }
`

const AnimatedUnderlining = motion.custom(Underlining)

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { isIntroDone, darkMode } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await uControls.start({
          boxShadow: `inset 0 -2rem 0 ${
            darkMode ? darkTheme.colors.secondary : lightTheme.colors.secondary
          }`,
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, darkMode, eControls, gControls, sControls, uControls])

  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gControls}
          data-testid="animated-heading"
        >
        <div className="greetings">
          {frontmatter.greetings}
        </div>
        <div className="title">
          {frontmatter.title}
        </div> 
          <div className="subtitle">
            {frontmatter.subtitlePrefix}{" "}
            {/* <AnimatedUnderlining animate={uControls} big> */}
              {frontmatter.subtitle}
            {/* </AnimatedUnderlining> */}
          </div>
          {/* <Img
            className="emoji"
            fluid={frontmatter.icon.childImageSharp.fluid}
          /> */}
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
