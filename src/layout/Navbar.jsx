export default function Navbar() {
  return (
    <>
      <div className="bg-[#865cb2]">
        <div className="container-main text-white">
          <div className="flex flex-row items-center justify-between gap-3 py-3">
            <div>
              <h2 className="font-medium text-xl">Haidar Hanif</h2>
            </div>

            <div className="hidden lg:flex flex-row gap-5">
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
