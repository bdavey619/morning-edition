export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400">
        {children}
      </span>
      <div className="flex-1 h-px bg-stone-200" />
    </div>
  );
}
