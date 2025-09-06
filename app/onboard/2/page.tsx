"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardStep2() {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (selectedGender) {
      router.push("/onboard/3");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      {/* 뒤로가기 버튼 */}
      <div className="mb-8">
        <button 
          onClick={handleBack}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-black mb-3">성별을 선택해줘</h1>
          </div>

          <div className="flex gap-4 mb-8">
            {/* 여성 버튼 */}
            <button
              onClick={() => setSelectedGender("female")}
              className={`flex-1 p-8 rounded-3xl transition-all ${
                selectedGender === "female"
                  ? "bg-teal-100 border-2 border-teal-500"
                  : "bg-gray-200 border-2 border-transparent hover:bg-gray-300"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="text-6xl">👩🏻</div>
                <span className="text-lg font-medium text-black">여성</span>
              </div>
            </button>

            {/* 남성 버튼 */}
            <button
              onClick={() => setSelectedGender("male")}
              className={`flex-1 p-8 rounded-3xl transition-all ${
                selectedGender === "male"
                  ? "bg-teal-100 border-2 border-teal-500"
                  : "bg-gray-200 border-2 border-transparent hover:bg-gray-300"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="text-6xl">👦🏻</div>
                <span className="text-lg font-medium text-black">남성</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pb-8">
        <button 
          className="w-full bg-teal-500 text-white text-lg font-medium py-4 rounded-2xl hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!selectedGender}
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
}
