import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b2235] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img
            src="/logo.png"
            alt="Logo FixDuo"
            className="w-32 mb-4"/>
          <p className="text-sm leading-relaxed text-gray-300">
            Serviço de qualidade para sua casa, com profissionais confiáveis e atendimento rápido.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ffc35a]">Links úteis</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#ffc35a] transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/empresa" className="hover:text-[#ffc35a] transition-colors">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/servico" className="hover:text-[#ffc35a] transition-colors">
                Serviços
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ffc35a]">Contato</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#ffc35a]" />
                <a href="https://api.whatsapp.com/send/?phone=5541987870564" target="blank" className="hover:underline">(41) 98787-0564</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#ffc35a]" />
              <span>contato.fixduo@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ffc35a]">Endereço</h3>
          <p className="text-gray-300">
            Rua Amazonas<br />
            Campo Magro- PR<br />
            Brasil
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FixDuo. Todos os direitos reservados.
      </div>
    </footer>
  );
}