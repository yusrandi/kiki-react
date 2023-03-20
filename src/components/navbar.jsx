/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to={'/'} className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>

            </NavLink>
        
            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink to={'/'} className="navbar-item">
                MUT ALL IN
              </NavLink>
              <NavLink to={'/driver'} className="navbar-item">
                DRIVER
              </NavLink>
              <NavLink to={'/operator'} className="navbar-item">
                OPERATOR
              </NavLink>
              <NavLink to={'/mekanik'} className="navbar-item">
                MEKANIK
              </NavLink>
              <NavLink to={'/infra'} className="navbar-item">
                INFRA
              </NavLink>
              
              <NavLink to={'/housing'} className="navbar-item">
                BEP HOUSING
              </NavLink>
              <NavLink to={'/bep'} className="navbar-item">
                BEP
              </NavLink>
              
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Form Input Data
                </a>
        
                <div className="navbar-dropdown">
                  <NavLink to={'/input/pegawai'} className="navbar-item">
                    Data Pegawai
                  </NavLink>
                  <NavLink to={'/input/attendance'} className="navbar-item">
                    Data Absen
                  </NavLink>
                 
                  
                </div>
              </div>
            </div>
        
            <div className="navbar-end">
              <div className="navbar-item">
               
                <div className="buttons">
                
                  <button className="button is-light">
                    Log Out
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar