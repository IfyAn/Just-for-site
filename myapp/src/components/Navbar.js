import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar=(pimp)=>{
    setTimeout(()=>{
        pimp.history.push('')
    }, 7000)
    return(
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a to="#"className="brand-logo">Poke'Times</a>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>    
    )
}

export default withRouter(Navbar)