"use client"; // <===== REQUIRED

// Swiper components, modules and styles
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // This code runs only in the browser
    const token = localStorage.getItem("loginToken");
    if (token) {
      // Redirect to the home page if token is found
      router.push("/home");
    } else {
      // Redirect to the login page if no token is found
      router.push("/login");
    }
  }, [router]);
  return (
    <div className="splash-body flex   items-center justify-items-center px-[10vw]  min-w-screen min-h-screen font-[family-name:var(--font-geist-sans)]"></div>
  );
}
