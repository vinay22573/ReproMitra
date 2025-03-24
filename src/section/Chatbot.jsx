import React , { useState } from "react";
import { ChevronLeft, ChevronRight,MessageCirclePlus,Plus,Maximize2,Paperclip,Mic,SquareArrowOutUpRight} from "lucide-react"; 
import {logo , moonfill, userfill, doctorlogo, paperplane, trianglealert,infocircle }from '../assets'
function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleRightPanel = () => {
    setIsRightOpen((prev) => !prev);
};

  return (
    <section className="relative">
      {/* <header className="border-b border-gray-200 bg-white">
        <div className="pt-[10vh]"></div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="HealthChat AI Logo" className="h-8 w-auto" />
              <span className="ml-3 text-xl font-semibold text-gray-900">
                HealthChat AI
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <img src={moonfill} alt="Moon Icon" className="h-6 w-auto" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <img src={userfill} alt="User Icon" className="h-6 w-auto" />
              </button>
            </div>
          </div>
        </div>
      </header> */}
      
      <main className="flex-1 flex overflow-hidden">
        <aside
          className={`${
            isOpen ? "w-64" : "-translate-x-64 w-64 "
          } border-r border-gray-200 bg-white flex flex-col transition-all duration-300 ease-in-out relative`}
        >
          <div className="p-4">
            <button className="w-full bg-custom text-white rounded-md px-4 py-2 flex items-center justify-center font-medium">
              <Plus className="mr-2" size={16} />
              New Chat
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <div className="text-sm font-medium text-gray-500 mb-2">
              Recent Chats
            </div>
            <button className="w-full flex items-center text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
              <MessageCirclePlus className="mr-2 text-gray-400" size={16} />
              Menstrual Cycle Questions
            </button>
            <button className="w-full flex items-center text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
              <MessageCirclePlus className="mr-2 text-gray-400" size={16} />
              Fertility Consultation
            </button>
          </div>

          <button
            className="absolute -right-10 top-5 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
            id="toggle-left-panel"
            onClick={togglePanel}
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>

          
        </aside>

        <section className="flex-1 flex flex-col bg-white">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-3">Welcome to HealthChat AI</h2>
                        <p className="text-gray-600">Your private, secure space for reproductive health questions. All
                            conversations are end-to-end encrypted.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                            <img src={userfill} alt="User Icon" className="h-6 w-auto" />
                            </div>
                            <div className="flex-1 bg-gray-100 rounded-lg p-4">
                                <p className="text-gray-900">What are the common signs of PCOS?</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                            <img src={doctorlogo} alt="AI-consultant" className="h-6 w-auto" />
                            </div>
                            <div className="flex-1 bg-gray-50 rounded-lg p-4">
                                <div className="prose max-w-none">
                                    <p>Common signs of PCOS (Polycystic Ovary Syndrome) include:</p>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li>Irregular periods</li>
                                        <li>Excess facial and body hair</li>
                                        <li>Weight gain</li>
                                        <li>Acne</li>
                                        <li>Hair loss</li>
                                    </ul>
                                    <div className="mt-3 flex items-start bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                                        <img src={infocircle} alt="info-circle-icon" className=" text-yellow-600 mt-1 mr-2"/>
                                        <p className="text-sm text-yellow-700">This information is AI-generated. For
                                            accurate diagnosis and treatment, please consult with a qualified healthcare
                                            professional. We are not responsible for medical decisions made based on
                                            this information.</p>
                                            <button
                                                    className="ml-2 text-yellow-600 hover:text-yellow-800"
                                                    onClick={() => document.getElementById("disclaimer-modal").classList.remove("hidden")}>
                                                        <Maximize2 strokeWidth={3} className="w-4 h-auto" />
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="max-w-3xl mx-auto flex items-end space-x-4">
                    <div className="flex-1 bg-white border border-gray-200 rounded-lg">
                        <textarea rows="3"
                            className="block w-full resize-none border-0 bg-transparent py-2 px-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            placeholder="Type your health question here..."></textarea>
                        <div className="flex items-center justify-between p-2 border-t border-gray-200">
                            <div className="flex space-x-2">
                                <button className="p-2 text-gray-500 hover:text-gray-700">
                                <Paperclip />
                                </button>
                                <button className="p-2 text-gray-500 hover:text-gray-700">
                                <Mic />
                                </button>
                            </div>
                            <button className="bg-custom flex items-center gap-2 rounded-md text-white !rounded-button px-4 py-2 font-medium">
                                <img className="" src={paperplane} alt="paperplane" />Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <aside className={`${isRightOpen ? "w-80" : "translate-x-80 w-80 "} border-l border-gray-200 bg-white transition-all duration-300 ease-in-out relative`}>
          <div className="p-4 space-y-6">
            <button className="w-full bg-red-100 text-red-700 rounded-md px-4 py-3 flex items-center justify-center font-medium">
              <img src={trianglealert} className="p-2" alt="attention-icon" />
              Emergency Resources
            </button>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Trending Topics
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  class="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                >
                  <h4 className="font-medium text-gray-900">
                    Understanding Fertility Tracking
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">
                    Learn about modern methods to track your fertility cycle
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                >
                  <h4 className="font-medium text-gray-900">
                    Birth Control Options
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Compare different contraception methods
                  </p>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Verified Resources
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  class="flex items-center gap-2 text-sm text-gray-600 hover:text-custom"
                >
                  <SquareArrowOutUpRight
                    strokeWidth={2.5}
                    className="w-4 h-auto"
                  />
                  WHO Reproductive Health Guidelines
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-custom"
                >
                  <SquareArrowOutUpRight
                    strokeWidth={2.5}
                    className="w-4 h-auto"
                  />
                  Find a Reproductive Health Specialist
                </a>
              </div>
            </div>
          </div>
          <button
            className="absolute -left-10 top-5 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
            onClick={toggleRightPanel}
          >
            {isRightOpen ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </aside>
      </main>
    </section>
  );
}

export default Chatbot;
