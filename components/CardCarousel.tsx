"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
    {
        id: 1,
        title: "Hidráulica",
        desc: "Soluções em hidráulica para sua casa e empresa.",
        img: "/img_encanador.png",
    },
    {
        id: 2,
        title: "Elétrica",
        desc: "Manutenção em elétrica para sua casa e empresa.",
        img: "/img_eletricista.png",
    },
    {
        id: 3,
        title: "E mais",
        desc: "Confira todos nosso serviços",
        img: "/img_maiss.png",
    },
];

export default function CardCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!emblaApi) return;

        const updateButtons = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        emblaApi.on("select", updateButtons);
        updateButtons();
    }, [emblaApi]);

    return (
        <section className="relative px-4 sm:px-10 lg:px-32 py-25">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Destaques</h2>

                <div className="hidden sm:flex gap-3">
                    <button
                        onClick={() => emblaApi?.scrollPrev()}
                        disabled={!canScrollPrev}
                        className="p-2 border rounded-full bg-white shadow disabled:opacity-50">
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => emblaApi?.scrollNext()}
                        disabled={!canScrollNext}
                        className="p-2 border rounded-full bg-white shadow disabled:opacity-50">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="flex-[0_0_100%] sm:flex-[0_0_calc(33.333%-1rem)] mx-2 bg-white shadow-md rounded-2xl overflow-hidden">
                                <div className="relative w-full h-75">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        fill
                                        className="object-cover"/>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                    <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
                                    <button className="mt-4 px-10 py-3 border rounded-md text-sm hover:bg-[#0b2235] transition hover:text-white  ">
                                        <a href="/servico">Ver mais</a> 
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            <div className="flex justify-center gap-3 mt-4 sm:hidden">
                <button
                    onClick={() => emblaApi?.scrollPrev()}
                    disabled={!canScrollPrev}
                    className="p-2 border rounded-full bg-white shadow disabled:opacity-50">
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => emblaApi?.scrollNext()}
                    disabled={!canScrollNext}
                    className="p-2 border rounded-full bg-white shadow disabled:opacity-50">
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
); }