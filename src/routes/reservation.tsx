import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Bean & Bloom Cafe" },
      { name: "description", content: "Book your table at Bean & Bloom in under 30 seconds." },
      { property: "og:title", content: "Reserve a Table — Bean & Bloom" },
      { property: "og:description", content: "Book a table online." },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
  component: Reservation,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Phone is too short").max(20).regex(/^[+\d\s()-]+$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(255),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  guests: z.coerce.number().min(1).max(20),
});

function Reservation() {
  const [done, setDone] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    toast.success(`Table booked for ${parsed.data.name} on ${parsed.data.date} at ${parsed.data.time}`);
    setDone(true);
  };

  if (done) {
    return (
      <SiteLayout>
        <section className="container-cafe section-pad text-center max-w-xl mx-auto">
          <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="font-display text-5xl mb-4">You're booked.</h1>
          <p className="text-muted-foreground text-lg mb-8">
            We've sent a confirmation to your inbox. We can't wait to brew for you.
          </p>
          <Button onClick={() => setDone(false)} variant="outline" className="rounded-full">Make another reservation</Button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-cafe pt-12 pb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Reservation</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">Save your<br /><span className="italic">favourite seat.</span></h1>
      </section>

      <section className="container-cafe pb-24 grid lg:grid-cols-[1fr_1.3fr] gap-12">
        <aside className="space-y-6">
          <div className="p-6 bg-secondary/40 rounded-2xl border border-border">
            <h3 className="font-display text-2xl mb-3">Opening hours</h3>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li className="flex justify-between"><span>Mon – Fri</span><span>7:00 – 21:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>8:00 – 22:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>8:00 – 18:00</span></li>
            </ul>
          </div>
          <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
            <h3 className="font-display text-2xl mb-2">Good to know</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Reservations are held for 15 minutes past your slot. Parties of 6+ — please call us at <a className="text-accent underline" href="tel:+919845012345">+91 98450 12345</a>.
            </p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)] space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required maxLength={80} placeholder="Jane Doe" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" required maxLength={20} placeholder="+91 98450 12345" className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" className="mt-1.5" />
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" required min={today} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input id="time" name="time" type="time" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="guests">Guests</Label>
              <Input id="guests" name="guests" type="number" min={1} max={20} defaultValue={2} required className="mt-1.5" />
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 mt-2">
            Confirm Reservation
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By booking you agree to our cancellation policy.
          </p>
        </form>
      </section>
    </SiteLayout>
  );
}
