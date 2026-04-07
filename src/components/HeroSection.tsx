import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-surface-warm">
    <div className="section-container py-16 md:py-24">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl mb-4 inline-block">🐾</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            K9 Wheelchair
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-3">
            [Insert project subtitle here — e.g., "A fully 3D-printed, affordable wheelchair for dogs with mobility challenges."]
          </p>
          <p className="text-sm text-muted-foreground/80 mb-8">
            open-source · 3D-printed · low-cost
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-8 text-base font-bold shadow-md">
              <a href="#build-guide">
                view build guide <ArrowDown className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base font-bold">
              <a href="#downloads">downloads</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 w-full placeholder-block aspect-video text-base"
        >
          [Insert hero image here — e.g., photo of the finished wheelchair]
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
