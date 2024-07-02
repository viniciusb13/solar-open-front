"use client"
import React, { useState, useEffect } from 'react';
import {useSearchParams, usePathname} from "next/navigation";
import InputGroup from '@/components/FormElements/InputGroup'
import Link from "next/link";


const NewPanelModal = () => {
    const searchParams = useSearchParams();
    const modal = searchParams.get("new-panel");
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
                            <h2>Acionar novo painel</h2>
                            <InputGroup
                                label="Nome"
                                type="text"
                                placeholder="Nome"
                            />
                            <InputGroup
                                label="Marca"
                                type="text"
                                placeholder="Marca"
                            />
                            <InputGroup
                                label="Modelo"
                                type="text"
                                placeholder="Modelo"
                            />
                            <InputGroup
                                label="Número de placas"
                                type="number"
                                placeholder="Número de placas"
                            />
                            <button>Criar</button>
                        </div>
                    </div>
                </div>
            </dialog>
        }
        </>
    );
};

export default NewPanelModal;