import { useReveal } from "../hooks/useReveal";

export function Approach() {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className="page-pad reveal mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/assets/approach.jpg"
            alt="Reviewing campaign performance and results"
            className="h-[min(360px,70vw)] w-full object-cover md:h-[440px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 to-transparent p-4 text-white sm:p-6">
            <p className="text-sm font-semibold text-cta">Campaign review</p>
            <p className="mt-1 text-lg font-semibold">Turning numbers into the next action</p>
          </div>
        </div>
        <div>
          <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] font-bold tracking-tight">
            Turning Potential Into <span className="text-primary">Performance</span>
          </h2>
          <div className="mt-6 space-y-4 text-body leading-relaxed">
            <p>
              Every brand has potential, but potential alone cannot drive growth. At Xntrova, we
              transform ideas into actions and strategies into measurable results. However, it is not
              our aim that makes us the best digital marketing company in Delhi NCR, but our approach.
            </p>
            <p>
              Moreover, we use a strategic approach that combines creativity with data. Through this,
              we ensure that every campaign, piece of content, and marketing effort serves a clear
              purpose. This is one of the key reasons that makes us the top digital marketing agency
              in Dwarka. In addition to this, we do not rely on guesswork and believe in complete
              transparency, collaboration, and continuous improvement.
            </p>
            <p>
              Therefore, whether your aim is to increase your business visibility, generate quality
              leads, or strengthen your digital presence, the best digital marketing agency in Delhi,
              Xntrova, will ensure that. We are committed to delivering real results and making every
              effort count.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
