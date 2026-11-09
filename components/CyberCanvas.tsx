"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  isSpecial?: boolean;
}

export default function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initialize nodes
    const nodeCount = Math.min(38, Math.floor((width * height) / 6000));
    const nodes: Node[] = [];
    const colors = ["#3B82F6", "#06B6D4", "#60A5FA", "#38BDF8"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        isSpecial: i % 7 === 0,
      });
    }

    let packetProgress = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains("light");
      const lineBaseColor = isLight ? "rgba(37, 99, 235, " : "rgba(59, 130, 246, ";
      const packetColor = isLight ? "#0284C7" : "#38BDF8";

      packetProgress = (packetProgress + 0.008) % 1;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Interaction with mouse
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
        }

        // Draw connections between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = node.x - other.x;
          const ndy = node.y - other.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          const maxDist = 95;
          if (nDist < maxDist) {
            const alpha = (1 - nDist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `${lineBaseColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Animated packet transfer along special links
            if (node.isSpecial && nDist < 80) {
              const px = node.x + (other.x - node.x) * packetProgress;
              const py = node.y + (other.y - node.y) * packetProgress;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = packetColor;
              ctx.shadowBlur = 6;
              ctx.shadowColor = packetColor;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        if (node.isSpecial) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = node.color;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw ring around special security nodes
        if (node.isSpecial) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
          ctx.strokeStyle = `${node.color}55`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[420px] flex items-center justify-center">
      {/* Decorative cyber grid backdrop */}
      <div className="absolute inset-0 rounded-2xl cyber-grid opacity-60 pointer-events-none" />
      
      {/* Central shield/core graphic watermark */}
      <div className="absolute flex flex-col items-center justify-center pointer-events-none select-none opacity-20 dark:opacity-15">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-blue-500/30 flex items-center justify-center animate-pulse">
          <div className="w-32 h-32 rounded-full border border-cyan-500/40 flex items-center justify-center">
            <span className="code-font text-xs tracking-widest text-cyan-400 font-mono">SEC_NODE // 01</span>
          </div>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 rounded-2xl cursor-crosshair"
      />

      {/* Status indicator tag */}
      <div className="absolute bottom-3 right-4 z-20 flex items-center space-x-2 px-2.5 py-1 rounded-full bg-slate-900/80 dark:bg-slate-950/80 border border-slate-700/60 text-[11px] font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow" />
        <span>CYBER_MESH // ACTIVE</span>
      </div>
    </div>
  );
}
