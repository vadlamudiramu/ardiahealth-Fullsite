// components/AIChatWidget.js
import { useState } from "react";

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I’m Ardia’s AI helper. You can ask me about your document or clinical workflows. If you upload a file, I’ll outline it and explain things in simple language.\n\nI cannot give medical advice—please talk to your doctor for decisions about care.",
    },
  ]);
  const [uploadName, setUploadName] = useState("");
  const [documentText, setDocumentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadName(file.name);
    const reader = new FileReader();

    reader.onload = () => {
      const text = typeof reader.result === "string" ? reader.result : "";
      // basic text extraction; works best with .txt or docs exported to text
      setDocumentText(text.slice(0, 15000));
    };

    // For PDFs this will give messy text but is still usable for a summary
    reader.readAsText(file);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input.trim() },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          documentText,
        }),
      });

      let data = null;
      try {
        data = await response.json();
      } catch (parseErr) {
        console.error("Failed to parse JSON from /api/ai-agent:", parseErr);
      }

      if (!response.ok) {
        const errorMessage =
          data?.error ||
          `Server error (${response.status}) talking to AI agent.`;
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: errorMessage },
        ]);
        return;
      }

      if (data?.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "The AI agent did not send a reply. Please try again with a shorter question or smaller document.",
          },
        ]);
      }
    } catch (e) {
      console.error("Network error calling /api/ai-agent:", e);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "There was a network problem talking to the AI agent. Please check your connection and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 px-4 py-2 text-xs font-semibold shadow-lg shadow-teal-500/40 md:bottom-6 md:right-6"
      >
        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-slate-950/90 text-teal-300 text-sm">
          ⚕️
        </span>
        <span className="hidden sm:inline">Ask Ardia AI</span>
        <span className="sm:hidden">Chat</span>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed inset-x-2 bottom-16 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[360px] md:w-[400px] lg:w-[420px] z-40 rounded-2xl border border-slate-700 bg-slate-950/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-teal-500/20 via-sky-500/15 to-indigo-500/20 border-b border-slate-700">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                ARDIA AI HELPER
              </p>
              <p className="text-[10px] text-slate-300">
                Explains docs in simple language · Not medical advice
              </p>
            </div>
            <button
              className="text-slate-400 hover:text-slate-100 text-sm"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-[12px]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-teal-500 text-slate-950"
                      : "bg-slate-800 text-slate-50 border border-slate-600/70"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-[11px] text-slate-400">Thinking…</div>
            )}
          </div>

          {/* Upload + input */}
          <div className="border-t border-slate-700 bg-slate-900/95 px-3 py-3 space-y-2">
            <div className="flex items-center gap-2">
              <label className="flex cursor-pointer items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200 hover:bg-slate-700">
                📄
                <span className="truncate max-w-[120px] sm:max-w-[160px]">
                  {uploadName || "Attach document (.txt / export)"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".txt,.md,.doc,.docx,.pdf"
                />
              </label>
              {documentText && (
                <span className="text-[10px] text-teal-300">
                  Loaded for outlining
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                className="flex-1 rounded-full border border-slate-700 bg-slate-950/90 px-3 py-2 text-[11px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-400"
                placeholder="Ask about your visit note, letter, or document…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading}
                className="rounded-full bg-teal-500 hover:bg-teal-400 disabled:opacity-50 px-3 py-2 text-[11px] font-semibold text-slate-950"
              >
                Send
              </button>
            </div>

            <p className="text-[9px] text-slate-500 leading-snug">
              This tool is for explanation only and{" "}
              <span className="text-slate-200 font-semibold">
                does not provide medical advice.
              </span>{" "}
              Always talk to your clinician for care decisions.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
