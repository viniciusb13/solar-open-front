import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface PanelCardProps {
    panelName: string;
    panelHealth: number;
    currentEnergy: number;
    operatingPeriod: string;
}

const PanelCard = ({ panelName, panelHealth, currentEnergy, operatingPeriod }: PanelCardProps) => {
    return (
        <Link href="?modal=true" className='w-full px-16 py-8 rounded-[32px] bg-white bg-opacity-5 flex flex-col justify-center items-center'>
            {/* <Link href="?modal=true"> */}
                <h4 className="text-3xl font-medium mb-8">{panelName}</h4>
            {/* </Link> */}
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
                        {panelHealth}%
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PanelCard;
