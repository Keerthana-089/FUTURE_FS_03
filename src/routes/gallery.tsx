import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Instagram } from "lucide-react";
import interior from "@/assets/cafe-interior.jpg";
import cappu from "@/assets/drink-cappuccino.jpg";
import macc from "@/assets/drink-macchiato.jpg";
import matcha from "@/assets/drink-matcha.jpg";
import pastry from "@/assets/gallery-pastry.jpg";
import barista from "@/assets/gallery-barista.jpg";
import brunch from "@/assets/gallery-brunch.jpg";
import dessert from "@/assets/gallery-dessert.jpg";
import corner from "@/assets/gallery-corner.jpg";
import beans from "@/assets/gallery-beans.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bean & Bloom Cafe" },
      { name: "description", content: "Step inside Bean & Bloom. Coffee art, ambient interiors, and food made with care." },
      { property: "og:title", content: "Gallery — Bean & Bloom" },
      { property: "og:description", content: "A visual tour of our cafe, coffee, and food." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const photos = [
  { src: barista, alt: "Barista pouring latte art", span: "md:row-span-2" },
  { src: interior, alt: "Cafe interior", span: "" },
  { src: cappu, alt: "Cappuccino with latte art", span: "" },
  { src: brunch, alt: "Avocado toast brunch", span: "" },
  { src: matcha, alt: "Matcha latte", span: "md:row-span-2" },
  { src: pastry, alt: "Croissants", span: "" },
  { src: corner, alt: "Cozy cafe corner", span: "" },
  { src: dessert, alt: "Tiramisu dessert", span: "" },
  { src: beans, alt: "Roasted coffee beans", span: "" },
  { src: macc, alt: "Iced caramel macchiato", span: "" },
];

function Gallery() {
  return (
    <SiteLayout>
      <section className="container-cafe pt-12 pb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Gallery</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">In our space,<br /><span className="italic">in our cups.</span></h1>
      </section>

      <section className="container-cafe pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[220px] md:auto-rows-[260px]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 section-pad">
        <div className="container-cafe text-center">
          <Instagram className="h-7 w-7 mx-auto text-accent mb-4" />
          <h2 className="font-display text-4xl mb-3">@beanandbloom.cafe</h2>
          <p className="text-muted-foreground mb-8">Follow along for daily specials, new drinks, and behind-the-bar stories.</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition"
          >
            Follow on Instagram
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
