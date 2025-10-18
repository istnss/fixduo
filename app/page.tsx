"use client";


import CardCarousel from "@/components/CardCarousel";
import ServicesHome from "@/components/servicesHome";
import ProblemSimulator from "@/components/ProblemSimulator";
import Depoimentos from "@/components/Depoimentos";

const phone = "5541987870564";
const handleWhatsapp = () => {
  const msg = `Olá! Preciso de um orçamento para minha casa. Poderia me ajudar?`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Banner */}
      <section className="w-full">
        <img
          src="/2.png"
          alt="Banner Principal"
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </section>
      <main className="flex-1 py-8">
        <h1 className="text-3xl font-bold text-center mt-10">Nossos serviços</h1>
        <ServicesHome />

        <div className="text-center my-2 py-2 mb-10">
            <button
              onClick={handleWhatsapp}
              className="bg-[#0b2235] text-white px-20 py-4 rounded-full mt-2 hover:bg-blue-700 transition-colors"
            >
              Solicitar Orçamento
            </button>
        </div>
        <div className="w-full px-4 sm:px-8 py-12 bg-[#ffc35a]">
          <div className="grid md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
            <div className="text-black text-center md:text-left">
              <h3 className="text-xl font-semibold">Está com algum problema em casa e não sabe por onde começar?</h3>
              <ul className="grid grid-cols-2 gap-4 mt-8 mb-8 justify-center">
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm">Vazamentos</li>
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm">Portas emperradas</li>
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm">Tomadas soltas</li>
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm" >Móveis com problemas</li>
              </ul>
              <p>Aqui você encontra orientações rápidas e já pode solicitar umespecialista confiável para resolver tudo com segurança e agilidade.</p>
              <br />
              <p><em>Não deixe pequenos problemas se tornarem grandes dores de cabeça.</em></p>
              <br />
              <p>Conte com a <strong>FixDuo</strong> para manter sua casa sempre em ordem!<br /><br />
                <strong>Simule agora</strong> e veja como é fácil cuidar da sua casa com anossa ajuda! ➡︎ </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <ProblemSimulator />
            </div>
          </div>
        </div>
        <div>
          <Depoimentos />
        </div>
        <div>
          <CardCarousel />
        </div>
        <div>

        </div>


      </main >


      < footer className="bg-[#0b2235] text-white py-4 text-center" >
        <div>

          <div>
            <p>Atuação: Campo Magro • Curitiba • Região <br></br>
              contato@embradecon.com.br</p>
          </div>
          <div>
            <p>askdlakdls</p>
          </div>

        </div>

        © {new Date().getFullYear()} - Todos os direitos reservados
      </ footer >
    </div >
  );
}
