import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../logo.png'

const Header = (): JSX.Element => {
    return (
      <header className="main-header">
        <Link to="/">
          <img src={Logo} alt="Objective" width="96" />
        </Link>
      </header>
    )
}

export { Header }
