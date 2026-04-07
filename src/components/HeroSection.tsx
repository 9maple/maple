import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface-warm">
    <div className="section-container py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Open-Source &middot; 3D-Printed &middot; Low-Cost
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Build a Custom Canine Wheelchair
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8">
            [Insert project subtitle here — e.g., "A fully 3D-printed, affordable wheelchair designed to give dogs with mobility challenges a better quality of life."]
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base font-semibold">
              <a href="#build-guide">
                View Build Guide <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold">
              <a href="#downloads">Download Files</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="placeholder-block aspect-[4/3] text-base"
        >
          [Insert hero image here — e.g., photo of the finished wheelchair]
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
