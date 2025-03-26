import React from 'react';
import HealthGuide from '../HealthGuide';

const CervicalCancerGuide = () => {
  const cervicalCancerData = {
    title: "Cervical Cancer Health Guide",
    icon: "🔬",
    normalInfo: [
      "Regular Pap smear results",
      "No abnormal cell growth",
      "Healthy cervical tissue",
      "Normal HPV status",
      "Regular screening schedule"
    ],
    symptoms: [
      "Abnormal vaginal bleeding",
      "Pelvic pain",
      "Pain during intercourse",
      "Unusual discharge",
      "Weight loss",
      "Fatigue"
    ],
    medicalAttention: [
      "Heavy vaginal bleeding",
      "Severe pelvic pain",
      "Difficulty urinating",
      "Swelling in legs",
      "Back pain"
    ],
    selfCareTips: [
      "Regular Pap smears",
      "HPV vaccination",
      "Safe sex practices",
      "Healthy lifestyle",
      "Stress management"
    ]
  };

  return <HealthGuide {...cervicalCancerData} />;
};

export default CervicalCancerGuide; 