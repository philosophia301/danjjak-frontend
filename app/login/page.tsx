"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login/1");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  const handleCodeLogin = () => {
    router.push("/login/code");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          {/* 로고 및 앱 정보 */}
          <div className="mb-16 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-teal-500 rounded-3xl shadow-lg flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-teal-500 mb-2">단짝이</h1>
            <p className="text-lg text-gray-600">건강을 지켜주는 든든한 짝꿍</p>
          </div>
        </div>
      </div>

      {/* 로그인 버튼들 */}
      <div className="w-full max-w-md mx-auto pb-8 space-y-4">
        <button 
          className="w-full bg-teal-500 text-white text-lg font-medium py-3 rounded-2xl hover:bg-teal-600 transition-colors"
          onClick={handleLogin}
        >
          로그인
        </button>
        
        <button 
          className="w-full bg-gray-100 text-gray-700 text-lg font-medium py-3 rounded-2xl hover:bg-gray-200 transition-colors"
          onClick={handleSignup}
        >
          회원가입
        </button>
        
        <button 
          className="w-full bg-white border border-gray-300 text-orange-500 text-lg font-medium py-3 rounded-2xl hover:bg-gray-50 transition-colors"
          onClick={handleCodeLogin}
        >
          아이 코드로 로그인하기
        </button>
      </div>
    </div>
  );
}
