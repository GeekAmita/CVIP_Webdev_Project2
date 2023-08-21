function Home() {
  return (
    <div id="#" className="flex justify-between items-center px-40 gap-16">
      <div className="flex flex-col justify-around w-1/2 gap-16">
        <p className="text-8xl text-white font-bold">Amita Singh</p>
        <p className="text-3xl text-white font-medium">
          Hello, I am Amita Singh, nice to meet you I would like to welcome you
          with my personal portfolio website.
        </p>
        <button className="w-6/12 py-3 px-8 bg-gray-400 text-white text-3xl font-medium">
          Get to know me!
        </button>
      </div>
      <div className="w-8/12">
        <img
          src="./assets/3d-website-developer-working-on-laptop-illustration-png.webp"
          alt="A Boy working on laptop"
        />
      </div>
    </div>
  );
}

export default Home;
