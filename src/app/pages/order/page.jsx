import Image from "next/image";

export default function Order() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen px-4 py-6">
      <header className="flex items-center space-x-4 mb-6">
        <h1 className="text-xl font-semibold text-gray-800">My Orders</h1>
      </header>

      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-3">
          <div className="flex space-x-3 items-center">
            <Image
              src="/images/chicken-biryani.png"
              alt="Chicken Biryani"
              width={60}
              height={60}
            />
            <div>
              <h2 className="font-semibold text-gray-800">Chicken Biryani</h2>
              <p className="text-green-600 font-medium">Rs 17.90</p>
            </div>
          </div>
          <div className="text-gray-500 font-medium">2</div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-3">
          <div className="flex space-x-3 items-center">
            <Image
              src="/images/chicken-biryani.png"
              alt="Chicken Biryani"
              width={60}
              height={60}
            />
            <div>
              <h2 className="font-semibold text-gray-800">Chicken Biryani</h2>
              <p className="text-green-600 font-medium">Rs 17.90</p>
            </div>
          </div>
          <div className="text-gray-500 font-medium">2</div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-3">
          <div className="flex space-x-3 items-center">
            <Image
              src="/images/chicken-biryani.png"
              alt="Chicken Biryani"
              width={60}
              height={60}
            />
            <div>
              <h2 className="font-semibold text-gray-800">Chicken Biryani</h2>
              <p className="text-green-600 font-medium">Rs 17.90</p>
            </div>
          </div>
          <div className="text-gray-500 font-medium">2</div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm p-4 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Subtotal (6)</span>
          <span className="text-gray-900 font-semibold">Rs 56</span>
        </div>

        <div className="flex items-center space-x-2">
          <label
            htmlFor="promoCode"
            className="text-gray-600 font-medium w-1/3"
          >
            Promo Code
          </label>
          <input
            id="PromoCode"
            name="promo-code"
            type="text"
            autoComplete="given-name"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Payable Total</span>
          <span className="text-gray-900 font-semibold">Rs 56.0</span>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full bg-green-500 text-white text-lg font-bold py-3 rounded-lg shadow hover:bg-green-600">
          Pay
        </button>
      </div>
    </div>
  );
}
