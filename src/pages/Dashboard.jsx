
import AcademicFilters from "./dashboard/AcademicFilters";
import EmptyState from "../components/EmptyState";

export default function Dashboard() {
  return (
    <section className="mx-auto w-full max-w-[1600px] space-y-5">
      {/* Dashboard Filters */}
      <AcademicFilters />

      {/* Dashboard Content */}
      <div className="rounded-2xl border border-[#F0EAEC] bg-white shadow-[0_2px_10px_rgba(40,20,25,0.025)]">
        <EmptyState />
      </div>
    </section>
  );
}
