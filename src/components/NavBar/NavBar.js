import React from 'react';
import logo from '../../assets/logo.png'
import Icons from '../Icons/Icons'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="mt-0 w-full bg-tertiary text-text-tertiary">
            <div className="container mx-auto flex items-center justify-between	px-4">
                <div className="flex text-sm">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-14">
                            <Link to={"2LCwebsite/accueil"} className="flex items-center ">
                                <img src={logo} className={"h-[75px]  min-w-[75px] w-[75px] m-1.5"} alt={"logo"} />
                            </Link>
                        </li>
                        <li className="mr-2 hidden md:inline">
                            <Link to={"2LCwebsite/qui-sommes-nous"} className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Qui sommes nous ?
                            </Link>
                        </li>
                        <li className="mr-5 hidden md:inline">
                            <Link to={"2LCwebsite/actualite"}
                                className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Actualités
                            </Link>

                        </li>
                        <li className="mr-5 hidden md:inline">
                            <Link to={"2LCwebsite/action-culturelle"}
                                className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Action culturelle
                            </Link>

                        </li>
                        <li className="mr-5 hidden md:inline">
                            <Link to={"2LCwebsite/action-sociales"}
                                className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Action sociale
                            </Link>

                        </li>
                        <li>

                            {/*<Dropdown*/}
                            {/*    label="Dropdown button"*/}
                            {/*    dismissOnClick={false}*/}
                            {/*>*/}
                            {/*    <Dropdown.Item>*/}
                            {/*        Dashboard*/}
                            {/*    </Dropdown.Item>*/}
                            {/*    <Dropdown.Item>*/}
                            {/*        Settings*/}
                            {/*    </Dropdown.Item>*/}
                            {/*    <Dropdown.Item>*/}
                            {/*        Earnings*/}
                            {/*    </Dropdown.Item>*/}
                            {/*    <Dropdown.Item>*/}
                            {/*        Sign out*/}
                            {/*    </Dropdown.Item>*/}
                            {/*</Dropdown>*/}

                        </li>
                    </ul>
                </div>


                <div className="justify-end content-center hidden md:inline">
                    <Icons />
                </div>

                <div className="space-y-2 md:hidden">
                    <div className="w-8 h-0.5 bg-text-tertiary"/>
                    <div className="w-8 h-0.5 bg-text-tertiary"/>
                    <div className="w-8 h-0.5 bg-text-tertiary"/>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
