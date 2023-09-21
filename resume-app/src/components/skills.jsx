import React from "react";
import SkillCard from "./SkillCard";

function skills() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <div className="skills">
        <SkillCard skillName="C#" proficiency={80} />
        <SkillCard skillName="React.js" proficiency={85} />
        {/* Add similar SkillCard components for other skills */}
      </div>
    </div>
  );
}

export default skillss;
