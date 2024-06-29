"use client";
import { ApexOptions } from "apexcharts";
import ChartOne from './LineChart';
import ProgressBar from '../ProgressBar/ProgressBar';
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";

const BasicChart: React.FC = () => {
  // const series = [
  //   {
  //     name: "Energia Gerada",
  //     data: [29],
  //   },
  // ];
  

  // const options: ApexOptions = {
  //   chart: {
  //     type: 'bar',
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true
  //     }
  //   },
  //   legend: {
  //       show: false,
  //       position: "top",
  //       horizontalAlign: "left",
  //     },
  //   series: [{
  //     data: [{
  //       x: 'category A',
  //       y: 10
  //     }]
  //   }]
  // };


  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Armazenamento de energia geral
          </h4>
      </div>
      <div className="-ml-4 -mr-5">
        <ProgressBar progressPercentage={29} />
      </div>
      <ChartOne />
    </div>
  );
};

export default BasicChart;
