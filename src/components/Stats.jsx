import { useEffect, useRef, useState } from "react";
import { stats } from "../data";
import { useReveal } from "../hooks/useReveal";

export function Stats() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <img src="/assets/stats.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-dark/78" />
      <div ref={ref} className="page-pad reveal relative mx-auto max-w-[1440px]">
        <p className="text-center text-xs font-semibold tracking-[0.16em] text-cta uppercase">
          Performance overview
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {stats.map((item) => (
            <Stat key={item.label} {...item} />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/70 sm:gap-8">
          <span>Reviews platform</span>
          <span className="text-white">Clutch</span>
          <span className="text-white">GoodFirms</span>
          <span className="text-white">DesignRush</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }) {
  const [n, setN] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (reduce) {
        setN(value);
        return;
      }
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1100);
        setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center text-white">
      <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-cta">
        {value === 250 ? "+" : ""}
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/75">{label}</p>
    </div>
  );
}
