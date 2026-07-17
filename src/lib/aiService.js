// ============================================================================
// AI Assistant service — modular, Gemini-API-ready.
//
// This site is a static build, so no server-side key handling exists yet.
// To go live with Google Gemini:
//   1. Create an API key in Google AI Studio.
//   2. Add it to an .env file as VITE_GEMINI_API_KEY (never commit real keys).
//   3. Replace the body of `getAIResponse` below with a fetch call to:
//      https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_KEY
//   4. Keep `LIBRARY_CONTEXT` as the system-style context so answers stay
//      grounded in this library's real facilities, hours and pricing.
// ============================================================================

import { business } from "../data/siteData";

export const LIBRARY_CONTEXT = `
You are the official AI assistant for ${business.name}, a premium digital library
in Akbarpur, Uttar Pradesh. Answer only questions about the library: timings,
facilities, seat availability, fees, rules and location. Address: ${business.address.full}.
Hours: ${business.hours.weekday}. Phone: ${business.phones.join(", ")}.
`;

// Local, offline fallback so the assistant is fully functional before an
// API key is wired in. Swap this out for a real Gemini call when ready.
const LOCAL_RESPONSES = [
  {
    keywords: ["timing", "time", "open", "close", "hours"],
    answer: `We're open ${business.hours.weekday}. ${business.hours.note}.`,
  },
  {
    keywords: ["facility", "facilities", "amenities", "wifi", "ac", "air"],
    answer:
      "We offer fully air-conditioned halls, individual study cabins, high-speed WiFi, RO drinking water, LED study lights, charging points and 24×7 security — see our Facilities page for the full list.",
  },
  {
    keywords: ["seat", "availability", "vacancy", "slot"],
    answer:
      "Seat availability changes daily. Please call us at +91 " +
      business.phones[0] +
      " or message us on WhatsApp and we'll confirm the next available cabin for you.",
  },
  {
    keywords: ["fee", "fees", "price", "cost", "charges", "membership"],
    answer:
      "Membership fees vary by plan and duration. For the latest pricing, please call us or message us on WhatsApp — our team will share the current plans right away.",
  },
  {
    keywords: ["rule", "rules", "silence", "discipline", "policy"],
    answer:
      "We maintain a strict silent-zone policy, assigned individual cabins, and a clean, disciplined environment so every member can focus without distraction.",
  },
  {
    keywords: ["location", "address", "where", "map", "direction"],
    answer: `We're located at ${business.address.full}. You can find directions on our Contact page.`,
  },
];

const FALLBACK =
  "That's a great question! For anything specific to your enrolment, please call us at +91 " +
  business.phones[0] +
  " or message us on WhatsApp — our team responds quickly.";

/**
 * getAIResponse — currently resolves locally with keyword matching.
 * Replace the internals with a real Gemini `generateContent` call to go live.
 */
export async function getAIResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  // --- Simulated network delay for a natural typing-indicator feel ---
  await new Promise((resolve) => setTimeout(resolve, 650 + Math.random() * 500));

  const match = LOCAL_RESPONSES.find((r) => r.keywords.some((k) => msg.includes(k)));
  return match ? match.answer : FALLBACK;

  /* ---------------------------------------------------------------------
   * PRODUCTION EXAMPLE (uncomment + configure once VITE_GEMINI_API_KEY exists)
   * ---------------------------------------------------------------------
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${LIBRARY_CONTEXT}\n\nStudent question: ${userMessage}` }] }],
      }),
    }
  );
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || FALLBACK;
  ------------------------------------------------------------------------ */
}
