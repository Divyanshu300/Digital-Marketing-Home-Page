import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({btnText , location , className = "" , type = ""}) => {
  return (
    <Link to={location}>
        <button
            type={type}
            className={` ${className} p-3 cursor-pointer text-white rounded-lg hover:scale-95 transition-all duration-200`}
        >
            {btnText}
        </button>
    </Link>
  )
}

export default Btn