import React from "react"
import PropTypes from "prop-types"

const HackerEarth = ({ color }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x="0px" y="0px" fill={color} aria-hidden="true" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="-237 239 24 24"><path d="M20.983.002H9.508v6.494h.11a3.629 3.629 0 0 1 3.557-1.332l-.023-.004c1.966.144 3.91 1.336 4.02 5.158v7.554a.299.299 0 0 1-.287.287h-2.11a.287.287 0 0 1-.287-.287V10.55c0-1.778-.585-3.114-2.341-3.114h-.038a2.606 2.606 0 0 0-2.6 2.78v-.008v7.665a.287.287 0 0 1-.287.287H7.124a.287.287 0 0 1-.287-.287V.004H3.193L3.126.003c-.823 0-1.493.652-1.523 1.468v20.987c.03.857.73 1.541 1.59 1.546h17.792a1.458 1.458 0 0 0 1.413-1.55v.004V1.474A1.38 1.38 0 0 0 21.021.005l-.038.001h.002zm-2.54 20.983H5.555V19.66h12.888z"/></svg>

  //   <svg
  //     version="1.1"
  //     xmlns="http://www.w3.org/2000/svg"
  //     role="img"
  //     fill={color}
  // xmlns:xlink="http://www.w3.org/1999/xlink"
  // focusable="false" width="1em" height="1em"
  //     x="0px"
  //     y="0px"
  //     viewBox="-237 239 24 24"
  //   >

  //     <path
  //       d="M-234.2,245.9c0-0.3-0.1-0.6-0.3-0.8l-2.2-2.7V242h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5
	// c0,0.2,0,0.4,0.2,0.5l1.9,1.8v0.4h-9.4v-0.4l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5v-10.9l-5.4,13.7h-0.7l-6.3-13.7v9.2
	// c-0.1,0.4,0.1,0.8,0.3,1.1l2.5,3.1v0.4h-7.1v-0.4l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1C-234.2,256.5-234.2,245.9-234.2,245.9z"
  //     />
  //   </svg>
  )
}

HackerEarth.propTypes = {
  color: PropTypes.string,
}

HackerEarth.defaultProps = {
  color: "#000000",
}

export default HackerEarth
