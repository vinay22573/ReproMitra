import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Create a model instance
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// System prompt to guide the AI's responses
const SYSTEM_PROMPT = `You are a knowledgeable and empathetic reproductive health assistant. Your role is to provide accurate, evidence-based information about reproductive health topics while maintaining a professional and supportive tone. 

Key guidelines:
1. Provide factual, medically accurate information
2. Always emphasize that your advice is for informational purposes only
3. Encourage seeking professional medical advice for specific concerns
4. Be sensitive and respectful when discussing reproductive health topics
5. Use clear, understandable language
6. Include relevant medical disclaimers when appropriate

Remember to:
- Be supportive and non-judgmental
- Focus on reproductive health topics
- Provide balanced, evidence-based information
- Include appropriate medical disclaimers
- Encourage professional medical consultation when needed`;

// Function to generate response from Gemini
export const generateResponse = async (message, chatHistory) => {
  try {
    // Format the chat history for context
    const formattedHistory = [
      {
        role: 'user',
        parts: SYSTEM_PROMPT
      },
      ...chatHistory.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'model',
        parts: msg.content
      }))
    ];

    // Start a chat session
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    // Generate response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}; 