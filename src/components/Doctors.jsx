import React from 'react';
import { Search, User, Venus, Mars, FlaskConical, HeartPulse } from 'lucide-react';
import DoctorCard from './DoctorCard';
import { doctorData } from '../data/docData';

const Doctors = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center"> <img className="h-8 w-auto"
                      src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo">
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-md bg-custom text-white px-4 py-2 text-sm font-medium">Sign In</button>
            </div>
          </div>
        </div>
      </nav> */}

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find the Right Specialist for Your Needs</h1>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-1 mb-8">
              <div className="flex mb-4"> 
                <button className="flex-1 py-3 px-4 text-sm font-medium rounded-md bg-custom text-white">
                  Search by Specialization
                </button> 
                <button className="flex-1 py-3 px-4 text-sm font-medium text-gray-500">
                  Search by Condition
                </button> 
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search doctors, specializations or conditions"
                  className="w-full pl-12 pr-4 py-3 border-gray-200 rounded-md focus:ring-custom focus:border-custom"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            <button className="rounded-md flex items-center px-6 py-3 bg-custom text-white font-medium">
              <User className="w-4 h-4 mr-2" />
              All Specialists
            </button>
            <button className="rounded-md flex items-center px-6 py-3 bg-white text-gray-700 font-medium">
              <Venus className="w-4 h-4 mr-2" />
              Gynecologists
            </button>
            <button className="rounded-md flex items-center px-6 py-3 bg-white text-gray-700 font-medium">
              <Mars className="w-4 h-4 mr-2" />
              Urologists
            </button>
            <button className="rounded-md flex items-center px-6 py-3 bg-white text-gray-700 font-medium">
              <FlaskConical className="w-4 h-4 mr-2" />
              Endocrinologists
            </button>
            <button className="rounded-md flex items-center px-6 py-3 bg-white text-gray-700 font-medium">
              <HeartPulse className="w-4 h-4 mr-2" />
              Oncologists
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorData.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </main>

      {/* <footer className="bg-white mt-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">About</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">For Doctors</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Join as Doctor</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Doctor Login</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Partner with Us</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Advertise</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; 2024 Healthcare Platform. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Doctors; 