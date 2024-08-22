"use client"
import React, { useState, useEffect } from 'react';
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import PieChart from '../Charts/PieChart';
import CloseMark from '../CloseMarks/CloseMark';
import RadialChart from '../Charts/RadialChart';


const PanelModal = () => {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
        {modal &&
            <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-999 overflow-auto backdrop-blur flex justify-center items-center">
                <Link className="fixed left-0 top-0 w-full h-full flex justify-center items-center" href={pathname}>
                </Link>
                <div className="relative bg-gray-dark m-auto rounded-2xl p-8 z-9999 text-white">
                    <div className="flex flex-col items-center">
                        <Link className="absolute right-4 top-4" href={pathname}>
                            <button type="button"><CloseMark /></button>
                        </Link>
                        <div className="flex flex-col items-center">
                            <h2 className="mb-3 text-center text-2xl font-medium text-white">Painel 1</h2>
                            <div className="bg-white bg-opacity-15 rounded-3xl py-1 px-3 flex items-center justify-center text-center gap-3 w-fit text-lg">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1"/>
                                    <path d="M12 8V12L14.5 14.5" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {/* {operatingPeriod} */}
                                08h00 - 16h00
                            </div>

                            <div className="flex">
                                <div className="flex flex-col gap-4 p-7.5">
                                    <div className="flex flex-col">
                                        <h5 className="text-lg">Marca</h5>
                                        <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                            {/* {brand} */}
                                            XXXXXXX
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <h5 className="text-lg">Modelo</h5>
                                        <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                            {/* {model} */}
                                            XXXXXXX
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <RadialChart value={77}/>
                                </div>

                                <div className="flex flex-col gap-4 p-7.5">
                                    <div className="flex flex-col">
                                        <h5 className="text-lg">Energia Atual</h5>
                                        <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                            {/* {currentEnergy} kwh */}
                                            67 kwh
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <h5 className="text-lg">Energia Armazenada</h5>
                                        <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                            {/* {currentEnergy} kwh */}
                                            17 kwh
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <PieChart
                                label="Monitoramento"
                                NoBorder
                                chartWidth="300"
                            />
                        </div>
                    </div>
                </div>
            </dialog>
        }
        </>
    );
};

export default PanelModal;