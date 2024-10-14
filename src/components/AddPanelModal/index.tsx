"use client"
import React, { useState, useEffect } from 'react';
import {useSearchParams, usePathname} from "next/navigation";
import InputGroup from '@/components/InputGroup'
import ModalComponent from '@/components/ModalComponent'

import Link from "next/link";
import CloseMark from '../CloseMarks/CloseMark';
import ButtonSolid from '../Buttons/ButtonSolid';
import ReactDOM from 'react-dom';

// interface AddPanelModalPropTypes {
    
// }

const Content = () => {
    let onClose = () => console.log("fechar");

    return (
        <>
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
            <ButtonSolid
                label="Acionar"
                customClasses="mt-8 w-full bg-[#FFD159]"
                onClick={onClose}
            />
        </>
    )
}


const AddPanelModal = () => {

    return (
        // <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-999 overflow-auto backdrop-blur flex justify-center items-center">
        //     <div className="relative bg-gray-dark m-auto rounded-2xl py-8 px-16 z-9999">
        //         <div className="flex flex-col items-center">
        //             <div className="absolute right-4 top-4">
        //                 <a href="#" onClick={() => console.log('fechou')}>
        //                     <CloseMark />
        //                 </a>
        //             </div>
        //             <div className="flex flex-col gap-2">
        //                 <h2 className="mb-3 text-center text-2xl font-medium text-white">Acionar novo painel</h2>
        //                 {/* <h2 className="mb-3 text-center text-2xl font-medium text-white">{title && title}</h2> */}
        //                 <InputGroup
        //                     label="Nome"
        //                     type="text"
        //                     placeholder="Nome"
        //                 />
        //                 <InputGroup
        //                     label="Marca"
        //                     type="text"
        //                     placeholder="Marca"
        //                 />
        //                 <InputGroupimport {useSearchParams, usePathname} from "next/navigation";Número de placas"
        //                     type="number"
        //                     placeholder="Número de placas"
        //                 />
        //                 <ButtonSolid
        //                     label="Acionar"
        //                     customClasses="mt-8"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </dialog>
        <ModalComponent
            title={"Acionar Novo Painel"}
            modalTrigger={
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9.59995V26.3999M9.6 18H26.4M18 34.7999C8.72162 34.7999 1.2 27.2783 1.2 18C1.2 8.72157 8.72162 1.19995 18 1.19995C27.2784 1.19995 34.8 8.72157 34.8 18C34.8 27.2783 27.2784 34.7999 18 34.7999Z" stroke="white" stroke-width="1.5" />
                </svg>
            }
            modalContent={<Content />}
        />
    );
};

export default AddPanelModal;