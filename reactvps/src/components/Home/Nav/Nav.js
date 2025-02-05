import React, { useState } from 'react'
import styles from './Nav.module.css' //using DropDown css from here
import { Link } from 'react-router-dom'
import Modal from '../../UI/Modal'
import NearbyStation from '../NearbyStation'

export default function Nav() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <Modal
                style={{
                    transform: showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: showModal ? '1' : '0'
                }}
                close={() => setShowModal(false)}>
                <NearbyStation />
            </Modal>

            <nav className="flex items-center p-3 flex-wrap z-10 absolute w-full">
                <a href="/" className="p-2 mr-4 inline-flex items-center">
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-white h-8 w-8 mr-2">
                        <path
                            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                    </svg>
                    <span className="text-2xl text-white font-bold tracking-wide">Virtual Police Station</span>
                </a>
                <button className=" inline-flex p-3 lg:hidden ml-auto nav-toggler" data-target="#navigation">
                    <img src="https://www.pinclipart.com/picdir/big/83-832401_sleek-custom-mini-metal-focus-usb-flash-drives.png"
                        className="w-8 h-8" alt="" />
                </button>
                <div
                    className="bg-gray-900 md:bg-transparent hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
                    <div
                        className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <a
                            href="/"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>HOME</span>
                        </a>

                        <div id="google_translate_element" className="lg:inline-flex text-white lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"></div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 items-center hover:bg-gray-900 hover:text-white">
                            <span>EMERGENCY SERVICES</span>
                        </button>
                        <a
                            href="#login-section"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>USER LOGIN</span>
                        </a>
                        <a
                            href="#status-section"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <span>VIEW STATUS</span>
                        </a>
                        <div className="relative inline-flex">
                            <div className={styles.dropdown}>
                                <button className={`${styles.dropbtn} rounded-tl-lg rounded-tr-lg`}>OFFICERS LOGIN </button>
                                <div className={styles.dropdownContent}>
                                    <Link to="/login/sho">STATION HOUSE OFFICER</Link>
                                    <Link to="/legal/login">LEGAL OFFICER</Link>
                                    <Link to="/login/sp">SUPERINTENDENT OF POLICE</Link>
                                    <Link to="/login/io">INVESTIGATION OFFICER</Link>
                                    <hr />
                                    <Link to="/volunteer/login">FACILITATOR</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};