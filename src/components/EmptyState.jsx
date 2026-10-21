
import { LayoutGrid } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex min-h-[340px] flex-col items-center justify-center px-5 py-12 text-center sm:min-h-[380px]">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F2E3E6] bg-[#FCF6F7]">
        <LayoutGrid
          size={29}
          strokeWidth={1.7}
          className="text-[#811C2B]"
        />
      </div>

      <h2 className="text-sm font-medium tracking-[-0.01em] text-[#29252A] sm:text-base">
        No data to display
      </h2>

      <p className="mt-2 max-w-xs text-xs leading-5 text-[#93868A]">
        Select your academic filters to view available statistics.
      </p>
    </div>
  );
}
