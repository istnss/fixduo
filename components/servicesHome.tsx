import Image from "next/image";

const cards = [
  {
    id: 1,
    img: "/reforma.png",
    title: "Reformas e Alvenaria",
    desc: "Reparos, reformas, troca de pisos, retoque de parede, balcão, muros, entre outros serviços.",
  },
  {
    id: 2,
    img: "/hidraulica.png",
    title: "Serviços Hidráulicos",
    desc: "Sifões, troca de torneiras, canos, instalação de válvulas hidráulica, entre outros serviços.",
  },
  {
    id: 3,
    img: "/eletrica.png",
    title: "Serviços Elétricos",
    desc: "Lâmpadas, revisão elétrica, troca de tomadas, chuveiros, entre outros serviços.",
  },
  {
    id: 4,
    img: "/montagem.png",
    title: "Montagens e Desmontagens",
    desc: "Montagem de móveis e estruturas.",
  },    
  {
    id: 5,
    img: "/instalação.png",
    title: "Instalações Diversas",
    desc: "Instalações de varais, suportes para TV, gabinetes, quadros, prateleiras, entre outros.",
  },
  {
    id: 6,
    img: "/pintura.png",
    title: "Pintura e Acabamento",
    desc: "Pinturas novas e repinturas de ambientes internos e externos.",
  },
];


export default function ServicesHome() {
  return (
    <section className="flex items-center justify-center min-h-400px bg-white px-6 py-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow text-center md:text-left"
          >
            <Image
              src={card.img}
              alt={card.title}
              width={60}
              height={40}
              className="mx-auto md:mx-0"
            />
            <div>
              <h1 className="text-xl font-semibold">{card.title}</h1>
              <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
