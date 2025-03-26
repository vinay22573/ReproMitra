import React from 'react';
import HealthGuide from '../HealthGuide';

const BPHGuide = () => {
  const bphData = {
    title: "BPH Health Guide",
    icon: "🔍",
    normalInfo: [
      "Normal prostate size",
      "Regular urination",
      "Strong urine flow",
      "Complete bladder emptying",
      "No nighttime urination"
    ],
    symptoms: [
      "Frequent urination",
      "Weak urine stream",
      "Difficulty starting urination",
      "Incomplete emptying",
      "Urgency to urinate",
      "Nighttime urination"
    ],
    medicalAttention: [
      "Inability to urinate",
      "Blood in urine",
      "Severe pain",
      "Fever with symptoms",
      "Kidney problems"
    ],
    selfCareTips: [
      "Limit fluid intake at night",
      "Avoid caffeine",
      "Regular exercise",
      "Healthy diet",
      "Stress management"
    ]
  };

  return <HealthGuide {...bphData} />;
};

export default BPHGuide; 