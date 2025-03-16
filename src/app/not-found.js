import Link from "next/link";

export default function Custom404() {
  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-green-200 to-white-600 flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="h-96 w-96 bg-white opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
      </div>

      <main className="relative z-10 text-center px-4">
        <h1 className="text-9xl font-extrabold text-black drop-shadow-lg animate-bounce">
          404
        </h1>
        <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-black drop-shadow-md">
          Oops! Page not found
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-black/90">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-md bg-green-300 text-black-600 text-sm sm:text-base font-bold transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Go back home
          </Link>
        </div>
      </main>
    </div>
  );
}
