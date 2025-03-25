import LogoData from "../Logo/logo";
function Header() {
  return (
    <header className="flex flex-col w-full">
      <div className="bg-[#0a2248] py-2 px-6 flex items-center justify-between">
        <LogoData />
      </div>
      <div className="bg-[#219ebc] h-6 w-full"></div>
      <div className="bg-[#ffb703] h-4 w-full"></div>
    </header>
  );
}

export default Header;
