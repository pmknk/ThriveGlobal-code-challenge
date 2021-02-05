import React from "react"
import PropTypes from "prop-types"
import { externalUrlPropType } from "../utils"

const Video = ({title, src}) => {
  return  <iframe title={title} width="560" height="315" src={src} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
  
}

Video.propTypes = {
  title: PropTypes.string.isRequired,
  src: externalUrlPropType
}

export default Video
