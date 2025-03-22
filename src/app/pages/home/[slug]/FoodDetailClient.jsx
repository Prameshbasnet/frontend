"use client";

import { useState } from "react";
import {
  FaArrowLeft,
  FaUtensils,
  FaHeart,
  FaShare,
  FaClock,
  FaLeaf,
  FaFire,
  FaStar,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/joy/Button";

export default function FoodDetailClient({ foodItem }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

  const nutritionalInfo = foodItem.nutritionalInfo || {
    calories: "450",
    protein: "18g",
    carbs: "55g",
    fat: "12g",
    fiber: "4g",
    sugar: "8g",
  };
  const preparationTime = foodItem.preparationTime || "25 mins";
  const isVegetarian = foodItem.isVegetarian || false;
  const tags = foodItem.tags || ["Delicious", "Chef's Special"];
  const ingredients = foodItem.ingredients || [
    "Fresh tomatoes",
    "Mozzarella cheese",
    "Basil leaves",
    "Olive oil",
    "Salt and pepper",
  ];
  const reviews = foodItem.reviews || [
    {
      id: 1,
      author: "Pramesh Basnet",
      rating: 5,
      text: "Absolutely delicious! Will order again.",
      date: "2 days ago",
    },
    {
      id: 2,
      author: "BG The One",
      rating: 4,
      text: "Very good flavor and presentation.",
      date: "1 week ago",
    },
  ];

  const basePrice = foodItem.price || 360;
  const sizes = {
    small: { name: "Small", price: basePrice * 0.67 },
    medium: { name: "Medium", price: basePrice * 0.83 },
    large: { name: "Large", price: basePrice },
  };
  const totalPrice = (sizes[selectedSize].price * quantity).toLocaleString(
    "en-IN"
  );

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    toast.success(
      `Thanks For Ordering ${quantity} ${sizes[selectedSize].name} ${foodItem.name}(s)!`,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      }
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: foodItem.name,
        text: `Check out this delicious ${foodItem.name}!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.info("Link copied to clipboard!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    toast.success(`Thank you for your ${reviewRating}-star review!`, {
      position: "top-center",
      autoClose: 2000,
    });
    setReviewText("");
    setReviewRating(0);
    setShowReviewForm(false);
  };

  const fullDescription =
    foodItem.fullDescription ||
    `${foodItem.description} This dish is prepared with the finest ingredients...`;

  return (
    <div className="min-h-screen bg-gray-50 py-5">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="max-w-3xl mx-auto px-3">
        <Link
          href="/"
          className="mb-2 mt-2 inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            {foodItem.image ? (
              <img
                src={foodItem.image}
                alt={foodItem.name}
                className="w-full h-96 object-cover transition-transform duration-200 hover:scale-105"
              />
            ) : (
              <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                <FaUtensils className="w-24 h-24 text-gray-400" />
              </div>
            )}

            <div className="absolute top-4 right-4 flex gap-2">
              <button
                className={`p-2 rounded-full shadow-md transition-colors ${
                  isFavorite
                    ? "bg-red-50 hover:bg-red-100"
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <FaHeart
                  className={`w-5 h-5 ${
                    isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
              <button
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                onClick={handleShare}
              >
                <FaShare className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {foodItem.isNew && (
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                {foodItem.name}
              </h1>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                Rs {sizes[selectedSize].price.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3 text-gray-700">
                Size Options
              </h2>
              <div className="flex gap-3">
                {Object.entries(sizes).map(([size, details]) => (
                  <Button
                    key={size}
                    variant="soft"
                    className={`!px-4 !py-2 !rounded-lg !border-2 transition-all ${
                      selectedSize === size
                        ? "!border-green-600 bg-green-50"
                        : "!border-gray-200 hover:!border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <div className="font-medium text-gray-800">
                      {details.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      Rs {details.price.toLocaleString("en-IN")}
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <Button
                  variant="plain"
                  className="!px-3 !py-2 !bg-gray-100 hover:!bg-gray-200 !transition-colors !text-gray-700"
                  onClick={decreaseQuantity}
                >
                  <FaMinus className="w-3 h-3" />
                </Button>
                <span className="px-4 py-2 font-medium text-gray-800">
                  {quantity}
                </span>
                <Button
                  variant="plain"
                  className="!px-3 !py-2 !bg-gray-100 hover:!bg-gray-200 !transition-colors !text-gray-700"
                  onClick={increaseQuantity}
                >
                  <FaPlus className="w-3 h-3" />
                </Button>
              </div>
              <Button
                variant="solid"
                className="!flex-1 !bg-green-600 hover:!bg-green-700 !text-white !font-bold !py-3 !px-6 !rounded-lg !transition-colors !text-lg"
                onClick={handleAddToCart}
              >
                Order - Rs {totalPrice}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="bg-gray-100 p-3 rounded-full">
                  <FaClock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Preparation Time</p>
                  <p className="font-medium text-gray-800">{preparationTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="bg-gray-100 p-3 rounded-full">
                  <FaFire className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Calories</p>
                  <p className="font-medium text-gray-800">
                    {nutritionalInfo.calories} kcal
                  </p>
                </div>
              </div>
              {isVegetarian && (
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <FaLeaf className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Diet</p>
                    <p className="font-medium text-gray-800">Vegetarian</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6 border-b border-gray-200">
              <div className="flex space-x-8">
                {["description", "ingredients", "nutrition", "reviews"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`pb-4 font-medium capitalize transition-colors ${
                        activeTab === tab
                          ? "text-green-600 border-b-2 border-green-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>
            </div>

            {activeTab === "description" && (
              <div className="prose max-w-none text-gray-700 mb-8 max-h-96 overflow-y-auto">
                <p className="text-lg leading-relaxed">
                  {showFullDescription ? fullDescription : foodItem.description}
                </p>
                {foodItem.description?.length > 0 && (
                  <button
                    className="mt-2 text-green-600 font-semibold hover:text-green-500 transition-colors"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="mb-8 max-h-96 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Ingredients
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="mb-8 max-h-96 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Nutrition
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(nutritionalInfo).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-50 p-4 rounded-lg text-center"
                    >
                      <p className="text-sm text-gray-600 capitalize">{key}</p>
                      <p className="font-bold text-lg text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="mb-8 max-h-96 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Reviews
                  </h2>
                  <button
                    className="text-green-600 font-medium hover:text-green-500 transition-colors"
                    onClick={() => setShowReviewForm(!showReviewForm)}
                  >
                    {showReviewForm ? "Cancel" : "Write Review"}
                  </button>
                </div>

                {showReviewForm && (
                  <form
                    onSubmit={handleSubmitReview}
                    className="mb-6 bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Rating
                      </label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setReviewRating(star)}
                            className="text-2xl focus:outline-none"
                          >
                            <FaStar
                              className={`w-6 h-6 ${
                                reviewRating >= star
                                  ? "text-green-600"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Review
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-600"
                        rows="4"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Submit Review
                    </button>
                  </form>
                )}

                {reviews.length > 0 ? (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-800">
                            {review.author}
                          </span>
                          <span className="text-sm text-gray-600">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-4 h-4 mr-1 ${
                                i < review.rating
                                  ? "text-green-600"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">
                    No reviews yet. Be the first to review!
                  </p>
                )}
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
