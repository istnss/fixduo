"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ícones leves e bonitos

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0b2235] text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo da empresa" width={90} height={30} />
        </div>
        <nav className="hidden md:flex items-center space-x-4 text-sm">
          <Link href="/" className="hover:text-[#ffc35a] transition-colors">
            Home
          </Link>
          <Link href="/empresa" className="hover:text-[#ffc35a] transition-colors">
            Empresa
          </Link>
          <Link href="servico" className="hover:text-[#ffc35a] transition-colors">
            Serviços
          </Link>
          <Link href="/agendar">
            <button className="bg-[#f0f1f5] hover:bg-[#ffc35a] hover:text-black text-black px-3 py-1 rounded text-xs transition-colors">
              Solicite um orçamento
            </button>
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-[#0b2235] border-t border-gray-700 py-3 space-y-3 text-sm">
          <Link
            href="/"
            className="hover:text-[#ffc35a] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/empresa"
            className="hover:text-[#ffc35a] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Empresa
          </Link>
          <Link
            href="/sobre"
            className="hover:text-[#ffc35a] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link href="/agendar" onClick={() => setMenuOpen(false)}>
            <button className="bg-[#f0f1f5] hover:bg-[#ffc35a] hover:text-black text-black px-3 py-1 rounded text-xs transition-colors">
              Solicite um orçamento
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}
