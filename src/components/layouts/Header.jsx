import React from 'react'
import PropTypes from "prop-types"


const Header = ({ title, catagory }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{catagory}</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-white">{title}</p>
    </div>
  )
}

Header.defaultProps = {
  title: "Page Title",
  catagory: "Catagory"
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  catagory: PropTypes.string.isRequired,
}
export default Header