// pages/api/ai-agent.js
import OpenAI from "openai";

// Optional: increase body size limit a bit for documentText
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      return res
        .status(500)
        .json({ error: "OPENAI_API_KEY is not set on the server." });
    }

    const { messages, documentText } = req.body || {};

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Missing messages array." });
    }

    const lastMessage = messages[messages.length - 1];

    const systemPrompt = `
You are Ardia Health's clinical explainer assistant.
Your job:
- Answer questions about uploaded documents and chat text.
- Create short bullet-point OUTLINES of the key sections.
- Explain content in very simple language a non-medical person can understand.
- DO NOT diagnose, treat, or recommend medications.
- If the user asks for medical advice, say you can't give medical advice and tell them to talk to their clinician.
- Always end with: "This is not medical advice. Please talk to your doctor for decisions about care."
If a document was provided, use it as the main source of truth and say if anything is unclear or missing.
    `.trim();

    const combinedUserMessage = documentText
      ? `Here is document text (may be partial):\n"""${String(
          documentText
        ).slice(0, 8000)}"""\n\nUser message: ${lastMessage.content}`
      : lastMessage.content;

    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.slice(0, -1), // previous history
      { role: "user", content: combinedUserMessage },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: apiMessages,
      temperature: 0.3,
      max_tokens: 700,
    });

    const reply = completion.choices?.[0]?.message?.content ?? "";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("AI agent error:", err);

    // Try to give the real error message if we can
    const msg =
      err?.response?.data?.error?.message ||
      err?.message ||
      "Something went wrong talking to the AI agent.";
    return res.status(500).json({ error: msg });
  }
}
