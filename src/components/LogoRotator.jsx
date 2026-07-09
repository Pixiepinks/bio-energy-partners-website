import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import bepBoilerLogo from '../assets/logos/bep-boiler-logo.png';
import bepGreenLogo from '../assets/logos/bep-logo-green.png';

const ROTATION_INTERVAL_MS = 5000;

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });
}

export function LogoRotator({ className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const [showBoilerLogo, setShowBoilerLogo] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    Promise.all([preloadImage(bepGreenLogo), preloadImage(bepBoilerLogo)])
      .then(() => {
        if (isMounted) {
          setImagesReady(true);
        }
      })
      .catch(() => {
        if (isMounted) {
          setImagesReady(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || !imagesReady) {
      setShowBoilerLogo(false);
      return undefined;
    }

    const rotationTimer = window.setInterval(() => {
      setShowBoilerLogo((currentLogo) => !currentLogo);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(rotationTimer);
  }, [imagesReady, shouldReduceMotion]);

  return (
    <span className={`relative flex shrink-0 items-center justify-center overflow-hidden ${className}`}>
      <img
        src={bepGreenLogo}
        alt="Bio Energy Partners"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${showBoilerLogo ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={bepBoilerLogo}
        alt="Bio Energy Partners"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${showBoilerLogo ? 'opacity-100' : 'opacity-0'}`}
      />
    </span>
  );
}
