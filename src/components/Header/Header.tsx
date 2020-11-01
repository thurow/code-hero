import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../logo.png'

const Header = (): JSX.Element => {
    return (
      <header className="main-header">
        <Link to="/">
          <img src={Logo} alt="Objective" width="96" />
        </Link>

        <div className="main-header__info">
          <div className="main-header__info--candidate">
            <strong>Alexandre Frederico Thurow</strong>
            <span>Teste de Front-end</span>
          </div>
          <div className="main-header__info--avatar">
            <strong>AF</strong>
          </div>
        </div>
      </header>
    )
}

export { Header }
