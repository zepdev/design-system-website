import React from 'react'
import { Link } from 'gatsby'
import ZeppelinIcon from './icons/ZeppelinIcon'
import DribbleIcon from './icons/DribbleIcon'
import MediumIcon from './icons/MediumIcon'
import TwitterIcon from './icons/TwitterIcon'
import GithubIcon from './icons/GithubIcon'

const Footer = () => (
  <footer>
    <div className="zds-footer">
      <div className="zds-footer--container">
        <div className="zds-footer--link__container">
          <ZeppelinIcon className="zds-footer--img" />
          <Link to="/" className="zds-footer--link">
            Privacy Policy
          </Link>
          <Link to="/" className="zds-footer--link">
            Terms & Conditions
          </Link>
          <Link to="/" className="zds-footer--link">
            Feedback
          </Link>
        </div>
        <div className="zds-footer--icon__container">
          <DribbleIcon className="zds-footer--icon" />
          <MediumIcon className="zds-footer--icon" />
          <TwitterIcon className="zds-footer--icon" />
          <GithubIcon className="zds-footer--icon" />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
