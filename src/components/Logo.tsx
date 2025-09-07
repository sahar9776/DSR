import logoImage from "../assets/images/logo.png";

function Logo() {
  return <div className="flex items-end">
    <img src={logoImage} alt="logo Image" className="w-24 h-24" />
    {/* <h2 className="text-6xl font-bold uppercase text-[#d62828]">DSR</h2> */}
  </div>;
}

export default Logo;
