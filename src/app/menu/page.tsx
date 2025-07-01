import Image from "next/image";
import GlowingLogo from "@/components/GlowingLogo";

// Type definitions
interface MenuCardProps {
  price: string;
  items: string[];
  image: string;
  title: string;
}

interface MenuData {
  price: string;
  items: string[];
  image: string;
  title: string;
}

// Menu Card Component
function MenuCard({ price, items, image, title }: MenuCardProps) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 w-full max-w-sm border-4 border-orange-200">
      {/* Hero Image */}
      <div className="relative h-50 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Price Tag Overlay */}
        <div className="absolute top-4 right-4 bg-red-600 text-white font-black text-2xl px-4 py-2 rounded-lg shadow-lg border-2 border-white transform rotate-3">
          ₱{price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center tracking-wide border-b-2 border-orange-300 pb-2">
          {title}
        </h3>

        {/* Menu Items */}
        <div className="space-y-2 mb-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-gray-700 font-bold">{item}</span>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-red-800">
            Order Now
          </button>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-orange-300 transform -rotate-45 translate-x-[-32px] translate-y-[-32px] opacity-20"></div>
    </div>
  );
}

export default function Menu() {
  const menuData: MenuData[] = [
    {
      price: "199",
      title: "Starter",
      image: "/start199menu.jpg",
      items: ["UNLI CHICKEN", "UNLI KIMCHI", "UNLI RICE", "UNLI SIDE DISH"],
    },
    {
      price: "219",
      title: "Classic",
      image: "/samgyupsal-classic.jpg",
      items: [
        "UNLI CHICKEN",
        "UNLI PORK",
        "UNLI KIMCHI",
        "UNLI RICE",
        "UNLI SIDE DISH",
      ],
    },
    {
      price: "259",
      title: "Triple",
      image: "/bbq-bulgogi.jpg",
      items: [
        "UNLI CHICKEN",
        "UNLI BEEF",
        "UNLI PORK",
        "UNLI KIMCHI",
        "UNLI RICE",
        "UNLI SIDE DISH",
      ],
    },
    {
      price: "279",
      title: "Seafood Special",
      image: "/bbq-premium-set.jpg",
      items: [
        "UNLI SCALLOP",
        "UNLI CHICKEN",
        "UNLI BEEF",
        "UNLI PORK",
        "UNLI KIMCHI",
        "UNLI RICE",
        "UNLI SIDE DISH",
      ],
    },
    {
      price: "329",
      title: "Premium",
      image: "/herosamgyup.png",
      items: [
        "UNLI SHRIMP",
        "UNLI SCALLOP",
        "UNLI CHICKEN",
        "UNLI BEEF",
        "UNLI PORK",
        "UNLI KIMCHI",
        "UNLI RICE",
        "UNLI SIDE DISH",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-red-50">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Glowing Logo */}
          <div className="mb-8">
            <GlowingLogo size="small" />
          </div>

          {/* 3LITTLEPIGS Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl tracking-wider">
            3 LITTLE PIGS
          </h1>

          {/* MENU with decorative lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-orange-300 mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-100 tracking-widest">
              MENU
            </h2>
            <div className="w-16 h-1 bg-orange-300 ml-4"></div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row - 2 cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-8">
            {menuData.slice(0, 2).map((menu, index) => (
              <MenuCard
                key={index}
                price={menu.price}
                items={menu.items}
                image={menu.image}
                title={menu.title}
              />
            ))}
          </div>

          {/* Bottom Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {menuData.slice(2, 5).map((menu, index) => (
              <MenuCard
                key={index + 2}
                price={menu.price}
                items={menu.items}
                image={menu.image}
                title={menu.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-12 border-t-4 border-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-orange-100">
            Ready to Experience Korean BBQ?
          </h3>
          <p className="text-lg mb-6 text-orange-50">
            Visit us today and enjoy authentic unlimited flavors!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/location"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors shadow-lg"
            >
              Find Our Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
