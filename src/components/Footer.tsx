
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black py-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-white">
              <span className="gradient-text">Dev</span>Folio
            </a>
            <p className="text-white/50 mt-2 text-sm">
              Bringing digital ideas to life, one pixel at a time.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gradient-primary mb-4 hover:scale-110 transition-transform duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Rahul Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
