import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'

import police_officer_dashboard from '../../../assets/police_officer_dashboard.png'

export default function SideBar({ sideBarOpen, setSideBarOpen }) {
    const role = useParams().role
    const onLogout = () => {
        Cookies.remove('user')
        Cookies.remove('token')
        Cookies.remove('role')
    }

    let roleLabel
    if (role === 'io') {
        roleLabel = 'Investigation Officer'
    } else if (role === 'sho') {
        roleLabel = 'Station House Officer'
    } else if (role === 'sp') {
        roleLabel = 'Superintendent of Police'
    } else {
        roleLabel = 'Invalid URL'
    }

    return (
        <div
            className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${sideBarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}
        >
            <div className="flex items-center justify-center mt-8">
                <div className="items-center flex flex-col">
                    <img src={police_officer_dashboard} className="w-26 h-32" alt="" />
                    <div className="my-2 text-white text-xl text-center border-2 border-white p-2">{roleLabel}</div>
                </div>
            </div>

            <nav className="mt-10">
                <NavLink
                    activeClassName="flex items-center mt-4 py-2 px-6 block border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
                    to={`/dashboard/${role}`}
                    className="flex items-center mt-4 py-2 px-6 block text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
                >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                            fill="currentColor" />
                        <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                            fill="currentColor" />
                    </svg>

                    <div className="mx-4 uppercase">
                        Dashboard
                    </div>
                </NavLink>

                <NavLink
                    activeClassName="flex items-center mt-4 py-2 px-6 block border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
                    to={`/chart/dashboard/${role}`}
                    className="flex items-center mt-4 py-2 px-6 block text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
                >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                            fill="currentColor" />
                        <path
                            d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                            fill="currentColor" />
                        <path
                            d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                            fill="currentColor" />
                        <path
                            d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                            fill="currentColor" />
                    </svg>

                    <div className="mx-4 uppercase">
                        Statistics
                    </div >
                </NavLink>

                <NavLink
                    activeClassName="flex items-center mt-4 py-2 px-6 block border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
                    to="" exact
                    className="flex items-center mt-4 py-2 px-6 block text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
                            fill="currentColor" />
                        <path
                            d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
                            fill="currentColor" />
                        <path
                            d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
                            fill="currentColor" />
                    </svg>

                    <div className="mx-4">OPTION 2</div>
                </NavLink>

                <NavLink
                    onClick={onLogout}
                    exact
                    activeClassName="flex items-center mt-4 py-2 px-6 block border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
                    to=""
                    className="flex items-center mt-4 py-2 px-6 block text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
                >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                        </path>
                        <path fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"></path>
                    </svg>

                    <span className="mx-4">LOGOUT</span>
                </NavLink>
            </nav>
        </div>
    )
}
