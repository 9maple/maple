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
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center lg:text-left"
          >
            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 word-art-title"
            >
              build your own
              <br />
              3d printed
              <br />
              canine wheelchair!!!
            </h1>
            <p className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-2">
              inspired by maddie and emma's project, this guide provides step-by-step instructions so that you can make your very own wheelchair for your doggo xd
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8">
              open-source · 3D-printed · low-cost
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden min-h-[500px]"
          >
            <motion.img
              src="/wheelchair.png"
              alt="Project preview"
              className="w-full h-full object-cover"
              animate={{ rotate: [0, -2, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

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
  </section>
);

export default HeroSection;
