import React from "react";
import SkillCard from "./SkillProficiency";

function SkillSection() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <div className="">
        <SkillCard skillName="C#" skillDescription={80} />
        <SkillCard skillName="React.js" skillDescription={85} />
        {/* Add similar SkillCard components for other skills */}
      </div>
    </div>
  );
}

export default SkillSection;
