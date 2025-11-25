import React, { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT =
  "You are an AI assistant for Sarkis, an AI expert & full-stack developer. " +
  "Help visitors understand his services (bots, web apps, AI agents, generators) " +
  "and suggest how he can solve their tasks. Answer briefly, clearly and friendly.";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export default function AssistantSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Привет! Я AI-ассистент Саркиса. Могу подсказать, какой бот, агент или сервис подойдёт под твою задачу — просто опиши её в паре предложений.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

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
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://apint817-netizen.github.io/sarkis-landing/",
          "X-Title": "Sarkis AI Assistant",
        },
        body: JSON.stringify({
          model: "meta-llama/Meta-Llama-3.1-8B-Instruct:free", // бесплатная модель
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
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content ?? "Нет ответа от модели.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e: any) {
      console.error(e);
      setError("Не удалось получить ответ от AI. Попробуй ещё раз позже.");
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

  return (
    <section id="assistant" className="section-container pt-8 md:pt-16">
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="md:w-1/3 space-y-3">
          <h2 className="section-title">AI-ассистент на сайте</h2>
          <p className="text-sm md:text-base text-white/70">
            Здесь можно вживую поговорить с AI-ассистентом Саркиса: описать
            задачу и получить идею решения — бот, агент, сервис или генератор.
          </p>

          <ul className="text-xs md:text-sm text-white/60 space-y-1">
            <li>• Помогает выбрать формат решения под твой бизнес.</li>
            <li>• Может подсказать, как внедрить AI в текущие процессы.</li>
            <li>• На русском и английском, контекст — про услуги Саркиса.</li>
          </ul>
        </div>

        <div className="md:w-2/3">
          <div className="rounded-2xl border border-white/10 bg-darkSoft/80 backdrop-blur-md shadow-soft flex flex-col h-[420px]">
            {/* Сообщения */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                    m.role === "user"
                      ? "ml-auto bg-accent text-white"
                      : "mr-auto bg-white/5 text-white/90 border border-white/10"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="mr-auto text-xs text-white/60 italic">
                  Ассистент думает...
                </div>
              )}
              {error && (
                <div className="mr-auto text-xs text-red-400">{error}</div>
              )}
            </div>

            {/* Поле ввода */}
            <div className="border-t border-white/10 px-3 py-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Опиши задачу или задай вопрос..."
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
                Отправить
              </button>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-white/40">
            ⚠ Лимит бесплатных запросов OpenRouter, поэтому ассистент может
            иногда отвечать с задержкой или выдавать ошибку.
          </p>
        </div>
      </div>
    </section>
  );
}
