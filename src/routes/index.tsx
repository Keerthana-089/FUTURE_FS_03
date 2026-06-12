import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Leaf, Sparkles, TrendingUp, ShieldCheck, CalendarCheck, Smartphone, Users } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";
import interior from "@/assets/cafe-interior.jpg";
import cappu from "@/assets/drink-cappuccino.jpg";
import macc from "@/assets/drink-macchiato.jpg";
import matcha from "@/assets/drink-matcha.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bean & Bloom Cafe — Every Cup Tells a Story" },
      { name: "description", content: "Premium small-batch coffee, fresh pastries, and an unforgettable ambience. Visit Bean & Bloom or reserve a table online." },
      { property: "og:title", content: "Bean & Bloom Cafe" },
      { property: "og:description", content: "Every cup tells a story. Small-batch coffee in your neighborhood." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = [
  { name: "Rosetta Cappuccino", note: "House blend · velvet foam", img: cappu, price: "₹280" },
  { name: "Caramel Cloud", note: "Iced · salted caramel", img: macc, price: "₹320" },
  { name: "Ceremonial Matcha", note: "Stone-ground · Uji, Japan", img: matcha, price: "₹350" },
];

const specials = [
  { day: "Monday", item: "Cortado + Almond Croissant", price: "₹420" },
  { day: "Tuesday", item: "Flat White + Banana Bread", price: "₹480" },
  { day: "Wednesday", item: "Matcha + Mochi Cookie", price: "₹520" },
  { day: "Thursday", item: "Cold Brew + Pain au Chocolat", price: "₹480" },
  { day: "Friday", item: "House Pour-over Flight (3)", price: "₹650" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Latte with rosetta art on wooden table" className="h-full w-full object-cover animate-slow-zoom" width={1600} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-background" />
        </div>

        <div className="container-cafe relative z-10 pt-32 pb-20">
          <div className="max-w-2xl text-cream animate-fade-up">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-cream/80 mb-6">
              <Leaf className="h-4 w-4" /> Est. 2018 · Indiranagar, Bengaluru
            </p>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-6">
              Every Cup<br />
              <span className="italic text-[oklch(0.85_0.09_70)]">Tells a Story</span>
            </h1>
            <p className="text-lg text-cream/85 max-w-lg mb-10 leading-relaxed">
              Slow-roasted beans, hands that care, and a room that feels like home. Pull up a chair — your story starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-7 h-12">
                  View Menu <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/reservation">
                <Button size="lg" variant="outline" className="rounded-full px-7 h-12 bg-transparent border-cream/40 text-cream hover:bg-cream hover:text-espresso">
                  Reserve a Table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad container-cafe">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Our Craft</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6 leading-tight">
              Where every bean<br />finds its bloom.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We source single-origin beans from family farms across Ethiopia, Colombia, and Guatemala. Roasted in small batches twice a week, brewed by hands that know their craft.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { n: "7yrs", l: "Brewing love" },
                { n: "12+", l: "Origin farms" },
                { n: "4.9★", l: "Guest rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-accent">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={interior} alt="Bean & Bloom cafe interior" loading="lazy" width={1600} height={1100} className="rounded-2xl shadow-[var(--shadow-soft)] aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 max-w-[200px] shadow-[var(--shadow-soft)]">
              <Sparkles className="h-5 w-5 text-accent mb-2" />
              <p className="text-sm font-medium">Roasted in-house, every Tuesday & Friday.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DRINKS */}
      <section className="section-pad bg-secondary/40">
        <div className="container-cafe">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent mb-3">Featured</p>
              <h2 className="font-display text-5xl">House Favourites</h2>
            </div>
            <Link to="/menu" className="text-accent hover:underline font-medium">See full menu →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((f) => (
              <article key={f.name} className="group hover-lift rounded-2xl">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5">
                  <img src={f.img} alt={f.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                    <span className="text-accent font-medium text-sm">{f.price}</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-1">
                  <h3 className="font-display text-2xl">{f.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1 px-1">{f.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY SPECIALS */}
      <section className="section-pad container-cafe">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-3">Weekly Rituals</p>
            <h2 className="font-display text-5xl leading-tight mb-4">Daily Specials</h2>
            <p className="text-muted-foreground">A pairing for every day of the week — discounted when ordered together.</p>
          </div>
          <ul className="border-t border-border">
            {specials.map((s) => (
              <li key={s.day} className="flex items-baseline justify-between gap-6 py-5 border-b border-border group hover:bg-accent/5 px-2 -mx-2 transition-colors rounded-md">
                <div className="flex items-baseline gap-6 min-w-0">
                  <span className="font-display text-xl text-accent w-28 shrink-0">{s.day}</span>
                  <span className="text-foreground/85 truncate">{s.item}</span>
                </div>
                <span className="font-medium tabular-nums">{s.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BUSINESS PITCH */}
      <section className="section-pad bg-espresso text-cream">
        <div className="container-cafe">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-[oklch(0.78_0.1_75)] mb-3">For the owner</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">Why this website moves the needle.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: TrendingUp, t: "More visibility", d: "Be found locally on Google with SEO-friendly pages and rich previews." },
              { i: ShieldCheck, t: "Build trust", d: "Real photos, verified reviews, and an elegant brand presence." },
              { i: CalendarCheck, t: "Online reservations", d: "Guests book tables in 30 seconds — no phone tag required." },
              { i: Coffee, t: "Menu, beautifully", d: "Showcase drinks and specials with imagery that sells the experience." },
              { i: Smartphone, t: "Mobile-first design", d: "Looks stunning on every phone — where most local searches happen." },
              { i: Users, t: "Attract new regulars", d: "Newsletter + Instagram feed turn first visits into repeat customers." },
              { i: Sparkles, t: "Premium feel", d: "Design quality that matches the care you put in every cup." },
              { i: Leaf, t: "Tells your story", d: "A space to share your craft — sourcing, roasting, community." },
            ].map((b) => (
              <div key={b.t} className="p-6 rounded-2xl bg-cream/5 border border-cream/10 hover:bg-cream/10 transition-colors">
                <b.i className="h-6 w-6 text-[oklch(0.78_0.1_75)] mb-4" />
                <h3 className="font-display text-xl mb-2">{b.t}</h3>
                <p className="text-sm text-cream/70 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad container-cafe text-center">
        <h2 className="font-display text-5xl md:text-6xl mb-6 max-w-3xl mx-auto leading-tight">
          A table is waiting. <span className="italic text-accent">So is the coffee.</span>
        </h2>
        <Link to="/reservation">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12">
            Reserve Your Table
          </Button>
        </Link>
      </section>
    </SiteLayout>
  );
}
