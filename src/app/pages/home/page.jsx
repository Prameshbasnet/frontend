import Image from "next/image";
import React from "react";

const Section = ({ title, subtitle, items }) => {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-2 px-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          See All
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function HomePage() {
  const newArrivalItems = [
    {
      name: "Chicken Biryani",
      price: "Rs: 400",
      image: "/images/chicken-biryani.png",
    },
    {
      name: "Veggie Pizza",
      price: "Rs: 350",
      image: "/images/chicken-biryani.png",
    },
    {
      name: "Burger Deluxe",
      price: "Rs: 250",
      image: "/images/chicken-biryani.png",
    },
  ];

  const flashSaleItems = [
    {
      name: "Spicy Wings",
      price: "Rs: 200",
      image: "/images/chicken-biryani.png",
    },
    {
      name: "Pasta Alfredo",
      price: "Rs: 300",
      image: "/images/chicken-biryani.png",
    },
    {
      name: "Fish Tacos",
      price: "Rs: 280",
      image: "/images/chicken-biryani.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar pb-4">
        <div className="min-w-[220px] flex-shrink-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg p-4 flex flex-col justify-between">
          <div>
            <Image
              src="/images/chicken-biryani.png"
              width={100}
              height={100}
              alt="food"
            />
            <h3 className="text-white text-lg font-bold">Flash Offer</h3>
            <p className="text-white text-sm">Best deserts in town.</p>
          </div>
          <a href="#" className="text-white font-semibold mt-4">
            Order →
          </a>
        </div>

        <div className="min-w-[220px] flex-shrink-0 bg-gradient-to-r from-green-400 to-green-600 rounded-xl shadow-lg p-4 flex flex-col justify-between">
          <div>
            <Image
              src="/images/chicken-biryani.png"
              width={100}
              height={100}
              alt="food"
            />
            <h3 className="text-white text-lg font-bold">New Arrival</h3>
            <p className="text-white text-sm">Best deserts in town.</p>
          </div>
          <a href="#" className="text-white font-semibold mt-4">
            Order →
          </a>
        </div>
      </div>

      <Section
        title="Featured"
        subtitle="Best of the today food list update"
        items={newArrivalItems}
      />
      <Section
        title="Our Picks"
        subtitle="Best of the today food list update"
        items={flashSaleItems}
      />
    </div>
  );
}
