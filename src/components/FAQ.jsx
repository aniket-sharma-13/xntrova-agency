import { useState } from "react";
import { faqs } from "../data";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="page-pad mx-auto max-w-3xl">
        <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] font-bold tracking-tight">Frequently Asked Questions</h2>
        <p className="mt-3 text-body">Resolve your general queries and concerns with our FAQ section below.</p>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q} className="min-w-0">
                <button
                  type="button"
                  className="flex min-h-11 w-full min-w-0 items-start justify-between gap-4 px-1 py-4 text-left font-semibold"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : i)}
                >
                  <span className="min-w-0 flex-1">{item.q}</span>
                  <span className="shrink-0 text-primary" aria-hidden="true">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm leading-relaxed text-body">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
