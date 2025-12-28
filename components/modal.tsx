"use client";

import { useEffect, useState } from "react";

interface CtaModalProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick: () => void;
  trigger: "scroll" | "idle";
}

export default function CtaModal({
  title,
  description,
  ctaText,
  onCtaClick,
  trigger,
}: CtaModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (trigger === "scroll") {
      const onScroll = () => {
        const percent =
          (window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight;

        if (percent >= 0.6) {
          setOpen(true);
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }

    if (trigger === "idle") {
      let timer: NodeJS.Timeout;
      const reset = () => {
        clearTimeout(timer);
        timer = setTimeout(() => setOpen(true), 8000);
      };
      ["mousemove", "keydown", "scroll", "touchstart"].forEach(e =>
        window.addEventListener(e, reset)
      );
      reset();
      return () =>
        ["mousemove", "keydown", "scroll", "touchstart"].forEach(e =>
          window.removeEventListener(e, reset)
        );
    }
  }, [trigger]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden relative animate-fadeIn">

        {/* Botão fechar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xl flex items-center justify-center"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Lado visual */}
          <div className="hidden md:flex items-center justify-center bg-[#ffc35a] p-10">
            <img
              src="/img_empresa.png"
              alt="FixDuo"
              className="max-w-xs"
            />
          </div>

          {/* Conteúdo */}
          <div className="p-8 md:p-12 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h3>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {description}
            </p>

            <button
              onClick={onCtaClick}
              className="w-full bg-[#0b2235] text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all"
            >
              {ctaText}
            </button>

            <p className="text-sm text-gray-400 mt-4">
              Atendimento rápido • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
