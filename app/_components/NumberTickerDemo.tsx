import NumberTicker from "@/components/ui/number-ticker";

export function NumberTickerDemo({
  number,
  isHighlighted = false 
}: {
  number: number;
  isHighlighted?: boolean;
}) {
  return (
    <p className={`whitespace-pre-wrap  font-mono font-semibold text-6xl tracking-tighter  ${
      isHighlighted
        ? " text-white dark:text-white "
        : "bg-white text-black dark:text-black"
    }`}>
      <NumberTicker value={number} isHighlighted ={isHighlighted}/>+
    </p>
  );
}
