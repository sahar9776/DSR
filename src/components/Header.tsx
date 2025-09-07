import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const navList = [
    "home",
    "cars",
    "gallery",
    "events",
    "shop",
    "about us",
    "contact",
  ];
  return (
    <div className="w-full h-28 flex justify-between items-center">
      <div className="w-auto h-full">
        <Logo />
      </div>

      <div className="w-auto h-full flex items-center gap-5">
        {navList.map((item, index) => (
          <Link
            key={index}
            to="/"
            className="text-white text-2xl capitalize cursor-pointer
            ease-linear hover:border-b-2 hover:border-white"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
