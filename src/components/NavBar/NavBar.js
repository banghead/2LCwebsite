import React from 'react';
import logo from '../../assets/images/logo.png'
import Icons from '../Icons/Icons'
import {Link} from "react-router-dom";
import './NavBar.css'

let isDropdownActive = false;

function reportWindowSize() {
    document.getElementById("dropdown").classList.add('hidden');
}

window.onresize = reportWindowSize;


function dropdown() {
    isDropdownActive = !isDropdownActive;
    if (isDropdownActive) {
        document.getElementById("dropdown").classList.remove('hidden');
    } else {
        document.getElementById("dropdown").classList.add('hidden');
    }
}


function NavBar() {
    return (
        <nav className="mt-0 w-full bg-tertiary text-text-tertiary">
            <div className="container mx-auto flex items-center justify-between	px-4">
                <div className="flex text-sm">
                    <ul className="list-reset flex justify-between flex-1 lg:flex-none items-center">
                        <li className="mr-14">
                            <Link to={"accueil"} className="flex items-center ">
                                <img src={logo} className={"h-[75px]  min-w-[75px] w-[75px] m-1.5"} alt={"logo"}/>
                            </Link>
                        </li>
                        {/*TODO*/}
                        <li className="mr-2 hidden lg:inline">
                            <Link to={"qui-sommes-nous"}
                                  className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Qui sommes nous ?
                            </Link>
                        </li>
                        <li className="mr-5 hidden lg:inline">
                            <Link to={"atelier"}
                                  className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Ateliers/Cours
                            </Link>
                        </li>
                        {/*TODO*/}
                        <li className="mr-5 hidden lg:inline">
                            <Link to={"actualite"}
                                  className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Actualités
                            </Link>

                        </li>
                        {/*TODO*/}
                        <li className="mr-5 hidden lg:inline">
                            <Link to={"artiste-show"}
                                  className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                Nos artistes / Nos spectacles
                            </Link>
                        </li>
                        <li className="mr-5 hidden lg:inline">
                            <Link to={"farmer"}
                                  className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl">
                                2LC Farmer
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className="justify-end content-center hidden lg:inline">
                    <Icons/>
                </div>

                <div id={"menuBurger"} onClick={dropdown} className="space-y-2 lg:hidden">
                    <div className="w-8 h-0.5 bg-text-tertiary"/>
                    <div className="w-8 h-0.5 bg-text-tertiary"/>
                    <div className="w-8 h-0.5 bg-text-tertiary"/>
                </div>

            </div>
            <div id={"dropdown"} className={"hidden"}>
                <ul>
                    <li className={"pr-6 pl-6"}>
                        <div className={"border-b pb-3 pt-3"}>
                    {/*    TODO*/}
                        <Link to={"qui-sommes-nous"}
                              className="text-text-tertiary">
                            Qui sommes nous ?
                        </Link>
                    </div>
                    </li>
                    <li className={"pr-6 pl-6"}>
                        <div className={"border-b pb-3 pt-3"}>
                            <Link to={"atelier"}
                                  className="text-text-tertiary">
                                Ateliers/Cours
                            </Link>
                        </div>
                    </li>
                    {/*TODO*/}
                    <li className={"pr-6 pl-6"}>
                        <div className={"border-b pb-3 pt-3"}>
                            <Link to={"actualite"}
                                  className="text-text-tertiary">
                                Actualités
                            </Link>
                        </div>
                    </li>
                    {/*TODO*/}
                    <li className={"pr-6 pl-6 pb-4"}>
                        <div className={"border-b pb-3 pt-3"}>
                            <Link to={"action-sociales"}
                                  className="text-text-tertiary">
                                Nos artistes / Nos spectacles
                            </Link>
                        </div>
                    </li>
                    <li className={"pr-6 pl-6 pb-4"}>
                        <div className={"border-b pb-3 pt-3"}>
                            <Link to={"action-sociales"}
                                  className="text-text-tertiary">
                                2LC Farmer
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
