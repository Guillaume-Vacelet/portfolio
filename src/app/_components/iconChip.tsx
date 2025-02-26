
export default function IconChip({ label } : { label: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 px-3 py-[6px] rounded-lg border-zinc-800 border-[1px] icon-chip-gradient">
      <span className="text-xs sm:text-sm font-normal leading-none text-zinc-400">
        {String(label).charAt(0).toUpperCase() + String(label).slice(1)}
      </span>
    </div>
  )
}