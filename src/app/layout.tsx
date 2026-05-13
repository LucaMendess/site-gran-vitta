import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gran Vitta - Construtora",
  description: "Gran Vitta - Construtora especializada em construção civil, oferecendo serviços de alta qualidade e inovação para transformar seus projetos em realidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200`}>
        
        {/* BARRA DE NAVEGAÇÃO SUPERIOR */}
        <header className="w-full border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            
            {/* LOGO EM IMAGEM */}
            <div className="cursor-pointer shrink-0">
              <Image 
                src="/GranVitta-removebg.png" 
                alt="Construtora Gran Vitta" 
                width={120} 
                height={40} 
                className="object-contain" 
              />
            </div>

            {/* Links do Menu */}
            <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-semibold">
              <a href="#inicio" className="hover:text-yellow-500 transition-colors duration-300">Início</a>
              <a href="#projetos" className="hover:text-yellow-500 transition-colors duration-300">Projetos</a>
              <a href="#sobre" className="hover:text-yellow-500 transition-colors duration-300">Sobre nós</a>
              <a href="#contato" className="hover:text-yellow-500 transition-colors duration-300">Contato</a>
            </nav>
            
          </div>
        </header>

        {/* AQUI É ONDE ENTRA O CONTEÚDO DO PAGE.TSX */}
        {children}

      </body>
    </html>
  );
}
