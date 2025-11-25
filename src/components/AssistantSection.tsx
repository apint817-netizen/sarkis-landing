// src/components/AssistantSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { texts, type Lang } from "../i18n";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type AssistantSectionProps = {
  lang: Lang; // язык приходит сверху из App
};

const SYSTEM_PROMPT = `
You are the landing page AI assistant for Sarkis, an AI expert & full-stack developer.

Goals:
1) Understand the visitor’s situation and task in simple terms.
2) Map their task to 1–3 suitable solution formats from:
   – AI bot (WhatsApp / Telegram),
   – AI agent or generator,
   – web app or dashboard,
   – AI strategy / consulting session.
3) Explain in practical language how this solution would work in their case and what it will automate or improve.
4) Suggest the next step (for example: describe what information Sarkis would need from them, or suggest writing to him on Telegram: https://t.me/sarkis_20032).

Style:
- Be brief, clear and friendly.
- Prefer structured answers: short paragraphs or bullet lists.
- Avoid jargon unless the user is clearly technical.
- Do NOT mention that you are an AI model or talk about your limitations unless directly asked.

Language:
- If the user writes in Russian, answer in Russian.
- If the user writes in English, answer in English.
- Mirror the user’s tone: practical and business-oriented.
`;

const API_URL = "https://openrouter.ai/api/v1/chat/completions";

// модель берём из .env, чтобы можно было легко менять
const MODEL_ID =
  (import.meta.env.VITE_OPENROUTER_MODEL as string | undefined) ||
  "x-ai/grok-1-fast:free"; // запасной дефолт

export default function AssistantSection({ lang }: AssistantSectionProps) {
  const t = texts[lang].assistant;
  const userLabel = lang === "ru" ? "Ты" : "You";

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY as
    | string
    | undefined;

  // контейнер с сообщениями — крутим только его, а не страницу
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  // При смене языка — новый приветственный текст и чистый чат
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: t.initialMessage,
      },
    ]);
    setError(null);
    setInput("");
  }, [t.initialMessage]);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    if (!apiKey) {
      setError(
        lang === "ru"
          ? "AI ещё не настроен: отсутствует VITE_OPENROUTER_API_KEY. Добавь ключ в .env и перезапусти npm run dev."
          : "AI is not configured yet: VITE_OPENROUTER_API_KEY is missing. Add the key to .env and restart npm run dev."
      );
      return;
    }

    const modelId = MODEL_ID || import.meta.env.VITE_OPENROUTER_MODEL;
    if (!modelId) {
      setError(
        lang === "ru"
          ? "Не указана модель: добавь VITE_OPENROUTER_MODEL в .env с реальным ID модели из OpenRouter."
          : "Model is not set: add VITE_OPENROUTER_MODEL to .env with a valid model ID from OpenRouter."
      );
      return;
    }

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://apint817-netizen.github.io/sarkis-landing/",
          "X-Title": "Sarkis AI Landing Assistant",
        },
        body: JSON.stringify({
          model: modelId,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
        }),
      });

      if (!res.ok) {
        let detail = "";
        try {
          const text = await res.text();
          detail = text.slice(0, 200);
        } catch {
          // ignore
        }
        throw new Error(`API error ${res.status}. ${detail}`);
      }

      const data = await res.json();
      const reply: string =
        data.choices?.[0]?.message?.content ??
        (lang === "ru"
          ? "Модель не вернула ответа."
          : "The model did not return a reply.");

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e: any) {
      console.error(e);
      setError(
        (lang === "ru"
          ? "Не удалось получить ответ от AI. Попробуй ещё раз позже."
          : "Failed to get a response from AI. Try again later.") +
          "\n" +
          (e?.message ? `Tech detail: ${e.message}` : "")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderMessage = (m: Message, idx: number) => {
    const isUser = m.role === "user";

    return (
      <div
        key={idx}
        className={`flex w-full gap-2 ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        {/* Аватар ассистента слева */}
        {!isUser && (
          <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-[11px] font-semibold">
            SA
          </div>
        )}

        <div
          className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-soft whitespace-pre-wrap ${
            isUser
              ? "bg-accent text-white font-semibold rounded-br-sm"
              : "bg-white/5 text-white/90 border border-white/10 font-medium rounded-bl-sm"
          }`}
        >
          {m.content}
        </div>

        {/* Аватар пользователя справа */}
        {isUser && (
          <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">
            {userLabel}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="assistant" className="section-container pt-8 md:pt-16">
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Левая колонка — описание */}
        <div className="md:w-1/3 space-y-3">
          <h2 className="section-title">{t.title}</h2>
          <p className="text-sm md:text-base text-white/70">{t.subtitle}</p>

          <ul className="text-xs md:text-sm text-white/60 space-y-1">
            {t.bullets.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Правая колонка — чат */}
        <div className="md:w-2/3">
          <div className="rounded-2xl border border-white/10 bg-darkSoft/80 backdrop-blur-md shadow-soft flex flex-col h-[420px]">
            {/* Сообщения */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
            >
              {messages.map(renderMessage)}
              {loading && (
                <div className="text-xs text-white/60 italic">
                  {t.thinking}
                </div>
              )}
              {error && (
                <div className="text-xs text-red-400 whitespace-pre-wrap">
                  {error}
                </div>
              )}
            </div>

            {/* Поле ввода */}
            <div className="border-t border-white/10 px-3 py-2 flex items-center gap-2">
              <input
                type="text"
                placeholder={t.inputPlaceholder}
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="btn-primary text-xs px-3 py-1.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? t.sending : t.send}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
