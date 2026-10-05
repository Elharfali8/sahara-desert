import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="A camel caravan crossing the sand dunes of the Sahara"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      {/* Scrims keep the headline and the transparent navbar legible over the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-night/65 via-night/10 to-night/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-linear-to-t from-ink/75 via-ink/30 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-20 sm:px-10 sm:pb-24">
        <p className="eyebrow flex items-center gap-3 text-sand">
          <span aria-hidden="true" className="h-px w-10 bg-sand/70" />
          Discover Morocco
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
          Sleep under
          <br />
          <span className="italic text-sand">a billion stars</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Private &amp; small-group desert journeys from Marrakech
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-full bg-saffron px-7 py-3.5 text-sm font-semibold text-ink transition-[filter] hover:brightness-110"
          >
            Explore tours
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            <span className="size-2 rounded-full bg-whatsapp" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
