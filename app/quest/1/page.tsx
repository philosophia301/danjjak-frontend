"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuestOnePage() {
  const router = useRouter();
  const [waterCount, setWaterCount] = useState(0);

  const handleBack = () => {
    router.back();
  };

  const handleComplete = () => {
    // 퀘스트 완료 처리
    console.log("Quest completed!");
    router.back();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 상단 헤더 */}
      <div className="pt-safe-top px-6 py-4 bg-white flex items-center justify-between">
        <button 
          onClick={handleBack}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-lg font-bold text-black">음식 기록</h1>
        <div className="w-10"></div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* 메시지 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">단짝이가 궁금해요</h2>
          <p className="text-lg text-gray-700">오늘 물 몇 컵 마셨는지 기록해 주세요!</p>
        </div>

        {/* 캐릭터 */}
        <div className="mb-8">
          <Image
            src="/danjjak3.png"
            alt="단짝 캐릭터"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* 숫자 입력 */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => setWaterCount(Math.max(0, waterCount - 1))}
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <span className="text-xl font-bold text-gray-600">−</span>
          </button>
          <div className="text-4xl font-bold text-teal-500 min-w-16 text-center">
            {waterCount}
          </div>
          <button 
            onClick={() => setWaterCount(waterCount + 1)}
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <span className="text-xl font-bold text-gray-600">+</span>
          </button>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="px-6 pb-8">
        <button 
          onClick={handleComplete}
          className="w-full bg-teal-500 text-white text-lg font-medium py-4 rounded-2xl hover:bg-teal-600 transition-colors"
        >
          입력하기
        </button>
      </div>
    </div>
  );
}
