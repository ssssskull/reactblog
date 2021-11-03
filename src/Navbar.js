const Navbar = () => {
  return (
    <>
      <nav className="absolute z-10 flex justify-center items-start w-full pt-10">
        <div className="flex gap-x-16 text-base items-center">
          <a
            className="text-white border-opacity-0 border-b-2 transition-all duration-100 hover:border-white"
            href="/"
          >
            Home
          </a>
          <a
            className="p-2 bg-white text-purple border-opacity-0 border-2 rounded-lg transition-all duration-100 hover:border-indigo-500"
            href="/create"
          >
            New blog
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
