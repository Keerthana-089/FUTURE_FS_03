import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Bean & Bloom Cafe" },
      { name: "description", content: "See why locals love Bean & Bloom. 4.9★ from 480+ reviews." },
      { property: "og:title", content: "Reviews — Bean & Bloom" },
      { property: "og:description", content: "Customer love, in their own words." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Amelia R.", role: "Regular", stars: 5, text: "The cortado is the best in the city. Hands down. And the staff actually remembers my name." },
  { name: "Marcus T.", role: "Remote worker", stars: 5, text: "My second office. Reliable wifi, perfect espresso, and the playlists are immaculate." },
  { name: "Priya S.", role: "Foodie", stars: 5, text: "The honey lavender latte ruined every other latte for me. In the best way possible." },
  { name: "Liam O.", role: "First-time visitor", stars: 5, text: "Walked in cold, left feeling like a regular. That's a skill." },
  { name: "Sofia M.", role: "Local", stars: 5, text: "Beautiful space, beautiful drinks, beautiful people. I bring everyone I love here." },
  { name: "Daniel K.", role: "Coffee snob", stars: 5, text: "Pour-over flight is a serious flex. The Yirgacheffe was floral and clean — exactly right." },
];

function Reviews() {
  return (
    <SiteLayout>
      <section className="container-cafe pt-12 pb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Customer Love</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95] mb-6">Kind words,<br /><span className="italic">from kinder people.</span></h1>
        <div className="inline-flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="font-medium">4.9</span>
          <span className="text-muted-foreground text-sm">· from 480+ reviews</span>
        </div>
      </section>

      <section className="container-cafe section-pad grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article key={r.name} className="bg-card border border-border rounded-2xl p-7 hover:shadow-[var(--shadow-soft)] transition-shadow">
            <Quote className="h-6 w-6 text-accent/40 mb-4" />
            <p className="text-foreground/85 leading-relaxed mb-6 font-display text-xl italic">"{r.text}"</p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
              <div className="flex">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
