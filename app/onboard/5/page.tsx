"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardStep5() {
  const [weight, setWeight] = useState(60);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push("/onboard/6");
  };

  const increaseWeight = () => {
    if (weight < 200) {
      setWeight(weight + 1);
    }
  };

  const decreaseWeight = () => {
    if (weight > 30) {
      setWeight(weight - 1);
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-black mb-2">몸무게도</h1>
            <h1 className="text-2xl font-bold text-black mb-3">알려줄래?</h1>
            <p className="text-gray-600 text-base">자세한 분석을 위해 정확히 입력해주세요</p>
          </div>

          <div className="mb-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={decreaseWeight}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>

                <div className="text-center">
                  <span className="text-4xl font-bold text-black">{weight}</span>
                  <span className="text-2xl text-gray-500 ml-1">kg</span>
                </div>

                <button
                  onClick={increaseWeight}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2"/>
                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pb-8">
        <button 
          className="w-full bg-teal-500 text-white text-lg font-medium py-4 rounded-2xl hover:bg-teal-600 transition-colors"
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
}
