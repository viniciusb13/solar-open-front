'use client'
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";
import { fill } from "tailwindcss/defaultTheme";

const PanelChart: React.FC = () => {
  const series = [
    {
      name: "Due Amount",
      data: [15, 9, 80, 32, 94, 68, 68, 74, 43],
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#FFD159"],
    // colors: ["#5750F1", "#0ABEF9"],
    
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },

    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function (e) {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "08h00",
        "09h00",
        "10h00",
        "11h00",
        "12h00",
        "13h00",
        "14h00",
        "15h00",
        "16h00",
        "17h00",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  return (
    <div className="w-full rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Energia Gerada
          </h4>
        </div>
        <div className="flex items-center gap-2.5">
          {/* <p className="font-medium uppercase text-dark dark:text-dark-6">
            Short by:
          </p> */}
          {/* <DefaultSelectOption options={["Mensal", "Anual"]} /> */}
           <div className="relative z-20 inline-flex px-2 py-1 appearance-none rounded-[8px] border border-stroke bg-white text-medium font-medium outline-none dark:border-dark-3 dark:bg-dark-2">
             <p>9 kwh</p>
           </div>
        </div>
      </div>
      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={310}
          />
        </div>
      </div>
    </div>
  );
};

export default PanelChart;
