import React from "react";
import type { Lang } from "../i18n";

type FooterTexts = {
  text: string;
  rights: string;
};

type Props = {
  footer: FooterTexts;
  lang: Lang;
};

export default function Footer({ footer, lang }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-6">
      <div className="section-container py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 text-xs text-white/60">
        <div className="space-y-1">
          <p>{footer.text}</p>
          <p>
            © {year}. {footer.rights}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1">
          <span className="text-[11px]">
            Language:{" "}
            <span className="font-semibold">
              {lang.toUpperCase()}
            </span>
          </span>
          <a
            href="https://t.me/sarkis_20032"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] underline underline-offset-2 hover:text-white"
          >
            Telegram: @sarkis_20032
          </a>
        </div>
      </div>
    </footer>
  );
}
