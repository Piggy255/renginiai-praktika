import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Upcoming Events</Link>
            </li>
            <li>
                <Link to="event">Submit your event</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav