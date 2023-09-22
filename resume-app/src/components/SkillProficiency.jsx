import React from "react";
import { ResponsivePie } from "@nivo/pie";

const SkillProficiency = () => {
  // Skill proficiency data for individual pie charts
  const proficiencyData = [
    {
      id: "C#",
      label: "C#",
      value: 90,
      color: "rgba(75, 192, 192, 0.6)", // Custom color for C#
    },
    {
      id: "ReactJS",
      label: "ReactJS",
      value: 85,
      color: "rgba(255, 99, 132, 0.6)", // Custom color for ReactJS
    },
    {
      id: "NET",
      label: ".NET",
      value: 80,
      color: "rgba(255, 205, 86, 0.6)", // Custom color for .NET
    },
    {
      id: "Excel/VBA",
      label: "Excel/VBA",
      value: 75,
      color: "rgba(54, 162, 235, 0.6)", // Custom color for Excel/VBA
    },
    {
      id: "Python",
      label: "Python",
      value: 95,
      color: "rgba(153, 102, 255, 0.6)", // Custom color for Python
    },
  ];

  const chartSize = 200; // Customize the size of the charts (half of the original size)

  return (
    <div>
      <h2>Skill Proficiency Showcase (Nivo)</h2>
      <div
        className="pie-charts"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {proficiencyData.map((data) => (
          <div
            className="pie-chart"
            key={data.id}
            style={{ width: chartSize, height: chartSize }}
          >
            <h3>{data.label}</h3>
            <div style={{ height: chartSize, width: chartSize }}>
              <ResponsivePie
                data={[data]}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                innerRadius={0.6} // Adjust inner radius for the donut effect
                padAngle={0.7}
                cornerRadius={3}
                colors={[data.color]} // Use the custom color for each chart
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: "color" }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                // Calculate the percentage of remaining (100 - proficiency)
                slicesLabels={(slice) => `${slice.id} ${100 - data.value}%`}
                sliceLabel={(slice) => {
                  return `${slice.id} ${(slice.value / 100) * data.value}%`;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProficiency;
