import { useState, useEffect, useCallback } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)');
}

export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1025px)');
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }
      setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollDir, scrollY };
}

export function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
}

export function useGraphicsQuality() {
  const [quality, setQuality] = useState<'ultra' | 'high' | 'medium' | 'low'>('high');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setQuality('low');
      return;
    }

    const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo 
      ? (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : '';
    
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const cores = navigator.hardwareConcurrency || 2;
    const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;

    if (isMobile) {
      if (memory <= 2 || cores <= 2) {
        setQuality('low');
      } else if (memory <= 4 || cores <= 4) {
        setQuality('medium');
      } else {
        setQuality('high');
      }
    } else {
      const isHighEnd = cores >= 8 && memory >= 8;
      const isLowEnd = cores <= 2 || memory <= 2;
      
      if (isHighEnd && !renderer.toLowerCase().includes('intel')) {
        setQuality('ultra');
      } else if (isLowEnd) {
        setQuality('medium');
      } else {
        setQuality('high');
      }
    }
  }, []);

  return { quality, setQuality };
}

export function useWebGLSupport(): boolean {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStored(prev => {
      const newValue = value instanceof Function ? value(prev) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  }, [key]);

  return [stored, setValue];
}
