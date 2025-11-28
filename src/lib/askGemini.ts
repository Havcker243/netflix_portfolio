import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

if (!apiKey) {
  console.warn('Missing REACT_APP_GEMINI_API_KEY. Gemini chats will be disabled.');
}

const defaultModel = 'gemini-2.5-flash';

export async function askGemini(prompt: string, modelName: string = defaultModel): Promise<string> {
  if (!apiKey) {
    throw new Error('REACT_APP_GEMINI_API_KEY is not configured.');
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response && response.trim().length ? response.trim() : "I couldn't generate an answer.";
  } catch (error) {
    console.error('Gemini error:', error);
    return 'Gemini had trouble processing the request.';
  }
}
