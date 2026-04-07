import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const checks = [
  { label: "Posture", detail: "[Insert what to check about the dog's posture in the wheelchair.]" },
  { label: "Comfort", detail: "[Insert what to check about padding, pressure points, and harness fit.]" },
  { label: "Support", detail: "[Insert what to check about hind-limb support and weight distribution.]" },
  { label: "Wheel Alignment", detail: "[Insert what to check about wheel tracking and ground clearance.]" },
];

const SafetySection = () => (
  <section className="py-20 bg-surface-warm">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Final Fit &amp; Safety Check
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          [Insert intro — e.g., "Before regular use, verify all of the following."]
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {checks.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 size={20} className="text-primary" />
              <h3 className="font-heading font-semibold text-foreground">{c.label}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{c.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SafetySection;
