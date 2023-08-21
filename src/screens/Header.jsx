function Header() {
  return (
    <div className="flex px-40 justify-between items-center py-8 sticky top-0 bg-neutral-800 drop-shadow-md">
      <ul className="flex w-1/2 justify-around items-center">
        <li>
          <a href="#" className="flex gap-2 justify-center items-center">
            <div className="text-2xl text-white bg-gray-400 rounded-full w-12 h-12 font-bold flex justify-center items-center">
              AS
            </div>
          </a>
        </li>
        <li className="text-xl text-white font-semibold">
          <a href="#about">About</a>
        </li>
        <li className="text-xl text-white font-semibold">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-xl text-white font-semibold">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex w-1/5 justify-end">
        <button className="border-gray-400 border-2 py-3 px-8 text-xl text-white font-medium">
          <a href="./assets/Amita_Singh_Resume.pdf" target="_blank">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
