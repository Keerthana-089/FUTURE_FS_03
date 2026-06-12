import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Bean & Bloom Cafe" },
      { name: "description", content: "Espresso, tea, signature beverages, desserts and snacks — crafted daily at Bean & Bloom." },
      { property: "og:title", content: "Menu — Bean & Bloom" },
      { property: "og:description", content: "Coffee, tea, desserts, snacks, and signature drinks." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: Menu,
});

type Item = { name: string; desc: string; price: string };
const categories: Record<string, Item[]> = {
  Coffee: [
    { name: "Espresso", desc: "Double shot, house blend", price: "₹180" },
    { name: "Americano", desc: "Espresso, hot water", price: "₹200" },
    { name: "Cappuccino", desc: "Equal espresso, milk, foam", price: "₹280" },
    { name: "Flat White", desc: "Double ristretto, micro-foam", price: "₹300" },
    { name: "Latte", desc: "Steamed milk, light foam", price: "₹300" },
    { name: "Cortado", desc: "Espresso cut with warm milk", price: "₹260" },
    { name: "Mocha", desc: "Espresso, dark chocolate, milk", price: "₹320" },
    { name: "Pour-over", desc: "Single origin, V60", price: "₹350" },
  ],
  Tea: [
    { name: "Earl Grey", desc: "Bergamot, loose leaf", price: "₹180" },
    { name: "Genmaicha", desc: "Green tea, toasted rice", price: "₹220" },
    { name: "Chamomile", desc: "Whole flowers, caffeine-free", price: "₹180" },
    { name: "Masala Chai", desc: "House-blended spices, oat milk", price: "₹220" },
    { name: "Jasmine Pearl", desc: "Hand-rolled, floral", price: "₹200" },
  ],
  "Signature Beverages": [
    { name: "Honey Lavender Latte", desc: "Local honey, lavender syrup", price: "₹350" },
    { name: "Maple Cardamom Cortado", desc: "Pure maple, fresh cardamom", price: "₹320" },
    { name: "Iced Brown Sugar Oat", desc: "Cold brew, brown sugar, oat", price: "₹340" },
    { name: "Ceremonial Matcha", desc: "Stone-ground, Uji Japan", price: "₹350" },
    { name: "Saffron Rose Latte", desc: "Persian saffron, rose water", price: "₹380" },
  ],
  Desserts: [
    { name: "Tiramisu", desc: "Espresso-soaked ladyfingers", price: "₹380" },
    { name: "Almond Croissant", desc: "Twice-baked, frangipane", price: "₹260" },
    { name: "Pain au Chocolat", desc: "Valrhona dark chocolate", price: "₹240" },
    { name: "Banana Bread", desc: "Brown butter, walnuts", price: "₹220" },
    { name: "Lemon Olive Oil Cake", desc: "Greek yogurt glaze", price: "₹300" },
  ],
  Snacks: [
    { name: "Avocado Toast", desc: "Sourdough, poached egg, chili", price: "₹550" },
    { name: "Smoked Salmon Bagel", desc: "House cream cheese, capers", price: "₹650" },
    { name: "Roasted Veg Tartine", desc: "Whipped feta, sourdough", price: "₹480" },
    { name: "Chickpea Salad Bowl", desc: "Tahini, preserved lemon", price: "₹520" },
  ],
};

function Menu() {
  const cats = Object.keys(categories);
  const [active, setActive] = useState(cats[0]);

  return (
    <SiteLayout>
      <section className="container-cafe pt-12 pb-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">The Menu</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">Made to order,<br /><span className="italic">made with love.</span></h1>
      </section>

      <div className="container-cafe sticky top-20 bg-background/85 backdrop-blur-md z-30 py-4 border-b border-border mt-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                active === c
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="container-cafe section-pad">
        <h2 className="font-display text-4xl mb-10">{active}</h2>
        <ul className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {categories[active].map((item) => (
            <li key={item.name} className="group">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xl shrink-0">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-border mb-1.5 min-w-[20px]" aria-hidden="true" />
                <span className="font-medium tabular-nums text-accent bg-accent/10 px-2.5 py-0.5 rounded-full text-sm shrink-0">{item.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1.5 group-hover:text-foreground/70 transition-colors">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
