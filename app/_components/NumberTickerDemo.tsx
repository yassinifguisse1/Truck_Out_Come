import NumberTicker from "@/components/ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row container mx-auto gap-8 py-12">
    <div className="flex items-center">
      <span className="font-mono text-6xl mr-2 font-semibold">+</span>{" "}
      <p className="whitespace-pre-wrap  font-mono font-semibold text-6xl tracking-tighter text-black dark:text-white">
        <NumberTicker value={100} />
      </p>
      <span className="font-mono font-semibold text-6xl ml-6">Clients</span>
      <span className="ml-8  hidden md:inline-block font-semibold text-6xl ">|</span>
    </div>

    <div className="flex items-center mt-4 md:mt-0">
      <span className="font-mono font-semibold text-6xl mr-2 ">+</span>{" "}
      <p className="whitespace-pre-wrap text-6xl font-mono font-semibold tracking-tighter text-black dark:text-white">
        <NumberTicker value={140} />
      </p>{" "}
      <span className="font-mono font-semibold text-6xl ml-4">Websites</span>
    </div>
  </div>
  );
}
