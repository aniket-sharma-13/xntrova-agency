import { clients, tools } from "../data";

export function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section className="overflow-hidden border-y border-line bg-surface py-14">
      <div className="page-pad mx-auto max-w-[1440px]">
        <h2 className="text-center text-[clamp(1.35rem,3vw,1.875rem)] font-bold tracking-tight">
          Trusted by thousands of companies
        </h2>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 pr-4">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="page-pad mx-auto mt-10 flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-body">
        <span className="font-semibold text-ink">Tools we work with</span>
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  );
}
