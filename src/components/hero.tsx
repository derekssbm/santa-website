import { Button } from "@/components/ui/button";
import background from "../../public/resources/bgimage.jpg";

export default function Hero() {
  return (
    <div>
      <section className="h-screen p-8 flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{
            backgroundImage: `url(${background.src})`,
            filter: "blur(50px)",
            transform: "scale(1.4) translate(100px,-50px)",
          }}
        />
        <div className="relative w-full h-full bg-white p-10 rounded-lg shadow-lg bg-opacity-80">
          <h1 className="text-9xl font-extrabold text-gray-500 font-[righteous] mb-4">
            Solrise
          </h1>
          <p className="text-lg text-gray-800 font-[montserrat] mb-8">
            Empowering entrepreneurs and startups with cutting-edge strategies
            that lead to success in the digital marketplace.
          </p>
          <div className="flex space-x-4">
            <Button variant={"default"}>Get Started</Button>
            <Button variant={"secondary"}>Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
