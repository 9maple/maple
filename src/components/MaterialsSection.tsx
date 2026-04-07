import { motion } from "framer-motion";
import { Printer, Wrench, CircleDot, StretchHorizontal, Cog } from "lucide-react";

const categories = [
  {
    title: "3D-Printed Parts",
    icon: Printer,
    items: ["[Part name 1]", "[Part name 2]", "[Part name 3]", "[Part name 4]"],
  },
  {
    title: "Hardware",
    icon: Cog,
    items: ["[Bolt/nut spec]", "[Axle spec]", "[Fastener spec]", "[Other hardware]"],
  },
  {
    title: "Wheels",
    icon: CircleDot,
    items: ["[Wheel type and size]", "[Quantity needed]"],
  },
  {
    title: "Straps & Support",
    icon: StretchHorizontal,
    items: ["[Strap material]", "[Padding type]", "[Harness detail]"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["[Tool 1]", "[Tool 2]", "[Tool 3]", "[Tool 4]"],
  },
];

const MaterialsSection = () => (
  <section id="materials" className="py-20 bg-surface-warm">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Materials &amp; Tools
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          [Insert a short note about sourcing materials — e.g., "Everything you need is available online or at a local hardware store."]
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                <cat.icon size={20} />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
            </div>
            <ul className="space-y-2">
              {cat.items.map((item, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 placeholder-block !p-4 text-xs">
              [Insert image/icon here]
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MaterialsSection;
