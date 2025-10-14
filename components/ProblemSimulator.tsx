"use client";

import { useState } from "react";

const options = {
  Sala: ["Sofá", "TV", "Cortina"],
  Cozinha: ["Geladeira", "Fogão", "Armário"],
  Banheiro: ["Chuveiro", "Pia", "Box"],
  Quarto: ["Cama", "Guarda-roupa", "Abajur"],
} as const;

type Rooms = keyof typeof options;
type Furniture = (typeof options)[Rooms][number];

const solutions: Record<Furniture, string> = {
  Sofá: "Talvez seja hora de uma limpeza profunda no estofado ou ajuste dos pés.",
  TV: "Verifique os cabos e conexões de energia. Pode ser necessário um suporte novo.",
  Cortina: "Recomendo substituir o varão ou ajustar os ganchos de fixação.",
  Geladeira: "Cheque o termostato e as borrachas de vedação da porta.",
  Fogão: "Pode ser necessário limpar os queimadores ou revisar o acendimento automático.",
  Armário: "Ajuste as dobradiças ou troque os puxadores para um visual renovado.",
  Chuveiro: "Verifique o disjuntor ou troque a resistência.",
  Pia: "Pode haver entupimento — tente desmontar o sifão e limpar.",
  Box: "Limpe os trilhos e revise o silicone de vedação.",
  Cama: "Reforce as tábuas ou troque o colchão se estiver afundando.",
  "Guarda-roupa": "Reaperte os parafusos e alinhe as portas.",
  Abajur: "Troque a lâmpada e confira o fio de energia.",
};

export default function ProblemSimulator() {
  const [room, setRoom] = useState<Rooms | "">("");
  const [furniture, setFurniture] = useState<Furniture | "">("");
  const [solution, setSolution] = useState<string>("");

 const furnitureList: Furniture[] = room ? Array.from(options[room]) : [];

  const handleSolution = () => {
    if (!furniture) return;
    setSolution(solutions[furniture]);
  };

  const handleWhatsapp = () => {
    if (!room || !furniture) return;
    const phone = "5541999999999"; // substitua pelo número real (DDI+DDD+numero)
    const msg = `Olá! Preciso de ajuda com meu ${furniture} no(a) ${room}. ${solutions[furniture]}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Simulador de Problemas Domésticos
      </h2>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Ambiente</label>
        <select
          value={room}
          onChange={(e) => {
            setRoom(e.target.value as Rooms | "");
            setFurniture("");
            setSolution("");
          }}
          className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-200 transition"
        >
          <option value="">Selecione o ambiente</option>
          {Object.keys(options).map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {room && (
        <div
          className="transform transition-all duration-200 ease-out"
          aria-live="polite"
        >
          <label className="block mb-1 text-sm font-medium text-gray-700">Móvel</label>
          <select
            value={furniture}
            onChange={(e) => {
              setFurniture(e.target.value as Furniture | "");
              setSolution("");
            }}
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-200 transition"
          >
            <option value="">Selecione o móvel</option>
            {furnitureList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      {furniture && (
        <div className="flex gap-2">
          <button
            onClick={handleSolution}
            className="flex-1 py-2 px-3 rounded-md border bg-indigo-600 text-white font-medium transition-transform transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Obter Solução
          </button>
          <button
            onClick={() => {
              setSolution("");
              setFurniture("");
            }}
            className="py-2 px-3 rounded-md border bg-gray-100 text-gray-700 font-medium transition"
          >
            Limpar
          </button>
        </div>
      )}

      {/* solução com animação sutil */}
      <div
        className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
          solution ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        {solution && (
          <div className="mt-2 p-4 bg-gray-50 rounded-md border">
            <p className="text-gray-700">{solution}</p>
            <button
              onClick={handleWhatsapp}
              className="w-full mt-3 py-2 rounded-md border bg-green-600 text-white font-medium transition-transform transform hover:-translate-y-0.5 active:translate-y-0.5"
            >
              Chamar no WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
