export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      
      {/* 1. SEÇÃO PRINCIPAL (HERO) */}
      <section id="inicio" className="relative min-h-[85vh] flex flex-col items-center justify-center p-6 bg-[url('/predio.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center mb-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-200 tracking-wider">
            GRAN<span className="text-yellow-600">VITTA</span>
          </h1>
          <p className="text-yellow-600 tracking-[0.4em] font-semibold text-sm md:text-lg mt-4 uppercase">
            Incorporadora
          </p>
          <p className="mt-10 text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Projetamos exclusividade. Construímos o extraordinário. Conheça o novo padrão de luxo e sofisticação em São José.
          </p>
          <button className="mt-12 px-10 py-4 bg-yellow-600 text-slate-950 font-bold uppercase tracking-widest rounded-sm shadow-[0_0_30px_rgba(202,138,4,0.3)] hover:bg-yellow-500 hover:shadow-[0_0_40px_rgba(202,138,4,0.5)] transition-all duration-300 transform hover:-translate-y-1">
            Descubra Nossos Empreendimentos
          </button>
        </div>
      </section>

      {/* 2. SEÇÃO: NOSSOS PROJETOS */}
      <section id="projetos" className="w-full bg-slate-950 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Título da Seção */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-200 font-bold mb-6">Empreendimentos</h2>
            <div className="w-20 h-1 bg-yellow-600"></div> {/* Linha decorativa dourada */}
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full">

            {/* CARD */}
            <div className="bg-slate-900 border border-slate-800 rounded-sm overflow-hidden group cursor-pointer hover:border-yellow-600/50 transition-all duration-300">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/granvittaII-1.jpeg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4 bg-slate-800 text-yellow-500 border border-yellow-600 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-sm">
                  Em Obras
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-200 mb-2 group-hover:text-yellow-500 transition-colors">Gran Vitta II</h3>
                <p className="text-slate-400 text-sm mb-6">Forquilhas, São José - SC</p>
                <div className="flex justify-between text-sm text-slate-300 border-t border-slate-800 pt-5">
                  <span className="flex items-center gap-2">📐 58m²</span>
                  <span className="flex items-center gap-2">🛏️ 2 Quartos</span>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-slate-900 border border-slate-800 rounded-sm overflow-hidden group cursor-pointer hover:border-yellow-600/50 transition-all duration-300">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/granvitta-1.jpeg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"></div>
                <div className="absolute top-4 right-4 bg-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-sm">
                  Entregue
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-200 mb-2 group-hover:text-yellow-500 transition-colors">Gran Vitta G</h3>
                <p className="text-slate-400 text-sm mb-6">Forquilhas, São José - SC</p>
                <div className="flex justify-between text-sm text-slate-300 border-t border-slate-800 pt-5">
                  <span className="flex items-center gap-2">📐 78m²</span>
                  <span className="flex items-center gap-2">🛏️ 3 Quartos</span>
                </div>
              </div>
            </div>

          </div>
          
          <div className="flex justify-center mt-12">
             <button className="text-yellow-600 uppercase tracking-widest text-sm font-bold hover:text-yellow-500 border-b border-yellow-600 hover:border-yellow-500 transition-colors pb-1">
               Ver todos os projetos ➔
             </button>
          </div>

        </div>
      </section>

      {/* 3. SEÇÃO SOBRE NÓS */}
      <section id="sobre" className="w-full bg-slate-900 py-24 px-6 border-t border-slate-800 relative overflow-hidden">
        {/* Efeito de luz dourada no fundo */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          
          {/* Texto Sobre Nós */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-200 font-bold mb-6">
              Construindo o futuro de <span className="text-yellow-600">São José</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-600 mb-8"></div>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              A Gran Vitta nasceu com o propósito de elevar o padrão da construção civil. Muito além de erguer paredes, nossa missão é construir lares que inspirem conforto, segurança e sofisticação para a sua família.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Trabalhamos com projetos arquitetônicos inteligentes e um rigoroso controle de qualidade em cada etapa da obra, garantindo um investimento sólido e rentável no coração de São José.
            </p>
            
            {/* Selos de Qualidade */}
            <div className="flex gap-4">
               <div className="border-l-2 border-yellow-600 pl-4">
                 <p className="text-3xl font-serif font-bold text-gray-200">100%</p>
                 <p className="text-sm text-slate-500 uppercase tracking-wider">Compromisso</p>
               </div>
               <div className="border-l-2 border-yellow-600 pl-4 ml-4">
                 <p className="text-3xl font-serif font-bold text-gray-200">Premium</p>
                 <p className="text-sm text-slate-500 uppercase tracking-wider">Acabamento</p>
               </div>
            </div>
          </div>
          
          {/* Imagem Sobre Nós */}
          <div className="md:w-1/2 relative w-full">
             <div className="aspect-square md:aspect-4/3 w-full bg-slate-800 rounded-sm overflow-hidden relative border border-slate-700 shadow-2xl">
                <div className="absolute inset-0 bg-[url('/predio.jpg')] bg-cover bg-center opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"></div>
                <div className="absolute inset-0 border-2 border-yellow-600/20 m-4 rounded-sm z-10 pointer-events-none"></div>
             </div>
             {/* Detalhe Flutuante */}
             <div className="absolute -bottom-8 -left-8 bg-slate-950 p-6 border border-slate-800 shadow-xl hidden md:block">
                <p className="text-yellow-600 font-serif text-5xl font-bold">GV</p>
             </div>
          </div>

        </div>
      </section>

      {/* 4. RODAPÉ */}
      <footer id="contato" className="w-full bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
           
           {/* Coluna 1: Marca */}
           <div>
             <h3 className="font-serif text-2xl font-bold tracking-widest text-gray-200 mb-6">
               GRAN<span className="text-yellow-600">VITTA</span>
             </h3>
             <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
               Incorporadora referência em qualidade, design contemporâneo e acabamento.
             </p>
           </div>

           {/* Coluna 2: Infos de Contato */}
           <div>
             <h4 className="text-gray-200 font-bold uppercase tracking-wider mb-6 text-sm">Contato</h4>
             <ul className="text-slate-500 text-sm space-y-4">
               <li className="flex items-center gap-3">
                 <span className="text-yellow-600 text-lg">☏</span> (48) 98459-1214
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-yellow-600 text-lg">✉</span> contato@granvitta.com.br
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-yellow-600 text-lg">📍</span> Capoeiras, Florianópolis - SC
               </li>
             </ul>
           </div>

           {/* Coluna 3: Redes Sociais */}
           <div>
             <h4 className="text-gray-200 font-bold uppercase tracking-wider mb-6 text-sm">Redes Sociais</h4>
             <div className="flex gap-4">
               
               {/* Ícone do INSTAGRAM */}
               <a href="https://www.instagram.com/granvittaconstrucoes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:border-yellow-600 transition-all group">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                 </svg>
               </a>

               {/* Ícone do WHATSAPP */}
               <a href="https://wa.me/48984591214" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:border-yellow-600 transition-all group">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                 </svg>
               </a>

             </div>
           </div>

        </div>
        
        {/* Linha de Direitos Autorais */}
        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2026 Gran Vitta Incorporadora. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência</p>
        </div>
      </footer>

    </main>
  );
}