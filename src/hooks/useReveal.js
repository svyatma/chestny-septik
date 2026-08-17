import { useRef, useEffect, useState } from 'react';

function useReveal({ threshold = 0.15, delay = 0, duration = 600 } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold]);
  
  return {
    ref,
    isVisible,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
      transitionDelay: `${delay}ms`,
    },
  };
}

export default useReveal;