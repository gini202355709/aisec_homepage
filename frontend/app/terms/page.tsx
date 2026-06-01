import type { Metadata } from "next";

// SEO를 위한 메타데이터 설정
export const metadata: Metadata = {
  title: "이용약관 - Create Next App",
  description: "서비스 이용약관 안내입니다.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* 타이틀 섹션 */}
      <div className="border-b border-zinc-200 dark:border-zinc-850 pb-8 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          이용약관
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          시행일자: 2026년 6월 2일
        </p>
      </div>

      {/* 본문 콘텐츠 섹션 */}
      <div className="space-y-12 text-sm leading-7 text-zinc-600 dark:text-zinc-300 antialiased">
        
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            제 1 조 (목적)
          </h2>
          <p>
            본 약관은 Create Next App(이하 "협회")이 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어, 협회와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            제 2 조 (정의)
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-1 text-zinc-500 dark:text-zinc-400">
            <li>
              <strong className="text-zinc-700 dark:text-zinc-200 font-medium">이용자:</strong> 본 약관에 따라 협회가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
            </li>
            <li>
              <strong className="text-zinc-700 dark:text-zinc-200 font-medium">회원:</strong> 서비스에 개인정보를 제공하여 회원등록을 한 자로서,협회의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            제 3 조 (약관의 명시와 개정)
          </h2>
          <p>
            협회는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 협회는 관계법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 약관이 변경될 경우 적용일자 7일 전부터 공지사항을 통해 고지합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            제 4 조 (서비스의 제공 및 변경)
          </h2>
          <p>
            협회는 이용자에게 자체 개발하거나 다른 회사와의 협력계약 등을 통해 제공하는 일체의 서비스를 제공합니다. 서비스는 협회의 업무상 또는 기술상의 지장이 없는 한 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            제 5 조 (이용자의 의무)
          </h2>
          <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-zinc-500 dark:text-zinc-400">
            <li>신청 또는 변경 시 허위 내용의 등록</li>
            <li>타인의 정보 도용</li>
            <li>협회가 게시한 정보의 변경</li>
            <li>협회가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            제 6 조 (관할법원)
          </h2>
          <p>
            협회와 이용자 간에 발생한 전자거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소지에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다.
          </p>
        </section>

      </div>
    </main>
  );
}
