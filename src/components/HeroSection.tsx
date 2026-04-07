import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import DogCarousel from "@/components/DogCarousel";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Scallop top border */}
    <div className="scallop-border w-full" />

    {/* Main hero with paw pattern */}
    <div className="paw-pattern bg-background">
      <div className="section-container py-14 md:py-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <span className="text-4xl mb-3 inline-block">🐾</span>
            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 word-art-title"
            >
              Build Your Own
              <br />
              3D Printed
              <br />
              Canine Wheelchair
            </h1>
            <p className="text-base text-muted-foreground max-w-lg mx-auto mb-2">
              [Insert project subtitle here — e.g., "A fully 3D-printed, affordable wheelchair for dogs with mobility challenges."]
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8">
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

          {/* Dog stories carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 w-full"
          >
            <DogCarousel />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
