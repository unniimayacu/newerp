import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: " ",
    Department01: 0,
    Department02: 0,
    Department03: 0,
    amt: 0,
  },
  {
    name: " ",
    Department01: 2,
    Department02: 20,
    Department03: 30,
    amt: 10,
  },
  {
    name: " ",
    Department01: 26,
    Department02: 60,
    Department03: 3,
    amt: 30,
  },
  {
    name: " ",
    Department01: 60,
    Department02: 39,
    Department03: 40,
    amt: 40,
  },
  {
    name: " ",
    Department01: 45,
    Department02: 40,
    Department03: 60,
    amt: 50,
  },
  // {
  //   name: " ",
  //   uv: 2390,
  //   pv: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: " ",
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

function LineCharts() {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt" />
          <Tooltip />
          <Legend />
          
          <Line
            type="monotone"
            dataKey="Department01"
            stroke="#e11cef"
            activeDot={{ r: 10 }}
          />
          <Line
            type="monotone"
            dataKey="Department02"
            stroke="#e77171"
            activeDot={{ r: 10 }}
          />
          <Line
            type="monotone"
            dataKey="Department03"
            stroke="#4d1bde"
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineCharts