import { motion } from "framer-motion";

const measurements = [
  { label: "Torso Length", description: "[Insert how to measure torso length]" },
  { label: "Height (ground to hip)", description: "[Insert how to measure standing height]" },
  { label: "Hip Width", description: "[Insert how to measure hip width]" },
  { label: "Hind-Limb Position", description: "[Insert how to assess hind-limb positioning]" },
];

const MeasurementSection = () => (
  <section id="measurements" className="py-20 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Dog Measurement Guide
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          [Insert brief intro — e.g., "Accurate measurements ensure a proper fit. Take these measurements before printing any parts."]
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="placeholder-block aspect-square text-base">
          [Insert measurement diagram here — annotated image showing where to measure on the dog]
        </div>

        <div className="space-y-4">
          {measurements.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 shadow-sm border border-border"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center font-heading">
                  {i + 1}
                </span>
                <h3 className="font-heading font-semibold text-foreground">{m.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-11">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MeasurementSection;
