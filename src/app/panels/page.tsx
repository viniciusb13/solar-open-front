import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import WeatherInfo from "@/components/WeatherInfo/WeatherInfo";
import PanelChart from "@/components/PanelChart/PanelChart";
import PanelCarousel from "@/components/PanelCarousel/PanelCarousel";
// import { panels } from "@/api/panels"
import { EmblaOptionsType } from 'embla-carousel'

import '@/css/base.css'
import '@/css/embla.css'
import Link from "next/link";

export const metadata: Metadata = {
  title: "Painéis | Solar Open",
  description: "Solar Open",
};

const OPTIONS: EmblaOptionsType = { loop: true }

// const panels = [
//   {
//     name: "Painel 1",
//     health: 87,
//     currentEnergy: 98,
//     operatingPeriod: "08h00 - 16h00",
//   },
//   {
//     name: "Painel 2",
//     health: 55,
//     currentEnergy: 113,
//     operatingPeriod: "08h00 - 16h00",
//   },
//   {
//     name: "Painel 3",
//     health: 73,
//     currentEnergy: 54,
//     operatingPeriod: "08h00 - 16h00",
//   },
//   {
//     name: "Painel 4",
//     health: 81,
//     currentEnergy: 85,
//     operatingPeriod: "08h00 - 16h00",
//   },
//   {
//     name: "Painel 5",
//     health: 93,
//     currentEnergy: 291,
//     operatingPeriod: "08h00 - 16h00",
//   },
//   {
//     name: "Painel 6",
//     health: 39,
//     currentEnergy: 121,
//     operatingPeriod: "08h00 - 16h00",
//   },
//   {
//     name: "Painel 7",
//     health: 99,
//     currentEnergy: 198,
//     operatingPeriod: "08h00 - 16h00",
//   },
// ]

const Panels = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Painéis" />
        <WeatherInfo />
        <div className="flex flex-col gap-8 justify-center items-center">
          <PanelChart />
          <div className="text-3xl mt-8 mb-6 flex gap-6">
            Dispositivos
            <Link href="?new-panel=true">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.59995V26.3999M9.6 18H26.4M18 34.7999C8.72162 34.7999 1.2 27.2783 1.2 18C1.2 8.72157 8.72162 1.19995 18 1.19995C27.2784 1.19995 34.8 8.72157 34.8 18C34.8 27.2783 27.2784 34.7999 18 34.7999Z" stroke="white" stroke-width="1.5" />
              </svg>
            </Link>
          </div>
          <PanelCarousel
            // panels={panels}
            options={OPTIONS}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Panels;
