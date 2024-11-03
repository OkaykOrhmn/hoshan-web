import { useState } from "react";
import AxiosInstance from "../../../lib/axiosService";

export function RegisterFields() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Step 1: State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Step 2: Toggle function
  };
  return (
    <>
      <div className="text-center text-white text-sm font-bold  leading-tight mb-4">
        نام کاربری و رمز عبور خود را وارد کنید
      </div>

      <div className="w-full h-10  mb-4 ">
        <label
          form="Username"
          className="w-full h-10 relative rounded-md border border-white shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-blue-600 flex items-center justify-between"
        >
          <div
            className="cursor-pointer p-4" // Position the button to the right
          >
            📱
          </div>
          <input
            type="text"
            id="Username"
            className="w-full h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <span className="text-white pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 bg-[#2252a0] p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            نام کاربری{" "}
          </span>
        </label>
      </div>
      <div className="w-full h-10 ">
        <label
          form="password"
          className="w-full h-10 relative rounded-md border border-white shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-blue-600 flex items-center justify-between"
        >
          <button
            type="button"
            onClick={togglePasswordVisibility} // Step 4: Eye icon click event
            className="cursor-pointer p-4" // Position the button to the right
          >
            {showPassword ? "👁️" : "👁️‍🗨️"} {/* You can use icons or emojis */}
          </button>
          <input
            type={showPassword ? "text" : "password"} // Step 3: Change input type based on state
            id="password"
            className="w-full h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />{" "}
          <span className="text-white pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 bg-[#2252a0] p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            رمز عبور{" "}
          </span>
        </label>
      </div>

      <div className=" my-12 w-full  h-12 bg-[#bac9e2] rounded-[100px] flex-col justify-center items-center gap-2 inline-flex">
        <button
          className="self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex"
          onClick={() => {
            // if (username.length > 0 && password.length > 0) {
            AxiosInstance.get("/user/info")
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
            // }
            alert("You have entered both username and password");
          }}
        >
          <div className="text-center text-[#193b74] text-sm font-medium font-['IRANYekanMobileFN'] leading-tight">
            ثبت نام
          </div>
        </button>
      </div>
    </>
  );
}
