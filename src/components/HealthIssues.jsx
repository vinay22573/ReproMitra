import React from 'react';
import {
  BreastCancer,
  PCOS,
  Cervical,
  PDI,
  TesticularCancer,
  ED,
  Osteoporosis,
  ProstateHealth,
} from '../assets';

const HealthIssues = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-md bg-custom text-white px-4 py-2 text-sm font-medium">Contact Us</button>
            </div>
          </div>
        </div>
      </nav> */}

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Health, Your Awareness</h1>
          <p className="text-xl text-gray-600">Understanding key health issues through clear visuals</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-8">Women's Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={BreastCancer}
                className="w-full h-48 object-cover"
                alt="Breast Cancer Awareness"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Breast Cancer Awareness</h3>
                <p className="text-gray-600 text-sm">Learn about early detection and prevention</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={PCOS}
                className="w-full h-48 object-cover"
                alt="PCOS"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PCOS Information</h3>
                <p className="text-gray-600 text-sm">Understanding hormonal balance</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={Cervical}
                className="w-full h-48 object-cover"
                alt="Cervical Health"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cervical Health</h3>
                <p className="text-gray-600 text-sm">Prevention and regular screening</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={Osteoporosis}
                className="w-full h-48 object-cover"
                alt="Osteoporosis"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Osteoporosis Guide</h3>
                <p className="text-gray-600 text-sm">Bone health and prevention</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-custom mb-8">Men's Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={ProstateHealth}
                className="w-full h-48 object-cover"
                alt="Prostate Health"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prostate Health</h3>
                <p className="text-gray-600 text-sm">Early detection and screening</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={TesticularCancer}
                className="w-full h-48 object-cover"
                alt="Testicular Cancer"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Testicular Cancer Guide</h3>
                <p className="text-gray-600 text-sm">Self-examination and awareness</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={ED}
                className="w-full h-48 object-cover"
                alt="ED Awareness"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ED Awareness</h3>
                <p className="text-gray-600 text-sm">Understanding causes and solutions</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={PDI}
                className="w-full h-48 object-cover"
                alt="Peyronie's Disease"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Peyronie's Disease Info</h3>
                <p className="text-gray-600 text-sm">Symptoms and treatment options</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Dedicated to providing accurate health information and raising awareness for better healthcare decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Health Awareness Hub. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HealthIssues; 