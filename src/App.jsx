
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AdmissionForm from "./pages/AdmissionForm";
import COR from "./pages/COR";
import Billings from "./pages/Billings";
import BudgetOverview from "./pages/BudgetOverview";
import {
  LayoutDashboard,
  ClipboardList,
  FileText,
  Receipt,
  Wallet,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  CircleHelp,
  Menu,
  X,
  CalendarDays,
  Building2,
  BookOpen,
  Users,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Admission Form", icon: ClipboardList },
  { label: "COR", icon: FileText },
  { label: "Billings", icon: Receipt },
  { label: "Budget Overview", icon: Wallet },
];

const ACADEMIC_YEARS = [
  "2025–2026",
  "2024–2025",
  "2023–2024",
];

const SEMESTERS = [
  "1st Semester",
  "2nd Semester",
  "Summer",
];

const COLLEGES = [
  "CICS",
  "College of Education",
  "College of Science and Mathematics",
  "College of Social Sciences and Humanities",
  "College of Engineering",
];

const PROGRAMS = [
  "BS Information Technology",
  "BS Computer Science",
  "BS Information Systems",
];

function FilterSelect({ label, icon: Icon, value, options, onChange }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label className="flex items-center gap-2 text-[12px] font-medium text-[#686168]">
        {Icon && <Icon size={15} strokeWidth={1.8} />}
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-xl border border-[#EAE4E7] bg-white px-3.5 py-3 pr-10 text-[12px] font-medium text-[#393239] outline-none transition duration-200 hover:border-[#CBA9B0] focus:border-[#811C2B] focus:ring-2 focus:ring-[#811C2B]/10"
        >
          <option value="">Select {label.toLowerCase()}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8B8086]"
        />
      </div>
    </div>
  );
}

function Sidebar({
  collapsed,
  setCollapsed,
  activePage,
  setActivePage,
}) {
  return (
    <aside
      className={`relative flex h-full min-h-0 shrink-0 flex-col rounded-2xl border border-[#F0EAEC] bg-white shadow-[0_3px_14px_rgba(47,25,31,0.05)] transition-[width] duration-300 ${
        collapsed ? "w-[70px]" : "w-[245px]"
      }`}
    >
      {/* Brand */}
      <div
        className={`flex h-[84px] shrink-0 items-center border-b border-[#F2EDEF] ${
          collapsed ? "justify-center px-2" : "gap-3 px-5"
        }`}
      >
        <img
          src="/msu-logo.png"
          alt="MSU Logo"
          className="h-10 w-10 shrink-0 rounded-lg object-contain"
        />

        {!collapsed && (
          <h1 className="text-[13px] font-semibold tracking-[-0.3px] text-[#30252A]">
            Academic Records
          </h1>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        <nav className="flex flex-col gap-1.5">
          {NAV_ITEMS.map(({ label, icon: Icon }) => {
            const isActive = activePage === label;

            return (
              <button
                key={label}
                type="button"
                title={collapsed ? label : undefined}
                onClick={() => setActivePage(label)}
                className={`group flex w-full items-center rounded-xl text-left transition-all duration-200 ${
                  collapsed
                    ? "justify-center px-0 py-3.5"
                    : "gap-3 px-3.5 py-3"
                } ${
                  isActive
                    ? "border border-[#EAD6DA] bg-[#F9F0F2] text-[#811C2B] shadow-[0_2px_5px_rgba(129,28,43,0.04)]"
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

      {/* Help and collapse */}
      <div className="shrink-0 border-t border-[#F2EDEF] p-3">
        <button
          type="button"
          title={collapsed ? "FAQs | Help?" : undefined}
          onClick={() => setActivePage("FAQs | Help?")}
          className={`flex w-full items-center rounded-xl py-3 text-[#766B71] transition hover:bg-[#FAF7F8] hover:text-[#811C2B] ${
            collapsed ? "justify-center px-0" : "gap-3 px-3.5"
          } ${
            activePage === "FAQs | Help?"
              ? "bg-[#F9F0F2] text-[#811C2B]"
              : ""
          }`}
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
                
              </span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

function Header({ activePage, onOpenMenu }) {
  return (
    <header className="flex min-h-[80px] shrink-0 items-center justify-between gap-3 border-b border-[#F2EDEF] px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open navigation"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F0EAEC] text-[#766B71] transition hover:bg-[#FCF7F8] hover:text-[#811C2B] md:hidden"
        >
          <Menu size={19} />
        </button>

        <h1 className="truncate text-[16px] font-semibold tracking-[-0.5px] text-[#30252A] sm:text-[18px]">
          {activePage === "Dashboard" ? "Academic Statistics" : activePage}
        </h1>
      </div>

      <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-[11px] font-semibold text-[#3A2C32]">
            Employee
          </p>
          <p className="mt-0.5 text-[10px] text-[#958890]">
            ICTC Administrator
          </p>
        </div>

        <button
          type="button"
          aria-label="Employee profile"
          title="Employee profile"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9D6DA] bg-[#F9EFF1] text-[#811C2B] transition hover:bg-[#F2E1E5]"
        >
          <Users size={18} strokeWidth={1.7} />
        </button>
      </div>
    </header>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[320px] flex-1 flex-col items-center justify-center px-5 py-12 text-center sm:min-h-[390px]">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F0E3E6] bg-[#FCF6F7] text-[#811C2B]">
        <LayoutDashboard size={28} strokeWidth={1.5} />
      </div>

      <h3 className="text-[14px] font-medium text-[#3A2C32]">
        No data to display
      </h3>
    </div>
  );
}

function AcademicFilters() {
  const [academicYear, setAcademicYear] = useState("");
  const [semester, setSemester] = useState("");
  const [college, setCollege] = useState("");
  const [program, setProgram] = useState("");

  const resetFilters = () => {
    setAcademicYear("");
    setSemester("");
    setCollege("");
    setProgram("");
  };

  return (
    <section className="rounded-2xl border border-[#F0EAEC] bg-white p-4 sm:p-5">
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={resetFilters}
          className="text-[10px] font-medium text-[#811C2B] transition hover:text-[#54101B] hover:underline"
        >
          Reset filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <FilterSelect
          label="Academic Year"
          icon={CalendarDays}
          value={academicYear}
          options={ACADEMIC_YEARS}
          onChange={setAcademicYear}
        />

        <FilterSelect
          label="Semester"
          icon={BookOpen}
          value={semester}
          options={SEMESTERS}
          onChange={setSemester}
        />

        <FilterSelect
          label="College"
          icon={Building2}
          value={college}
          options={COLLEGES}
          onChange={(value) => {
            setCollege(value);
            setProgram("");
          }}
        />

        <FilterSelect
          label="Program"
          icon={Users}
          value={program}
          options={PROGRAMS}
          onChange={setProgram}
        />
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <AcademicFilters />

      <section className="flex flex-1 flex-col rounded-2xl border border-[#F0EAEC] bg-white">
        <EmptyState />
      </section>
    </div>
  );
}

function PlaceholderPage({ activePage }) {
  return (
    <section className="flex flex-1 flex-col rounded-2xl border border-[#F0EAEC] bg-white">
      <EmptyState />
    </section>
  );
}

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const handleNavigation = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F9] p-3 font-[Poppins] text-[#34272D] sm:p-4 lg:p-5">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1800px] gap-4 lg:gap-5">
        {/* Desktop sidebar */}
        <div className="hidden shrink-0 md:block">
          <div className="sticky top-5 h-[calc(100vh-2.5rem)]">
            <Sidebar
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              activePage={activePage}
              setActivePage={handleNavigation}
            />
          </div>
        </div>

        {/* Mobile sidebar */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <button
              type="button"
              aria-label="Close navigation"
              className="absolute inset-0 bg-[#21151A]/35 backdrop-blur-[2px]"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="relative m-3 h-[calc(100%-1.5rem)]">
              <Sidebar
                collapsed={false}
                setCollapsed={() => setMobileMenuOpen(false)}
                activePage={activePage}
                setActivePage={handleNavigation}
              />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[#F0EAEC] bg-white text-[#766B71] shadow-sm"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Main card */}
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#F0EAEC] bg-white shadow-[0_3px_16px_rgba(47,25,31,0.07)] transition-shadow duration-300 sm:rounded-3xl sm:shadow-[0_4px_20px_rgba(47,25,31,0.08)]">
          <Header
            activePage={activePage}
            onOpenMenu={() => setMobileMenuOpen(true)}
          />

          <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-7">
            {activePage === "Dashboard" ? (
              <Dashboard />
            ) : (
              <PlaceholderPage activePage={activePage} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
