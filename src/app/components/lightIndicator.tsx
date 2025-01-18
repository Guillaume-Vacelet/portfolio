export default function LightIndicator() {
  return (
    <div className="relative flex-shrink-0 size-3">
      <div className="absolute top-0 left-0 size-full rounded-full bg-green-500 opacity-80 animate-ping"></div>
      <div className="size-full rounded-full bg-green-500 shadow-[0px_0px_20px_4px_#48bb78]"></div>
    </div>
  )
}