import { HistoryCard } from "../../components/ui/home/HistoryCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1A1A1D] flex h-screen flex-col md:flex-row md:overflow-hidden ">
      <div className="w-full p-6 bg-white bg-opacity-10 flex-none  md:w-[20vw]  overflow-hidden md:overflow-auto ">
        <div className="relative mb-4">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md text-black border-gray-200 py-2.5 px-4 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-black hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="text-right text-white text-base font-normal font-['IRANYekanMobileFN'] leading-tight">
          امروز
        </div>
        {[...Array(4).fill("")].map((e) => HistoryCard())}
        <div className="text-right text-white text-base font-normal font-['IRANYekanMobileFN'] leading-tight">
          دیروز
        </div>
        {[...Array(3).fill("")].map((e) => HistoryCard())}
        <div className="text-right text-white text-base font-normal font-['IRANYekanMobileFN'] leading-tight">
          هفته پیش
        </div>
        {[...Array(7).fill("")].map((e) => HistoryCard())}
        <div className="text-right text-white text-base font-normal font-['IRANYekanMobileFN'] leading-tight">
          ماه پیش
        </div>
        {[...Array(10).fill("")].map((e) => HistoryCard())}
      </div>

      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
