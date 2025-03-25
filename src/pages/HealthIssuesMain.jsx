import React from 'react';
import { 
  Heart, 
  Stethoscope, 
  Shield, 
  Utensils, 
  Leaf, 
  Droplets, 
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Mail
} from 'lucide-react';
import { logo } from '../assets';

function HealthIssuesMain() {
  return (
    <div className="bg-gray-50 font-sans">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Health, Your Awareness</h1>
          <p className="text-xl text-gray-600">Understanding key health issues through clear visuals</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-8">Women's Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="src/assets/breast-cancer.png" className="w-full h-48 object-cover" alt="Breast Cancer Awareness" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Breast Cancer Awareness</h3>
                <p className="text-gray-600 text-sm">Learn about early detection and prevention</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="src/assets/pcos.png" className="w-full h-48 object-cover" alt="PCOS" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PCOS Information</h3>
                <p className="text-gray-600 text-sm">Understanding hormonal balance</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="src/assets/cervical-health.png" className="w-full h-48 object-cover" alt="Cervical Health" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cervical Health</h3>
                <p className="text-gray-600 text-sm">Prevention and regular screening</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="src/assets/PDI.png" className="w-full h-48 object-cover" alt="Osteoporosis" />
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
              <img src="src/assets/prostate-health.png" className="w-full h-48 object-cover" alt="Prostate Health" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prostate Health</h3>
                <p className="text-gray-600 text-sm">Early detection and screening</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="src/assets/testicular-cancer.png" className="w-full h-48 object-cover" alt="Testicular Cancer" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Testicular Cancer Guide</h3>
                <p className="text-gray-600 text-sm">Self-examination and awareness</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="src/assets/ed-awareness.png" className="w-full h-48 object-cover" alt="ED Awareness" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ED Awareness</h3>
                <p className="text-gray-600 text-sm">Understanding causes and solutions</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="src/assets/peyronies.png" className="w-full h-48 object-cover" alt="Peyronie's Disease" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Peyronie's Disease Info</h3>
                <p className="text-gray-600 text-sm">Symptoms and treatment options</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">Dedicated to providing accurate health information and raising awareness for better healthcare decisions.</p>
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
                <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Health Awareness Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HealthIssuesMain; 