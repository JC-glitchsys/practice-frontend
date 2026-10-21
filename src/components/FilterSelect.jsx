import { ChevronDown } from "lucide-react";

export default function FilterSelect({ label, icon: Icon, value, options, onChange }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label className="flex items-center gap-2 text-[12px] font-medium text-[#686168]">{Icon && <Icon size={15} strokeWidth={1.8} />}{label}</label>
      <div className="relative">
        <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full appearance-none rounded-xl border border-[#EAE4E7] bg-white px-3.5 py-3 pr-10 text-[12px] font-medium text-[#393239] outline-none transition duration-200 hover:border-[#CBA9B0] focus:border-[#811C2B] focus:ring-2 focus:ring-[#811C2B]/10">
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <ChevronDown size={15} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8B8086]" />
      </div>
    </div>
  );
}
