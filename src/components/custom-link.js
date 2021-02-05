import React from "react"
import PropTypes from "prop-types"
import { externalUrlPropType } from "../utils"

const CustomLink = ({ text, href }) => {
  return <a rel="noopener noreferrer" target="_blank" href={href}>{text}</a>
}

CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: externalUrlPropType
}

export default CustomLink
