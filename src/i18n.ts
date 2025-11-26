export type Lang = "ru" | "en";

export const texts = {
  ru: {
    nav: {
      about: "Обо мне",
      services: "Услуги",
      skills: "Стек",
      process: "Как я работаю",
      faq: "FAQ",
      contact: "Контакты",
      assistant: "AI-ассистент",
    },
    hero: {
      badge: "AI-эксперт и full-stack разработчик",
      title:
        "Создаю AI-решения, которые реально работают, а не просто «модно»",
      subtitle:
        "Боты, сайты, AI-агенты и генераторы под задачи бизнеса. Без воды, с фокусом на результат и автоматизацию.",
      ctaPrimary: "Написать в Telegram",
      ctaSecondary: "Посмотреть услуги",
      photo: {
        name: "Саркис",
        role: "AI-эксперт и разработчик · боты, сайты, агенты",
        online: "В сети",
      },
      badges: ["Боты · AI-агенты · Генераторы", "React · Node.js · LLM"],
    },
    about: {
      title: "Кто такой Саркис",
      text: "Я помогаю предпринимателям и командам построить работающие AI-решения: от простых ботов до сложных multi-agent систем. Моя задача — не просто «подключить нейросеть», а встроить её в реальные процессы: лиды, продажи, обработка заявок, маркетплейсы, поддержка клиентов.",
      bullets: [
        "Практический фокус: делаю то, что даёт результат в деньгах и времени",
        "Работаю один, без бюрократии и лишних созвонов",
        "Люблю понятные, визуально аккуратные интерфейсы и прозрачную логику",
      ],
    },
    services: {
      title: "Что я делаю",
      servicesNote:
        "Можно взять одну услугу или собрать комбинацию: например, бот + AI-генератор + веб-панель для управления.",
      items: [
        {
          title: "AI-боты и автоворонки",
          desc: "WhatsApp / Telegram-боты, связки с CRM, триггерные рассылки, персонализированные сценарии.",
          tag: "Боты",
        },
        {
          title: "AI-агенты и генераторы",
          desc: "AI-ассистенты, генераторы карточек, контента, ответов поддержки. Multi-agent архитектуры под ваши задачи.",
          tag: "Агенты",
        },
        {
          title: "Веб-сервисы и панели",
          desc: "Панели управления, личные кабинеты, лендинги и интеграции с AI-моделями.",
          tag: "Сайты и сервисы",
        },
        {
          title: "Консалтинг по AI-стратегии",
          desc: "Разбор продукта, поиск точек автоматизации, подбор стека, дорожная карта внедрения AI.",
          tag: "Консалтинг",
        },
      ],
    },
    skills: {
      title: "Технологический стек",
      subtitle: "Подбираю инструменты под задачу, а не наоборот.",
      groups: [
        {
          title: "AI и LLM",
          skills: [
            "OpenAI / ChatGPT",
            "OpenRouter",
            "Llama / Qwen",
            "Prompt-архитектура",
          ],
        },
        {
          title: "Боты и backend",
          skills: ["Node.js", "Telegram / WhatsApp API", "Webhooks", "REST API"],
        },
        {
          title: "Web и интерфейсы",
          skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        },
        {
          title: "Инфраструктура",
          skills: [
            "Render / Vercel",
            "Docker (по необходимости)",
            "GitHub Actions (CI/CD)",
          ],
        },
      ],
    },
    process: {
      title: "Как мы работаем",
      steps: [
        {
          title: "Созвон и разбор",
          desc: "Понимаем, чего вы хотите добиться: больше заявок, автоматизация рутины, новый продукт.",
        },
        {
          title: "Архитектура решения",
          desc: "Предлагаю конкретный формат: бот, панель, агент, генератор — и схему, как всё будет работать.",
        },
        {
          title: "Сборка и запуск",
          desc: "Реализую MVP, подключаю AI-модели, тестируем на реальных пользователях.",
        },
        {
          title: "Доработка и масштаб",
          desc: "Улучшаем сценарии, добавляем фичи, оптимизируем издержки и скорость.",
        },
      ],
    },

    // 🔥 Отзывы
    testimonials: {
      title: "Отзывы клиентов",
      subtitle:
        "Ко мне приходят, когда нужен не «ещё один бот», а понятное рабочее решение под задачи бизнеса.",
      items: [
        {
          name: "Вячеслав",
          role: "Ремонт под ключ · Москва",
          text: "Нужен был простой, но живой WhatsApp-бот, который берёт контакты с рекламы и доводит до звонка. Саркис собрал схему, всё интегрировал с таблицами и настроил рассылки. Лиды идут стабильно, мы только принимаем заявки.",
          tag: "Лиды из рекламы",
        },
        {
          name: "Назар",
          role: "Онлайн-школа · РФ",
          text: "Запускали рассылки по базе и хотели перестать делать всё руками. Сервис, который сделал Саркис, закрывает сегментацию, шаблоны и историю запусков. Маркетолог просто работает в панели, не дёргая технарей.",
          tag: "Автоматизация рассылок",
        },
        {
          name: "Римма",
          role: "Маркетолог маркетплейсов",
          text: "Нужен был набор AI-инструментов: генератор карточек и помощник по товарам. Мы описали логику, Саркис предложил архитектуру агентов и реализовал её. Сейчас экономим часы на рутине и быстрее тестируем гипотезы.",
          tag: "AI-инструменты под нишу",
        },
      ],
    },

    assistant: {
      title: "AI-ассистент на сайте",
      subtitle:
        "Здесь можно вживую поговорить с AI-ассистентом Саркиса: описать задачу и получить идею решения — бот, агент, сервис или генератор.",
      bullets: [
        "Помогает выбрать формат решения под твой бизнес.",
        "Подсказывает, как внедрить AI в текущие процессы.",
        "Понимает русский и английский, держит контекст про твои услуги.",
      ],
      initialMessage:
        "Привет! Я AI-ассистент Саркиса. Опиши свою задачу — подскажу, какой бот, агент или сервис под неё подойдёт. 🙂",
      thinking: "Ассистент думает…",
      inputPlaceholder: "Опиши задачу или задай вопрос...",
      send: "Отправить",
      sending: "Отправка...",
    },
    cta: {
      title: "Есть идея или задача под AI?",
      subtitle:
        "Опиши в двух-трёх предложениях, что хочешь автоматизировать или запустить — я предложу конкретный формат и шаги.",
      button: "Написать в Telegram",
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Сколько стоит разработка?",
          a: "Зависит от формата. Я не работаю по прайсу «бот от N рублей». Мы фиксируем задачу, оцениваем объём и собираем решение под ваш бюджет и приоритеты.",
        },
        {
          q: "Вы работаете с заказами или только свои продукты?",
          a: "Я не беру поток всех подряд, но работаю с проектами, где действительно нужен AI: автоматизация, новые сервисы, генераторы. Если задача мне не подходит — честно скажу.",
        },
        {
          q: "Можно ли начать с консультации?",
          a: "Да. Можно начать с разбор-сессии: смотрим на ваш бизнес/продукт, ищем точки входа для AI и собираем понятный план.",
        },
      ],
    },
    footer: {
      text: "Саркис — AI-эксперт и разработчик. Боты, агенты, сервисы, которые работают на вас.",
      rights: "Все права защищены.",
    },
  },

  // ----------------------------- ENGLISH ------------------------------

  en: {
    nav: {
      about: "About",
      services: "Services",
      skills: "Stack",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      assistant: "AI assistant",
    },
    hero: {
      badge: "AI expert & full-stack developer",
      title:
        "I build AI solutions that actually solve problems, not just look trendy",
      subtitle:
        "Bots, web apps, AI agents and generators for real business tasks. No buzzwords — focus on outcomes and automation.",
      ctaPrimary: "Message on Telegram",
      ctaSecondary: "View services",
      photo: {
        name: "Sarkis",
        role: "AI expert & developer · bots, web apps, agents",
        online: "Online",
      },
      badges: ["Bots · AI agents · Generators", "React · Node.js · LLM"],
    },
    about: {
      title: "Who is Sarkis",
      text: "I help founders and teams build real AI solutions: from simple bots to complex multi-agent systems. The goal is not just to plug in AI, but to integrate it into real processes: leads, sales, marketplace flows, support, operations.",
      bullets: [
        "Practical focus: solutions that impact revenue and time",
        "No bureaucracy or huge teams — you talk directly to the builder",
        "I care about clean UI and transparent logic",
      ],
    },
    services: {
      title: "What I build",
      servicesNote:
        "You can take a single service or build a combo: for example, bot + AI generator + web dashboard.",
      items: [
        {
          title: "AI bots & funnels",
          desc: "WhatsApp / Telegram bots, CRM integrations, trigger campaigns, personalized flows.",
          tag: "Bots",
        },
        {
          title: "AI agents & generators",
          desc: "Custom AI assistants, generators for cards, content, support replies. Multi-agent setups for your workflows.",
          tag: "Agents",
        },
        {
          title: "Web apps & dashboards",
          desc: "Admin panels, client dashboards, landing pages, AI-powered web tools.",
          tag: "Web",
        },
        {
          title: "AI consulting",
          desc: "Product review, automation points, stack selection, roadmap for AI adoption.",
          tag: "Consulting",
        },
      ],
    },
    skills: {
      title: "Tech stack",
      subtitle: "Tools are chosen for the problem, not the hype.",
      groups: [
        {
          title: "AI & LLM",
          skills: ["OpenAI / ChatGPT", "OpenRouter", "Llama / Qwen", "Prompt design"],
        },
        {
          title: "Bots & backend",
          skills: ["Node.js", "Telegram / WhatsApp API", "Webhooks", "REST APIs"],
        },
        {
          title: "Web & UI",
          skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        },
        {
          title: "Infra",
          skills: ["Render / Vercel", "Docker (when needed)", "GitHub Actions (CI/CD)"],
        },
      ],
    },
    process: {
      title: "How we work",
      steps: [
        {
          title: "Call & problem",
          desc: "We clarify what you want to achieve: more leads, less routine, a new product.",
        },
        {
          title: "Solution architecture",
          desc: "I suggest a concrete format — bot, panel, agent, generator — and how it all connects.",
        },
        {
          title: "Build & launch",
          desc: "Implement the MVP, connect AI models, test with real users.",
        },
        {
          title: "Iterate & scale",
          desc: "Improve flows, add features, optimize cost and speed.",
        },
      ],
    },

    // 🔥 Testimonials
    testimonials: {
      title: "Client feedback",
      subtitle:
        "People come to me when they need a clear, working AI solution — not just “another bot”.",
      items: [
        {
          name: "Vyacheslav",
          role: "Full-cycle renovation · Moscow",
          text: "We needed a simple but effective WhatsApp bot to capture leads from ads and bring them to a call. Sarkis designed the flow, wired it to our spreadsheets and set up campaigns. Leads are coming in steadily — we just handle the requests.",
          tag: "Leads from ads",
        },
        {
          name: "Nazar",
          role: "Online school · Russia",
          text: "We wanted to stop doing broadcasts manually and systematize the base. The tool Sarkis built now handles segmentation, templates and history of campaigns. Our marketer just works in the panel instead of pinging developers.",
          tag: "Automation",
        },
        {
          name: "Rimma",
          role: "Marketplace marketer",
          text: "We needed AI tooling: card generator and product assistant. We described the logic, Sarkis proposed the agent architecture and implemented it. Now we save hours on routine and test more ideas faster.",
          tag: "AI tools",
        },
      ],
    },

    assistant: {
      title: "AI assistant on the site",
      subtitle:
        "Here you can talk live with Sarkis's AI assistant, describe your task and get an idea for a bot, agent, service or generator.",
      bullets: [
        "Helps you choose the right format for your business.",
        "Suggests how to plug AI into your existing workflows.",
        "Understands Russian and English and knows Sarkis's services.",
      ],
      initialMessage:
        "Hi! I'm Sarkis's AI assistant. Describe your task — I'll suggest what bot, agent or service fits it best. 🙂",
      thinking: "Assistant is thinking…",
      inputPlaceholder: "Describe your task or ask a question...",
      send: "Send",
      sending: "Sending...",
    },
    cta: {
      title: "Got an idea or AI use case?",
      subtitle:
        "Send me a short message about what you want to automate or launch — I'll propose a concrete format and steps.",
      button: "Message on Telegram",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "How do you price your work?",
          a: "Depends on the format and scope. I don’t use «bot from X$» pricing. We fix the goal, scope and build something that fits your priorities and budget.",
        },
        {
          q: "Do you take client work or only your own products?",
          a: "I don’t take everything, but I work with projects where AI really matters: automation, new services, generators. If I’m not the right fit — I’ll say it honestly.",
        },
        {
          q: "Can we start with a consultation?",
          a: "Yes. We can start with a strategy session: look at your business/product, find AI leverage points and build a plan.",
        },
      ],
    },
    footer: {
      text: "Sarkis — AI expert & developer. Bots, agents and tools that work for you.",
      rights: "All rights reserved.",
    },
  },
} as const;
