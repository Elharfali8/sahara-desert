import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Placeholder so the scroll-triggered navbar has something to react to. */}
        <section id="tours" className="px-6 py-24 sm:px-10 sm:py-32">
          <p className="eyebrow text-terracotta">Next up</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            Tour listings land here
          </h2>
        </section>
      </main>
    </>
  );
};

export default page;
