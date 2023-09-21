import React from "react";
import { DiCode, DiReact } from "react-icons/di";

const SkillCard = ({ skillName, skillDescription }) => {
  return (
    <div className="skill-card">
      {skillName === "C#" && <DiCode />}
      {skillName === "React.js" && <DiReact />}
      <h3>{skillName}</h3>
      <p>{skillDescription}</p>
    </div>
  );
};

export default SkillCard;
