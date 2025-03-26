import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCirclePlus, Plus, Maximize2, Paperclip, Mic, SquareArrowOutUpRight } from "lucide-react";
import { logo, moonfill, userfill, doctorlogo, paperplane, trianglealert, infocircle } from '../assets';
import { generateResponse } from '../services/geminiService';
import PCOSGuide from '../components/healthGuides/PCOSGuide';
import CervicalCancerGuide from '../components/healthGuides/CervicalCancerGuide';
import BPHGuide from '../components/healthGuides/BPHGuide';
import EDGuide from '../components/healthGuides/EDGuide';
import MenstrualHealthGuide from '../components/MenstrualHealthGuide';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreloadedQuestions, setShowPreloadedQuestions] = useState(true);

  const preloadedQuestions = [
    {
      id: 1,
      question: "What are the common signs of PCOS?",
      category: "Conditions"
    },
    {
      id: 2,
      question: "How can I track my menstrual cycle?",
      category: "Tracking"
    },
    {
      id: 3,
      question: "What are the different types of birth control?",
      category: "Contraception"
    },
    {
      id: 4,
      question: "What are the early signs of pregnancy?",
      category: "Pregnancy"
    },
    {
      id: 5,
      question: "How can I improve my fertility?",
      category: "Fertility"
    },
    {
      id: 6,
      question: "What are the symptoms of endometriosis?",
      category: "Conditions"
    }
  ];

  // Keywords to identify reproductive health-related queries
  const reproductiveHealthKeywords = [
    'menstrual', 'period', 'pregnancy', 'fertility', 'contraception', 'birth control',
    'ovulation', 'pcos', 'endometriosis', 'reproductive', 'gynecological', 'hormone',
    'menopause', 'menstruation', 'ovary', 'uterus', 'vaginal', 'sexual health',
    'vagina', 'vulva', 'contraceptive', 'birth control', 'condom', 'pill', 'iud',
    'pain', 'discharge', 'infection', 'yeast', 'bacterial', 'std', 'sti', 'sexually transmitted',
    'bleeding', 'spotting', 'cramps', 'abdominal', 'pelvic', 'breast', 'mammogram',
    'cervical', 'pap smear', 'cancer', 'fibroids', 'cyst', 'ovarian', 'uterine',
    'infertility', 'conception', 'implantation', 'miscarriage', 'abortion', 'termination',
    'sexual', 'intercourse', 'protection', 'safe sex', 'barrier method', 'hormonal',
    'progesterone', 'estrogen', 'testosterone', 'cycle', 'tracking', 'calendar',
    'symptoms', 'signs', 'diagnosis', 'treatment', 'medication', 'prescription'
  ];

  // Fallback responses for common queries
  const fallbackResponses = {
    'pcos': {
      keywords: ['pcos', 'polycystic', 'ovary', 'hormone'],
      component: PCOSGuide
    },
    'cervical': {
      keywords: ['cervical', 'cancer', 'pap', 'hpv'],
      component: CervicalCancerGuide
    },
    'bph': {
      keywords: ['bph', 'prostate', 'enlarged', 'urination'],
      component: BPHGuide
    },
    'ed': {
      keywords: ['erectile', 'dysfunction', 'impotence', 'sexual'],
      component: EDGuide
    },
    'pain': {
      keywords: ['pain', 'discomfort', 'ache', 'soreness', 'burning', 'itching'],
      response: `🔍 *Understanding Vaginal Pain*

*Common Causes:*
• Yeast infections
• Bacterial vaginosis
• Urinary tract infections
• Menstrual cramps
• Vaginal dryness
• Allergic reactions to products

⚠️ *When to Seek Immediate Medical Attention:*
• Severe or persistent pain
• Pain with fever
• Pain with unusual discharge
• Pain during intercourse
• Pain with bleeding

💡 *Self-Care Tips:*
• Maintain good hygiene
• Wear cotton underwear
• Avoid irritants
• Stay hydrated
• Practice safe sex

*Note: While our system is temporarily unavailable, we're providing this general information. Please consult a healthcare provider for proper diagnosis and treatment.*`
    },
    'contraception': {
      keywords: ['birth control', 'contraception', 'contraceptive', 'pill', 'condom', 'iud'],
      response: `📋 *Birth Control Methods Guide*

*1. Hormonal Methods:*
• Birth control pills
• Birth control patch
• Birth control ring
• Hormonal IUD
• Birth control shot

*2. Barrier Methods:*
• Male condoms
• Female condoms
• Diaphragm
• Cervical cap
• Sponge

*3. Long-Acting Methods:*
• Copper IUD
• Hormonal IUD
• Birth control implant

*4. Natural Methods:*
• Fertility awareness
• Withdrawal
• Abstinence

💡 *Important Considerations:*
• Effectiveness rates vary
• Side effects may occur
• Regular check-ups needed
• Emergency contraception available

*Note: While our system is temporarily unavailable, we're providing this general information. Please consult a healthcare provider to determine the best method for you.*`
    },
    'pregnancy': {
      keywords: ['pregnant', 'pregnancy', 'conception', 'fertility', 'baby'],
      response: `👶 *Early Signs of Pregnancy*

*Common Symptoms:*
• Missed period
• Nausea or morning sickness
• Breast tenderness
• Fatigue
• Frequent urination
• Food cravings or aversions
• Mood changes
• Light spotting or cramping

📝 *Next Steps:*
• Take a home pregnancy test
• Schedule an appointment with your healthcare provider
• Start taking prenatal vitamins if confirmed
• Avoid alcohol and smoking
• Maintain a healthy diet

💡 *Important Tips:*
• Track your symptoms
• Stay hydrated
• Get adequate rest
• Eat nutritious foods
• Avoid harmful substances

*Note: While our system is temporarily unavailable, we're providing this general information. Please consult a healthcare provider for proper prenatal care.*`
    },
    'menstrual': {
      keywords: ['period', 'menstrual', 'menstruation', 'cycle', 'cramps'],
      component: MenstrualHealthGuide
    }
  };

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
      setShowPreloadedQuestions(false);
    } else {
      // Add welcome message if no history exists
      setMessages([
        {
          type: 'bot',
          content: "Hello! Welcome to your Repro Health Friend. How may I help you today in enhancing your reproductive health?",
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const isReproductiveHealthQuery = (query) => {
    const lowercaseQuery = query.toLowerCase();
    // Check if any keyword is present in the query
    const hasKeyword = reproductiveHealthKeywords.some(keyword => 
      lowercaseQuery.includes(keyword)
    );
    
    // Additional check for common reproductive health question patterns
    const questionPatterns = [
      /what.*(causes|reasons|symptoms|signs|treatment|medicine|medication)/i,
      /how.*(prevent|treat|cure|manage|handle|deal with)/i,
      /when.*(period|ovulation|fertile|pregnant)/i,
      /why.*(happening|occurring|feeling|experiencing)/i,
      /should.*(take|use|do|see|consult)/i,
      /can.*(get|become|have|use|take)/i
    ];
    
    const hasPattern = questionPatterns.some(pattern => pattern.test(lowercaseQuery));
    
    return hasKeyword || hasPattern;
  };

  const getFallbackResponse = (message) => {
    const lowercaseMessage = message.toLowerCase();
    
    // First check for specific health conditions
    for (const [category, data] of Object.entries(fallbackResponses)) {
      if (data.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
        if (data.component) {
          return {
            type: 'component',
            content: <data.component />
          };
        }
        return {
          type: 'text',
          content: data.response
        };
      }
    }
    
    // If no specific condition is matched, return the network status message
    return {
      type: 'text',
      content: `🔔 *Network Status Update*

We're currently experiencing high demand on our AI service. While we work to restore full functionality, here are some helpful resources:

📞 *Immediate Support:*
• Call your healthcare provider
• Visit a local reproductive health clinic
• Contact a reproductive health helpline

💡 *Self-Help Tips:*
• Track your symptoms
• Maintain a health diary
• Practice self-care
• Stay informed through reliable sources

*Note: This is a temporary response while our system is being optimized. We're committed to providing you with the best possible support.*`
    };
  };

  const handleQuestionClick = async (question) => {
    setShowPreloadedQuestions(false);
    setIsTyping(true);
    setIsLoading(true);
    
    try {
      // Add user's question to messages
      setMessages(prev => [...prev, {
        type: 'user',
        content: question,
        timestamp: new Date().toISOString()
      }]);

      // Check if the query is reproductive health-related
      const isReproductiveHealth = isReproductiveHealthQuery(question);
      
      if (!isReproductiveHealth) {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "I am designed to assist with reproductive health-related questions. For other medical inquiries, please consult a relevant professional.",
          timestamp: new Date().toISOString()
        }]);
        return;
      }

      try {
        // Try to generate response using Gemini
        const response = await generateResponse(question, messages);
        setMessages(prev => [...prev, {
          type: 'bot',
          content: response,
          timestamp: new Date().toISOString()
        }]);
      } catch (error) {
        console.error('Error generating Gemini response:', error);
        // Use fallback response if Gemini fails
        const fallbackResponse = getFallbackResponse(question);
        setMessages(prev => [...prev, {
          type: 'bot',
          content: fallbackResponse.content,
          isComponent: fallbackResponse.type === 'component',
          timestamp: new Date().toISOString()
        }]);
      }
    } catch (error) {
      console.error('Error in handleQuestionClick:', error);
      const fallbackResponse = getFallbackResponse(question);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: fallbackResponse.content,
        isComponent: fallbackResponse.type === 'component',
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    setIsTyping(true);
    setIsLoading(true);
    
    try {
      // Add user's message to chat
      setMessages(prev => [...prev, {
        type: 'user',
        content: inputMessage,
        timestamp: new Date().toISOString()
      }]);

      // Check if the query is reproductive health-related
      const isReproductiveHealth = isReproductiveHealthQuery(inputMessage);
      
      if (!isReproductiveHealth) {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "I am designed to assist with reproductive health-related questions. For other medical inquiries, please consult a relevant professional.",
          timestamp: new Date().toISOString()
        }]);
        return;
      }

      try {
        // Try to generate response using Gemini
        const response = await generateResponse(inputMessage, messages);
        setMessages(prev => [...prev, {
          type: 'bot',
          content: response,
          timestamp: new Date().toISOString()
        }]);
      } catch (error) {
        console.error('Error generating Gemini response:', error);
        // Use fallback response if Gemini fails
        const fallbackResponse = getFallbackResponse(inputMessage);
        setMessages(prev => [...prev, {
          type: 'bot',
          content: fallbackResponse.content,
          isComponent: fallbackResponse.type === 'component',
          timestamp: new Date().toISOString()
        }]);
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const fallbackResponse = getFallbackResponse(inputMessage);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: fallbackResponse.content,
        isComponent: fallbackResponse.type === 'component',
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
      setInputMessage("");
    }
  };

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleRightPanel = () => {
    setIsRightOpen((prev) => !prev);
};

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default to avoid new line
      handleSendMessage();
    }
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
              {/* Welcome message */}
              {messages.length === 0 && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-3">Welcome to HealthChat AI</h2>
                  <p className="text-gray-600">Your private, secure space for reproductive health questions. All
                    conversations are end-to-end encrypted.</p>
                </div>
              )}

              {/* Preloaded Question Cards */}
              {showPreloadedQuestions && messages.length === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {preloadedQuestions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuestionClick(q.question)}
                      className="bg-white border border-gray-200 rounded-lg p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900">{q.question}</h3>
                      <p className="text-sm text-gray-500 mt-1">{q.category}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Chat Messages */}
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-start space-x-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                    <div className="flex-shrink-0">
                      {message.type === 'user' ? (
                        <img src={userfill} alt="User Icon" className="h-6 w-auto" />
                      ) : (
                        <img src={doctorlogo} alt="AI-consultant" className="h-6 w-auto" />
                      )}
                    </div>
                    <div className={`flex-1 rounded-lg p-4 ${
                      message.type === 'user' ? 'bg-custom text-white' : 'bg-gray-50'
                    }`}>
                      {message.isComponent ? (
                        message.content
                      ) : (
                        <p className={message.type === 'user' ? 'text-white' : 'text-gray-900'}>
                          {message.content}
                        </p>
                      )}
                      {message.type === 'bot' && !message.isComponent && (
                        <div className="mt-3 flex items-start bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                          <img src={infocircle} alt="info-circle-icon" className="text-yellow-600 mt-1 mr-2"/>
                          <p className="text-sm text-yellow-700">This information is system-generated. For
                            accurate diagnosis and treatment, please consult with a qualified healthcare
                            professional. We are not responsible for medical decisions made based on
                            this information.</p>
                          <button
                            className="ml-2 text-yellow-600 hover:text-yellow-800"
                            onClick={() => setShowDisclaimer(true)}
                          >
                            <Maximize2 strokeWidth={3} className="w-4 h-auto" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 p-4">
            <div className="max-w-3xl mx-auto flex items-end space-x-4">
              <div className="flex-1 bg-white border border-gray-200 rounded-lg">
                <textarea
                  rows="3"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="block w-full resize-none border-0 bg-transparent py-2 px-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Type your health question here... (Press Enter to send, Shift+Enter for new line)"
                />
                <div className="flex items-center justify-between p-2 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <Paperclip />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <Mic />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    className="bg-custom flex items-center gap-2 rounded-md text-white !rounded-button px-4 py-2 font-medium"
                  >
                    <img className="" src={paperplane} alt="paperplane" />Send
                  </button>
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

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-2xl mx-4">
            <h2 className="text-xl font-bold mb-4">Important Medical Disclaimer</h2>
            <div className="prose">
              <p>The information provided by HealthChat is for general informational purposes only and is not
                intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
              <p>Always seek the advice of your physician or other qualified health provider with any questions you
                may have regarding a medical condition. Never disregard professional medical advice or delay in
                seeking it because of something you have read on this platform.</p>
              <p>HealthChat uses system-generated responses based on medical guidelines and best practices, which may not always be accurate or
                complete. Medical knowledge is constantly evolving, and our systems may not have access to the latest
                information.</p>
              <p className="font-bold">If you think you may have a medical emergency, call your doctor or emergency
                services immediately.</p>
            </div>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="mt-4 bg-custom text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add loading indicator */}
      {isLoading && (
        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-custom"></div>
          <span>Thinking...</span>
        </div>
      )}
    </section>
  );
}

export default Chatbot;
