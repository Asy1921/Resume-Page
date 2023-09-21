import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SkillCard = ({ skillName, proficiency }) => {
  const proficiencyPercentage = `${proficiency}%`;

  return (
    <div className="skill-card">
      <div className="skill-header">
        <FontAwesomeIcon icon={faCode} size="2x" />
        <h3>{skillName}</h3>
      </div>
      <div className="proficiency-bar">
        <div
          className="proficiency-fill"
          style={{ width: proficiencyPercentage }}
        >
          {proficiencyPercentage}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
