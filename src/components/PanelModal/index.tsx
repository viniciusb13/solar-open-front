"use client"
import React, { useState, useEffect } from 'react';
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";


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
                <div className="relative bg-gray-dark m-auto rounded-2xl p-8 z-9999">
                    <div className="flex flex-col items-center">
                        <Link className="absolute right-4 top-4" href={pathname}>
                            <button type="button" className="text-white">X</button>
                        </Link>
                        <div>
                            <h2>Painel 1</h2>
                            <p>Marca</p>
                            <p>Modelo</p>
                            <p>Energia Atual</p>
                            <p>Energia Armazenada</p>
                            <p>Saúde do Painel</p>
                            <p>Monitoramento</p>
                        </div>
                    </div>
                </div>
            </dialog>
        }
        </>
    );
};

export default PanelModal;