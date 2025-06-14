export default function Navbar() {
  return (
    <>
      <div className="bg-[#F3F4F6] ">
        <div className="container-main ">
          <div className="flex flex-row items-center justify-between gap-3 py-3">
            <div>
              <h2 className="font-medium text-xl">Haidar Hanif</h2>
            </div>

            <div className="hidden lg:flex flex-row gap-5">
              <a href="">About</a>
              <a href="">Projects</a>
              <a href="">Experiences</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
