

export default function Home() {

  return (
    <>
      <header className="w-full py-6 px-4 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-blue-400">It's</span>
            <span className="text-orange-400">Genki</span>
          </h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 max-w-[1000px]">
        <section className="mb-12 text-center">
          <h2 className="text-3xl mb-4 pb-8">Pronto estaremos presentando nuestros servicios de creación y mantenimiento de páginas web</h2>
          <p className="text-xl text-gray-300">Estamos trabajando duro para ofrecerte soluciones web innovadoras y eficientes. ¡Mantente atento!</p>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-800 border-gray-700 text-white max-w-2xl mx-auto px-4 py-12 space-y-12 rounded-2xl">
          <div>
            <h3 className="text-white">Contáctanos</h3>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <input
                  placeholder="Nombre"
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensaje"
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>

      </main>
      <footer className="w-full py-6 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-400">
          <p>© 2024 It's Genki. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
