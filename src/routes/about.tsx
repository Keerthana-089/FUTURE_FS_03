import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import interior from "@/assets/cafe-interior.jpg";
import beans from "@/assets/gallery-beans.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bean & Bloom Cafe" },
      { name: "description", content: "Born from a love of slow coffee and gathered tables. Meet the family behind Bean & Bloom." },
      { property: "og:title", content: "About — Bean & Bloom" },
      { property: "og:description", content: "Our story, our craft, our people." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="container-cafe pt-12 pb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Our Story</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95] max-w-3xl">
          A cafe built<br />
          <span className="italic">on patience.</span>
        </h1>
      </section>

      <section className="container-cafe section-pad grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Bean &amp; Bloom started in 2018 in a corner storefront with a borrowed espresso machine and a single bag of Ethiopian Yirgacheffe. Seven years later, we still treat every cup with the same reverence.
          </p>
          <p>
            We work directly with smallholder farms, roast in small batches, and train every barista for a full month before they touch the bar. Slow is our standard.
          </p>
          <p>
            But the coffee is only half the story. The rest is the room — the regulars who claim "their" table, the freelancers who write their thesis at our window, the first dates and quiet mornings. You are why we open the doors.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={interior} alt="Cafe interior" loading="lazy" width={900} height={1100} className="rounded-2xl aspect-[3/4] object-cover" />
          <img src={beans} alt="Roasted coffee beans" loading="lazy" width={900} height={1100} className="rounded-2xl aspect-[3/4] object-cover mt-12" />
        </div>
      </section>

      <section className="bg-secondary/40 section-pad">
        <div className="container-cafe">
          <h2 className="font-display text-5xl mb-12">Our values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Source with care", d: "Direct trade. Fair prices. Long relationships with growers." },
              { t: "Roast with patience", d: "Small batches, twice a week. Never blended for shelf life." },
              { t: "Serve with warmth", d: "Names remembered. Orders right. A second cup, on us." },
            ].map((v) => (
              <div key={v.t}>
                <div className="font-display text-2xl mb-2 text-accent">{v.t}</div>
                <p className="text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
