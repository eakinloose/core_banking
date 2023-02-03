import React, { useEffect } from "react";
import { useState } from "react";
import {
   BarChart,
   Bar,
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";
import { MainWrapper } from "./maindashboardStyles";

const data = [
   {
      name: "Date A",
      Registered_Users: 4000,
      user: 0,
      min_value: 2400,
   },
   {
      name: "Date B",
      Registered_Users: 3000,
      user: 0,
      min_value: 1398,
   },
   {
      name: "Date C",
      Registered_Users: 2000,
      user: 0,
      min_value: 11800,
   },
   {
      name: "Date D",
      Registered_Users: 2780,
      user: 0,
      min_value: 3908,
   },
   {
      name: "Date E",
      Registered_Users: 1890,
      user: 0,
      min_value: 4800,
   },
   {
      name: "Date F",
      Registered_Users: 2390,
      user: 0,
      min_value: 3800,
   },
   {
      name: "Date G",
      Registered_Users: 3490,
      user: 0,
      min_value: 4300,
   },
];

const MainDashboard = () => {
   const [dataSet, setDataSet] = useState(data);
   
   const pushToData = () => {
      const newData = {
         name: "Date W",
         user: dataSet.length,
         Registered_Users: Math.floor(Math.random() * 2400),
         min_value: Math.floor(Math.random() * 10000),
      };
      const newdatas = [...dataSet, newData];
      setDataSet(newdatas);
   };

   return (
      <MainWrapper>
         <h2>Main Dashboard</h2>
         <button onClick={pushToData}>Alter data</button>
         <br />
         <br />
         <br />
         <div className="chartHolder">
            <div className="chart">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataSet}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Line
                        type="monotone"
                        dataKey="min_value"
                        stroke="#2160c5"
                        activeDot={{ r: 8 }}
                     />
                     <Line
                        type="monotone"
                        dataKey="Registered_Users"
                        stroke="#03b05e"
                     />
                  </LineChart>
               </ResponsiveContainer>
            </div>



            <div className="chart">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataSet}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey={Date.now} />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Line
                        type="monotone"
                        dataKey="user"
                        stroke="#2160c5"
                        activeDot={{ r: 8 }}
                     />
                     <Line
                        type="monotone"
                        dataKey= {null}
                        stroke="#03b05e"
                     />
                  </LineChart>
               </ResponsiveContainer>
            </div>



            <div className="chart">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataSet}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Bar dataKey="Registered_Users" fill="#03b05e" />
                     <Bar dataKey="min_value" fill="#2160c5" />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>
      </MainWrapper>
   );
};

export default MainDashboard;
