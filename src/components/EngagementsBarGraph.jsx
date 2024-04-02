import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// Updated data with total, linkClicks, and qrScans
const data = [
  { date: "1 Apr", total: 12, linkClicks: 5, qrScans: 7 },
  { date: "2 Apr", total: 15, linkClicks: 6, qrScans: 9 },
  { date: "3 Apr", total: 17, linkClicks: 8, qrScans: 9 },
  { date: "04 Apr", total: 15, linkClicks: 8, qrScans: 10 },
  { date: "05 Apr", total: 16, linkClicks: 9, qrScans: 11 },
  { date: "06 Apr", total: 17, linkClicks: 5, qrScans: 12 },
  { date: "07 Apr", total: 18, linkClicks: 6, qrScans: 13 },
  { date: "08 Apr", total: 19, linkClicks: 7, qrScans: 7 },
  { date: "09 Apr", total: 20, linkClicks: 8, qrScans: 8 },
  { date: "10 Apr", total: 21, linkClicks: 9, qrScans: 9 },
  { date: "11 Apr", total: 22, linkClicks: 5, qrScans: 10 },
  { date: "12 Apr", total: 23, linkClicks: 6, qrScans: 11 },
  { date: "13 Apr", total: 24, linkClicks: 7, qrScans: 12 },
  { date: "14 Apr", total: 25, linkClicks: 8, qrScans: 13 },
  { date: "15 Apr", total: 26, linkClicks: 9, qrScans: 7 },
  { date: "16 Apr", total: 27, linkClicks: 5, qrScans: 8 },
  { date: "17 Apr", total: 28, linkClicks: 6, qrScans: 9 },
  { date: "18 Apr", total: 29, linkClicks: 7, qrScans: 10 },
  { date: "19 Apr", total: 30, linkClicks: 8, qrScans: 11 },
  { date: "20 Apr", total: 31, linkClicks: 9, qrScans: 12 },
  { date: "21 Apr", total: 32, linkClicks: 5, qrScans: 13 },
  { date: "22 Apr", total: 33, linkClicks: 6, qrScans: 7 },
  { date: "23 Apr", total: 34, linkClicks: 7, qrScans: 8 },
  { date: "24 Apr", total: 35, linkClicks: 8, qrScans: 9 },
  { date: "25 Apr", total: 36, linkClicks: 9, qrScans: 10 },
  { date: "26 Apr", total: 37, linkClicks: 5, qrScans: 11 },
  { date: "27 Apr", total: 38, linkClicks: 6, qrScans: 12 },
  { date: "28 Apr", total: 39, linkClicks: 7, qrScans: 13 },
  { date: "29 Apr", total: 40, linkClicks: 8, qrScans: 7 },
  { date: "30 Apr", total: 41, linkClicks: 9, qrScans: 8 },
];

function EngagementsBarGraph() {
  return (
    <div className="w-full md:h-64 h-48 bg-white p-8">
      <h1 className="text-lg font-semibold	mb-2">Engagements Over Time</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" /> {/* Corrected to "date" */}
          <YAxis /> {/* YAxis does not need a dataKey */}
          <Tooltip />
          <Legend />
          <Bar dataKey="linkClicks" fill="#8884d8" name="Link Clicks" />
          <Bar dataKey="qrScans" fill="#82ca9d" name="QR Scans" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EngagementsBarGraph;
