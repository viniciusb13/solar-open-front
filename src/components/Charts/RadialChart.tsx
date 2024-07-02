"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const RadialChart: React.FC = () => {
    
    const series = [81];
    const options: ApexOptions = {
        chart: {
            height: 220,
            width: 200,
            type: "radialBar",
        },

        colors: ["#FFC300"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "60%",
                    background: "#293450"
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "12.5px",
                        fontWeight: "500"
                    },
                    value: {
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: "bold",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "solid",
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Saúde do Painel"]
    };

  return (
    <div className="col-span-12 rounded-[10px] px-7.5 pb-6 pt-7.5 xl:col-span-7">
{/* 
        <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Saúde do Painel
          </h4>

        </div> */}

        <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={220}
            width={200}
        />
    </div>
  );
};

export default RadialChart;