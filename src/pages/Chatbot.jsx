import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaSmile } from "react-icons/fa";
import { MdSend, MdAttachFile } from "react-icons/md";

const SUGGESTIONS = [
  "Foods to avoid",
  "Brushing & flossing tips",
  "Tooth sensitivity help",
  "Whitening options",
  "Book an appointment",
];

const PRESET_ANSWERS = {
  "foods to avoid":
    "Try to minimize sticky candies (caramels, taffy), dried fruit, soda and sports drinks, hard candies you suck on, and frequent snacking on crackers or chips. If you do have them, rinse with water and brush 30 minutes later to protect enamel.",
  "brushing & flossing tips":
    "Brush for 2 minutes twice a day with a soft‑bristle brush and fluoride toothpaste. Keep the brush at a 45° angle to the gumline, using gentle circles. Floss once daily, hugging each tooth in a C‑shape. Replace your brush every 3 months or after illness.",
  "tooth sensitivity help":
    "Use a desensitizing toothpaste for 2–4 weeks, avoid aggressive brushing, and limit very hot/cold or acidic foods. Persistent sensitivity can indicate enamel wear, gum recession, or a cracked tooth—schedule a check if it continues.",
  "whitening options":
    "Over‑the‑counter strips work for mild staining. Custom trays or in‑office whitening are stronger and faster, and safer if you have sensitivity or dental work. Avoid staining foods (coffee, tea, red wine) for 48 hours after whitening.",
  "book an appointment":
    "I can help you request a time. Share the reason (cleaning, pain, whitening), preferred days, and morning/afternoon. We'll follow up by phone or text to confirm.",
};

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi there! I'm Emaan, your dental assistant. Ask me anything—like foods to avoid, brushing tips, sensitivity, or whitening.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const viewportRef = useRef(null);

  useEffect(() => {
    viewportRef.current?.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const getBotReply = (text) => {
    const t = text.trim().toLowerCase();
    if (!t) return "";
    if (t.includes("hello") || t.includes("hi"))
      return "Hi! I'm Emaan. Ask me about dental care, sensitivity, whitening, or booking an appointment.";
    for (const key of Object.keys(PRESET_ANSWERS)) {
      if (t.includes(key)) return PRESET_ANSWERS[key];
    }
    return "I can help with brushing tips, food recommendations, or anything dental-related!";
  };

  const send = async (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 600));
    const reply = getBotReply(text);
    setIsTyping(false);
    setMessages((m) => [...m, { from: "bot", text: reply }]);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const SuggestionChips = () => (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
      {SUGGESTIONS.map((s) => (
        <button
          key={s}
          onClick={() => send(s)}
          className="px-3 sm:px-4 py-2 bg-primary text-white rounded-full text-xs sm:text-sm hover:bg-primary-hover transition-colors"
        >
          {s}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-black px-4 sm:px-6">
      <div className="max-w-4xl mx-auto py-6 sm:py-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <FaSmile className="text-primary text-2xl sm:text-3xl" />
            <div>
              <div className="text-base sm:text-lg font-semibold">Emaan</div>
              <div className="text-xs sm:text-sm text-gray-500">
                Your dental assistant
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-lg shadow-xl p-4 sm:p-6">
          <div
            ref={viewportRef}
            className="h-[50vh] sm:h-[60vh] overflow-y-auto flex flex-col gap-3 sm:gap-4 pb-4 sm:pb-6"
          >
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`max-w-[90%] sm:max-w-[85%] ${
                  m.from === "bot" ? "self-start" : "self-end"
                }`}
              >
                <div
                  className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm leading-relaxed ${
                    m.from === "bot" ? "bg-gray-200" : "bg-primary text-white"
                  }`}
                >
                  {m.text}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="self-start"
              >
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-200 text-xs sm:text-sm">
                  <MdAttachFile className="animate-spin text-lg sm:text-xl" />
                  <span>Typing...</span>
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex gap-2 mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="flex-1 p-2 sm:p-3 rounded-lg border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => send(input)}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50"
              disabled={!input.trim()}
            >
              <MdSend className="text-lg sm:text-xl" />
            </button>
          </div>

          <div className="mt-4">
            <SuggestionChips />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
