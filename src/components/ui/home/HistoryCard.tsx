export const HistoryCard = () => {
  return (
    <div className=" justify-start items-center gap-4 flex flex-row bg-white bg-opacity-30 rounded-xl my-4 p-4 cursor-pointer">
      <div className="flex">
        <svg
          className="cursor-pointer"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 11.0625C2.61 11.0625 1.6875 10.14 1.6875 9C1.6875 7.86 2.61 6.9375 3.75 6.9375C4.89 6.9375 5.8125 7.86 5.8125 9C5.8125 10.14 4.89 11.0625 3.75 11.0625ZM3.75 8.0625C3.2325 8.0625 2.8125 8.4825 2.8125 9C2.8125 9.5175 3.2325 9.9375 3.75 9.9375C4.2675 9.9375 4.6875 9.5175 4.6875 9C4.6875 8.4825 4.2675 8.0625 3.75 8.0625Z"
            fill="white"
          />
          <path
            d="M14.25 11.0625C13.11 11.0625 12.1875 10.14 12.1875 9C12.1875 7.86 13.11 6.9375 14.25 6.9375C15.39 6.9375 16.3125 7.86 16.3125 9C16.3125 10.14 15.39 11.0625 14.25 11.0625ZM14.25 8.0625C13.7325 8.0625 13.3125 8.4825 13.3125 9C13.3125 9.5175 13.7325 9.9375 14.25 9.9375C14.7675 9.9375 15.1875 9.5175 15.1875 9C15.1875 8.4825 14.7675 8.0625 14.25 8.0625Z"
            fill="white"
          />
          <path
            d="M9 11.0625C7.86 11.0625 6.9375 10.14 6.9375 9C6.9375 7.86 7.86 6.9375 9 6.9375C10.14 6.9375 11.0625 7.86 11.0625 9C11.0625 10.14 10.14 11.0625 9 11.0625ZM9 8.0625C8.4825 8.0625 8.0625 8.4825 8.0625 9C8.0625 9.5175 8.4825 9.9375 9 9.9375C9.5175 9.9375 9.9375 9.5175 9.9375 9C9.9375 8.4825 9.5175 8.0625 9 8.0625Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex-auto ">
        <div className="flex flex-col">
          <div className="text-right text-white text-sm font-normal font-['IRANYekanMobileFN'] leading-tight">
            Gartner Hype Cycle
          </div>
          <div className="text-right text-white text-xs font-normal font-['IRANYekanMobileFN'] leading-tight">
            1403.02.11 - 19:14
          </div>
        </div>
      </div>
    </div>
  );
};
