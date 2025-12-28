"use client";

import Footer from "@/components/footer";
import WhatsappWidgetScript from "@/components/script";
import CtaModal from "@/components/modal";

const phone = "5541987870564";
const handleWhatsapp = () => {
    const msg = `Olá! Preciso de um orçamento para minha casa. Poderia me ajudar?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};

export default function Servico() {
    return (
        <section className="min-h-screen bg-[#f3f4f6]">

            <CtaModal
                trigger="scroll"
                title="Está adiando aquele reparo há tempo demais?"
                description="Pequenos ajustes fazem toda a diferença no conforto da sua casa. A FixDuo resolve para você com rapidez, cuidado e zero complicação."
                ctaText="Chega de adiar"
                onCtaClick={handleWhatsapp}
            />

            <div className="max-w-6xl mx-auto py-10 px-6 mt-2">
                <h1 className="text-2xl text-center font-bold text-gray-800 mb-6 mt-4">Nossos Serviços</h1>
                <div className="text-center p-8">
                    <div className="text-center mb-8 px-2 py-2 md:py-4 md:px-6">
                        <p>
                            Oferecemos uma ampla gama de serviços para cuidar de todos os pequenos reparos e manutenções que sua casa precisa. Desde instalações simples até consertos mais complexos, nossa equipe de profissionais qualificados está pronta para te ajudar.
                        </p>
                    </div>
                    <div className="w-full max-w-7xl mx-auto bg-[#efefef] rounded-3xl shadow-lg px-4 py-15">
                        <div className="text-center mb-10">
                            <p className="text-xl md:text-2xl font-semibold">
                                Como funciona?
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex items-center justify-center text-center rounded-xl bg-white p-6 shadow-md">
                                <p className="text-base">
                                    <span className="font-semibold">1.</span> Você entra em contato e informa o que precisa
                                </p>
                            </div>
                            <div className="flex items-center justify-center text-center rounded-xl bg-white p-6 shadow-md">
                                <p className="text-base">
                                    <span className="font-semibold">2.</span> Nós avaliamos o serviço e combinamos o melhor horário
                                </p>
                            </div>
                            <div className="flex items-center justify-center text-center rounded-xl bg-white p-6 shadow-md">
                                <p className="text-base">
                                    <span className="font-semibold">3.</span> Executamos o serviço com agilidade e cuidado
                                </p>
                            </div>
                            <div className="flex items-center justify-center text-center rounded-xl bg-white p-6 shadow-md">
                                <p className="text-base">
                                    <span className="font-semibold">4.</span> Você aproveita sua casa sem preocupações
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-base md:text-lg text-gray-700">
                                Simples, rápido e sem complicação.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10 p-4">
                    <button onClick={handleWhatsapp} className="mb-10 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-900 transition text-center justify-center">Chamar no Whatsapp</button>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-6 px-6 pb-10">
                <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/1.jpg" alt="Acessórios de cozinha" className="w-full h-60 object-cover mb-4 rounded-xl " />
                    <h3 className="font-semibold text-gray-900 text-center text-sm"> Instalação de acessórios de cozinha</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/img_2.png" alt="acessórios de banheiro" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de acessórios de banheiro</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/img_3.png" alt="ssento vaso sanitário" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação do assento vaso sanitário</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/4.webp" alt="Caixa de correio" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação da caixa de correio</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/5.webp" alt="Instalação de chuveiro" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Instalação de chuveiro</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/6.webp" alt="eparos Elétricos" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Reparos Elétricos</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/7.jpg" alt="Fixação de cortina" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Fixação de cortina</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/8.webp" alt="Montagem de Móveis" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de Móveis</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/9.jpeg" alt="Montagem de armários" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de armários</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/10.png" alt="Troca de dobradiça" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Troca de dobradiça</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/11.jpg" alt="Fixação fita antiderrapante" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Fixação fita antiderrapante</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="12.png" alt="Troca de fechadura" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Troca de fechadura</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/13.jpg" alt="Movimentação de móveis" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Movimentação de móveis</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/14.jpg" alt="Instalação de números de imóveis" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de números de imóveis</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/15.jpg" alt="Fixação de prateleiras" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Fixação de prateleiras</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/16.webp" alt="Fixação de quadros" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Fixação de quadros</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/17.jpg" alt="Troca de registro" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Troca de registro</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/18.webp" alt="Instalação de suporte de TV ou Monitor" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de suporte de TV ou Monitor</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/19.jpg" alt="Instalação de varal<" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de varal</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/20.jpg" alt="Troca de tomada" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Troca de tomada</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/21.jpg" alt="Montagem de estante" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de estante</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/22.jpg" alt="Montagem de guarda-roupa" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de guarda-roupa</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/23.jpg" alt="Instalação de ventilador de teto" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de ventilador de teto</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/24.jpg" alt="Limpeza de jardim" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Limpeza de jardim</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/30.jpeg" alt="Limpeza de quintal" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Limpeza de quintal</h3>
                </div>
                {/* Serviço 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/31.jpg" alt="Pintura interna" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Pintura interna</h3>
                </div>
                {/* Serviço 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/32.jpg" alt="Pintura externa" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Pintura externa</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/33.jpg" alt="Encanamento de pia" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Encanamento de pia</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/34.jpg" alt="Instalação de barra acessível" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de barra acessível</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/35.png" alt="Consertos Gerais" className="w-full h-60 object-cover mb-4 rounded-xl" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Consertos Gerais</h3>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10 p-4 text-center">
                <p>Fale com a FixDuo agora e tenha um atendimento rápido, seguro e sem complicações.</p><br></br>
                <button onClick={handleWhatsapp} className="mb-10 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-900 transition text-center justify-center">Chamar no Whatsapp</button>
            </div>

            <div>
                <WhatsappWidgetScript />
            </div>

            <div className="items-center mt-12">
                <Footer />
            </div>
        </section>
    );
}
