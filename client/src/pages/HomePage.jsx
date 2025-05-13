import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center ">
      <header className="text-center p-8 max-w-2xl">
        <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-yellow-300">
          Administrador de Tareas y Eventos
        </h1>
        <p className="text-xl text-black mb-8">
          Organiza tus tareas y eventos de manera eficiente y sencilla.
        </p>
        <Link
          to="/register"
          className="inline-block bg-green-900 text-white px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Comenzar
        </Link>
      </header>
    </section>
  );
}

export default HomePage;