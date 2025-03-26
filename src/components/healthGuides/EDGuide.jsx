import React from 'react';
import HealthGuide from '../HealthGuide';

const EDGuide = () => {
  const edData = {
    title: "Erectile Dysfunction Health Guide",
    icon: "🔍",
    normalInfo: [
      "Consistent erections",
      "Normal testosterone levels",
      "Healthy blood flow",
      "Regular sexual function",
      "No underlying conditions"
    ],
    symptoms: [
      "Difficulty getting erection",
      "Trouble maintaining erection",
      "Reduced sexual desire",
      "Premature ejaculation",
      "Anxiety about performance",
      "Relationship stress"
    ],
    medicalAttention: [
      "Sudden onset of symptoms",
      "Chest pain during activity",
      "Severe depression",
      "Suicidal thoughts",
      "Relationship problems"
    ],
    selfCareTips: [
      "Regular exercise",
      "Healthy diet",
      "Stress management",
      "Adequate sleep",
      "Open communication"
    ]
  };

  return <HealthGuide {...edData} />;
};

export default EDGuide; 