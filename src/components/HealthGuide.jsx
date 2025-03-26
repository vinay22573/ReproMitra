import React from 'react';

const HealthGuide = ({ 
  title, 
  icon, 
  normalInfo, 
  symptoms, 
  medicalAttention, 
  selfCareTips 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      <div className="space-y-6">
        {/* Normal Information */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Normal Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-blue-700">
            {normalInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Common Symptoms */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">Common Symptoms</h3>
          <ul className="list-disc pl-5 space-y-2 text-purple-700">
            {symptoms.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* When to Seek Medical Attention */}
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <span className="text-xl mr-2">⚠️</span>
            <h3 className="text-lg font-semibold text-red-800">When to Seek Medical Attention</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-red-700">
            {medicalAttention.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Self-Care Tips */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <span className="text-xl mr-2">💡</span>
            <h3 className="text-lg font-semibold text-green-800">Self-Care Tips</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-green-700">
            {selfCareTips.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-700">
            <span className="font-semibold">Note:</span> While our system is temporarily unavailable, 
            we're providing this general information. Please consult a healthcare provider for any concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthGuide; 