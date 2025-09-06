"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardStep1() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (name.length > 0) {
      router.push("/onboard/2");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-black mb-2">안녕!</h1>
            <h1 className="text-2xl font-bold text-black mb-3">너의 이름을 알려줘</h1>
          </div>

          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="이름"
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
          disabled={name.length === 0}
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
}
