"use client";

import { useEffect, useRef } from "react";

/**
 * Bola partikel 3D (fibonacci sphere) yang berotasi pelan dan merespons kursor.
 * Canvas 2D murni dengan proyeksi perspektif — ringan, tanpa dependensi.
 */
export default function Orb({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const N = 720;
    const points: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let angleY = 0;
    let angleX = 0.35;
    let mouseX = 0;
    let mouseY = 0;
    let targetMX = 0;
    let targetMY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    // cyan → biru → violet berdasarkan kedalaman
    const warna = (t: number, alpha: number) => {
      const c1 = [103, 232, 249];
      const c2 = [139, 92, 246];
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
      return `rgba(${r},${g},${b},${alpha})`;
    };

    const gambar = () => {
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.36;
      const cx = w / 2;
      const cy = h / 2;
      const fov = 3.2;

      mouseX += (targetMX - mouseX) * 0.04;
      mouseY += (targetMY - mouseY) * 0.04;
      const ax = angleX + mouseY * 0.35;
      const ay = angleY + mouseX * 0.45;

      const sinY = Math.sin(ay);
      const cosY = Math.cos(ay);
      const sinX = Math.sin(ax);
      const cosX = Math.cos(ax);

      // halo lembut di tengah
      const halo = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * 1.25);
      halo.addColorStop(0, "rgba(99,102,241,0.10)");
      halo.addColorStop(1, "rgba(99,102,241,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      for (const p of points) {
        // rotasi Y lalu X
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const persp = fov / (fov + z2);
        const sx = cx + x1 * R * persp;
        const sy = cy + y1 * R * persp;
        const depth = (z2 + 1) / 2; // 0 = depan, 1 = belakang
        const alpha = 0.9 - depth * 0.75;
        const size = (1.9 - depth * 1.25) * persp;

        ctx.beginPath();
        ctx.fillStyle = warna(depth, alpha);
        ctx.arc(sx, sy, Math.max(size, 0.4), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      angleY += 0.0021;
      angleX = 0.35 + Math.sin(angleY * 0.7) * 0.08;
      gambar();
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduceMotion) {
      gambar();
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
