import { useState } from "react";
import { CalendarDays, Building2, BookOpen, Users } from "lucide-react";
import FilterSelect from "../../components/FilterSelect";
import { ACADEMIC_YEARS, SEMESTERS, COLLEGES, PROGRAMS } from "../../data/dashboardOptions";

export default function AcademicFilters() {
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
      <div className="mb-4 flex justify-end"><button type="button" onClick={resetFilters} className="text-[10px] font-medium text-[#811C2B] transition hover:text-[#54101B] hover:underline">Reset filters</button></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <FilterSelect label="Academic Year" icon={CalendarDays} value={academicYear} options={ACADEMIC_YEARS} onChange={setAcademicYear} />
        <FilterSelect label="Semester" icon={BookOpen} value={semester} options={SEMESTERS} onChange={setSemester} />
        <FilterSelect label="College" icon={Building2} value={college} options={COLLEGES} onChange={(value) => { setCollege(value); setProgram(""); }} />
        <FilterSelect label="Program" icon={Users} value={program} options={PROGRAMS} onChange={setProgram} />
      </div>
    </section>
  );
}
