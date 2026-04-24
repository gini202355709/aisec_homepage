export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#003366] text-white px-12 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold">main logo</div>

        <nav>
          <ul className="flex gap-8">
            <li className="relative group">
              <a href="#" className="font-bold">협회소개</a>
              <ul className="absolute hidden group-hover:block bg-[#003366] text-white shadow-md mt-2 w-30">
                <li className="p-2 hover:bg-gray-100">설립목적</li>
                <li className="p-2 hover:bg-gray-100">협회장 인사말</li>
                <li className="p-2 hover:bg-gray-100">비전</li>
                <li className="p-2 hover:bg-gray-100">연혁</li>
                <li className="p-2 hover:bg-gray-100">정관/회칙</li>
              </ul>
            </li>

            <li className="relative group">
              <a href="#" className="font-bold">조직 및 임원</a>
              <ul className="absolute hidden group-hover:block bg-[#003366] text-white shadow-md mt-2 w-30">
                <li className="p-2 hover:bg-gray-100">조직도</li>
                <li className="p-2 hover:bg-gray-100">이사진</li>
                <li className="p-2 hover:bg-gray-100">사무국 안내</li>
              </ul>
            </li>
            
            <li className="relative group">
              <a href="#" className="font-bold">자료 및 소식</a>
              <ul className="absolute hidden group-hover:block bg-[#003366] text-white shadow-md mt-2 w-30">
                <li className="p-2 hover:bg-gray-100">공지사항</li>
                <li className="p-2 hover:bg-gray-100">자료실</li>
                <li className="p-2 hover:bg-gray-100">갤러리</li>
              </ul>
            </li>

            <li><a href="#" className="font-bold">사업 활동 및 교육 행사</a></li>
            
            <li><a href="#" className="font-bold">회원 안내</a></li>

            <li><a href="#" className="font-bold">문의하기</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Layout */}
      <div className="flex max-w-6xl mx-auto my-10 min-h-[800px]">
        
        {/* Sidebar */}
        <aside className="w-64 pr-8 border-r">
          <h2 className="text-lg mb-5 border-b-2 border-[#003366] pb-2">
            main page
          </h2>

          <ul className="space-y-2">
            <li>content 1</li>
            <li>content 2</li>
            <li>content 3</li>
            <li>content 4</li>
            <li>content 5</li>
          </ul>
        </aside>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-sm text-gray-100 border-t min-h-[150px]">
        <p>footer content</p>
        <p></p>
      </footer>
    </div>
  );
}