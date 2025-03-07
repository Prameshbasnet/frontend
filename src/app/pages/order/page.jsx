import Button from "@mui/joy/Button";
import Image from "next/image";

export default function Order() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen px-6 py-8 font-sans">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
      </header>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/chicken-biryani.png"
              alt="Chicken Biryani"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Chicken Biryani
              </h2>
              <p className="text-green-600 font-medium">Rs 17.90</p>
            </div>
          </div>
          <div className="text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
            2
          </div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/chicken-biryani.png"
              alt="Chicken Biryani"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Chicken Biryani
              </h2>
              <p className="text-green-600 font-medium">Rs 17.90</p>
            </div>
          </div>
          <div className="text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
            2
          </div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/chicken-biryani.png"
              alt="Chicken Biryani"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Chicken Biryani
              </h2>
              <p className="text-green-600 font-medium">Rs 17.90</p>
            </div>
          </div>
          <div className="text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
            2
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-4 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Subtotal (6)</span>
          <span className="text-gray-900 font-bold text-lg">Rs 56</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label
              htmlFor="promoCode"
              className="block text-gray-600 font-medium"
            >
              Promo Code
            </label>
            <input
              id="promoCode"
              name="promo-code"
              type="text"
              autoComplete="off"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter code"
            />
          </div>
          <Button variant="outlined" color="success" className="font-medium">
            Apply
          </Button>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Payable Total</span>
          <span className="text-gray-900 font-bold text-lg">Rs 56.0</span>
        </div>
      </div>

      <div className="mt-8">
        <Button color="success" fullWidth className="py-3 text-lg font-bold">
          Pay
        </Button>
      </div>
    </div>
  );
}
