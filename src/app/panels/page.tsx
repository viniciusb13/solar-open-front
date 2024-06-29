import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PanelCard from "@/components/PanelCard/PanelCard";
import WeatherInfo from "@/components/WeatherInfo/WeatherInfo";
import PanelChart from "@/components/PanelChart/PanelChart";
import PanelCarousel from "@/components/PanelCarousel/PanelCarousel";
import { EmblaOptionsType } from 'embla-carousel'

import '@/css/base.css'
import '@/css/embla.css'

export const metadata: Metadata = {
  title: "Next.js Panels Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Panels page for NextAdmin Dashboard Kit",
};

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Panels = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Painéis" />
        <WeatherInfo />
        <div className="flex flex-col gap-8 justify-center items-center">
          <PanelChart />
          <div className="text-5xl mt-8 mb-6 flex gap-6">
            Dispositivos
            <button>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.59995V26.3999M9.6 18H26.4M18 34.7999C8.72162 34.7999 1.2 27.2783 1.2 18C1.2 8.72157 8.72162 1.19995 18 1.19995C27.2784 1.19995 34.8 8.72157 34.8 18C34.8 27.2783 27.2784 34.7999 18 34.7999Z" stroke="white" stroke-width="1.5" />
              </svg>
            </button>
          </div>
          <PanelCarousel
            slides={SLIDES}
            options={OPTIONS}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Panels;
