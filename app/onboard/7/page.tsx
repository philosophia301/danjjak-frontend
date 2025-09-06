"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardStep7() {
  const [selectedSensor, setSelectedSensor] = useState<string>("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (selectedSensor) {
      router.push("/kid");
    }
  };

  const sensorOptions = [
    {
      id: "caresenss-air",
      name: "케어센스 에어",
      image: "/sensors/caresenss-air.png"
    },
    {
      id: "dexcom-g7",
      name: "덱스콤 G7",
      image: "/sensors/dexcom-g7.png"
    },
    {
      id: "freestyle-libre2",
      name: "프리스타일 리브레2",
      image: "/sensors/freestyle-libre2.png"
    }
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
            <h1 className="text-2xl font-bold text-black mb-3">센서를 연결해주세요</h1>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {sensorOptions.map((sensor) => (
              <button
                key={sensor.id}
                onClick={() => setSelectedSensor(sensor.id)}
                className={`p-6 rounded-3xl transition-all shadow-sm ${
                  selectedSensor === sensor.id
                    ? "bg-teal-100 border-2 border-teal-500"
                    : "bg-white border-2 border-transparent hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={sensor.image}
                    alt={sensor.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-medium text-black text-center">
                    {sensor.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto pb-8">
        <button 
          className="w-full bg-teal-500 text-white text-lg font-medium py-4 rounded-2xl hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!selectedSensor}
          onClick={handleNext}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
