import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <Navbar />

      {/* Section 1: Advertisements */}
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image
          src="/Ads 1.png"
          alt="Advertisement 1"
          width={640}
          height={360}
          className="max-w-full"
        />
        <Image
          src="/Ads 2.png"
          alt="Advertisement 2"
          width={640}
          height={360}
          className="max-w-full"
        />
      </section>

      {/* Section 2: Pick-Up, Switch, Drop-Off */}
      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image
          src="/Pick - Up.png"
          alt="Pick-Up"
          width={582}
          height={132}
          className="max-w-full"
        />
        <Image
          src="/Switch.png"
          alt="Switch Icon"
          width={60}
          height={60}
          className="max-w-full"
        />
        <Image
          src="/Drop - Off.png"
          alt="Drop-Off"
          width={582}
          height={132}
          className="max-w-full"
        />
      </section>

      {/* Section 3: Popular Cars */}
      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Cars</h1>
          <Link href="/categories">
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>

        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/** Reusable Card Component */}
          {[
            { name: "Koenigsegg", type: "Sport", image: "/car.png" },
            { name: "NissanGT-R", type: "Sport", image: "/car (1).png" },
            { name: "Rolls-Royce", type: "Sedan", image: "/car.png" },
            { name: "NissanGT-R", type: "Sport", image: "/car (1).png" },
          ].map((car, index) => (
            <Card
              key={index}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {car.name}
                  <Image
                    src="/heart.png"
                    alt="Favorite Icon"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription>{car.type}</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={car.image} alt={car.name} width={220} height={68} />
                <Image
                  src="/Spesification.png"
                  alt="Specifications"
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p>
                  $99.00/<span className="text-gray-500">day</span>
                </p>
                <Link href="/payment">
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4: Recommendation Cars */}
      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Cars</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Example Reuse */}
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush
                <Image src="/heart.png" alt="Favorite Icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src="/suv.png" alt="All New Rush" width={220} height={68} />
              <Image
                src="/Spesification.png"
                alt="Specifications"
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                Rent Now
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Section 5: Button */}
      <section className="button w-full text-center">
        <Link href="/categories">
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
