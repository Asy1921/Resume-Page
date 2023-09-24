import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const SkillProficiency = () => {
  // Skill proficiency data for individual pie charts
  const proficiencyData = [
    {
      title: "C#",
      value: 90,
      color: "#007BFF", // Blue color for C#
    },
    {
      title: "ReactJS",
      value: 80,
      color: "#FF5733", // Orange color for ReactJS
    },
    {
      title: ".NET",
      value: 85,
      color: "#FFD700", // Gold color for .NET
    },
    {
      title: "Excel/VBA",
      value: 85,
      color: "#36A2EB", // Sky blue color for Excel/VBA
    },
    {
      title: "Python",
      value: 70,
      color: "#9966FF", // Purple color for Python
    },
  ];

  const chartSize = 30; // Adjust the size of the pie charts
  const lineWidth = 15; // Adjust the thickness of the pie charts
  const labelStyle = {
    fontSize: "10px", // Adjust the font size for the percentage labels (smaller)
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div>
      <b style={{ fontSize: "24px" }}>Skill Proficiency </b>
      <div className="pie-charts" style={{ display: "flex" }}>
        {proficiencyData.map((data, index) => (
          <div className="pie-chart" key={index} style={{ margin: "0 10px" }}>
            <h2>{data.title}</h2>
            <div style={{ position: "relative" }}>
              <PieChart
                data={[
                  { value: data.value, color: data.color },
                  { value: 100 - data.value, color: "transparent" },
                ]}
                radius={chartSize}
                lineWidth={lineWidth}
                label={() => null} // Remove the default label
              />
              {/* Create custom label with line */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    ...labelStyle,
                    position: "absolute",
                    top: "-20px",
                    left: "-28px",
                  }}
                >
                  {data.title}
                  {":" + data.value}
                </span>
                <svg
                  height="80"
                  width="100"
                  style={{ position: "absolute", top: "-15", left: "-30" }}
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="80"
                    y2="10"
                    stroke={data.color}
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProficiency;
