import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Upcoming Events</NavLink>
            </li>
            <li>
                <NavLink to="event">Submit your event</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav