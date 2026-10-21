<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F3EEF0] px-4 py-4 sm:px-5">
  <div>
    <h2 className="text-[13px] font-semibold text-[#3A2C32]">
      Academic Statistics
    </h2>
    <p className="mt-1 text-[10px] text-[#958890]">
      Summary of academic records and enrollment.
    </p>
  </div>

  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E5E8] bg-[#FCF7F8] px-3 py-1.5 text-[10px] font-medium text-[#811C2B]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#811C2B]" />
    {academicYear || "Academic year not selected"}
  </span>
</div>