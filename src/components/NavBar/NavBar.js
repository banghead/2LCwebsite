import React from 'react';
import logo from '../../assets/logo.png'

function NavBar() {
    return (
        <nav className="mt-0 w-full bg-tertiary text-text-tertiary">
            <div className="container mx-auto flex items-center">
                <div className="flex w-1/2 pl-4 text-sm">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center z-10">
                        <li className="mr-14">
                            <img src={logo} className={"h-[75px] w-[75px] m-1.5"}/>
                        </li>
                        <li className="mr-5">
                            <a className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl"
                               href="#">Actualités</a>
                        </li>
                        <li className="mr-5">
                            <a className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl"
                               href="#">Action culturelle</a>
                        </li>
                        <li className="mr-5">
                            <a className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl"
                               href="#">Action sociales</a>
                        </li>
                        <li className="mr-2">
                            <a className="inline-block text-text-tertiary no-underline hover:text-gray-200 hover:underline py-2 px-2 text-xl"
                               href="#">Qui sommes nous ?</a>
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


                <div className="flex w-1/2 justify-end content-center">

                    {/*Facebook */}
                    <a className="inline-block text-text-tertiary no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                       data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                             className="w-5 h-5">
                            <path fill="currentColor"
                                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                        </svg>
                    </a>

                    {/*Instagram*/}
                    <a className="inline-block text-text-tertiary no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                       data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
                            <path fill="currentColor"
                                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </a>

                    {/*Youtube*/}
                    <a className="inline-block text-text-tertiary no-underline hover:text-white hover:text-underline text-center h-10 p-2 mr-5 md:h-auto md:p-4 avatar"
                       data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5">
                            <path fill="currentColor"
                                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                        </svg>
                    </a>

                </div>

            </div>
        </nav>
    );
}

export default NavBar;
