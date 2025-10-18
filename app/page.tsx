import CardCarousel from "@/components/CardCarousel";
import ServicesHome from "@/components/servicesHome";
import ProblemSimulator from "@/components/ProblemSimulatot";


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
          <button className="bg-[#0b2235] text-white px-20 py-4 rounded-full mt-2 hover:bg-blue-700 transition-colors">
            Solicitar Orçamento
          </button>
        </div>

        <div className="w-full px-4 sm:px-8 py-12 bg-[#ffc35a]">
          <div className="grid md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
            <div className="text-black text-center md:text-left">
              <h3 className="text-xl font-semibold">
                Está com algum problema em casa e não sabe por onde começar?
              </h3>

              <ul className="grid grid-cols-2 gap-4 mt-8 mb-8 justify-center">
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm">
                  Vazamentos
                </li>
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm">
                  Portas emperradas
                </li>
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm">
                  Tomadas soltas
                </li>
                <li className="bg-[#0b2235] text-white rounded-lg px-4 py-3 text-sm" >
                  Móveis com problemas
                </li>
              </ul>

              <p>
                Aqui você encontra orientações rápidas e já pode solicitar um
                especialista confiável para resolver tudo com segurança e agilidade.
              </p>
              <br />
              <p>
                <em>Não deixe pequenos problemas se tornarem grandes dores de cabeça.</em>
              </p>
              <br />
              <p>
                Conte com a <strong>FixDuo</strong> para manter sua casa sempre em ordem!
                <br />
                <br />
                <strong>Simule agora</strong> e veja como é fácil cuidar da sua casa com a
                nossa ajuda! ➡︎
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <ProblemSimulator />
            </div>
          </div>
        </div>

        <div className="my-10 bg-gray-100 py-25 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-10">Texto</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-600">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>


        <div className="text-center py-2">
          <CardCarousel />
        </div>





      </main >


      {/* Footer */}
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
