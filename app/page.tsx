"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PHONE_DISPLAY = "(218) 539-0694";
const PHONE_TEL = "+12185390694";
const EMAIL = "dan@oakvalleycurbing.com";
const FB_URL = "https://www.facebook.com/profile.php?id=61577341783607";
const ADDRESS = "61257 Leaf River Rd, Wadena, MN";

const services = [
  {
    title: "Flower Bed Borders",
    body: "Continuous, custom-shaped concrete borders that hold mulch in, weeds out, and follow any curve your landscape calls for.",
  },
  {
    title: "Tree Rings",
    body: "Clean, permanent rings around trees — no more annual edging or rotting plastic. Stamped and stained to match.",
  },
  {
    title: "Driveway & Walkway Edging",
    body: "Crisp, durable edging that defines hardscapes, protects mowers, and lifts the look of the whole property.",
  },
];

const benefits = [
  {
    title: "Permanent",
    body: "Won't rust, rot, or blow away like plastic, metal, or rubber edging.",
  },
  {
    title: "Custom Curves",
    body: "Extruded on site — your beds, your shapes. No straight-line limits.",
  },
  {
    title: "Root & Mulch Barrier",
    body: "Keeps grass out of beds and mulch where you put it.",
  },
  {
    title: "Property Value",
    body: "Defined landscape edges read as professional, intentional, and well-maintained.",
  },
];

const process = [
  { step: "01", title: "Free On-Site Quote", body: "We walk your property, measure, and give you a number — no pressure." },
  { step: "02", title: "Trench", body: "We mark and trench the line where the curb will go, following any curve you want." },
  { step: "03", title: "Lay the Curb", body: "Continuous concrete extruded on site — no joints, no breaks, no rotting edges." },
  { step: "04", title: "Add a Stamp", body: "If desired: pick your color and stamp pattern. Cures in a week. Lasts decades." },
];

const colors = [
  { name: "Charcoal Slate", hex: "#3A3A3A" },
  { name: "Walnut", hex: "#7A5C3E" },
  { name: "Natural Gray", hex: "#9B9A93" },
  { name: "Terra", hex: "#8C5A3C" },
];

const serviceArea = [
  "Wadena",
  "Sebeka",
  "Menahga",
  "Verndale",
  "Staples",
  "Perham",
  "Frazee",
  "Detroit Lakes",
  "Pelican Rapids",
  "Vergas",
  "Park Rapids",
  "Long Prairie",
];

const gallery = [
  {
    src: "/gallery/lakefront-curb.jpg",
    alt: "Stamped concrete curbing along a flower bed in full bloom",
    caption: "Residential flower bed",
  },
  {
    src: "/gallery/canine-acres.jpg",
    alt: "Walnut stamped curbing around a rock landscape bed at Canine Acres",
    caption: "Canine Acres",
  },
  {
    src: "/gallery/install-action.jpg",
    alt: "Installer laying concrete curbing along a foundation bed",
    caption: "Install in progress",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#services", "Services"],
    ["#gallery", "Gallery"],
    ["#process", "Process"],
    ["#faq", "FAQ"],
    ["#area", "Service Area"],
    ["#quote", "Quote"],
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[var(--background)]/85 border-b border-[var(--muted)]/20">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-3">
        <Link href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/brand/logo-sm.png" alt="Oak Valley Curbing logo" width={40} height={40} className="w-10 h-10" priority />
          <span className="font-display text-lg md:text-xl tracking-tight">Oak Valley Curbing</span>
        </Link>
        <nav className="hidden md:flex gap-7 text-sm">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-[var(--accent)]">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-sm font-medium px-4 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-colors"
          >
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--muted)]/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {open ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-[var(--muted)]/20 bg-[var(--background)]">
          <ul className="max-w-6xl mx-auto px-5 py-3 flex flex-col">
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base hover:text-[var(--accent)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/gallery/lakefront-curb.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={72}
            className="object-cover object-[center_70%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto px-5 py-32 md:py-44 text-[var(--background)]">
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-[var(--background)]/80 mb-5">
            Wadena, MN · Lakes Country
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Decorative Concrete Curbing for Minnesota Lakes Country.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[var(--background)]/90">
            Custom stamped borders that define your beds, protect your landscaping,
            and last for decades. Free on-site quotes — built one curve at a time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:bg-[#634a31] transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="px-6 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-5 py-24">
        <div className="max-w-2xl mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--accent)] mb-3">What we do</p>
          <h2 className="font-display text-4xl md:text-5xl">Continuous concrete edging, built on your property.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-7 rounded-2xl bg-white border border-[var(--muted)]/30 hover:border-[var(--accent)]/50 transition-colors"
            >
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-[var(--foreground)]/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[var(--secondary)]/95 text-[var(--background)] py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-[var(--background)]/70 mb-3">Recent work</p>
              <h2 className="font-display text-4xl md:text-5xl">Built across the lakes.</h2>
            </div>
            <a href={FB_URL} target="_blank" rel="noopener" className="text-sm underline underline-offset-4 hover:text-[var(--accent)]">
              See more on Facebook →
            </a>
          </div>
          <div className="grid md:grid-cols-6 gap-4 auto-rows-[280px] md:auto-rows-[300px]">
            <figure className="relative overflow-hidden rounded-2xl group md:col-span-4 md:row-span-2">
              <Image src={gallery[0].src} alt={gallery[0].alt} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-sm text-white">{gallery[0].caption}</figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-2xl group md:col-span-2">
              <Image src={gallery[1].src} alt={gallery[1].alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-sm text-white">{gallery[1].caption}</figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-2xl group md:col-span-2">
              <Image src={gallery[2].src} alt={gallery[2].alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-sm text-white">{gallery[2].caption}</figcaption>
            </figure>
          </div>
          <div className="mt-6 text-right">
            <a href={FB_URL} target="_blank" rel="noopener" className="text-sm text-[var(--background)]/80 underline underline-offset-4 hover:text-[var(--accent)]">See every job on Facebook →</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-5 py-24">
        <div className="max-w-2xl mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--accent)] mb-3">Why concrete curbing</p>
          <h2 className="font-display text-4xl md:text-5xl">It outlasts everything else you can put around a bed.</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="border-t-2 border-[var(--accent)] pt-5">
              <h3 className="font-display text-xl mb-2">{b.title}</h3>
              <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-white py-24 border-y border-[var(--muted)]/20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-2xl mb-12">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--accent)] mb-3">Process</p>
            <h2 className="font-display text-4xl md:text-5xl">From quote to cure in under a week.</h2>
          </div>
          <ol className="grid md:grid-cols-4 gap-6">
            {process.map((p) => (
              <li key={p.step} className="relative">
                <div className="font-display text-5xl text-[var(--accent)] mb-2">{p.step}</div>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--foreground)]/75 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Colors */}
      <section className="max-w-6xl mx-auto px-5 py-24">
        <div className="max-w-2xl mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--accent)] mb-3">Colors & stamps</p>
          <h2 className="font-display text-4xl md:text-5xl">Pick a color that matches your home.</h2>
          <p className="mt-4 text-[var(--foreground)]/75">
            We bring full color samples to your free quote. Charcoal, walnut, natural gray, and custom
            blends available, plus your choice of stamp pattern.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {colors.map((c) => (
            <div key={c.name} className="rounded-2xl overflow-hidden border border-[var(--muted)]/30">
              <div className="h-32" style={{ background: c.hex }} aria-hidden />
              <div className="p-4 bg-white">
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-[var(--foreground)]/75 mt-1">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service area */}
      <section id="area" className="bg-[var(--foreground)] text-[var(--background)] py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--background)]/70 mb-3">Service area</p>
            <h2 className="font-display text-4xl md:text-5xl mb-5">Wadena and the Minnesota lakes.</h2>
            <p className="text-[var(--background)]/80 leading-relaxed">
              Based in Wadena, working across the lakes region. Not sure if we cover your area?
              Call — if we don&apos;t, we probably know who does.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {serviceArea.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="max-w-6xl mx-auto px-5 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--accent)] mb-3">Free quote</p>
            <h2 className="font-display text-4xl md:text-5xl mb-5">Tell us about your project.</h2>
            <p className="text-[var(--foreground)]/75 leading-relaxed mb-7">
              Most quotes happen in a quick on-site visit. Send us a few details and Dan will
              call within one business day to schedule a free measurement — no pressure, no obligation.
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-[var(--foreground)]/75">Contact:</span>{" "}
                <span className="font-medium">Dan Butzin</span>
              </p>
              <p>
                <span className="text-[var(--foreground)]/75">Call or text:</span>{" "}
                <a href={`tel:${PHONE_TEL}`} className="font-medium underline underline-offset-4">{PHONE_DISPLAY}</a>
              </p>
              <p>
                <span className="text-[var(--foreground)]/75">Email:</span>{" "}
                <a href={`mailto:${EMAIL}`} className="font-medium underline underline-offset-4">{EMAIL}</a>
              </p>
              <p>
                <span className="text-[var(--foreground)]/75">Facebook:</span>{" "}
                <a href={FB_URL} target="_blank" rel="noopener" className="font-medium underline underline-offset-4">facebook.com/oakvalleycurbing</a>
              </p>
              <p>
                <span className="text-[var(--foreground)]/75">Based in:</span>{" "}
                <span className="font-medium">{ADDRESS}</span>
              </p>
            </div>
          </div>
          <form
            action="/api/quote"
            method="POST"
            className="bg-white rounded-2xl p-7 border border-[var(--muted)]/30 space-y-4"
          >
            {/* Honeypot - hidden from real users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] w-px h-px opacity-0"
              aria-hidden="true"
            />
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-[var(--foreground)]/70">Name</span>
                <input
                  required
                  name="name"
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--muted)]/40 focus:border-[var(--accent)] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--foreground)]/70">Phone</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--muted)]/40 focus:border-[var(--accent)] focus:outline-none"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-[var(--foreground)]/70">Email (optional)</span>
              <input
                type="email"
                name="email"
                className="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--muted)]/40 focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm text-[var(--foreground)]/70">Property address or city</span>
              <input
                required
                name="address"
                className="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--muted)]/40 focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm text-[var(--foreground)]/70">Tell us about the project</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Approximate linear feet, color preferences, timeline..."
                className="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--muted)]/40 focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:bg-[#634a31] transition-colors"
            >
              Request Free Quote
            </button>
            <p className="text-xs text-[var(--foreground)]/75">
              We&apos;ll get back to you within one business day.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--foreground)] text-[var(--background)]/75 py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap gap-4 justify-between text-sm">
          <p>© {new Date().getFullYear()} Oak Valley Curbing · Wadena, MN</p>
          <div className="flex gap-5">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-[var(--accent)]">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent)]">Email</a>
            <a href={FB_URL} target="_blank" rel="noopener" className="hover:text-[var(--accent)]">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
