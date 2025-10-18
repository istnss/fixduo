import Footer from "@/components/footer";


export default function Empresa() {
  return (
    <section className="min-h-screen bg-gray-50 ">
      <div className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 items-center text-center md:text-left">
          <div>
            <img
              src="/img_empresa.png"
              alt="Logo da FixDuo"
              className="w-200 h-auto mx-auto md:mx-0 mb-6"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre a FixDuo</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              A <strong>FixDuo</strong> nasceu com o propósito de facilitar o cuidado com o lar,
              conectando pessoas a profissionais qualificados e de confiança.
              Nosso foco é oferecer praticidade, segurança e agilidade em cada serviço.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Atuamos com seriedade e compromisso, prezando pela satisfação de cada cliente.
              Nosso time é formado por profissionais experientes que seguem os mais altos padrões de qualidade.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Seja para reparos simples ou projetos maiores, conte com a FixDuo para manter sua casa
              em perfeito estado com o cuidado e a atenção que ela merece.
            </p>
          </div>
        </div>
        <div className="my-16 px-4 mt-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0b2235] p-6 rounded-2xl shadow-md flex flex-col">
              <h2 className="text-2xl font-semibold mb-4 text-white">Nossa Missão</h2><br></br>
              <p className="text-white text-md leading-relaxed">
                Proporcionar soluções práticas e confiáveis para o cuidado do lar, conectando clientes a
                profissionais qualificados, garantindo satisfação e tranquilidade em cada serviço prestado.
              </p>
            </div>
            <div className="bg-[#0b2235] p-6 rounded-2xl shadow-md flex flex-col">
              <h2 className="text-2xl font-semibold mb-4 text-white">Nossa Visão</h2><br></br>
              <p className="text-white text-md leading-relaxed">
                Ser a plataforma líder em serviços para o lar, reconhecida pela excelência, inovação e
                compromisso com a qualidade, facilitando a vida dos nossos clientes e promovendo o
                desenvolvimento dos nossos profissionais.
              </p>
            </div>
            <div className="bg-[#0b2235] p-6 rounded-2xl shadow-md flex flex-col">
              <h2 className="text-2xl font-semibold mb-4 text-white">Nossos Valores</h2><br></br>
              <ul className="list-disc list-inside text-white text-md leading-relaxed space-y-2">
                <li>Compromisso com a qualidade e satisfação do cliente.</li>
                <li>Transparência e ética em todas as nossas relações.</li>
                <li>Inovação constante para melhorar nossos serviços.</li>
                <li>Respeito ao lar e à privacidade dos nossos clientes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center mt-12">
        <Footer />
      </div>
    </section>
  );
}
