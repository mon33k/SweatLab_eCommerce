import React, {Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import '../stylesheets/NavBar.css'

import Main from './Main';
import Contact from './Contact'
import Cart from './Cart';

const NavBar = () => {
    
    return (
        <div>
            <div className="navbar-container">
                <div className="navLinks">
                    <Link to='/landing'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='navLinks'>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/profile'>Profile</Link>
                </div>
            </div>

            <Switch>
                <Route path='/landing'>
                    {/* <LandingPage/> */}
                </Route>

                <Route path='/shop'>
                    <Main/>
                </Route>

                <Route path='/contact'>
                    <Contact/>
                </Route>

                <Route path='/cart'>
                    <Cart/>
                </Route>
            </Switch>
        </div>
    )
}

export default NavBar;