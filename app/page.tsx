import CardCarousel from "@/components/CardCarousel";
import ServicesHome from "@/components/servicesHome";
import ProblemSimulator from "@/components/ProblemSimulator";


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

      <main className="flex-1 px-4 py-8">
        <h1 className="text-3xl font-bold text-center mt-10">Nossos serviços</h1>
        <ServicesHome />
        <div className="text-center my-2 py-2">
          <button className="bg-[#0b2235] text-white px-20 py-3 rounded-full mt-2 hover:bg-blue-700 transition-colors">
            Solicitar Orçamento
          </button>
        </div>

        <div className="max-w-ful p-15 my-10 bg-[#0b2235]">
          <div className="grid grid-col-2 md:grid-cols-2 gap-8">
            <div className="text-white text-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                l</p><br></br>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p><br></br>

            </div>
            <div className="div">
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
       <div className="grid grid-cols-2 gap-8 text-left">
        <div>
            <p>Atuação: Campo Magro • Curitiba • Região <br></br>
            contato@embradecon.com.br</p>
        </div>
        <div>
          <p>askdlakdls</p>
        </div>
        
       </div>
       
       
        © {new Date().getFullYear()} - Todos os direitos reservados
      </ footer>
    </div >
  );
}
