'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if ('ontouchstart' in window) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      ring.style.width  = '48px';
      ring.style.height = '48px';
      ring.style.opacity = '0.8';
    };

    const onLeaveLink = () => {
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    rafId = requestAnimationFrame(animate);
    document.documentElement.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
