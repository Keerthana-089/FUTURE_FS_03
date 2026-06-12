import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bean & Bloom Cafe" },
      { name: "description", content: "Find us, call us, or message us on WhatsApp. We'd love to hear from you." },
      { property: "og:title", content: "Contact — Bean & Bloom" },
      { property: "og:description", content: "Address, hours, and how to reach us." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(5).max(1000),
});

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Check the form");
    toast.success("Thanks — we'll be in touch within 24h.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <SiteLayout>
      <section className="container-cafe pt-12 pb-12 animate-fade-up">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Get in touch</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">
          Come say<br />
          <span className="italic bg-gradient-to-r from-accent via-terracotta to-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            namaste.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Drop by our Indiranagar corner in Bengaluru, ring us up, or send a note — chai, coffee &amp; conversation await.
        </p>
      </section>

      <section className="container-cafe pb-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-5">
          {[
            { i: MapPin, t: "Find us", d: "12, 100 Feet Road\nIndiranagar, Bengaluru\nKarnataka 560038" },
            { i: Phone, t: "Call us", d: "+91 98450 12345", href: "tel:+919845012345" },
            { i: Mail, t: "Email", d: "hello@beanbloom.in", href: "mailto:hello@beanbloom.in" },
            { i: MessageCircle, t: "WhatsApp", d: "Tap to chat — we reply in minutes", href: "https://wa.me/919845012345" },
          ].map((c, idx) => (
            <a
              key={c.t}
              href={c.href ?? "#"}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="group relative flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent transition-all duration-500 hover-lift animate-fade-up overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                <c.i className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
              </div>
              <div className="relative">
                <div className="font-display text-xl">{c.t}</div>
                <p className="text-muted-foreground whitespace-pre-line text-sm mt-0.5">{c.d}</p>
              </div>
            </a>
          ))}

          <div className="flex gap-3 pt-4">
            {[Instagram, Facebook, Twitter].map((I, i) => (
              <a
                key={i}
                href="#"
                style={{ animationDelay: `${400 + i * 80}ms` }}
                className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="pt-6 grid grid-cols-2 gap-4 text-sm">
            {[
              { t: "Mon – Fri", d: "7:30am – 10:30pm" },
              { t: "Sat – Sun", d: "8:00am – 11:30pm" },
            ].map((h) => (
              <div key={h.t} className="rounded-2xl border border-border bg-card/60 p-4">
                <div className="font-display text-lg">{h.t}</div>
                <div className="text-muted-foreground">{h.d}</div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative bg-card border border-border rounded-2xl p-8 space-y-5 shadow-[var(--shadow-soft)] animate-fade-up overflow-hidden"
          style={{ animationDelay: "200ms" }}
        >
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl animate-float" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-gold/15 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} aria-hidden />
          <h2 className="relative font-display text-3xl mb-2">Send us a note</h2>
          <div className="relative">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required maxLength={80} className="mt-1.5" />
          </div>
          <div className="relative">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
          </div>
          <div className="relative">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required maxLength={1000} rows={5} className="mt-1.5" />
          </div>
          <Button type="submit" size="lg" className="relative w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 hover:-translate-y-0.5 transition-transform">
            Send Message
          </Button>
        </form>
      </section>

      <section className="container-cafe pb-24">
        <div className="rounded-2xl overflow-hidden border border-border aspect-[16/8] shadow-[var(--shadow-warm)] hover-lift">
          <iframe
            title="Map of Bean & Bloom Cafe, Indiranagar Bengaluru"
            src="https://www.google.com/maps?q=100+Feet+Road+Indiranagar+Bengaluru&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
