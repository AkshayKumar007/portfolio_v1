import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icon from "../assets/icon.png"
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useScrollYPosition } from 'react-use-scroll-position';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Container from './Container';

const HeaderWrapper = styled.nav`
  background: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  section {
    height: 80px;
    align-items: center;
    justify-content: space-between;
    transition: height 0.3s ease;
    .nav-m {
      &.open {
        button {
          div {
            background: #30FFB9; /* linear-gradient(90deg, #81E6D9, #3EABA4) */
            &.second {
              opacity: 0;
            }
            &.first {
              transform: rotate(45deg);
              top: 0.5rem;
            }
            &.third {
              transform: rotate(-45deg);
              bottom: 0.8rem;
            }
          }
        }
      }
      button {
        height: 1.5rem;
        width: 2.0rem;
        position: relative;
        background: transparent;
        padding: 0;
        border: none;
        div {
          transition: all 0.2s;
          height: 3px;
          width: 100%;
          background: white; /* white #212529 */
          position: absolute;
          &.first {
            top: 0;
            left: 0;
          }
          &.second {
            top: calc(50% - 1.5px);
            left: 0;
          }
          &.third {
            bottom: 0;
            left: 0;
          }
        }
      }
    }
    .nav-d {
      display: none;
      .toggle-btn {
        display: none;
      }
      
      justify-content: flex-end;

      a {
        color: white; /* text color */  
        line-height: 2.8rem;
        text-transform: capitalize; 
        margin-left: 1.5rem;
        font-size: 0.95rem;
        position: relative;
        text-decoration: none;
        transition: all 0.3s ease;
        padding: 0.1rem 0.4rem;
        padding-bottom: 0.0px;
        z-index: 10;
        &:hover {
          color: #30FFB9; /*#30FFB9 #81E6D9*/
          &::before {
            height: 100%;
            width: 100%;
            opacity: 1;
          }
        }
        &:before {
          z-index: -1;
          content: '';
          position: absolute;
          height: 0%;
          width: 100%;
          bottom: -1px;
          left: 0;
          opacity: 1;
          transition: all 0.3s ease;
          box-shadow: 0px 2px #30FFB9;
          /*background: linear-gradient(90deg, #007991, #78ffd6);*/
        }
      }
      .divider {
        position: relative;
        margin-right: 2rem;
        &::after {
          content: '';
          height: 2.5rem;
          width: 0.1rem;
          background: #30FFB9; /*white*/
          position: absolute;
          top: 0.25rem;
          right: -2rem;
        }
      }
    }
    .nav-mm {
      font-size: 1.4rem;
      line-height: 2.8rem;
      text-transform: capitalize;
      transform: translateX(${props => (props.open ? '0%' : '100%')});
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      background: #202028; /*#161B25 #202028 #1c1c24*/
      height: calc(100vh - 80px);
      padding: 2rem;
      @media (min-width: 600px) {
        padding: 4rem;
      }
      
      a {
        color: white; /*#212529*/
        margin-bottom: 3rem;
        &.divider {
          margin-bottom: 6rem;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            bottom: -3rem;
            left: 0;
            width: 100%;
            height: 0.2rem;
            background: #524EEE; /* #524EEE #EF412D */
          }
        }
      }
    }
    @media (min-width: 900px) {
      .nav-m {
        display: none;
      }
      .nav-d {
        display: flex;
      }
      .nav-mm {
        display: none;
      }
    }
  }
`;

const HeaderMenuMask = styled.div`
  background: #202028; /*#161B25*/
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => (props.triggered ? '100%' : '0%')};
  transition: 0.3s all;
  z-index: -1;
  height: 100%;
`;

const HeaderScrolledMask = styled.div`
  background: #202028; /* #0C0C14 #161B25 or rgba(22, 27, 37, 0.82)*/
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  transition: width 0.3s ease;
  z-index: -1;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  width: ${props => (props.triggered ? '100%' : '0%')};
`;

const LogoImg = styled(Img)`
  width: 6rem;
`;

export default function Header({ location }) {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollYPosition();
  // const scrollY = typeof window !== 'undefined' ? useScrollYPosition() : 0,
  let scrolled = scrollY !== 0;

  useEffect(() => {
    setOpen(false);
  }, [location, scrollY]);

  function renderLinks() {
    return (
      <Fragment>
        <AnchorLink to="/#about">01. About</AnchorLink>
        <AnchorLink to="/#skill">02. Skills</AnchorLink>
        <AnchorLink to="/#experience">03. Experience</AnchorLink>
        <AnchorLink to="/#projects">04. Projects</AnchorLink>
        <AnchorLink to="/#contact" className="divider">05. Contact</AnchorLink> {/*className="divider"*/}
        <a href="https://drive.google.com/file/d/1OCQhkNOsiiy8UzQpV1BKVgpp4F0889fW/view?usp=sharing">Resume</a>
        {/* <Link className="divider" to={'/contact'}>
          target="_blank" Contact
        </Link> */}
        {/* <Link to={'/blog'}>Blog</Link> */}
      </Fragment>
    );
  }

  return (
    <HeaderWrapper triggered={scrolled} open={open}>
      <HeaderMenuMask triggered={open} />
      <HeaderScrolledMask triggered={scrolled} />
      <Container>
        <div className="logo">
          <Link to="/">
            <LogoImg fluid={icon} />
          </Link>
        </div>
        <div className="nav-d">
          {renderLinks()}
        </div>
        <div className={`nav-m${open ? ' open' : ''}`}>
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="icon"
          >
            <div className="first" />
            <div className="second" />
            <div className="third" />
          </button>
        </div>
        <div className="nav-mm">{renderLinks()}</div>
      </Container>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

// style={{ transitionDelay: `${openNav ? '250ms' : '100ms'}` }}
// className="nav-links"
// className="nav-links"
// className="nav-links"
// className="nav-links"
// className="nav-links"