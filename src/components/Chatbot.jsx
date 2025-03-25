import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { reproductiveHealthKeywords } from "../data/keywords";
import { aiagent } from "../assets";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const chatContainerRef = useRef(null);
  const sessionId = useRef(Date.now().toString());

  const suggestedQuestions = [
    {
      title: "Menstrual Health",
      question: "What are common causes of irregular periods?",
      icon: "📅",
      category: "female"
    },
    {
      title: "Fertility",
      question: "What factors affect female fertility?",
      icon: "👶",
      category: "female"
    },
    {
      title: "PCOS Management",
      question: "What are the early signs of PCOS?",
      icon: "🔍",
      category: "female"
    },
    {
      title: "Male Health",
      question: "What are common causes of low testosterone?",
      icon: "👨",
      category: "male"
    },
    {
      title: "General Health",
      question: "What are the most common STIs and their symptoms?",
      icon: "🏥",
      category: "general"
    }
  ];

  const welcomeMessage = {
    role: 'assistant',
    content: "Hello! Welcome to your Repro Health Friend. How may I help you today in enhancing your reproductive health?"
  };

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([welcomeMessage]);
    }
  }, [isChatOpen]);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  const isReproductiveHealthRelated = (text) => {
    const allKeywords = [
      ...reproductiveHealthKeywords.female,
      ...reproductiveHealthKeywords.male,
      ...reproductiveHealthKeywords.general
    ];
    return allKeywords.some(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const handleSuggestedQuestion = async (question) => {
    setShowSuggestions(false);
    setInputMessage(question);
    await sendMessage(question);
  };

  const sendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    try {
      setIsLoading(true);
      const newMessage = { role: 'user', content: messageText };
      setMessages(prev => [...prev, newMessage]);

      if (!isReproductiveHealthRelated(messageText)) {
        const offTopicResponse = {
          role: 'assistant',
          content: "I'm here to assist with reproductive health-related questions only. Please feel free to ask anything about menstrual health, fertility, PCOS, or other reproductive health topics!"
        };
        setMessages(prev => [...prev, offTopicResponse]);
        setInputMessage("");
        return;
      }

      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const context = "You are a reproductive health assistant. Provide accurate, medical information while being empathetic and professional. Format important points with markdown-style bold (**) and italics (*).";
        const result = await model.generateContent(`${context}\n\nUser Question: ${messageText}`);
        const response = await result.response;
        const responseText = response.text();

        const aiResponse = {
          role: 'assistant',
          content: responseText
        };
        setMessages(prev => [...prev, aiResponse]);
      } catch (error) {
        const fallbackResponse = {
          role: 'assistant',
          content: "I apologize, but I'm having trouble generating a response. Please try rephrasing your question about reproductive health."
        };
        setMessages(prev => [...prev, fallbackResponse]);
      }
    } catch (error) {
      console.error("Error in message handling:", error);
    } finally {
      setIsLoading(false);
      setInputMessage("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const formatResponse = (text) => {
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-custom text-white !rounded-full px-6 h-14 flex items-center justify-center shadow-xl hover:bg-opacity-90 transition-all duration-200"
        onClick={() => {
          setIsChatOpen(!isChatOpen);
          if (!isChatOpen && messages.length === 0) {
            setShowSuggestions(true);
          }
        }}
      >
        <img className="text-xl font-bold mr-2 w-8 h-8" src={aiagent} alt="AI Agent" />
        <span className="text-sm">AI Health Assistant</span>
      </button>
      
      <div className={`${isChatOpen ? 'block' : 'hidden'} fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl border border-gray-200`}>
        <div className="p-4 border-b border-gray-200 bg-custom text-white rounded-t-lg">
          <h3 className="text-lg font-semibold">Repro Health Friend</h3>
        </div>
        
        <div ref={chatContainerRef} className="h-96 overflow-y-auto p-4 space-y-4">
          {showSuggestions && messages.length <= 1 ? (
            <div className="space-y-4">
              {suggestedQuestions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestedQuestion(item.question)}
                  className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200 transform hover:scale-102 border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.question}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-custom text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.role === 'assistant' 
                    ? formatResponse(message.content)
                    : message.content
                  }
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => {
                setInputMessage(e.target.value);
                if (showSuggestions) setShowSuggestions(false);
              }}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about reproductive health..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom"
            />
            <button
              onClick={() => sendMessage()}
              disabled={isLoading}
              className="bg-custom text-white px-4 py-2 rounded-lg hover:bg-opacity-90 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot; 