import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
const DashBoard = () => {
  const population = [
    { name: "Dhaka", population: 21.0 },
    { name: "Chittagong", population: 6.5 },
    { name: "Sylhet", population: 3.5 },
    { name: "Cox's Bazar", population: 2.5 },
    { name: "Rajshahi", population: 0.8 },
    { name: "Rangpur", population: 0.65 },
    { name: "Jessore", population: 0.48 },
    { name: "Comilla", population: 0.41 },
    { name: "Narayanganj", population: 0.39 },
    { name: "Barisal", population: 0.34 },
  ];

  return (
    <ResponsiveContainer width={100} height={100}>
      <BarChart
        width={500}
        height={300}
        data={population}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="population" stackId="a" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DashBoard;
