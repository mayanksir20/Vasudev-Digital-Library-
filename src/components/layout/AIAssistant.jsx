import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSend, FiX, FiMessageCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { getAIResponse } from "../../lib/aiService";

const QUICK_PROMPTS = [
  "Library timing",
  "Facilities",
  "Seat availability",
  "Fees",
  "Rules",
  "Location",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Namaste! I'm the vasudev digital library assistant. Ask me about timings, facilities, seat availability, fees, rules or location.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const send = async (text) => {
    const value = text ?? input;
    if (!value.trim()) return;
    setMessages((m) => [...m, { role: "user", text: value }]);
    setInput("");
    setTyping(true);
    const reply = await getAIResponse(value);
    setTyping(false);
    setMessages((m) => [...m, { role: "assistant", text: reply }]);
  };

  return (
    <>
      <motion.button
        aria-label="Open AI assistant"
        onClick={() => setOpen((o) => !o)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-[0_8px_30px_-6px_rgba(212,175,55,0.6)]"
      >
        {open ? <FiX size={22} /> : <HiSparkles size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 flex h-[70vh] max-h-[560px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl glass-panel shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3 border-b border-gold/15 bg-navy px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <HiSparkles size={18} />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-ivory">Library Assistant</p>
                <p className="text-xs text-mist">Ask about timing, fees, seats & more</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gold-gradient text-navy-deep rounded-br-sm"
                        : "glass-panel-light text-ivory rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="glass-panel-light flex gap-1 rounded-2xl rounded-bl-sm px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-gold"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gold/15 px-3 py-2 flex gap-2 overflow-x-auto">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="whitespace-nowrap rounded-full glass-panel-light px-3 py-1.5 text-xs text-ivory/80 hover:text-gold hover:border-gold/50 transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-gold/15 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-full bg-white/5 px-4 py-2.5 text-sm text-ivory placeholder:text-mist/60 outline-none focus-visible:outline-2 focus-visible:outline-gold"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep"
              >
                <FiSend size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
