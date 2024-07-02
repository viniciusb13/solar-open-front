"use client"
import React, { useState, useEffect } from 'react';
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import PieChart from '../Charts/PieChart';
import CloseMark from '../CloseMarks/CloseMark';
import CheckMark from '../CheckMarks/CheckMark';
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
                        <div>
                            <h2 className="mb-3 text-center text-2xl font-medium text-white">Painel 1</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-4">
                                    <h5 className="text-xl">Marca</h5>
                                    <div className="mt-2 text-xl font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                        {/* {brand} */}
                                        XXXXXXXXX
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h5 className="text-xl">Modelo</h5>
                                    <div className="mt-2 text-xl font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                        {/* {model} */}
                                        XXXXXXXXXXXX
                                    </div>
                                </div>
                                <p>Horário Funcionamento</p>
                            </div>
                            <div>
                                <RadialChart />
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div>
                                    <h5 className="text-xl">Energia Atual</h5>
                                    <div className="mt-2 text-xl font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                        {/* {currentEnergy} kwh */}
                                        67 kwh
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-xl">Energia Armazenada</h5>
                                    <div className="mt-2 text-xl font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                        {/* {currentEnergy} kwh */}
                                        17 kwh
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