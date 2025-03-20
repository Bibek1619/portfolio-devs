
import { useEffect } from "react";

// This function creates a smooth scrolling experience when navigating between sections
export const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          const sectionId = href.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);
};

// This function fades in elements as they enter the viewport
export const useScrollFadeIn = (ref: React.RefObject<HTMLElement>, threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);
};

// This function creates a typing animation effect
export const useTypingEffect = (
  text: string,
  typingSpeed = 150,
  startDelay = 0
): { displayText: string; isTypingComplete: boolean } => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentIndex = 0;

    // Reset when text changes
    setDisplayText("");
    setIsTypingComplete(false);
    currentIndex = 0;

    const startTyping = () => {
      timer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setIsTypingComplete(true);
        }
      }, typingSpeed);
    };

    const delayTimer = setTimeout(() => {
      startTyping();
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [text, typingSpeed, startDelay]);

  return { displayText, isTypingComplete };
};

// Import necessary hooks
import { useState } from "react";
