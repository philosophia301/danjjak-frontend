"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardStep6() {
  const [selectedHealth, setSelectedHealth] = useState<string>("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (selectedHealth) {
      router.push("/onboard/7");
    }
  };

  const healthOptions = [
    { id: "none", label: "해당없음" },
    { id: "diabetes-1", label: "1형 당뇨" },
    { id: "diabetes-2-early", label: "2형 당뇨(인슐린 투여)" },
    { id: "diabetes-2-late", label: "2형 당뇨(인슐린 미투여)" },
    { id: "pregnancy", label: "임신성 당뇨" }
  ];

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
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-black mb-2">건강 상태를</h1>
            <h1 className="text-2xl font-bold text-black mb-3">알려줄래?</h1>
            <p className="text-gray-600 text-base">자세한 분석을 위해 정확히 입력해주세요</p>
          </div>

          <div className="space-y-3 mb-8">
            {healthOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedHealth(option.id)}
                className={`w-full p-4 rounded-2xl text-left transition-all ${
                  selectedHealth === option.id
                    ? "bg-gray-600 text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pb-8">
        <button 
          className="w-full bg-teal-500 text-white text-lg font-medium py-4 rounded-2xl hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!selectedHealth}
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
}
