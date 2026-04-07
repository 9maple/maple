import { motion } from "framer-motion";
import { FileDown, FileText, Ruler, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloads = [
  { icon: FileDown, label: "STL Files", description: "[Insert link to STL file pack]" },
  { icon: FileText, label: "Printable Build Guide", description: "[Insert link to PDF build guide]" },
  { icon: Ruler, label: "Measurement Sheet", description: "[Insert link to measurement template]" },
  { icon: FolderOpen, label: "Extra Resources", description: "[Insert link to additional resources]" },
];

const DownloadsSection = () => (
  <section id="downloads" className="py-20 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Downloads
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          [Insert short note — e.g., "Download everything you need to get started."]
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {downloads.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Button variant="outline" className="w-full h-auto p-6 flex flex-col items-start gap-2 rounded-xl" asChild>
              <a href="#">
                <d.icon size={24} className="text-primary" />
                <span className="font-heading font-semibold text-foreground text-base">{d.label}</span>
                <span className="text-xs text-muted-foreground text-left">{d.description}</span>
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DownloadsSection;
