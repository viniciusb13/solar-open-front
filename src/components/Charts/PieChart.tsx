import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";

interface PieChartPropTypes {
  label: string;
  NoBorder?: boolean;
  customClass?: string;
  chartWidth?: string;
}

const PieChart = ({ label, NoBorder, chartWidth }: PieChartPropTypes) => {
  const series = [37, 19, 31];

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors: ["#FFC300", "#FB902E", "#F33154", "#ADBCF2"],
    labels: ["Gasta", "Armazenada", "Previsão"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          background: "transparent",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: "400",
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: chartWidth ? chartWidth : 415,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className={`col-span-12 rounded-[10px] bg-white px-7.5 pb-7 pt-7.5 dark:bg-gray-dark ${!NoBorder && "shadow-1 dark:shadow-card"} xl:col-span-5`}>
      <div className="mb-9 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            {label}
          </h4>
        </div>
        {/* <div>
          <DefaultSelectOption options={["Mensal", "Anual"]} />
        </div> */}
      </div>

      <div className="mb-8">
        <div className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[350px]">
        <div className="-mx-7.5 flex flex-wrap items-center justify-start gap-y-2.5">
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#FFC300]"></span>
              <p className="flex w-full gap-3 text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Gasta </span>
                <span> 65% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#FB902E]"></span>
              <p className="flex w-full gap-3 text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Armazenada </span>
                <span> 23% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#F33154]"></span>
              <p className="flex w-full gap-3 text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Previsão </span>
                <span> 31% </span>
              </p>
            </div>
          </div>
          {/* <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light-3"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> Unknown </span>
                <span> 12% </span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
