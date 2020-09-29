import React, {Component} from 'react'
import { render } from 'react-dom';
import { Route, Switch, Link } from 'react-router-dom'

import Main from './Main';
import Contact from './Contact'

const NavBar = () => {

    return (
        <div>
            <div>
                <Link to='/landing'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/contact'>Contact</Link>
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
            </Switch>
        </div>
    )
}

export default NavBar;