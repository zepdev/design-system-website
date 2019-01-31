import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/zep-logo-new.svg'
import {
  DribbleIcon,
  MediumIcon,
  TwitterIcon,
  GithubIcon,
} from '../assets/icons'

const Footer = () => (
  <footer>
    <div className="zds-footer">
      <div className="zds-footer--container">
        <div>
          <img src={logo} alt="" />
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Feedback</Link>
        </div>
        <div>
          <DribbleIcon />
          <MediumIcon />
          <TwitterIcon />
          <GithubIcon />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

navigation[elem]
