import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const dogs = [
  {
    name: "rambo",
    story: "stinki boi",
    imagePlaceholder: "[Insert photo of Dog 1]",
    image: "/rambo.png",
  },
  {
    name: "lexi",
    story: "we gotta test on lexi soon :(",
    imagePlaceholder: "[Insert photo of Dog 2]",
    image: "/lexi.png",
  },
  {
    name: "kenny",
    story: "kenny was run over and had to get limb amputated",
    imagePlaceholder: "[Insert photo of Dog 3]",
    image: "/kenny.png",
  },
];

const DogCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? dogs.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === dogs.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c === dogs.length - 1 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const dog = dogs[current];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
        <div className="md:flex md:items-start">
          {/* Image */}
          <div className="md:w-2/5 h-[260px] md:h-[320px] rounded-none border-0 border-b md:border-b-0 md:border-r overflow-hidden shrink-0">
            {dog.image
              ? <img src={dog.image} alt={dog.name} className="w-full h-full object-cover" />
              : <div className="placeholder-block w-full h-full text-sm">{dog.imagePlaceholder}</div>
            }
          </div>

          {/* Story content */}
          <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-3xl mb-2 inline-block">{dog.emoji}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {dog.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dog.story}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-9 w-9"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {dogs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-primary scale-110"
                  : "bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-9 w-9"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DogCarousel;
