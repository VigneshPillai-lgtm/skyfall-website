import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-3 px-6">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        {/* College Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xs font-bold text-white">KJ</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-league text-[10px] font-bold text-white tracking-wide leading-tight">
              SCHOOL OF COMPUTATIONAL AND PHYSICAL SCIENCES
            </p>
            <p className="font-league text-[10px] font-bold text-white tracking-wide leading-tight">
              DEPARTMENT OF COMPUTER SCIENCE
            </p>
          </div>
        </div>

        {/* Organises badge */}
        <div className="bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white">O R G A N I S E S</span>
        </div>
      </nav>
    </header>
  );
}
