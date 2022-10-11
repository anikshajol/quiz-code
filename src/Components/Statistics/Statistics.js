import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const total = useLoaderData();
  const data = total.data;
  console.log(data);
  return (
    <div className="mt-12 w-full">
      <LineChart className="text-center" width={500} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Statistics;
