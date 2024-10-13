import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";
import PieChart from '../Charts/PieChart';
import RadialChart from '../Charts/RadialChart';
import CloseMark from '../CloseMarks/CloseMark';
import { Panel } from '@/types/panel';

const PanelCard = ({ name, health, currentEnergy, operatingPeriod, storedEnergy, brand, model, status }: Panel) => {
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div className='w-full px-16 py-8 rounded-[32px] bg-white bg-opacity-5 flex flex-col justify-center items-center'>
            {/* <div className='w-full px-16 py-8 rounded-[32px] bg-white bg-opacity-5 flex flex-col justify-center items-center' onClick={onOpen}> */}
                <h4 className="text-3xl font-medium mb-8">{name}</h4>
                <div className="bg-white bg-opacity-15 rounded-3xl py-1 px-3 flex items-center gap-3 text-lg">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1"/>
                        <path d="M12 8V12L14.5 14.5" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {operatingPeriod}
                </div>
                <div>
                    <Image
                    className="flex"
                    src={"/images/illustration/solar-panel-ico.svg"}
                    alt="Painel Solar"
                    width={193}
                    height={200}
                    />
                </div>
                <div className="w-full flex justify-evenly gap-4">
                    <div>
                        <h5 className="text-xl">Energia Atual</h5>
                        <div className="mt-2 text-xl font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                            {currentEnergy} kwh
                        </div>
                    </div>
                    <div>
                        <h5 className="text-xl">Saúde do Painel</h5>
                        <div className="mt-2 text-xl font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                            {health}%
                        </div>
                    </div>
                </div>
            {/* // </Link> */}
            </div>
            {/* <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                hideCloseButton
                portalContainer={document.body}
                classNames={{
                    wrapper: "bg-black bg-opacity-50 z-999 overflow-auto backdrop-blur",
            }}>
                <ModalContent className="bg-gray-dark m-auto rounded-2xl p-8 text-white w-fit relative">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody className="flex flex-col items-center">
                            <button className="absolute right-4 top-4" type="button" onClick={onClose}><CloseMark /></button>
                            <div className="flex flex-col items-center">
                                <h2 className="mb-3 text-center text-2xl font-medium text-white">{name}</h2>
                                <div className="bg-white bg-opacity-15 rounded-3xl py-1 px-3 flex items-center justify-center text-center gap-3 w-fit text-lg">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1"/>
                                        <path d="M12 8V12L14.5 14.5" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    {operatingPeriod}
                                </div>

                                <div className="flex">
                                    <div className="flex flex-col gap-4 p-7.5">
                                        <div className="flex flex-col">
                                            <h5 className="text-lg">Marca</h5>
                                            <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                                {brand}
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <h5 className="text-lg">Modelo</h5>
                                            <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                                {model}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <RadialChart
                                            value={health}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-4 p-7.5">
                                        <div className="flex flex-col">
                                            <h5 className="text-lg">Energia Atual</h5>
                                            <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                                {currentEnergy} kwh
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <h5 className="text-lg">Energia Armazenada</h5>
                                            <div className="px-4 mt-2 text-lg font-bold py-2 text-center bg-white bg-opacity-15 rounded-3xl">
                                                {storedEnergy} kwh
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
                        </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal> */}
        </>
    );
};

export default PanelCard;
