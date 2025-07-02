import Link from "next/link";
import Image from "next/image";
import GlowingLogo from "@/components/GlowingLogo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full Screen Hero Section */}
      <section className="relative h-screen w-full bg-black flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/herosamgyup.png"
            alt="Korean BBQ Feast with Banchan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Centered text overlay */}
        <div className="z-10 text-center text-white flex flex-col items-center sm:items-center md:items-start">
          <div className="mb-8">
            <GlowingLogo size="hero" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 drop-shadow-2xl">
            UNLIMITED Samgyupsal MENU
          </h1>
        </div>

        <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 z-10 sm:bottom-1">
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/menu"
              className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105 duration-300 shadow-lg text-center"
            >
              View Menu
            </Link>
            <Link
              href="/location"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-colors transform hover:scale-105 duration-300 shadow-lg backdrop-blur-sm"
            >
              View Location
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Image Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src="/start199menu.jpg"
              alt="Menu"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src="/bbq-premium-set.jpg"
              alt="Ice Cream"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white border border-yellow-400">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready for an Authentic Korean BBQ Experience?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                CHECK MENU
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
