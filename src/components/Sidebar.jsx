
import {
  LayoutDashboard,
  ClipboardList,
  FileText,
  Receipt,
  Wallet,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Admission Form", icon: ClipboardList },
  { label: "COR", icon: FileText },
  { label: "Billings", icon: Receipt },
  { label: "Budget Overview", icon: Wallet },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  activePage,
  setActivePage,
}) {
  return (
    <aside
      className={`flex h-fit max-h-[calc(100vh-24px)] shrink-0 flex-col self-start overflow-hidden rounded-2xl border border-[#F0EAEC] bg-white shadow-[0_3px_14px_rgba(47,25,31,0.05)] transition-[width] duration-300 ${
        collapsed ? "w-[70px]" : "w-[245px]"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex h-[72px] shrink-0 items-center border-b border-[#F2EDEF] ${
          collapsed ? "justify-center px-2" : "gap-3 px-5"
        }`}
      >
        <img
          src="/msu-logo.png"
          alt="MSU Logo"
          className="h-9 w-9 shrink-0 object-contain"
        />

        {!collapsed && (
          <h1 className="text-[13px] font-semibold tracking-[-0.3px] text-[#30252A]">
            Academic Records
          </h1>
        )}
      </div>

      {/* Navigation */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
        <nav
          className="flex flex-col gap-1"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map(({ label, icon: Icon }) => {
            const isActive = activePage === label;

            return (
              <button
                key={label}
                type="button"
                title={collapsed ? label : undefined}
                onClick={() => setActivePage(label)}
                className={`flex w-full items-center rounded-xl text-left transition-colors duration-200 ${
                  collapsed
                    ? "justify-center px-0 py-3"
                    : "gap-3 px-3.5 py-2.5"
                } ${
                  isActive
                    ? "border border-[#EAD6DA] bg-[#F9F0F2] text-[#811C2B]"
                    : "border border-transparent text-[#766B71] hover:bg-[#FAF7F8] hover:text-[#811C2B]"
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.1 : 1.7}
                  className="shrink-0"
                />

                {!collapsed && (
                  <span
                    className={`text-[12px] ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="shrink-0 border-t border-[#F2EDEF] p-3">
        <button
          type="button"
          title={collapsed ? "FAQs | Help?" : undefined}
          onClick={() => setActivePage("Help")}
          className={`flex w-full items-center rounded-xl py-2.5 text-[#766B71] transition hover:bg-[#FAF7F8] hover:text-[#811C2B] ${
            collapsed ? "justify-center px-0" : "gap-3 px-3.5"
          } ${activePage === "Help" ? "bg-[#F9F0F2] text-[#811C2B]" : ""}`}
        >
          <CircleHelp size={18} strokeWidth={1.7} />

          {!collapsed && (
            <span className="text-[12px] font-medium">
              FAQs | Help?
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`mt-2 flex w-full items-center rounded-xl border border-[#F0EAEC] py-2.5 text-[#877B81] transition hover:border-[#E3CCD1] hover:bg-[#FCF8F9] hover:text-[#811C2B] ${
            collapsed ? "justify-center px-0" : "gap-3 px-3.5"
          }`}
        >
          {collapsed ? (
            <ChevronRight size={16} />
          ) : (
            <>
              <ChevronLeft size={16} />
              <span className="text-[11px] font-medium">
                Collapse sidebar
              </span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
