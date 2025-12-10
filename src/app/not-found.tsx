import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen bg-white border-t-[6px] border-b-[6px] border-black flex items-center justify-center p-6 md:p-8">
        <div className="bg-neo-pink border-4 border-black shadow-[8px_8px_0_#000] p-8 md:p-12 lg:p-16 max-w-md w-full text-center">
          {/* 404 Text */}
          <h1 className="font-lexend text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-black mb-4">
            404
          </h1>
          
          {/* Message */}
          <h2 className="font-lexend text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4">
            PAGE NOT FOUND
          </h2>
          
          <p className="font-public text-base md:text-lg uppercase tracking-wide text-black mb-8">
            THE PAGE YOU'RE LOOKING FOR DOESN'T EXIST.
          </p>
          
          {/* Back Home Button */}
          <Link 
            href="/"
            className="inline-block bg-neo-yellow text-black px-6 md:px-8 py-3 md:py-4 font-lexend font-bold text-lg md:text-xl uppercase border-4 border-black shadow-[8px_8px_0_#000] transition-all duration-200 hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 active:shadow-[4px_4px_0_#000] active:translate-y-1"
          >
            GO HOME
          </Link>
          
          {/* Decorative Line */}
          <div className="w-24 h-2 bg-black mx-auto mt-8"></div>
        </div>
      </div>
    );
}