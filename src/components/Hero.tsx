import Button from "./Button";

function Hero() {
  return (
    <div className="w-full h-[480px] absolute top-0 left-0 z-50">
      <h1 className="text-9xl text-white font-extrabold capitalize">
        Dark
        <span className="text-[#d62828]"> Sin Race</span>
        <br />
        Speed Has
        <br />
        <span className="text-[#d62828]">No Rules</span>
      </h1>

      <Button>get start</Button>
    </div>
  );
}

export default Hero;
