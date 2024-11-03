import { useState } from "react";

export function LoginFields() {
  const [mobileNumber, setMobileNumber] = useState("");

  function onChangeMobileNumber(value: string) {
    if (value == "" || value.match(/[0-9]+/g)) {
      setMobileNumber(value);
    }
  }
  return (
    <>
      <div className="text-center text-white text-sm font-bold  leading-tight mb-4">
        شماره همراه خود را وارد کنید
      </div>

      <div className="w-full h-10  ">
        <label
          form="Username"
          className="w-full h-10 relative rounded-md border border-white shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-blue-600 flex items-center justify-between"
        >
          <input
            type="text"
            id="Username"
            className="w-full h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-4"
            placeholder="شماره همراه"
            maxLength={11}
            inputMode="tel"
            value={mobileNumber}
            onChange={(e) => onChangeMobileNumber(e.target.value)}
            required
          />

          <span className="text-white pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 bg-[#2252a0] p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            شماره همراه
          </span>
        </label>
      </div>
      <div className=" my-12 w-full  h-12 bg-[#bac9e2] rounded-[100px] flex-col justify-center items-center gap-2 inline-flex">
        <button className="self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex">
          <div className="text-center text-[#193b74] text-sm font-medium font-['IRANYekanMobileFN'] leading-tight">
            ارسال کد
          </div>
        </button>
      </div>
    </>
  );
}
