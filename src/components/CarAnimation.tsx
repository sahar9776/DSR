import { useEffect, useState } from "react";
import carBg from "../assets/images/car.png";

function CarAnimation() {
  const [scroll, setScroll] = useState(0);
  let customClass = "transition-all duration-700 ease-in-out fixed top-10 z-20";

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  if (scroll <= 480) {
    customClass += "h-auto right-0 translate-x-0 top-[40%]";
  } else if (scroll > 480 && scroll <= 960) {
    customClass += "h-auto right-[50%] -translate-[-50%] top-10";
  } else if (scroll > 960) {
    customClass += "h-auto right-0 translate-x-0 top-80";
  }

  return (
    <div className="w-full h-[1200px] relative">
      <img
        className={customClass}
        style={{
          width:
            scrollY <= 480
              ? "800px"
              : scroll > 480 && scroll <= 960
              ? "640px"
              : scroll > 960
              ? "720px"
              : "720px",
        }}
        src={carBg}
        alt="car bg"
      />
    </div>
  );
}

export default CarAnimation;
