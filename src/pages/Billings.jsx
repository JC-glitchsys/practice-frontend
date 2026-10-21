import EmptyState from "../components/EmptyState";

export default function Billings() {
  return (
    <section className="flex flex-1 flex-col rounded-2xl border border-[#F0EAEC] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <EmptyState />
    </section>
  );
}
