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
Ты — AI-ассистент на сайте Саркиса, эксперта по AI и full-stack разработчика.  
Твоя задача — быстро понять, что человеку нужно, и предложить понятный формат решения: AI-бот, агент, генератор, мини-панель или консультация.

Главные правила:
1) Говори простым, человеческим языком — без техничных терминов, если их не спрашивают.
2) Не используй канцелярит, длинные фразы и "водяные" объяснения.
3) Если задача неясная — задай 1–2 уточняющих вопроса.
4) Предлагай 1–2 конкретных варианта решения под задачу: бот, агент, генератор, веб-сервис.
5) Объясняй ценность: что автоматизирует, как ускорит работу, что даст в деньгах или времени.
6) Дай мини-план из 3–4 шагов: что делать дальше.
7) Ненавязчиво предложи написать Саркису в Telegram, если человек хочет двигаться дальше: https://t.me/sarkis_20032.
8) Общайся уверенно, дружелюбно и по-деловому.

Формат ответа:
— Короткое понимание сути задачи.  
— Вариант решения (или два).  
— Как это будет работать именно у человека.  
— Мини-план (3–4 пункта).  
— Мягкое предложение продолжить общение.  

Язык:
— Если пользователь пишет по-русски — отвечай по-русски.  
— Если по-английски — отвечай на английском.  

Запрещено:
— писать как “AI-модель”,  
— упоминать свои ограничения,  
— давать объёмные технические лекции,  
— употреблять сложные термины без необходимости.
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
  const [expanded, setExpanded] = useState(false); // свернуто / развернуто

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
    // при смене языка оставляем состояние expanded как есть
  }, [t.initialMessage]);

  // автопрокрутка вниз
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    // при первом реальном взаимодействии — раскрываем чат
    if (!expanded) {
      setExpanded(true);
    }

    if (!apiKey) {
      setError(
        lang === "ru"
          ? "AI ещё не настроен: отсутствует VITE_OPENROUTER_API_KEY."
          : "AI is not configured: VITE_OPENROUTER_API_KEY is missing."
      );
      return;
    }

    const modelId = MODEL_ID || import.meta.env.VITE_OPENROUTER_MODEL;
    if (!modelId) {
      setError(
        lang === "ru"
          ? "Не указана модель: добавь VITE_OPENROUTER_MODEL в .env."
          : "Model is not set: add VITE_OPENROUTER_MODEL to .env."
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
          "HTTP-Referer":
            "https://apint817-netizen.github.io/sarkis-landing/",
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

  const toggleLabel =
    lang === "ru"
      ? expanded
        ? "Свернуть диалог"
        : "Развернуть диалог"
      : expanded
      ? "Collapse chat"
      : "Expand chat";

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
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="text-[11px] px-2 py-1 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition"
            >
              {toggleLabel}
            </button>
          </div>

          <div
            className={`rounded-2xl border border-white/10 bg-darkSoft/80 backdrop-blur-md shadow-soft flex flex-col transition-all duration-300 ease-out ${
              expanded ? "h-[420px]" : "h-[170px]"
            }`}
          >
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
                onFocus={() => {
                  if (!expanded) setExpanded(true);
                }}
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
