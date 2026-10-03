import { services } from "../data";
import { Icon } from "./Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer pt-14 pb-8 text-white">
      <div className="page-pad mx-auto grid max-w-[1440px] min-w-0 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/assets/logo.png" alt="Xntrova" className="h-8 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            India’s premier B2B digital marketing agency, delivering growth-focused solutions for
            businesses across Delhi and beyond.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.map((item) => (
              <li key={item.id}>
                <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href={item.href}>
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="#contact">
                Email Marketing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="#top">
                Home
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="#contact">
                Contact Us
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="https://www.xntrova.com/blog/" target="_blank" rel="noreferrer">
                Blog
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="https://www.xntrova.com/careers/" target="_blank" rel="noreferrer">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex min-w-0 gap-2">
              <Icon name="pin" className="mt-0.5 shrink-0 text-cta" />
              <span>A107, 2nd Floor, Sector 8, Dwarka New Delhi - 110077</span>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="tel:+918683828646">
                +91 868-382-8646
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-cta lg:min-h-0" href="mailto:info@xntrova.com">
                info@xntrova.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-pad mx-auto mt-10 flex max-w-[1440px] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Xntrova. All rights reserved.</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="https://www.xntrova.com/privacy-policy/" className="inline-flex min-h-11 items-center hover:text-white lg:min-h-0">
            Privacy Policy
          </a>
          <a href="https://www.xntrova.com/terms-and-conditions/" className="inline-flex min-h-11 items-center hover:text-white lg:min-h-0">
            Terms & Conditions
          </a>
          <a href="https://www.xntrova.com/cookie-policy/" className="inline-flex min-h-11 items-center hover:text-white lg:min-h-0">
            Cookie Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
