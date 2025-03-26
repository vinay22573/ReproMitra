import React from 'react';
import HealthGuide from '../HealthGuide';

const PCOSGuide = () => {
  const pcosData = {
    title: "PCOS Health Guide",
    icon: "🔍",
    normalInfo: [
      "Regular menstrual cycles (21-35 days)",
      "Normal hormone levels",
      "Regular ovulation",
      "Healthy weight range",
      "Normal insulin sensitivity"
    ],
    symptoms: [
      "Irregular periods",
      "Excess hair growth",
      "Acne",
      "Weight gain",
      "Hair loss",
      "Dark skin patches"
    ],
    medicalAttention: [
      "Severe pelvic pain",
      "Heavy bleeding",
      "Missed periods for 3+ months",
      "Difficulty breathing",
      "Chest pain"
    ],
    selfCareTips: [
      "Maintain healthy diet",
      "Regular exercise",
      "Stress management",
      "Adequate sleep",
      "Regular check-ups"
    ]
  };

  return <HealthGuide {...pcosData} />;
};

export default PCOSGuide; 