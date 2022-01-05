import React from "react";
import Chart from "react-apexcharts";

export default function LineSample() {
  const guestSeries = [
    {
      name: "Guests",
      data: [19, 22, 20, 26,5]
    }
  ];
  const guestOption = {
    chart: {
      id: "guest",
      group: "social",
      animations: {
        speed: 100
      }
    },
    xaxis: {
      categories: ["2022-01-01", "2022-2-01", "2022-03-01", "2022-04-01","2022-05-01"]
    },
    stroke: {
      curve: "smooth"
    }
  };
  
  return (
    <div>
      <Chart
        type="line"
        series={guestSeries}
        options={guestOption}
      />
    </div>
  );
}
