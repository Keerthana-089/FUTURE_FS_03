import { Link } from "@tanstack/react-router";
import { Coffee, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const onSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Enter a valid email");
    toast.success("Welcome to the Bean & Bloom circle ☕");
    setEmail("");
  };

  return (
    <footer className="bg-espresso text-cream mt-24">
      <div className="container-cafe py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="h-5 w-5 text-[oklch(0.78_0.1_75)]" />
            <span className="font-display text-2xl">Bean &amp; Bloom</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            A neighborhood cafe brewing small-batch coffee and warm moments since 2018.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Visit</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />12, 100 Feet Road, Indiranagar, Bengaluru 560038</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" />+91 98450 12345</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" />hello@beanbloom.in</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {["Menu", "Gallery", "Reservation", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={`/${l.toLowerCase()}`}
                  className="text-cream/70 hover:text-[oklch(0.78_0.1_75)] transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Newsletter</h4>
          <p className="text-sm text-cream/70 mb-3">Seasonal menus, brew tips, member-only events.</p>
          <form onSubmit={onSub} className="flex gap-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              maxLength={120}
              className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40"
            />
            <Button type="submit" className="bg-[oklch(0.78_0.1_75)] hover:bg-[oklch(0.72_0.1_75)] text-espresso">Join</Button>
          </form>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10 transition-colors"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-cafe py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Bean &amp; Bloom Cafe. All rights reserved.</p>
          <p className="italic font-display text-sm">Every Cup Tells a Story</p>
        </div>
      </div>
    </footer>
  );
}
