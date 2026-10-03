import { services } from "../data";
import { useReveal } from "../hooks/useReveal";
import { Icon } from "./Icon";

export function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24">
      <div className="page-pad mx-auto max-w-[1440px]">
        <div ref={ref} className="reveal max-w-3xl min-w-0">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="h-px w-6 bg-primary/50" />
            Services
          </span>
          <h2 className="mt-4 text-[clamp(1.6rem,4vw,2.25rem)] font-bold tracking-tight">
            Best Digital Marketing Services in Delhi for Sustainable Business Growth
          </h2>
          <p className="mt-4 text-body">
            Being the best creative digital marketing agency in New Delhi, we offer solutions that
            help you unlock long-term growth for your business.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <li key={item.id} id={item.id}>
              <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_20px_50px_rgba(0,117,162,0.12)]">
                <div className="relative aspect-[16/9] h-auto overflow-hidden sm:h-44 sm:aspect-auto">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/35 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-cta transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{item.blurb}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3"
                >
                  {item.cta}
                  <Icon name="arrow" />
                </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
