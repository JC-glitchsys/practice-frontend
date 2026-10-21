import { Menu, Users } from "lucide-react";

export default function Header({ activePage, onOpenMenu }) {
  return (
    <header className="flex min-h-[80px] shrink-0 items-center justify-between gap-3 border-b border-[#F2EDEF] px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button type="button" onClick={onOpenMenu} aria-label="Open navigation" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F0EAEC] text-[#766B71] transition hover:bg-[#FCF7F8] hover:text-[#811C2B] md:hidden"><Menu size={19} /></button>
        <h1 className="truncate text-[16px] font-semibold tracking-[-0.5px] text-[#30252A] sm:text-[18px]">{activePage === "Dashboard" ? "Academic Statistics" : activePage}</h1>
      </div>
      <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
        <div className="hidden text-right sm:block"><p className="text-[11px] font-semibold text-[#3A2C32]">Employee</p><p className="mt-0.5 text-[10px] text-[#958890]">ICTC Administrator</p></div>
        <button type="button" aria-label="Employee profile" title="Employee profile" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9D6DA] bg-[#F9EFF1] text-[#811C2B] transition hover:bg-[#F2E1E5]"><Users size={18} strokeWidth={1.7} /></button>
      </div>
    </header>
  );
}
