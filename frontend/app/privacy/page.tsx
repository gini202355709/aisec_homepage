import type { Metadata } from "next";

// SEO를 위한 메타데이터 설정 (Geist 폰트 무드에 맞춘 깔끔한 타이틀)
export const metadata: Metadata = {
  title: "개인정보처리방침 - Create Next App",
  description: "서비스의 개인정보처리방침 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* 타이틀 섹션 */}
      <div className="border-b border-zinc-200 dark:border-zinc-850 pb-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          시행일자: 2026년 6월 2일
        </p>
      </div>

      {/* 본문 콘텐츠 섹션 */}
      <div className="space-y-12 text-sm leading-7 text-zinc-600 dark:text-zinc-300 antialiased">
        
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            1. 개인정보의 수집 및 이용 목적
          </h2>
          <p>
            협회는 이용자들에게 원활하고 안전한 서비스를 제공하기 위해 최소한의 개인정보를 수집하고 있습니다. 수집된 모든 정보는 목적 외의 용도로는 절대 사용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            2. 수집하는 개인정보 항목 및 수집 방법
          </h2>
          <p>협회는 회원가입 및 서비스 제공을 위해 아래와 같은 정보를 수집합니다.</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-zinc-500 dark:text-zinc-400">
            <li><strong className="text-zinc-700 dark:text-zinc-200 font-medium">필수 항목:</strong> 이메일 주소, 비밀번호, 닉네임</li>
            <li><strong className="text-zinc-700 dark:text-zinc-200 font-medium">자동 수집 항목:</strong> IP 주소, 쿠키, 방문 일시, 서비스 이용 기록</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            3. 개인정보의 보유 및 이용기간
          </h2>
          <p>
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 협회는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            4. 이용자의 권리 및 행사방법
          </h2>
          <p>
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며,협회의 개인정보 처리에 동의하지 않는 경우 동의 철회 혹은 가입해지(회원탈퇴)를 요청하실 수 있습니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            5. 개인정보 보호책임자 및 문의처
          </h2>
          <p>
            기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우 아래의 연락처로 문의하시기 바랍니다.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 border border-zinc-100 dark:border-zinc-800 text-xs space-y-1">
            <p>• 책임자: 개인정보 보호담당 부서</p>
            <p>• 이메일: support@example.com</p>
          </div>
        </section>

      </div>
    </main>
  );
}
