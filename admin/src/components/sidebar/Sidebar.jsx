import './sidebar.css'

import React from 'react'
import { Home, BarChart, CurrencyExchange, PermIdentity,  Storefront } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/' className='link'>
                            <li className='sidebarListItem'>
                                <Home className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/users' className='link'>
                            <li className='sidebarListItem'>
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className='sidebarListItem'>
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <CurrencyExchange className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar