const Home = () => {
    return (
      <section className="pt-20 min-h-screen flex items-center justify-center bg-white text-gray-900">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-600">[Vishal Injewar]</span>
          </h1>
          <p className="text-xl mb-6">
            I'm passionate about cyber secruity.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  };
  
  export default Home;
  