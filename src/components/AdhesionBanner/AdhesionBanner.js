import React from 'react';
import {MegaphoneIcon, XMarkIcon} from '@heroicons/react/24/outline'
import Button from "../Button/Button";

function AdhesionBanner() {
    return (
        <div className="bg-tertiary text-text-tertiary mt-[4.5em] mr-20 ml-20 ">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
                        <span className="flex rounded-lg bg-tertiary p-2 border">
                          <MegaphoneIcon className="h-6 w-6 text-text-tertiary" aria-hidden="true"/>
                        </span>
                        <p className="ml-3 truncate font-medium text-text-tertiary">
                            <span className="hidden md:inline">Bonne nouvelle ! les adhésions sont ouvertes.</span>
                        </p>
                    </div>
                    <div className="order-3 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto flex justify-end ">
                        <Button>J'adhère !</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdhesionBanner;
