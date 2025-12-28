"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Quais cidades a FixDuo atende?",
      answer: "Atendemos em Campo Magro/PR e Curitiba-PR. Por favor, entre em contato via WhatsApp para verificar a disponibilidade na sua região.",
    },
    {
      question: "Que tipos de serviços vocês realizam?",
      answer: "Oferecemos serviços de hidráulica, eletríca, reparos domésticos, montagem de móveis, pintura e manutenção geral.",
    },
    {
      question: "O orçamento é gratuito?",
      answer: "Sim! O primeiro contato e orçamento são gratuitos. Você só paga se decidir contratar o serviço.",
    },
    {
      question: "Como posso agendar um serviço?",
      answer: "Você pode agendar um serviço entrando em contato conosco via WhatsApp ou pelo nosso site.",
    },
    {
      question: "Tenho garantia do serviço realizado?",
      answer: "Sim, oferecemos garantia para todos os serviços realizados. A duração da garantia pode variar conforme o tipo de serviço.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos pagamentos em dinheiro, pix e transferências bancárias.",
    },
        {
      question: "Os profissionais são verificados?",
      answer: "Todos os profissionais passam por uma verificação e seguem os padrões de qualidade e segurança da FixDuo.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left font-semibold text-lg text-gray-800 flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "–" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
