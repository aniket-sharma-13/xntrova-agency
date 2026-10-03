import { useState } from "react";
import { formServices } from "../data";

export function Hero() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const next = {};
    const n = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;

    if (n.length < 2) next.name = "Enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!service) next.service = "Select a service.";

    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      form[first]?.focus();
      return;
    }

    // Connect this submit to Formspree, Netlify Forms, or a PHP/API endpoint.
    setName(n);
    setSent(true);
  }

  return (
    <section id="top" className="relative isolate overflow-hidden bg-dark text-white lg:min-h-[100svh]">
      <img
        src="/assets/hero.jpg"
        alt="Marketing team collaborating around a table"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#001320]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001320]/88 via-[#001F2B]/62 to-[#01415A]/28" />
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cta/15 blur-3xl" />

      <div className="page-pad relative mx-auto grid min-h-0 max-w-[1440px] items-center gap-8 py-12 sm:gap-12 sm:py-16 lg:min-h-[100svh] lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="min-w-0">
          <p className="hero-in text-[0.7rem] font-semibold tracking-[0.18em] text-cta uppercase sm:text-xs">
            Digital marketing agency in Delhi
          </p>
          <h1 className="hero-in mt-4 max-w-3xl text-[clamp(1.75rem,6.5vw,3.5rem)] leading-[1.12] font-bold tracking-tight">
            Scale Your Business With The Best Digital Marketing Agency in Delhi
          </h1>
          <p className="hero-in mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/80 sm:text-lg" style={{ animationDelay: "120ms" }}>
            Unlock your business potential and connect with your targeted customers by partnering
            with Xntrova, the best digital marketing agency in Delhi.
          </p>
          <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: "200ms" }}>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-cta px-7 py-3.5 text-sm font-semibold text-ink transition hover:brightness-95"
            >
              Get Free Digital Audit
            </a>
            <a
              href="#services"
              className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View services
            </a>
          </div>
        </div>

        <div className="hero-in w-full min-w-0 lg:animate-float lg:justify-self-end" style={{ animationDelay: "180ms" }}>
          <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white p-5 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:p-6">
            <h2 className="text-xl font-semibold">Get a Free Digital Audit</h2>
            <p className="mt-1 text-sm text-body">Tell us about your business and we’ll get back to you shortly.</p>

            {sent ? (
              <p className="mt-6 rounded-lg bg-surface p-4 text-sm" role="status">
                Thanks, {name}. We have your request and will reply with next steps.
              </p>
            ) : (
              <form className="mt-5 space-y-4" onSubmit={onSubmit} noValidate>
                <Field label="Name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <div>
                  <label htmlFor="hero-service" className="mb-1.5 block text-sm font-medium">
                    Which service are you interested in?
                  </label>
                  <select
                    id="hero-service"
                    name="service"
                    aria-invalid={errors.service ? "true" : "false"}
                    className="min-h-11 w-full rounded-md border border-line bg-white px-3 text-base sm:text-sm"
                    defaultValue=""
                  >
                    <option value="">Select a service</option>
                    {formServices.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-700" aria-live="polite">
                      {errors.service}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="min-h-11 w-full rounded-sm bg-cta text-sm font-semibold text-ink transition hover:brightness-95"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", error }) {
  return (
    <div>
      <label htmlFor={`hero-${name}`} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={`hero-${name}`}
        name={name}
        type={type}
        autoComplete={name}
        aria-invalid={error ? "true" : "false"}
        className={`min-h-11 w-full rounded-md border px-3 text-base sm:text-sm ${error ? "border-red-600" : "border-line"}`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-700" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
