import { FaArrowLeft, FaUtensils } from "react-icons/fa6";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FOODS } from "../data/foods";

export async function generateStaticParams() {
  return FOODS.map((item) => ({ slug: item.slug }));
}

export default async function FoodDetailPage({ params }) {
  const { slug } = params;
  const foodItem = FOODS.find((food) => food.slug === slug);

  if (!foodItem) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Menu</span>
        </Link>

        <div className="bg-white rounded-lg shadow-sm">
          {foodItem.image ? (
            <img
              src={foodItem.image}
              alt={foodItem.name}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-t-lg">
              <FaUtensils className="w-20 h-20 text-gray-300" />
            </div>
          )}

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {foodItem.name}
            </h1>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                {foodItem.description}
                <span className="font-semibold text-gray-800 ml-1">
                  View More
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
