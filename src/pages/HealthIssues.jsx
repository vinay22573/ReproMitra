import React, { useState } from 'react';
import { 
  Heart, 
  LineChart, 
  Stethoscope, 
  Shield, 
  Utensils, 
  Leaf, 
  Droplets, 
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { logo, moonfill, userfill } from '../assets';

function HealthIssues() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'diagnosis', label: 'Diagnosis & Treatment' },
    { id: 'prevention', label: 'Prevention & Lifestyle' },
    { id: 'diet', label: 'Diet & Nutrition' }
  ];

  return (
    <div className="bg-gray-50 font-sans">
      <header className="bg-white shadow-sm">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-custom px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-600 hover:text-custom px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-gray-600 hover:text-custom px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-600 hover:text-custom px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'text-custom border-custom border-b-2'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Heart className="text-custom text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Cardiovascular Health Overview</h2>
                  <p className="mt-2 text-gray-600">
                    Understanding and maintaining cardiovascular health is crucial for overall well-being. 
                    This comprehensive guide provides essential information about heart health, prevention strategies, and treatment options.
                  </p>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center">
                  <LineChart className="text-custom text-3xl mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">Annual Cases</h3>
                  <p className="mt-2 text-3xl font-bold text-custom">17.9M</p>
                  <p className="mt-1 text-gray-600">Global cases per year</p>
                </div>
              </div>
              {/* Add other stat cards similarly */}
            </section>

            {/* Disease Progression Section */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Disease Progression</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((stage) => (
                  <div key={stage} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-custom bg-opacity-10 rounded-full mb-3">
                      <span className="text-custom font-semibold">{stage}</span>
                    </div>
                    <h3 className="font-medium text-gray-900">
                      {stage === 1 ? 'Early Stage' :
                       stage === 2 ? 'Developing Stage' :
                       stage === 3 ? 'Advanced Stage' : 'Critical Stage'}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {stage === 1 ? 'Initial symptoms may be mild or unnoticeable' :
                       stage === 2 ? 'Symptoms become more noticeable' :
                       stage === 3 ? 'Significant impact on daily activities' : 'Requires immediate medical attention'}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Add other tab sections similarly */}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Emergency Contacts */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Emergency Contacts</h3>
              <div className="mt-4 space-y-4">
                <p className="text-sm text-gray-600">Emergency: 911</p>
                <p className="text-sm text-gray-600">Health Helpline: 1-800-HEALTH</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-custom">Find a Doctor</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-custom">Medical Services</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-custom">Patient Resources</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-custom">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-custom">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-custom">Medical Disclaimer</a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect With Us</h3>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-custom">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-custom">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-custom">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-400 text-center">
              © 2024 Medical Information Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HealthIssues; 