import Image from "next/image";

const cards = [
  {
    id: 1,
    img: "/reforma.png",
    title: "Reformas e Alvenaria",
    desc: "Reparos, reformas, retoque de parede, balcão, muros, entre outros serviços.",
  },
  {
    id: 2,
    img: "/hidraulica.png",
    title: "Serviços Hidráulicos",
    desc: "Sifões, troca de torneiras, canos, instalação de válvulas hidráulica",
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
    desc: "Instalações de varais, suportes para TV, gabinetes, prateleiras, entre outros.",
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
    <section className="flex items-center justify-center min-h-400px px-6 lg:py-15 md:py-10 sm:py-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-8 p-6 bg-gray-50 rounded-xl shadow text-center md:text-left">
            <Image
              src={card.img}
              alt={card.title}
              width={60}
              height={40}
              className="mx-auto md:mx-0"/>
            <div>
              <p className="text-xm font-semibold">{card.title}</p>
              <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
