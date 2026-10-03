import { useEffect, useState } from "react";
import { services } from "../data";
import { Icon } from "./Icon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
        setRegionOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (event) => {
      if (event.matches) closeAll();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
    setRegionOpen(false);
    setMobileServices(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-dark text-[13px] text-white/80 lg:block">
        <div className="page-pad mx-auto flex max-w-[1440px] items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <a className="inline-flex items-center gap-1.5 hover:text-cta" href="tel:+918683828646">
              <Icon name="phone" className="text-primary" />
              +91 868-382-8646
            </a>
            <a className="inline-flex items-center gap-1.5 hover:text-cta" href="mailto:info@xntrova.com">
              <Icon name="mail" className="text-primary" />
              info@xntrova.com
            </a>
          </div>
          <a
            href="#contact"
            className="font-medium text-white transition-colors hover:text-cta"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div
        className={`border-b bg-white/95 backdrop-blur-md transition-shadow ${
          scrolled ? "border-line shadow-[0_8px_30px_rgba(0,23,32,0.08)]" : "border-transparent"
        }`}
      >
        <div className="page-pad mx-auto flex max-w-[1440px] min-w-0 items-center justify-between gap-3 py-3">
          <a href="#top" className="flex min-w-0 shrink items-center" onClick={closeAll}>
            <img src="/assets/logo.png" alt="Xntrova" className="h-8 w-auto max-w-[min(100%,11rem)] sm:h-9 lg:h-10" />
          </a>

          <nav className="hidden items-center gap-0 xl:gap-1 lg:flex" aria-label="Primary">
            <NavLink href="#top" label="Home" current />
            <NavLink href="#about" label="About Us" />
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="group relative flex min-h-11 items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-primary xl:px-5"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <Icon name="chevron" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                <span className="pointer-events-none absolute right-3 bottom-0 left-3 h-0.5 origin-left scale-x-0 rounded-full bg-cta transition-transform duration-200 group-hover:scale-x-100 xl:right-5 xl:left-5" />
              </button>
              <div
                className={`absolute left-0 top-full z-20 w-[320px] origin-top rounded-xl border border-line bg-white p-2 shadow-[0_20px_50px_rgba(0,23,32,0.12)] transition ${
                  servicesOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
                }`}
              >
                {services.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-body transition-colors hover:bg-surface hover:text-primary"
                    onClick={closeAll}
                  >
                    {item.title}
                  </a>
                ))}
                <a
                  href="#services"
                  className="mt-1 block rounded-lg px-3 py-2.5 text-sm font-semibold text-primary hover:bg-surface"
                  onClick={closeAll}
                >
                  View all services
                </a>
              </div>
            </div>
            <NavLink href="https://www.xntrova.com/blog/" label="Blog" external />
            <NavLink href="https://www.xntrova.com/careers/" label="Careers" external />
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-white px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
                aria-expanded={regionOpen}
                aria-label="Region: India. Change region"
                onClick={() => setRegionOpen((v) => !v)}
              >
                <Icon name="globe" className="text-primary" />
                India
                <Icon name="chevron" className={`transition-transform ${regionOpen ? "rotate-180" : ""}`} />
              </button>
              {regionOpen && (
                <div className="absolute right-0 mt-1 w-40 rounded-lg border border-line bg-white py-1 shadow-lg">
                  <span className="block px-3 py-2 text-sm font-medium text-primary">India</span>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="hidden min-h-11 items-center rounded-sm bg-cta px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-95 lg:inline-flex xl:px-6"
            >
              Contact Us
            </a>

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm p-2 text-ink lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Icon name="close" size={24} /> : <Icon name="menu" size={24} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`grid bg-white lg:hidden ${open ? "grid-rows-[1fr] border-t border-line" : "grid-rows-[0fr]"}`}
        >
          <div className="min-h-0 overflow-hidden">
          <nav
            className="page-pad flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
            aria-label="Mobile"
          >
            <a className="flex min-h-11 items-center py-3 font-medium" href="#top" onClick={closeAll}>
              Home
            </a>
            <a className="flex min-h-11 items-center py-3 font-medium" href="#about" onClick={closeAll}>
              About Us
            </a>
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between py-3 text-left font-medium"
              aria-expanded={mobileServices}
              onClick={() => setMobileServices((v) => !v)}
            >
              Services
              <Icon name="chevron" className={mobileServices ? "rotate-180" : ""} />
            </button>
            {mobileServices && (
              <div className="mb-2 ml-3 flex flex-col border-l border-line pl-3">
                {services.map((item) => (
                  <a key={item.id} className="flex min-h-11 items-center py-2 text-sm text-body" href={item.href} onClick={closeAll}>
                    {item.title}
                  </a>
                ))}
              </div>
            )}
            <a className="flex min-h-11 items-center py-3 font-medium" href="https://www.xntrova.com/blog/" target="_blank" rel="noreferrer">
              Blog
            </a>
            <a className="flex min-h-11 items-center py-3 font-medium" href="https://www.xntrova.com/careers/" target="_blank" rel="noreferrer">
              Careers
            </a>
            <a className="flex min-h-11 items-center gap-2 py-3 text-sm text-body" href="tel:+918683828646">
              <Icon name="phone" className="text-primary" /> +91 868-382-8646
            </a>
            <a className="flex min-h-11 items-center gap-2 py-3 text-sm text-body" href="mailto:info@xntrova.com">
              <Icon name="mail" className="text-primary" /> info@xntrova.com
            </a>
            <div className="flex min-h-11 items-center gap-2 py-3 text-sm text-body">
              <Icon name="globe" className="text-primary" /> India
            </div>
            <a
              href="#contact"
              onClick={closeAll}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-sm bg-cta px-6 py-3 text-sm font-semibold text-ink"
            >
              Contact Us
            </a>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label, current, external }) {
  return (
    <a
      href={href}
      className="group relative inline-flex min-h-11 items-center px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-primary xl:px-5"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(current ? { "aria-current": "page" } : {})}
    >
      {label}
      <span
        className={`pointer-events-none absolute right-3 bottom-0 left-3 h-0.5 origin-left rounded-full bg-cta transition-transform duration-200 xl:right-5 xl:left-5 ${
          current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </a>
  );
}
