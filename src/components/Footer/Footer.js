import React from 'react';
import logo from '../../assets/logo.png'
import Icons from '../Icons/Icons'

function Footer() {
    return (
        <div className='bg-tertiary'>
            <div className="p-4 md:px-0 max-w-6xl mx-auto mt-6" >
                <div className="mx-0 sm:mx-6">
                    <div className="mt-0 w-full">
                        <div className="container mx-auto flex max-sm:flex-col items-center text-center text-text-tertiary ">
                            <div className="flex w-1/3 max-sm:w-full px-4 text-sm justify-center">
                                <img src={logo} className={"h-[75px] min-w-[75px] w-[75px] m-1.5"} />
                            </div>
                            <div className="flex flex-col w-1/3 max-sm:w-full px-4 max-sm:pt-2 text-sm justify-center">
                                <h1 className="font-bold pb-2">Nous contacter</h1>
                                <ul>
                                    <li>10 Rue Henri Giffard, 44300, Nantes</li>
                                    <li className="flex flex-wrap justify-center">ludiketlucid.connexion<p>@gmail.com</p></li>
                                    <li>+33 7 58 32 43 03</li>
                                </ul>
                            </div>
                            <div className="flex flex-col w-1/3 max-sm:w-full px-4 max-sm:pt-4 text-sm justify-center">
                                <h1 className="font-bold">Réseau sociaux</h1>
                                <div className="place-self-center">
                                    <Icons />
                                    <p className={"mb-2"}>Site développé par : </p>
                                    <ul>
                                        <li className={"mb-2"}><a target="_blank" href={"https://www.linkedin.com/in/florian-aubin-270519182/"}>Florian AUBIN</a></li>
                                        <li><a target="_blank" href={"https://www.linkedin.com/in/florian-bouilleteau-b75a90151/"}>Florian BOUILLETEAU</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
