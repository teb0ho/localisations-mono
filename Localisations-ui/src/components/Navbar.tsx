import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block font-bold text-black" to="/">
          Localisations 🌍
        </Link>
        <nav className="flex">
          <ul className="cursor-pointer">
            <a className="mr-3">about</a>
            <a>contact</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
