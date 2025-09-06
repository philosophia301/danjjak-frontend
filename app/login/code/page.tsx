"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardStep1() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (name.length > 7) {
      router.push("/parent");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-black mb-2">아이의</h1>
            <h1 className="text-2xl font-bold text-black mb-3">코드를 입력해주세요</h1>
          </div>

          <p className="text-md text-gray-500 mb-4 ml-2">
            {"마이페이지 > 코드"}
          </p>

          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="A123B234"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                maxLength={8}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                {name.length}/8자
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pb-8">
        <button 
          className="w-full bg-teal-500 text-white text-lg font-medium py-4 rounded-2xl hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={name.length !== 8}
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
}
