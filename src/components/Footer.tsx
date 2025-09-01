import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-muted/30 border-t border-border/50 py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Suresh. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-colors text-sm hover:underline"
            aria-label="Scroll to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </motion.footer>
  );
}