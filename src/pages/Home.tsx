import CarAnimation from "../components/CarAnimation";
import Hero from "../components/Hero";
import Login from "../components/Login";
import WhyUS from "../components/WhyUS";

function Home() {
  return (
    <div className="w-full h-auto relative">
      <CarAnimation />
      <Hero />
      <WhyUS />
      <Login />
    </div>
  );
}

export default Home;
