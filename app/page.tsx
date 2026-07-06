// 바이브코딩 스터디 템플릿의 첫 화면입니다.
// 이 파일을 수정해서 나만의 서비스를 만들어보세요!

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

      {/* 상단 배지 */}
      <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full mb-6">
        바이브코딩 스터디 템플릿
      </span>

      {/* 메인 타이틀 */}
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-3">
        생각한 것을 바로 코드로! 🚀
      </h1>
      <p className="text-gray-500 text-center mb-10 max-w-md">
        이 템플릿을 기반으로 나만의 서비스를 만들어보세요.
        Claude에게 원하는 것을 말하면 됩니다.
      </p>

      {/* 시작 가이드 카드 3개 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-10">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="text-2xl mb-2">📋</div>
          <h2 className="font-semibold text-gray-800 mb-1">PRD.md</h2>
          <p className="text-sm text-gray-500">
            만들고 싶은 것을 정리하는 방법을 알려줍니다.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="text-2xl mb-2">🚀</div>
          <h2 className="font-semibold text-gray-800 mb-1">DEPLOY.md</h2>
          <p className="text-sm text-gray-500">
            Vercel에 배포해서 인터넷에 공개하는 방법을 알려줍니다.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="text-2xl mb-2">🤖</div>
          <h2 className="font-semibold text-gray-800 mb-1">CLAUDE.md</h2>
          <p className="text-sm text-gray-500">
            Claude가 따르는 스터디 규칙이 담겨 있습니다.
          </p>
        </div>
      </div>

      {/* Claude에게 요청하는 방법 */}
      <div className="bg-gray-900 text-gray-100 rounded-xl px-6 py-4 w-full max-w-2xl mb-8">
        <p className="text-xs text-gray-400 mb-2">Claude에게 이렇게 요청해보세요</p>
        <p className="font-mono text-sm">
          @PRD.md 읽고 내가 원하는 서비스 만들어줘
        </p>
      </div>

      {/* 하단 안내 */}
      <p className="text-xs text-gray-400">
        Next.js · Tailwind CSS · Supabase · Vercel
      </p>

    </main>
  );
}
