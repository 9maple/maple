import { motion } from "framer-motion";
import { FileDown, FileText, Ruler, FolderOpen } from "lucide-react";

const downloads = [
  { icon: FileDown, label: "STL Files", description: "[Insert link to STL file pack]", href: "#", emoji: "📦" },
  { icon: FileText, label: "Build Guide PDF", description: "[Insert link to PDF build guide]", href: "#", emoji: "📄" },
  { icon: Ruler, label: "Measurement Sheet", description: "Record measurements for your dog's size", href: "/measurement.pdf", emoji: "📏" },
  { icon: FolderOpen, label: "Extra Resources", description: "[Insert link to additional resources]", href: "#", emoji: "📂" },
];

const DownloadsSection = () => (
  <section id="downloads" className="py-16 md:py-20 bg-surface-cool">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
          downloads
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          [Insert short note — e.g., "Download everything you need to get started."]
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {downloads.map((d, i) => (
          <motion.a
            key={d.label}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3 hover:border-primary/40 hover:shadow-md transition-all group"
          >
            <span className="text-xl">{d.emoji}</span>
            <div>
              <span className="font-heading font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{d.label}</span>
              <p className="text-xs text-muted-foreground mt-0.5">{d.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default DownloadsSection;
