"use client";

const phone = "5541987870564";
const handleWhatsapp = () => {
  const msg = `Olá! Preciso de um orçamento para minha casa. Poderia me ajudar?`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};


export default function Servico() {
    return (
        <section className="min-h-screen bg-gray-50 py-20 px-6">
            <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Nossos Serviços</h1>
            <div className="flex flex-col items-center">
                <button onClick={handleWhatsapp} className="mb-10 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-900 transition text-center justify-center">Chamar no Whatsapp</button>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/1.jpg" alt="Acessórios de cozinha" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Acessórios de cozinha</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/2.webp" alt="cessórios de banheiro" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Acessórios de banheiro</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/3.webp" alt="ssento vaso sanitário" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Assento vaso sanitário</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/4.webp" alt="Caixa de correio" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Caixa de correio</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/5.webp" alt="Instalação de chuveiro" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Instalação de chuveiro</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/6.webp" alt="eparos Elétricos" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Reparos Elétricos</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/7.jpg" alt="Fixação de cortina" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Fixação de cortina</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/8.webp" alt="Montagem de Móveis" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de Móveis</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/9.jpeg" alt="Montagem de armários" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de armários</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/10.jpeg" alt="Troca de dobradiça" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Troca de dobradiça</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/11.jpg" alt="Fixação fita antiderrapante" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Fixação fita antiderrapante</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="12.jpg" alt="Troca de fechadura" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Troca de fechadura</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/13.jpg" alt="Movimentação de móveis" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Movimentação de móveis</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/14.jpg" alt="Instalação de números de imóveis" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de números de imóveis</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/15.jpg" alt="Fixação de prateleiras" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Fixação de prateleiras</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/16.webp" alt="Fixação de quadros" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Fixação de quadros</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/17.jpg" alt="Troca de registro" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Troca de registro</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/18.webp" alt="Instalação de suporte de TV ou Monitor" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de suporte de TV ou Monitor</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/19.jpg" alt="Instalação de varal<" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de varal</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/20.jpg" alt="Troca de tomada" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Troca de tomada</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/21.jpg" alt="Montagem de estante" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de estante</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/22.jpg" alt="Montagem de guarda-roupa" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Montagem de guarda-roupa</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/23.jpg" alt="Instalação de ventilador de teto" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de ventilador de teto</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/24.jpg" alt="Limpeza de jardim" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Limpeza de jardim</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/30.jpeg" alt="Limpeza de quintal" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Limpeza de quintal</h3>
                </div>
                {/* Serviço 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/31.jpg" alt="Pintura interna" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Pintura interna</h3>
                </div>
                {/* Serviço 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/32.jpg" alt="Pintura externa" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Pintura externa</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/33.jpg" alt="Encanamento de pia" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Encanamento de pia</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/34.jpg" alt="Instalação de barra acessível" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text-center text-sm">Instalação de barra acessível</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                    <img src="/img_eletricista.jpg" alt="Consertos Gerais" className="w-30 h-30 mb-4" />
                    <h3 className="font-semibold text-gray-900 text -center text-sm">Consertos Gerais</h3>
                </div>
            </div>
        </section>
    );
}