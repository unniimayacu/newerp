import React from "react";
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
} from "recharts";

const data = [
  {
    name: "Pro A",
    uv: 10,
    // pv: 2400,
    amt: 10,
  },
  {
    name: "Pro B",
    uv: 30,
    // pv: 1398,
    amt: 20,
  },
  {
    name: "Pro C",
    uv: 200,
    // pv: 9800,
    amt: 30,
  },
  {
    name: "Pro D",
    uv: 80,
    // pv: 3908,
    amt: 40,
  },
  {
    name: "Pro E",
    uv: 180,
    // pv: 4800,
    amt: 50,
  },
  {
    name: "Pro F",
    uv: 130,
    // pv: 3800,
    amt: 60,
  },
  {
    name: "Pro G",
    uv: 150,
    // pv: 4300,
    amt: 70,
  },
];

function BarCharts() {
  return (
    <div>
      {/* <ResponsiveContainer width="100%" aspect={3}> */}
        <BarChart
          width={500}
          height={240}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="uv" fill="#007bc5" width={10} />
        </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default BarCharts;
