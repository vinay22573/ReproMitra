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
  ChevronLeft,
  Activity,
//   WaveSquare,
// Vial,
  ClipboardCheck,
  HeartPulse,
  ChartLine,
  CheckCircle
} from 'lucide-react';
import { logo, moonfill, userfill } from '../assets';

function Disease() {
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
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center">
                  <Activity className="text-custom text-3xl mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">Recovery Rate</h3>
                  <p className="mt-2 text-3xl font-bold text-custom">85%</p>
                  <p className="mt-1 text-gray-600">With proper treatment</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center">
                  <Shield className="text-custom text-3xl mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">Prevention Success</h3>
                  <p className="mt-2 text-3xl font-bold text-custom">80%</p>
                  <p className="mt-1 text-gray-600">Through lifestyle changes</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center">
                  <ChartLine className="text-custom text-3xl mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">Global Impact</h3>
                  <p className="mt-2 text-3xl font-bold text-custom">31%</p>
                  <p className="mt-1 text-gray-600">Of global deaths</p>
                </div>
              </div>
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

            {/* Risk Factors Section */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Risk Factors Analysis</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <div className="text-custom text-2xl mb-2">🚬</div>
                  <h4 className="font-medium text-gray-900">Smoking</h4>
                  <p className="text-sm text-gray-600">30% increased risk</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-custom text-2xl mb-2">🍔</div>
                  <h4 className="font-medium text-gray-900">Poor Diet</h4>
                  <p className="text-sm text-gray-600">25% increased risk</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-custom text-2xl mb-2">🛋️</div>
                  <h4 className="font-medium text-gray-900">Sedentary Lifestyle</h4>
                  <p className="text-sm text-gray-600">20% increased risk</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-custom text-2xl mb-2">❤️</div>
                  <h4 className="font-medium text-gray-900">High Blood Pressure</h4>
                  <p className="text-sm text-gray-600">40% increased risk</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Diagnosis Section */}
        {activeTab === 'diagnosis' && (
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Stethoscope className="text-custom text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Diagnosis Methods</h2>
                  <p className="mt-2 text-gray-600">
                    Various techniques and tests used to diagnose cardiovascular conditions.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <Heart className="text-custom text-2xl mb-3" />
                <h3 className="font-medium text-gray-900">ECG/EKG</h3>
                <p className="mt-2 text-sm text-gray-600">Measures electrical activity of the heart</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                {/* <WaveSquare className="text-custom text-2xl mb-3" /> */}
                <h3 className="font-medium text-gray-900">Stress Test</h3>
                <p className="mt-2 text-sm text-gray-600">Monitors heart during physical activity</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                {/* <Vial className="text-custom text-2xl mb-3" /> */}
                <h3 className="font-medium text-gray-900">Blood Tests</h3>
                <p className="mt-2 text-sm text-gray-600">Checks cholesterol and other markers</p>
              </div>
            </div>
          </div>
        )}

        {/* Prevention Section */}
        {activeTab === 'prevention' && (
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="text-custom text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Prevention & Lifestyle Guidelines</h2>
                  <p className="mt-2 text-gray-600">
                    Comprehensive approach to prevent cardiovascular diseases and maintain optimal health.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  <ClipboardCheck className="text-custom mr-2 inline-block" />
                  Prevention Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    Regular health screenings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    Vaccination schedule
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    Hand hygiene
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    Risk factor monitoring
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  <HeartPulse className="text-custom mr-2 inline-block" />
                  Healthy Habits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Daily Exercise</span>
                    <div className="w-16 h-4 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-custom rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sleep Quality</span>
                    <div className="w-16 h-4 bg-gray-200 rounded-full">
                      <div className="w-1/2 h-full bg-custom rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Stress Management</span>
                    <div className="w-16 h-4 bg-gray-200 rounded-full">
                      <div className="w-2/3 h-full bg-custom rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  <ChartLine className="text-custom mr-2 inline-block" />
                  Risk Awareness
                </h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-sm font-semibold inline-block text-custom">High Risk Factors</div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-custom-100">
                    <div style={{width: '70%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-custom"></div>
                  </div>
                  <div className="text-sm text-gray-600">70% of risks are preventable through lifestyle changes</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Diet Section */}
        {activeTab === 'diet' && (
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Utensils className="text-custom text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Nutrition Guidelines</h2>
                  <p className="mt-2 text-gray-600">
                    Optimal dietary recommendations for health maintenance and disease prevention.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  <Leaf className="text-custom mr-2 inline-block" />
                  Anti-inflammatory Foods
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-sm p-2 bg-custom-50 rounded">Berries</span>
                  <span className="text-sm p-2 bg-custom-50 rounded">Leafy Greens</span>
                  <span className="text-sm p-2 bg-custom-50 rounded">Nuts</span>
                  <span className="text-sm p-2 bg-custom-50 rounded">Fatty Fish</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  <Droplets className="text-custom mr-2 inline-block" />
                  Hydration Tracker
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Goal: 8 glasses</span>
                    <span className="text-sm text-custom">5/8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-custom h-2.5 rounded-full" style={{width: '62%'}}></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  <Calendar className="text-custom mr-2 inline-block" />
                  Meal Planning
                </h3>
                <div className="space-y-2">
                  <div className="p-2 bg-custom-50 rounded">
                    <span className="font-medium">Breakfast:</span><br/>
                    <span className="text-sm">Oatmeal + Fruits</span>
                  </div>
                  <div className="p-2 bg-custom-50 rounded">
                    <span className="font-medium">Lunch:</span><br/>
                    <span className="text-sm">Salad + Lean Protein</span>
                  </div>
                  <div className="p-2 bg-custom-50 rounded">
                    <span className="font-medium">Dinner:</span><br/>
                    <span className="text-sm">Grilled Fish + Vegetables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default Disease; 