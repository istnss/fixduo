import Footer from "@/components/footer";
import WhatsappWidgetScript from "@/components/script";


export default function Empresa() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Uma história construída com trabalho, confiança e parceria
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
              A <strong>FixDuo</strong> nasceu de um sonho simples, mas poderoso: continuar transformando lares,
              agora de uma forma mais próxima, humana e acessível.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Depois de mais de <strong>20 anos de experiência na construção civil</strong>, nosso fundador
              decidiu dar um novo passo na carreira. A bagagem técnica continuou a mesma, mas o propósito
              evoluiu: cuidar de cada detalhe da casa das pessoas como se fosse a própria.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/img_empresa.png"
              alt="Equipe FixDuo"
              className="w-full max-w-md rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            De obras a lares: nasce a FixDuo
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            Trabalhar por décadas em obras ensinou muito mais do que técnicas. Ensinou responsabilidade,
            respeito pelo espaço do outro e a importância de fazer bem-feito, mesmo quando ninguém está olhando.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            Com o tempo, surgiu o desejo de atuar de forma diferente: ajudando pessoas no dia a dia,
            resolvendo pequenos e médios reparos que muitas vezes se transformam em grandes dores de cabeça.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            E foi assim que a FixDuo ganhou seu maior diferencial: <strong>um casal trabalhando junto</strong>.
            Enquanto ele cuida das instalações, montagens e reparos técnicos, ela traz organização,
            atenção aos detalhes e aquele cuidado que faz toda a diferença dentro de um lar.
          </p>
        </div>
      </div>
      <div className="bg-[#0b2235] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Experiência comprovada
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mais de duas décadas de atuação garantem soluções seguras, duráveis e bem executadas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Atendimento humano
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Aqui você fala com pessoas reais, que entendem sua necessidade e respeitam seu espaço.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Confiança dentro do seu lar
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Um casal trabalhando junto transmite mais segurança, cuidado e transparência em cada serviço.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nossa Missão</h2>
            <p className="text-gray-700 leading-relaxed">
              Facilitar a vida das pessoas oferecendo serviços para o lar com qualidade, honestidade
              e atenção aos detalhes, transformando problemas em soluções simples.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nossa Visão</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser referência como marido de aluguel, reconhecidos pela confiança, profissionalismo
              e cuidado genuíno com cada cliente e cada lar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nossos Valores</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Respeito pelo lar e pela privacidade</li>
              <li>Compromisso com o que foi combinado</li>
              <li>Transparência do início ao fim</li>
              <li>Capricho em cada detalhe</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <WhatsappWidgetScript />
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </section>
  );
}
