import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FOODS } from "./data/foods";

const Section = ({ title, subtitle, items }) => {
  return (
    <section className="my-8">
      <div className="flex justify-between items-center mb-4 px-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-green-600 hover:underline"
        >
          See All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 px-2">
        {items.map((item) => (
          <Link key={item.slug} href={`/pages/home/${item.slug}`}>
            <div className="bg-white rounded-lg shadow transition-transform duration-200 hover:scale-105 cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default function HomePage() {
  const newArrivalItems = FOODS.slice(0, 3);
  const flashSaleItems = FOODS.slice(3, 6);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-2 scrollbar-hide">
          <div className="min-w-[220px] flex-shrink-0 snap-start bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200">
            <div>
              <Image
                src="/images/chicken-biryani.png"
                width={100}
                height={100}
                alt="Flash Offer"
              />
              <h3 className="text-white text-xl font-bold mt-2">Flash Offer</h3>
              <p className="text-white text-sm">Best desserts in town.</p>
            </div>
            <a
              href="#"
              className="text-white font-semibold mt-4 hover:underline"
            >
              Order →
            </a>
          </div>

          <div className="min-w-[220px] flex-shrink-0 snap-start bg-gradient-to-r from-green-400 to-green-600 rounded-xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200">
            <div>
              <Image
                src="/images/chicken-biryani.png"
                width={100}
                height={100}
                alt="New Arrival"
              />
              <h3 className="text-white text-xl font-bold mt-2">New Arrival</h3>
              <p className="text-white text-sm">Fresh picks just added.</p>
            </div>
            <a
              href="#"
              className="text-white font-semibold mt-4 hover:underline"
            >
              Order →
            </a>
          </div>
        </div>

        <Section
          title="Featured"
          subtitle="Best of today's food list update"
          items={newArrivalItems}
        />

        <Section
          title="Our Picks"
          subtitle="Some more delicious finds"
          items={flashSaleItems}
        />
      </div>
    </div>
  );
}
