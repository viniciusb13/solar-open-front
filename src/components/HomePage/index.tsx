"use client";
import React from "react";
import PieChart from "../Charts/PieChart";
import BasicChart from "../Charts/BasicChart";
import Table from "../Tables/Table";

import { panels } from '@/api/panels'

const HomePage: React.FC = () => {

  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <BasicChart />
        <PieChart
          label="Monitoramento Geral"
        />
        <div className="col-span-12">
          <Table
            panels={panels}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
