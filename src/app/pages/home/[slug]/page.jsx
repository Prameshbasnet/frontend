import { notFound } from "next/navigation";
import { FOODS } from "../data/foods";
import FoodDetailClient from "./FoodDetailClient";

export async function generateStaticParams() {
  return FOODS.map((item) => ({ slug: item.slug }));
}

const cleanPrice = (price) => {
  const numericString = (price || "").toString().replace(/[^\d.]/g, "");
  return parseFloat(numericString) || 0;
};

export default function FoodDetailPage({ params }) {
  const { slug } = params;
  const foodItem = FOODS.find((food) => food.slug === slug);

  if (!foodItem) {
    return notFound();
  }

  const cleanedItem = {
    ...foodItem,
    price: cleanPrice(foodItem.price),
  };

  return <FoodDetailClient foodItem={cleanedItem} />;
}
