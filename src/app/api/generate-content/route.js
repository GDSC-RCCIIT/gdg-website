import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
    const { prompt } = await req.json();
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();

        return new Response(JSON.stringify({ generatedText }), { status: 200 });
    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}
