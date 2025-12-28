"use client";

import CardCarousel from "@/components/CardCarousel";
import ServicesHome from "@/components/servicesHome";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import WhatsappWidgetScript from "@/components/script";
import CtaModal from "@/components/modal";


const phone = "5541987870564";
const handleWhatsapp = () => {
  const msg = `Olá! Preciso de um orçamento para minha casa. Poderia me ajudar?`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};

export default function Home() {
  return (

    <div className="font-sans min-h-screen flex flex-col">
      <CtaModal
        trigger="scroll"
        title="Precisa de ajuda com pequenos reparos em casa?"
        description="Conte com a FixDuo: mais de 20 anos de experiência, atendimento humano e um serviço feito com cuidado, como se fosse na nossa própria casa."
        ctaText="Pedir orçamento sem compromisso"
        onCtaClick={handleWhatsapp}
      />

      <CtaModal
        trigger="idle"
        title="Posso te ajudar com isso?"
        description="Se você ainda está em dúvida, fale com a gente agora. Tiramos suas dúvidas e indicamos a melhor solução para sua casa, sem compromisso."
        ctaText="Falar agora no WhatsApp"
        onCtaClick={handleWhatsapp}
      />


      <section className="relative w-full sm:h-[100px] md:h-[100px] lg:h-[560px] overflow-hidden">
        <img
          src="/2.png"
          alt="Banner Principal"
          sizes="100vh"
          className="
            object-cover
            scale-[1.35] sm:scale-[1.25] md:scale-[1.15] lg:scale-100
            object-center"
        />
      </section>
      <main className="flex-1 py-8">
        <h1 className="font-bold text-center lg:mt-10 md:mt-5">Nossos serviços</h1>
        <ServicesHome />
        <div className="text-center my-2 py-2 mb-10">
          <button
            onClick={handleWhatsapp}
            className="bg-[#0b2235] text-white px-20 py-4 rounded-xl mt-2 hover:bg-blue-700 transition-colors">
            Solicitar Orçamento
          </button>
        </div>


        <div className="w-full px-4 sm:px-8 py-20 bg-[#ffc35a]">
          <div className="items-center gap-8 max-w-7xl mx-auto">
            <div className="text-black text-center md:text-left">
              <h3 className="text-2xl font-semibold text-center">Está com algum problema em casa e não sabe por onde começar?</h3>
              <ul className="grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-15 mb-15 justify-center text-center">
                <li className="bg-[#0b2235] text-white rounded-lg py-6 text-lg">Vazamentos</li>
                <li className="bg-[#0b2235] text-white rounded-lg py-6 text-lg">Portas emperradas</li>
                <li className="bg-[#0b2235] text-white rounded-lg py-6 text-lg">Tomadas soltas</li>
                <li className="bg-[#0b2235] text-white rounded-lg py-6 text-lg">Móveis com problemas</li>
              </ul>
              <div className="text-center">
                <p>
                  Não deixe pequenos problemas se transformarem em grandes dores de cabeça. Com a FixDuo, você conta com um serviço feito por quem realmente se preocupa com o bem-estar da sua casa. Cuidamos de cada detalhe para que você tenha mais tempo, mais conforto e zero preocupações no dia a dia.
                  <br></br><br></br>
                  Entre em <a href="https://wa.me/5541987870564" target="_blank" className=" inline-block bg-[#0b2235] text-white px-2 py-1 rounded font-semibold transition-all hover:underline hover:bg-blue-700
            ">contato agora</a> mesmo e descubra como é simples, rápido e seguro manter sua casa sempre em ordem com a ajuda da FixDuo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Depoimentos />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 gap-8 py-6">
          <p className="text-3xl text-center mb-15">Confiança construída com números reais</p>
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center text-center">
              <div className="bg-[#0b2235] p-6 rounded-2xl shadow-md w-full max-w-xs">
                <p className="text-5xl font-bold text-white">250+</p>
                <p className="text-white text-sm">Reparos concluídos</p>
              </div>
              <div className="bg-[#0b2235] p-6 rounded-2xl shadow-md w-full max-w-xs">
                <p className="text-5xl font-bold text-white">98%</p>
                <p className="text-white text-sm">Clientes satisfeitos</p>
              </div>
              <div className="bg-[#0b2235] p-6 rounded-2xl shadow-md w-full max-w-xs">
                <p className="text-5xl font-bold text-white">24h</p>
                <p className="text-white text-sm">Tempo médio de resposta</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CardCarousel />
        </div>
        <div>
          <FAQ />
        </div>

        <div>
          <WhatsappWidgetScript />
        </div>

      </main >
      <Footer />
    </div >
  );
}
