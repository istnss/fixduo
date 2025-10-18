"use client";

import { useState } from "react";


const options = {
  Sala: ["Interruptor não funciona", "Tomada solta na parede", "Porta rangendo", "Janela não fecha direito"], 
  Cozinha: ["Torneira pingando", "Vazamento embaixo da pia", "Porta do armário solta"],
  Banheiro: ["Chuveiro", "Vazamento na pia", "Vazamento no vaso sanitário", "Box"],
  Quarto: ["Lâmpada não acende","Abajur", "Cama", "Armário com porta fora do trilho", "Guarda-roupa"],
  Lavanderia: ["Torneira da máquina vazando água", "Tanque com rachadura", "Varal de teto travado"]

} as const;

type Rooms = keyof typeof options;
type Furniture = (typeof options)[Rooms][number];

const solutions: Record<Furniture, string> = {
  "Interruptor não funciona":
    "Pode ser problema na fiação ou no próprio interruptor; substituição pode ser necessária.",
  "Tomada solta na parede":
    "Pode causar curto-circuito; é importante fixar ou trocar com segurança.",
  "Porta rangendo":
    "Lubrificação das dobradiças ou troca das mesmas pode resolver.",
  "Janela não fecha direito":
    "Pode ser desalinhamento ou desgaste nas ferragens.",

  "Torneira pingando":
    "Provavelmente é desgaste no vedante ou na borracha interna; uma troca simples resolve.",
  "Vazamento embaixo da pia":
    "Pode ser o sifão, a conexão do ralo ou a mangueira da torneira.",
  "Porta do armário solta":
    "Pode ser necessário reapertar ou trocar as dobradiças.",

  "Chuveiro":
    "Verifique o disjuntor ou troque a resistência. Se não esquenta, pode ser problema na fiação elétrica.",
  "Vazamento na pia":
    "Pode ser necessário trocar o sifão, a torneira ou a válvula de vedação.",
  "Vazamento no vaso sanitário":
    "Verifique a vedação da base ou a válvula de descarga; pode precisar de substituição.",
  "Box":
    "Limpe os trilhos e revise o silicone de vedação. Pode ser necessário ajustar os trilhos ou trocar os rolamentos.",

  "Lâmpada não acende":
    "Pode ser a lâmpada queimada ou problema no interruptor.",
  "Cama":
    "Reforce as tábuas ou troque o colchão se estiver afundando.",
  "Guarda-roupa":
    "Reaperte os parafusos e alinhe as portas.",
  "Abajur":
    "Troque a lâmpada e confira o fio de energia.",
  "Armário com porta fora do trilho":
    "Recolocar no trilho ou trocar rodízios pode resolver.",

  "Torneira da máquina vazando água":
    "Verifique mangueiras de entrada e saída ou a vedação do tambor.",
  "Tanque com rachadura":
    "Pode ser necessário vedar com massa epóxi ou trocar o tanque.",
  "Varal de teto travado":
    "Pode ser problema nas roldanas ou no sistema de cordas.",
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
    <section className="max-w-lg mx-auto p-6 bg-[#ededed] rounded-2xl shadow-md space-y-4">
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