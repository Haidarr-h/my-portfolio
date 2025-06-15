export default function Navbar() {
  return (
    <>
      <div className="bg-[#865cb2] lg:fixed lg:w-full z-50">
        <div className="container-main text-white">
          <div className="flex flex-row items-center justify-between gap-3 py-3">
            <div>
              <h2 className="font-medium text-xl"><a href="/">Haidar Hanif</a></h2>
            </div>

            <div className="hidden lg:flex flex-row gap-5 nav-options">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#activities">Experiences</a>
              <a href="#footer">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
